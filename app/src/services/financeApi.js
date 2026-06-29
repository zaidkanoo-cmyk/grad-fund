/**
 * Finance data — tries in order:
 *  1. IBKR live (requires gateway running)
 *  2. Yahoo Finance via backend (free, no auth)
 *  3. Alpha Vantage (set VITE_ALPHA_VANTAGE_KEY)
 *  4. Mock data (always works)
 */

import { mockData } from "./mockData.js";
import { getPortfolio as ibkrPortfolio } from "./ibkrApi.js";

const AV_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

// ── Portfolio ──────────────────────────────────────────

export async function fetchPortfolio() {
  // 1. Try IBKR
  try {
    const data = await ibkrPortfolio();
    if (data.ibkrConnected) return { ...data, detail: data.detail ?? mockData.detail };
  } catch {}

  // 2. Try Yahoo Finance (real prices, no auth needed)
  try {
    const res = await fetch('/api/yahoo-portfolio');
    if (res.ok) {
      const data = await res.json();
      if (data.yahooConnected) return { ...data, detail: mockData.detail };
    }
  } catch {}

  // 3. Alpha Vantage
  if (AV_KEY) {
    try { return await avPortfolio(); } catch {}
  }

  // 4. Mock
  return mockData;
}

// ── Single quote ───────────────────────────────────────

export async function fetchQuote(ticker) {
  // Try Yahoo via backend
  try {
    const res = await fetch(`/api/yahoo/${ticker}`);
    if (res.ok) {
      const q = await res.json();
      const found = [...mockData.holdings, ...mockData.watchlist].find(s => s.ticker === ticker);
      return { ...(found || mockData.detail), ...q, ticker };
    }
  } catch {}

  // AV fallback
  if (AV_KEY) {
    try { return await avQuote(ticker); } catch {}
  }

  const found = [...mockData.holdings, ...mockData.watchlist].find(s => s.ticker === ticker);
  return found || { ...mockData.detail, ticker };
}

// ── Alpha Vantage helpers ──────────────────────────────

async function avFetch(params) {
  const url = new URL("https://www.alphavantage.co/query");
  url.searchParams.set("apikey", AV_KEY);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`AV ${res.status}`);
  const json = await res.json();
  if (json["Note"] || json["Information"]) throw new Error("AV rate limit");
  return json;
}

async function avPortfolio() {
  const updated = await Promise.all(
    mockData.holdings.map(async h => {
      try {
        const q = await avFetch({ function: "GLOBAL_QUOTE", symbol: h.ticker });
        const raw = q["Global Quote"] || {};
        const price = parseFloat(raw["05. price"]) || h.price;
        const prev = parseFloat(raw["08. previous close"]) || price;
        const day = prev ? +((price - prev) / prev * 100).toFixed(2) : h.day;
        const value = +(price * h.shares).toFixed(2);
        return { ...h, price, day, value, totalRet: +(((price - h.cost) / h.cost) * 100).toFixed(2), totalGain: +((price - h.cost) * h.shares).toFixed(2) };
      } catch { return h; }
    })
  );
  const totalValue = +updated.reduce((s, h) => s + h.value, 0).toFixed(2);
  const totalCost = +updated.reduce((s, h) => s + h.costValue, 0).toFixed(2);
  const totalGain = +(totalValue - totalCost).toFixed(2);
  const totalRet = +((totalGain / totalCost) * 100).toFixed(2);
  const dayChange = +updated.reduce((s, h) => s + h.value * (h.day / 100), 0).toFixed(2);
  const dayPct = +((dayChange / (totalValue - dayChange)) * 100).toFixed(2);
  return { ...mockData, holdings: updated, summary: { totalValue, totalCost, totalGain, totalRet, dayChange, dayPct, invested: totalCost, positions: updated.length } };
}

async function avQuote(ticker) {
  const [quoteRes, overviewRes, histRes] = await Promise.all([
    avFetch({ function: "GLOBAL_QUOTE", symbol: ticker }),
    avFetch({ function: "OVERVIEW", symbol: ticker }),
    avFetch({ function: "TIME_SERIES_DAILY", symbol: ticker, outputsize: "compact" }),
  ]);
  const q = quoteRes["Global Quote"] || {};
  const o = overviewRes;
  const daily = histRes["Time Series (Daily)"] || {};
  const price = parseFloat(q["05. price"]) || 0;
  const prevClose = parseFloat(q["08. previous close"]) || price;
  const dayPct = prevClose ? ((price - prevClose) / prevClose) * 100 : 0;
  const spark = Object.values(daily).slice(0, 60).reverse().map(d => parseFloat(d["4. close"]));
  const fmtBig = (n, cur = true) => { const v = parseFloat(n); if (!v) return "—"; const p = cur ? "$" : ""; if (v >= 1e12) return p + (v / 1e12).toFixed(2) + "T"; if (v >= 1e9) return p + (v / 1e9).toFixed(2) + "B"; if (v >= 1e6) return p + (v / 1e6).toFixed(2) + "M"; return p + v.toLocaleString(); };
  return {
    ticker, price, day: +dayPct.toFixed(2), spark,
    name: o["Name"] || ticker,
    type: o["AssetType"]?.toLowerCase().includes("etf") ? "etf" : "stock",
    sector: o["Sector"] || "—", region: o["Country"] || "US",
    exchange: o["Exchange"] || "—", currency: o["Currency"] || "USD",
    halal: "review", verdict: "watch",
    metrics: [
      { label: "Market cap", value: fmtBig(o["MarketCapitalization"]) },
      { label: "P/E (TTM)", value: o["TrailingPE"] || "—" },
      { label: "Fwd P/E", value: o["ForwardPE"] || "—" },
      { label: "Div yield", value: o["DividendYield"] ? (parseFloat(o["DividendYield"]) * 100).toFixed(2) + "%" : "—" },
      { label: "EPS (TTM)", value: o["EPS"] ? "$" + o["EPS"] : "—" },
      { label: "Revenue", value: fmtBig(o["RevenueTTM"]) },
      { label: "Net margin", value: o["ProfitMargin"] ? (parseFloat(o["ProfitMargin"]) * 100).toFixed(1) + "%" : "—" },
      { label: "ROE", value: o["ReturnOnEquityTTM"] ? (parseFloat(o["ReturnOnEquityTTM"]) * 100).toFixed(1) + "%" : "—" },
    ],
    halalBreakdown: mockData.detail.halalBreakdown,
    peers: [],
  };
}
