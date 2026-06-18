/* CompareScreen — side-by-side comparables. → window.CompareScreen */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const { Card, Badge, ChangeValue, HalalBadge, VerdictPill, AssetTypeBadge, CompanyMark, Sparkline, IconButton, Button } = NS;
  const Icon = window.GFIcon;
  const fmt = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const COLS = [
    { ticker: "AAPL", name: "Apple", type: "stock", region: "US", halal: "compliant", verdict: "buy", price: 201.34, day: 1.62,
      m: { "Market cap": "$2.94T", "P/E (TTM)": "31.2", "Fwd P/E": "27.8", "Div yield": "0.51%", "Net margin": "25.3%", "ROE": "147%", "Debt/Equity": "1.87", "1y return": 22.6 }, spark: window.GFData.detail.spark },
    { ticker: "MSFT", name: "Microsoft", type: "stock", region: "US", halal: "compliant", verdict: "buy", price: 432.18, day: -0.84,
      m: { "Market cap": "$3.21T", "P/E (TTM)": "36.0", "Fwd P/E": "31.2", "Div yield": "0.72%", "Net margin": "36.1%", "ROE": "39%", "Debt/Equity": "0.78", "1y return": 28.4 }, spark: window.GFData.holdings[2].spark },
    { ticker: "ARAMCO", name: "Saudi Aramco", type: "stock", region: "KSA", halal: "compliant", verdict: "buy", price: 7.84, day: 0.26,
      m: { "Market cap": "$1.89T", "P/E (TTM)": "16.1", "Fwd P/E": "15.4", "Div yield": "6.30%", "Net margin": "27.8%", "ROE": "31%", "Debt/Equity": "0.42", "1y return": 6.1 }, spark: window.GFData.watchlist[1].spark },
  ];
  const ROWS = ["Market cap", "P/E (TTM)", "Fwd P/E", "Div yield", "Net margin", "ROE", "Debt/Equity", "1y return"];
  // best value per row (lower better for P/E & Debt, higher better otherwise)
  const lowerBetter = { "P/E (TTM)": 1, "Fwd P/E": 1, "Debt/Equity": 1 };

  window.CompareScreen = function CompareScreen({ onOpen }) {
    return (
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "var(--text-3xl)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text-strong)" }}>Compare</h1>
          <div style={{ color: "var(--text-muted)", marginTop: 4, fontSize: 14.5 }}>Three large-caps, side by side</div>
        </div>

        <Card pad="none" style={{ overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ width: 168, background: "var(--surface-sunken)", borderBottom: "1px solid var(--border)" }}></th>
                {COLS.map((c) => (
                  <th key={c.ticker} style={{ padding: "20px 18px", borderBottom: "1px solid var(--border)", borderLeft: "1px solid var(--divider)", textAlign: "center", verticalAlign: "top" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <CompanyMark ticker={c.ticker} name={c.name} size={44} />
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 15 }}>{c.ticker}</div>
                        <div style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{c.name} · {c.region}</div>
                      </div>
                      <div className="gf-mono" style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 18, color: "var(--text-strong)" }}>{fmt(c.price)}</div>
                      <ChangeValue value={c.day} size="sm" />
                      <Sparkline data={c.spark} width={130} height={32} />
                      <div style={{ display: "flex", gap: 6, marginTop: 2 }}><VerdictPill verdict={c.verdict} size="sm" /><HalalBadge status={c.halal} size="sm" showLabel={false} /></div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => {
                const vals = COLS.map((c) => c.m[row]);
                const nums = vals.map((v) => typeof v === "number" ? v : parseFloat(String(v).replace(/[^0-9.]/g, "")));
                const best = lowerBetter[row] ? Math.min(...nums) : Math.max(...nums);
                return (
                  <tr key={row} style={{ background: i % 2 ? "var(--gray-50)" : "transparent" }}>
                    <td style={{ padding: "13px 18px", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.03em", textTransform: "uppercase", color: "var(--text-subtle)" }}>{row}</td>
                    {COLS.map((c, j) => {
                      const v = c.m[row];
                      const isBest = nums[j] === best;
                      if (row === "1y return") return <td key={c.ticker} style={{ padding: "13px 18px", textAlign: "center", borderLeft: "1px solid var(--divider)" }}><ChangeValue value={v} size="sm" showCaret={false} /></td>;
                      return (
                        <td key={c.ticker} style={{ padding: "13px 18px", textAlign: "center", borderLeft: "1px solid var(--divider)", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 14, fontWeight: isBest ? 700 : 500, color: isBest ? "var(--brand-strong)" : "var(--text)" }}>
                          {v}{isBest && <span style={{ marginLeft: 5, fontSize: 11 }}>★</span>}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <Button variant="secondary" leadingIcon={<Icon name="plus" size={16} />}>Add a company</Button>
        </div>
      </div>
    );
  };
})();
