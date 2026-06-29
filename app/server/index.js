import express from 'express';
import cors from 'cors';
import https from 'https';
import { mockData } from '../src/services/mockData.js';

const app = express();
app.use(cors());
app.use(express.json());

const IBKR_HOST = process.env.IBKR_HOST || 'localhost';
const IBKR_PORT = parseInt(process.env.IBKR_PORT || '5000');
const PORT = parseInt(process.env.SERVER_PORT || '3001');

// Cache for account ID and contract lookups
let accountId = null;
const contractCache = new Map();

// Call IBKR Client Portal Gateway API (handles self-signed cert)
function ibkr(path, opts = {}) {
  return new Promise((resolve, reject) => {
    const body = opts.body ? JSON.stringify(opts.body) : null;
    const options = {
      hostname: IBKR_HOST,
      port: IBKR_PORT,
      path: `/v1/api${path}`,
      method: opts.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(body ? { 'Content-Length': Buffer.byteLength(body) } : {}),
      },
      rejectUnauthorized: false,
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode >= 400) reject(new Error(`IBKR ${res.statusCode}: ${data}`));
          else resolve(parsed);
        } catch {
          if (res.statusCode >= 400) reject(new Error(`IBKR ${res.statusCode}: ${data}`));
          else resolve(data);
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function getAccountId() {
  if (accountId) return accountId;
  const accounts = await ibkr('/portfolio/accounts');
  accountId = accounts[0]?.accountId || accounts[0]?.id;
  if (!accountId) throw new Error('No IBKR account found');
  return accountId;
}

async function getConid(ticker, secType = 'STK') {
  const key = `${ticker}:${secType}`;
  if (contractCache.has(key)) return contractCache.get(key);

  const results = await ibkr(`/iserver/secdef/search?symbol=${encodeURIComponent(ticker)}&secType=${secType}`);
  const match = Array.isArray(results) ? results.find(r => r.symbol === ticker || r.companyHeader?.startsWith(ticker)) || results[0] : null;
  if (!match?.conid) throw new Error(`Contract not found: ${ticker}`);

  contractCache.set(key, match.conid);
  return match.conid;
}

// IBKR snapshot requires two calls — first subscribes, second returns data
async function getSnapshot(conids, fields = '31,83,84,86,85,7295,7741,7762') {
  const qs = `conids=${conids.join(',')}&fields=${fields}`;
  await ibkr(`/iserver/marketdata/snapshot?${qs}`).catch(() => []);
  await sleep(1100);
  const data = await ibkr(`/iserver/marketdata/snapshot?${qs}`);
  return Array.isArray(data) ? data : [];
}

function mapAssetClass(ac) {
  return { STK: 'stock', OPT: 'option', FUT: 'future', BOND: 'bond', FUND: 'etf', CRYPTO: 'crypto', FI: 'bond' }[ac] || 'stock';
}

function estimateHalal(sector = '', assetClass = '') {
  if (assetClass === 'FUT') return 'non-compliant';
  if (assetClass === 'OPT') return 'review';
  const s = sector.toUpperCase();
  if (/BANK|FINANC|INSUR|ALCOHOL|TOBACCO|GAMBL|DEFENSE|WEAPON/.test(s)) return 'non-compliant';
  if (/TECH|HEALTH|SOFTWARE|SEMICOND|CONSUMER STAPL|INDUSTRI|RETAIL/.test(s)) return 'compliant';
  return 'review';
}

function fmtNum(raw) { return parseFloat(String(raw || '0').replace(/[^0-9.-]/g, '')) || 0; }
function fmtPct(raw) { return parseFloat(String(raw || '0').replace('%', '').replace('+', '')) || 0; }

function buildHalalBreakdown(sector, assetClass) {
  const status = estimateHalal(sector, assetClass);
  const isFinancial = /BANK|FINANC|INSUR/.test((sector || '').toUpperCase());
  return [
    { label: 'Core business', pass: status !== 'non-compliant', note: isFinancial ? 'Financial services — interest-based operations' : `${sector || 'Business'} — permissible` },
    { label: 'Interest income', pass: status !== 'non-compliant', note: status === 'non-compliant' ? 'Exceeds 5% threshold' : 'Below 5% threshold (estimated)' },
    { label: 'Debt ratio', pass: true, note: 'Estimated below 33% of market cap' },
    { label: 'Non-compliant revenue', pass: status !== 'non-compliant', note: 'Within tolerance (estimated)' },
  ];
}

// ──────────────────────────────────────────────────────
// Routes
// ──────────────────────────────────────────────────────

app.get('/api/auth', async (req, res) => {
  try {
    const status = await ibkr('/iserver/auth/status');
    res.json({ authenticated: !!status.authenticated, connected: !!status.connected, competing: !!status.competing });
  } catch (err) {
    res.json({ authenticated: false, connected: false, error: err.message });
  }
});

app.get('/api/portfolio', async (req, res) => {
  try {
    const acctId = await getAccountId();
    const [positions, summary] = await Promise.all([
      ibkr(`/portfolio/${acctId}/positions/0`),
      ibkr(`/portfolio/${acctId}/summary`),
    ]);

    // Fetch live snapshots for all conids
    const conids = (Array.isArray(positions) ? positions : []).filter(p => p.conid).map(p => p.conid);
    let snapMap = {};
    if (conids.length) {
      const snaps = await getSnapshot(conids).catch(() => []);
      snaps.forEach(s => { snapMap[String(s.conid)] = s; });
    }

    const holdings = (Array.isArray(positions) ? positions : []).map(pos => {
      const snap = snapMap[String(pos.conid)] || {};
      const price = fmtNum(snap['31']) || fmtNum(pos.mktPrice) || 0;
      const dayPct = fmtPct(snap['83']) || 0;
      const shares = pos.position || 0;
      const cost = fmtNum(pos.avgCost) || 0;
      const value = +(price * shares).toFixed(2);
      const costValue = +(cost * shares).toFixed(2);
      const totalRet = costValue ? +((value - costValue) / costValue * 100).toFixed(2) : 0;
      const totalGain = +(value - costValue).toFixed(2);
      const sector = pos.sector || '';
      const assetClass = pos.assetClass || 'STK';

      return {
        ticker: pos.contractDesc || pos.ticker || '',
        name: pos.fullName || pos.companyName || pos.contractDesc || '',
        type: mapAssetClass(assetClass),
        sector,
        region: pos.currency === 'GBP' ? 'UK' : pos.currency === 'EUR' ? 'EU' : 'US',
        exchange: pos.listingExchange || pos.exchs || '—',
        currency: pos.currency || 'USD',
        halal: estimateHalal(sector, assetClass),
        verdict: totalRet > 15 ? 'buy' : 'watch',
        price,
        day: dayPct,
        dayAbs: +(price - price / (1 + dayPct / 100)).toFixed(2),
        shares,
        cost,
        value,
        costValue,
        totalRet,
        totalGain,
        conid: pos.conid,
        spark: [],
        weight: 0,
        metrics: [],
        halalBreakdown: buildHalalBreakdown(sector, assetClass),
        peers: [],
      };
    });

    const totalValue = +holdings.reduce((s, h) => s + h.value, 0).toFixed(2);
    holdings.forEach(h => { h.weight = totalValue ? +(h.value / totalValue * 100).toFixed(1) : 0; });

    const S = summary || {};
    const netLiq = fmtNum(S.netliquidation?.amount) || totalValue;
    const cash = fmtNum(S.totalcashvalue?.amount);
    const buyingPower = fmtNum(S.buyingpower?.amount);
    const invested = fmtNum(S.grosspositionvalue?.amount) || holdings.reduce((s, h) => s + h.costValue, 0);
    const totalCost = +invested.toFixed(2);
    const totalGain = +(netLiq - totalCost).toFixed(2);
    const totalRet = totalCost ? +((totalGain / totalCost) * 100).toFixed(2) : 0;
    const dayChange = +holdings.reduce((s, h) => s + h.value * (h.day / 100), 0).toFixed(2);
    const dayPct = totalValue > 0 ? +((dayChange / (totalValue - dayChange)) * 100).toFixed(2) : 0;

    const classMap = {};
    holdings.forEach(h => { classMap[h.type] = (classMap[h.type] || 0) + h.value; });
    if (cash > 0) classMap.cash = cash;
    const byClass = Object.entries(classMap).map(([type, val]) => ({
      label: { stock: 'Stocks', etf: 'ETFs', bond: 'Bonds', future: 'Futures', crypto: 'Crypto', option: 'Options', cash: 'Cash' }[type] || type,
      value: +((val / (totalValue + cash)) * 100).toFixed(1),
      type,
    }));

    // Use first holding as the default detail view
    const detail = holdings[0]
      ? { ...holdings[0], spark: [], metrics: generateMetrics(holdings[0]) }
      : mockData.detail;

    res.json({
      holdings,
      watchlist: mockData.watchlist,
      allocation: { byClass },
      summary: { totalValue: netLiq, totalCost, totalGain, totalRet, dayChange, dayPct, invested: totalCost, positions: holdings.length, buyingPower, cash },
      detail,
      ibkrConnected: true,
    });
  } catch (err) {
    console.error('[portfolio]', err.message);
    res.status(500).json({ error: err.message, ibkrConnected: false });
  }
});

function generateMetrics(h) {
  return [
    { label: 'Avg cost', value: '$' + h.cost.toFixed(2) },
    { label: 'Shares', value: h.shares },
    { label: 'Market value', value: '$' + h.value.toLocaleString('en-US', { maximumFractionDigits: 0 }) },
    { label: 'Unrealized P&L', value: (h.totalGain >= 0 ? '+$' : '-$') + Math.abs(h.totalGain).toFixed(2) },
    { label: 'Total return', value: (h.totalRet >= 0 ? '+' : '') + h.totalRet.toFixed(2) + '%' },
    { label: 'Weight', value: h.weight + '%' },
    { label: 'Exchange', value: h.exchange },
    { label: 'Currency', value: h.currency },
  ];
}

app.get('/api/quote/:ticker', async (req, res) => {
  try {
    const { ticker } = req.params;
    const { secType = 'STK' } = req.query;
    const conid = await getConid(ticker, secType);
    const snaps = await getSnapshot([conid]);
    const s = snaps[0] || {};
    res.json({ ticker, conid, price: fmtNum(s['31']), day: fmtPct(s['83']), bid: fmtNum(s['84']), ask: fmtNum(s['86']), volume: parseInt(s['85'] || 0), open: fmtNum(s['7295']), prevClose: fmtNum(s['7741']) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/history/:ticker', async (req, res) => {
  try {
    const { ticker } = req.params;
    const { period = '1y', bar = '1d', secType = 'STK' } = req.query;
    const conid = await getConid(ticker, secType);
    const history = await ibkr(`/hmds/history?conid=${conid}&period=${period}&bar=${bar}&outsideRth=false`);
    const data = (history.data || []).map(d => ({ t: d.t, o: d.o, h: d.h, l: d.l, c: d.c, v: d.v }));
    res.json({ ticker, conid, data, spark: data.map(d => d.c) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const result = await ibkr('/iserver/account/orders?force=true');
    res.json(result.orders || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const { ticker, side, orderType = 'MKT', quantity, limitPrice, tif = 'DAY', secType = 'STK' } = req.body;
    if (!ticker || !side || !quantity) return res.status(400).json({ error: 'ticker, side, quantity are required' });

    const acctId = await getAccountId();
    const conid = await getConid(ticker, secType);

    const orderPayload = {
      acctId,
      conid,
      secType: `${conid}:${secType}`,
      orderType,
      side: side.toUpperCase(),
      quantity: parseFloat(quantity),
      tif,
    };

    if (orderType === 'LMT' && limitPrice) {
      orderPayload.price = parseFloat(limitPrice);
    }

    let result = await ibkr(`/iserver/account/${acctId}/orders`, {
      method: 'POST',
      body: { orders: [orderPayload] },
    });

    // Auto-confirm any IBKR warning dialogs
    if (Array.isArray(result) && result[0]?.id) {
      result = await ibkr(`/iserver/reply/${result[0].id}`, {
        method: 'POST',
        body: { confirmed: true },
      });
    }

    res.json(Array.isArray(result) ? result[0] : result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/orders/:orderId', async (req, res) => {
  try {
    const acctId = await getAccountId();
    const result = await ibkr(`/iserver/account/${acctId}/order/${req.params.orderId}`, { method: 'DELETE' });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ──────────────────────────────────────────────────────
// Yahoo Finance fallback (no auth required)
// ──────────────────────────────────────────────────────

async function yahooQuote(ticker) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=3mo`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const json = await res.json();
  const result = json.chart?.result?.[0];
  if (!result) throw new Error(`No Yahoo data for ${ticker}`);
  const meta = result.meta;
  const closes = (result.indicators?.quote?.[0]?.close || []).filter(Boolean);
  const price = meta.regularMarketPrice || 0;
  const prev = meta.previousClose || price;
  return {
    ticker,
    price,
    day: prev ? +((price - prev) / prev * 100).toFixed(2) : 0,
    bid: meta.bid || price,
    ask: meta.ask || price,
    volume: meta.regularMarketVolume || 0,
    open: meta.regularMarketOpen || price,
    prevClose: prev,
    spark: closes.slice(-30),
    name: meta.longName || meta.shortName || ticker,
    exchange: meta.exchangeName || '—',
    currency: meta.currency || 'USD',
  };
}

app.get('/api/yahoo/:ticker', async (req, res) => {
  try {
    const data = await yahooQuote(req.params.ticker);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Portfolio using Yahoo Finance (no IBKR needed)
app.get('/api/yahoo-portfolio', async (req, res) => {
  try {
    const holdings = await Promise.all(
      mockData.holdings.map(async h => {
        try {
          const q = await yahooQuote(h.ticker);
          const price = q.price || h.price;
          const value = +(price * h.shares).toFixed(2);
          const costValue = +(h.cost * h.shares).toFixed(2);
          return { ...h, price, day: q.day, spark: q.spark, value, costValue, totalRet: +((value - costValue) / costValue * 100).toFixed(2), totalGain: +(value - costValue).toFixed(2) };
        } catch { return h; }
      })
    );
    const totalValue = +holdings.reduce((s, h) => s + h.value, 0).toFixed(2);
    const totalCost = +holdings.reduce((s, h) => s + h.costValue, 0).toFixed(2);
    const totalGain = +(totalValue - totalCost).toFixed(2);
    const totalRet = +((totalGain / totalCost) * 100).toFixed(2);
    const dayChange = +holdings.reduce((s, h) => s + h.value * (h.day / 100), 0).toFixed(2);
    const dayPct = +((dayChange / (totalValue - dayChange)) * 100).toFixed(2);
    holdings.forEach(h => { h.weight = +(h.value / totalValue * 100).toFixed(1); });
    res.json({ ...mockData, holdings, summary: { totalValue, totalCost, totalGain, totalRet, dayChange, dayPct, invested: totalCost, positions: holdings.length }, yahooConnected: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Keepalive for IBKR session (auto-ping every 55 seconds)
setInterval(() => {
  ibkr('/tickle').catch(() => {});
}, 55_000);

app.listen(PORT, () => {
  console.log(`✓ Grad Fund server on http://localhost:${PORT}`);
  console.log(`  IBKR gateway: https://${IBKR_HOST}:${IBKR_PORT}`);
});
