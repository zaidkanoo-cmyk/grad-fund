/* WatchlistScreen — watchlist + screener table with filters. → window.WatchlistScreen */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const { Card, Badge, ChangeValue, HalalBadge, VerdictPill, AssetTypeBadge, CompanyMark, Sparkline, IconButton, Button, Input } = NS;
  const Icon = window.GFIcon;
  const D = window.GFData;
  const fmt = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const TYPES = ["all", "stock", "etf", "bond", "crypto"];
  const REGIONS = ["All", "US", "Global", "KSA", "UK", "FR"];

  function Chip({ active, children, onClick }) {
    return (
      <button onClick={onClick} style={{
        padding: "6px 13px", borderRadius: "var(--radius-pill)", cursor: "pointer",
        border: `1px solid ${active ? "var(--brand)" : "var(--border-strong)"}`,
        background: active ? "var(--brand-soft)" : "var(--surface)",
        color: active ? "var(--brand-strong)" : "var(--text-muted)",
        font: "inherit", fontSize: 13, fontWeight: active ? 600 : 500, textTransform: "capitalize",
        transition: "var(--transition-base)",
      }}>{children}</button>
    );
  }

  window.WatchlistScreen = function WatchlistScreen({ onOpen, mode = "watchlist", halalOnly }) {
    const [type, setType] = React.useState("all");
    const [region, setRegion] = React.useState("All");
    let rows = D.watchlist;
    if (type !== "all") rows = rows.filter((r) => r.type === type);
    if (region !== "All") rows = rows.filter((r) => r.region === region);
    if (halalOnly) rows = rows.filter((r) => r.halal !== "non-compliant");

    return (
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "var(--text-3xl)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text-strong)" }}>
              {mode === "screener" ? "Screener" : "Watchlist"}
            </h1>
            <div style={{ color: "var(--text-muted)", marginTop: 4, fontSize: 14.5 }}>
              {mode === "screener" ? "Filter the market by class, region and compliance" : "Companies you and Dad are tracking"}
            </div>
          </div>
          <Button variant="secondary" leadingIcon={<Icon name="plus" size={16} />}>New list</Button>
        </div>

        <Card pad="lg">
          <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", marginBottom: 18 }}>
            <div style={{ display: "flex", gap: 8 }}>{TYPES.map((t) => <Chip key={t} active={type === t} onClick={() => setType(t)}>{t === "all" ? "All types" : t}</Chip>)}</div>
            <div style={{ width: 1, height: 22, background: "var(--border)" }} />
            <div style={{ display: "flex", gap: 8 }}>{REGIONS.map((r) => <Chip key={r} active={region === r} onClick={() => setRegion(r)}>{r}</Chip>)}</div>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-subtle)", fontWeight: 700 }}>
                <th style={{ textAlign: "left", paddingBottom: 10 }}>Company</th>
                <th style={{ textAlign: "center", paddingBottom: 10 }}>Halal</th>
                <th style={{ textAlign: "left", paddingBottom: 10 }}>Trend</th>
                <th style={{ textAlign: "right", paddingBottom: 10 }}>Price</th>
                <th style={{ textAlign: "right", paddingBottom: 10, paddingLeft: 16 }}>Today</th>
                <th style={{ textAlign: "right", paddingBottom: 10, paddingLeft: 16 }}>P/E</th>
                <th style={{ textAlign: "right", paddingBottom: 10, paddingLeft: 16 }}>Mkt cap</th>
                <th style={{ textAlign: "right", paddingBottom: 10 }}>Call</th>
                <th style={{ paddingBottom: 10 }}></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.ticker} className="gf-tr" onClick={() => onOpen(r)} style={{ cursor: "pointer" }}>
                  <td style={{ padding: "12px 8px 12px 0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <CompanyMark ticker={r.ticker} name={r.name} size={36} />
                      <div>
                        <div style={{ fontWeight: 600, color: "var(--text-strong)", fontSize: 14, display: "flex", gap: 8, alignItems: "center" }}>{r.ticker}<AssetTypeBadge type={r.type} size="sm" /></div>
                        <div style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 1 }}>{r.name} · {r.region}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}><HalalBadge status={r.halal} showLabel={false} size="sm" /></td>
                  <td style={{ width: 90 }}><Sparkline data={r.spark} width={78} height={26} /></td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 14, color: "var(--text-strong)", fontWeight: 500 }}>{fmt(r.price)}</td>
                  <td style={{ textAlign: "right", paddingLeft: 16 }}><ChangeValue value={r.day} size="sm" /></td>
                  <td style={{ textAlign: "right", paddingLeft: 16, fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 13.5, color: "var(--text-muted)" }}>{r.pe ?? "—"}</td>
                  <td style={{ textAlign: "right", paddingLeft: 16, fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 13.5, color: "var(--text-muted)" }}>{r.mcap}</td>
                  <td style={{ textAlign: "right" }}><VerdictPill verdict={r.verdict} size="sm" /></td>
                  <td style={{ textAlign: "right", width: 44 }} onClick={(e) => e.stopPropagation()}>
                    <IconButton label="Add to portfolio" variant="ghost"><Icon name="plus" size={17} /></IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {rows.length === 0 && <div style={{ textAlign: "center", padding: "32px 0", color: "var(--text-subtle)", fontSize: 14 }}>No companies match these filters.</div>}
        </Card>
      </div>
    );
  };
})();
