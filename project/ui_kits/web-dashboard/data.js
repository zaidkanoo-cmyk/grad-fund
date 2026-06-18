/* Mock data for the Grad Fund dashboard kit. Plain JS → window.GFData. */
(function () {
  const spark = (base, n, vol) => {
    const out = [base];
    for (let i = 1; i < n; i++) out.push(Math.max(1, out[i - 1] * (1 + (Math.sin(i * vol) + (Math.random() - 0.5)) * 0.02)));
    return out.map((x) => +x.toFixed(2));
  };

  const holdings = [
    { ticker: "AAPL", name: "Apple Inc.", type: "stock", sector: "Technology", region: "US", halal: "compliant", verdict: "buy", price: 201.34, day: 1.62, shares: 38, cost: 142.1, weight: 14.8, spark: spark(180, 30, 0.6) },
    { ticker: "VWRA", name: "Vanguard FTSE All-World", type: "etf", sector: "Diversified", region: "Global", halal: "review", verdict: "buy", price: 128.45, day: 0.41, shares: 210, cost: 96.2, weight: 27.6, spark: spark(110, 30, 0.3) },
    { ticker: "MSFT", name: "Microsoft Corp.", type: "stock", sector: "Technology", region: "US", halal: "compliant", verdict: "buy", price: 432.18, day: -0.84, shares: 22, cost: 305.0, weight: 16.2, spark: spark(400, 30, 0.5) },
    { ticker: "ARMM", name: "Arm Holdings", type: "stock", sector: "Semiconductors", region: "UK", halal: "compliant", verdict: "watch", price: 158.7, day: 3.21, shares: 30, cost: 120.0, weight: 8.1, spark: spark(120, 30, 0.9) },
    { ticker: "SUKK", name: "iShares Sukuk Bond", type: "bond", sector: "Fixed income", region: "Global", halal: "compliant", verdict: "buy", price: 102.3, day: 0.08, shares: 180, cost: 100.5, weight: 9.4, spark: spark(99, 30, 0.15) },
    { ticker: "TSLA", name: "Tesla Inc.", type: "stock", sector: "Automotive", region: "US", halal: "review", verdict: "watch", price: 245.6, day: -2.18, shares: 14, cost: 210.0, weight: 5.6, spark: spark(260, 30, 1.1) },
    { ticker: "ES=F", name: "S&P 500 E-mini Future", type: "future", sector: "Index", region: "US", halal: "non-compliant", verdict: "avoid", price: 5482.0, day: 0.36, shares: 1, cost: 5300.0, weight: 7.2, spark: spark(5300, 30, 0.4) },
    { ticker: "BTC", name: "Bitcoin", type: "crypto", sector: "Digital asset", region: "Global", halal: "review", verdict: "watch", price: 64210.0, day: -1.12, shares: 0.12, cost: 48000.0, weight: 3.5, spark: spark(60000, 30, 1.4) },
  ];

  holdings.forEach((h) => {
    h.value = +(h.price * h.shares).toFixed(2);
    h.costValue = +(h.cost * h.shares).toFixed(2);
    h.totalRet = +(((h.price - h.cost) / h.cost) * 100).toFixed(2);
    h.totalGain = +((h.price - h.cost) * h.shares).toFixed(2);
  });

  const totalValue = +holdings.reduce((s, h) => s + h.value, 0).toFixed(2);
  const totalCost = +holdings.reduce((s, h) => s + h.costValue, 0).toFixed(2);
  const totalGain = +(totalValue - totalCost).toFixed(2);
  const totalRet = +((totalGain / totalCost) * 100).toFixed(2);
  const dayChange = +holdings.reduce((s, h) => s + h.value * (h.day / 100), 0).toFixed(2);
  const dayPct = +((dayChange / (totalValue - dayChange)) * 100).toFixed(2);

  const watchlist = [
    { ticker: "NVDA", name: "NVIDIA Corp.", type: "stock", sector: "Semiconductors", region: "US", halal: "compliant", verdict: "watch", price: 1204.7, day: 2.84, pe: 64.2, mcap: "2.96T", spark: spark(1000, 24, 0.8) },
    { ticker: "ARAMCO", name: "Saudi Aramco", type: "stock", sector: "Energy", region: "KSA", halal: "compliant", verdict: "buy", price: 7.84, day: 0.26, pe: 16.1, mcap: "1.89T", spark: spark(7.2, 24, 0.3) },
    { ticker: "ADBE", name: "Adobe Inc.", type: "stock", sector: "Technology", region: "US", halal: "compliant", verdict: "watch", price: 512.3, day: -1.4, pe: 44.0, mcap: "228B", spark: spark(540, 24, 0.6) },
    { ticker: "MC.PA", name: "LVMH", type: "stock", sector: "Consumer", region: "FR", halal: "review", verdict: "watch", price: 712.0, day: 0.9, pe: 22.8, mcap: "356B", spark: spark(700, 24, 0.4) },
    { ticker: "JPM", name: "JPMorgan Chase", type: "stock", sector: "Financials", region: "US", halal: "non-compliant", verdict: "avoid", price: 198.4, day: 0.52, pe: 11.9, mcap: "571B", spark: spark(180, 24, 0.5) },
    { ticker: "QQQM", name: "Invesco Nasdaq 100", type: "etf", sector: "Diversified", region: "US", halal: "review", verdict: "watch", price: 198.2, day: 1.1, pe: null, mcap: "28B", spark: spark(170, 24, 0.4) },
  ];

  const allocation = {
    byClass: [
      { label: "Stocks", value: 50.3, type: "stock" },
      { label: "ETFs", value: 27.6, type: "etf" },
      { label: "Bonds", value: 9.4, type: "bond" },
      { label: "Futures", value: 7.2, type: "future" },
      { label: "Crypto", value: 3.5, type: "crypto" },
      { label: "Cash", value: 2.0, type: "cash" },
    ],
  };

  // Detail for one security (AAPL)
  const detail = {
    ticker: "AAPL", name: "Apple Inc.", type: "stock", sector: "Technology", region: "US",
    exchange: "NASDAQ", currency: "USD", halal: "compliant", verdict: "buy", price: 201.34, day: 1.62, dayAbs: 3.21,
    spark: spark(150, 90, 0.5),
    metrics: [
      { label: "Market cap", value: "$2.94T" }, { label: "P/E (TTM)", value: "31.2", hint: "Price ÷ trailing 12-mo earnings" },
      { label: "Fwd P/E", value: "27.8" }, { label: "Div yield", value: "0.51%" },
      { label: "EPS (TTM)", value: "$6.43" }, { label: "Revenue", value: "$385.7B" },
      { label: "Net margin", value: "25.3%" }, { label: "ROE", value: "147%" },
      { label: "Debt / Equity", value: "1.87" }, { label: "Beta", value: "1.24" },
      { label: "52-wk range", value: "$164–$237" }, { label: "Avg volume", value: "54.2M" },
    ],
    halalBreakdown: [
      { label: "Core business", pass: true, note: "Consumer technology — permissible" },
      { label: "Interest income", pass: true, note: "1.2% of revenue — under 5% threshold" },
      { label: "Debt ratio", pass: true, note: "28% of market cap — under 33% threshold" },
      { label: "Non-compliant revenue", pass: true, note: "0.4% — within tolerance" },
    ],
    peers: [
      { ticker: "MSFT", name: "Microsoft", pe: 36.0, mcap: "3.21T", ret: 28.4, halal: "compliant" },
      { ticker: "GOOGL", name: "Alphabet", pe: 26.1, mcap: "2.18T", ret: 19.2, halal: "compliant" },
      { ticker: "SSNLF", name: "Samsung", pe: 14.8, mcap: "367B", ret: 6.1, halal: "review" },
    ],
  };

  // Asset-class accent colors (mirrors --asset-* tokens). The bundle's lowercase
  // `assetColor` export isn't on the public namespace, so the kit uses this.
  window.GFAssetColor = (t) => ({
    stock: "#2563B0", etf: "#0F7257", fund: "#0F7257", bond: "#6B5BD0",
    future: "#C6841C", option: "#B0457E", crypto: "#C97A12", cash: "#7E8887",
  }[t] || "#7E8887");

  window.GFData = { holdings, watchlist, allocation, detail, summary: { totalValue, totalCost, totalGain, totalRet, dayChange, dayPct, invested: totalCost, positions: holdings.length } };
})();
