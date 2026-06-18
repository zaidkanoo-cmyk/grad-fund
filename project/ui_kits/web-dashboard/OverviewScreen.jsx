/* OverviewScreen — portfolio home. → window.OverviewScreen */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const { Card, CardHeader, Badge, ChangeValue, HalalBadge, VerdictPill, AssetTypeBadge, CompanyMark, MetricTile, AllocationBar, Sparkline, Tabs } = NS;
  const assetColor = window.GFAssetColor;
  const Icon = window.GFIcon;
  const D = window.GFData;
  const fmt = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fmtK = (n) => "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  const RANGES = [
    { id: "1d", label: "1D" }, { id: "1w", label: "1W" }, { id: "1m", label: "1M" },
    { id: "1y", label: "1Y" }, { id: "all", label: "All" },
  ];
  const series = (() => { const a=[100]; for(let i=1;i<60;i++) a.push(a[i-1]*(1+(Math.sin(i*0.35)+ (i/120) + (Math.random()-0.45))*0.018)); return a; })();

  function HoldingRow({ h, onOpen }) {
    return (
      <tr onClick={() => onOpen(h)} style={{ cursor: "pointer" }} className="gf-tr">
        <td style={{ padding: "12px 8px 12px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <CompanyMark ticker={h.ticker} name={h.name} size={38} />
            <div>
              <div style={{ fontWeight: 600, color: "var(--text-strong)", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}>
                {h.ticker}<AssetTypeBadge type={h.type} size="sm" />
              </div>
              <div style={{ fontSize: 12.5, color: "var(--text-muted)", marginTop: 1 }}>{h.name}</div>
            </div>
          </div>
        </td>
        <td style={{ textAlign: "center" }}><HalalBadge status={h.halal} showLabel={false} size="sm" /></td>
        <td style={{ width: 96 }}><Sparkline data={h.spark} width={84} height={28} /></td>
        <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 14, color: "var(--text-strong)", fontWeight: 500 }}>{fmt(h.price)}</td>
        <td style={{ textAlign: "right", paddingLeft: 18 }}><ChangeValue value={h.day} size="sm" /></td>
        <td style={{ textAlign: "right", paddingLeft: 18, fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 14, color: "var(--text-strong)", fontWeight: 600 }}>{fmtK(h.value)}</td>
        <td style={{ textAlign: "right", paddingLeft: 18 }}><ChangeValue value={h.totalRet} size="sm" showCaret={false} /></td>
        <td style={{ textAlign: "right", paddingLeft: 12, width: 86 }}><VerdictPill verdict={h.verdict} size="sm" /></td>
      </tr>
    );
  }

  window.OverviewScreen = function OverviewScreen({ onOpen, holdings }) {
    const [range, setRange] = React.useState("1y");
    const S = D.summary;
    const list = holdings || D.holdings;
    return (
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "var(--text-3xl)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text-strong)" }}>Portfolio</h1>
            <div style={{ color: "var(--text-muted)", marginTop: 4, fontSize: 14.5 }}>{S.positions} positions · last synced 2 min ago</div>
          </div>
          <Badge tone="positive" dot>Markets open</Badge>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 22 }}>
          {/* Value card */}
          <Card pad="lg">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-subtle)" }}>Total value</div>
                <div className="gf-mono" style={{ fontFamily: "var(--font-mono)", fontSize: 40, fontWeight: 600, color: "var(--text-strong)", letterSpacing: "-0.02em", marginTop: 6, fontVariantNumeric: "tabular-nums" }}>{fmt(S.totalValue)}</div>
                <div style={{ display: "flex", gap: 16, marginTop: 8, alignItems: "center" }}>
                  <span style={{ fontSize: 13.5, color: "var(--text-muted)" }}>Today <ChangeValue value={S.dayPct} size="sm" style={{ marginLeft: 4 }} /></span>
                  <span style={{ fontSize: 13.5, color: "var(--text-muted)" }}>All time <ChangeValue value={S.totalRet} size="sm" showCaret={false} style={{ marginLeft: 4 }} /></span>
                </div>
              </div>
              <div style={{ width: 200 }}><Tabs items={RANGES} value={range} onChange={setRange} size="sm" /></div>
            </div>
            <div style={{ marginTop: 14 }}>
              <Sparkline data={series} width={680} height={120} color="var(--evergreen-600)" strokeWidth={2.2} style={{ width: "100%" }} />
            </div>
          </Card>

          {/* Allocation card */}
          <Card pad="lg">
            <CardHeader title="Allocation" subtitle="By asset class" />
            <AllocationBar height={14} segments={D.allocation.byClass.map((s) => ({ label: s.label, value: s.value, color: assetColor(s.type) }))} />
            <div style={{ height: 1, background: "var(--divider)", margin: "16px 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 18px" }}>
              <MetricTile label="Invested" value={fmtK(S.invested)} />
              <MetricTile label="Total gain" value={<ChangeValue value={S.totalGain} format="currency" size="md" showCaret={false} />} />
              <MetricTile label="Halal mix" value="71%" sub="of holdings compliant" />
              <MetricTile label="Cash" value="$2,560" />
            </div>
          </Card>
        </div>

        {/* Holdings table */}
        <Card pad="lg">
          <CardHeader title="Holdings" subtitle={`${list.length} positions`} />
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-subtle)", fontWeight: 700 }}>
                <th style={{ textAlign: "left", paddingBottom: 8 }}>Holding</th>
                <th style={{ textAlign: "center", paddingBottom: 8 }}>Halal</th>
                <th style={{ textAlign: "left", paddingBottom: 8 }}>30d</th>
                <th style={{ textAlign: "right", paddingBottom: 8 }}>Price</th>
                <th style={{ textAlign: "right", paddingBottom: 8, paddingLeft: 18 }}>Today</th>
                <th style={{ textAlign: "right", paddingBottom: 8, paddingLeft: 18 }}>Value</th>
                <th style={{ textAlign: "right", paddingBottom: 8, paddingLeft: 18 }}>Total ret.</th>
                <th style={{ textAlign: "right", paddingBottom: 8 }}>Call</th>
              </tr>
            </thead>
            <tbody>
              {list.map((h) => <HoldingRow key={h.ticker} h={h} onOpen={onOpen} />)}
            </tbody>
          </table>
        </Card>
      </div>
    );
  };
})();
