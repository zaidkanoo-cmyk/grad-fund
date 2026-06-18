/* StockDetailScreen — the full single-security view. → window.StockDetailScreen */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const { Card, CardHeader, Badge, ChangeValue, HalalBadge, VerdictPill, AssetTypeBadge, CompanyMark, MetricTile, Sparkline, Tabs, Button, IconButton, Input } = NS;
  const Icon = window.GFIcon;
  const fmt = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  function HalalRow({ r }) {
    return (
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "11px 0", borderBottom: "1px solid var(--divider)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", flex: "none", marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700, background: r.pass ? "var(--halal-ok)" : "var(--halal-no)" }}>{r.pass ? "✓" : "✕"}</span>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-strong)" }}>{r.label}</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 1 }}>{r.note}</div>
        </div>
      </div>
    );
  }

  function PositionSizer({ d }) {
    const [amount, setAmount] = React.useState(5000);
    const shares = (amount / d.price);
    const port = 128450;
    const weight = (amount / (port + amount)) * 100;
    return (
      <Card pad="lg">
        <CardHeader title="How much should we put in?" subtitle="Model a position before committing" />
        <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
          <div style={{ flex: 1 }}>
            <Input prefix="$" mono value={amount} onChange={(e) => setAmount(Math.max(0, +String(e.target.value).replace(/[^0-9.]/g, "") || 0))} />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[1000, 5000, 10000].map((v) => (
              <button key={v} onClick={() => setAmount(v)} style={{ padding: "8px 12px", border: "1px solid var(--border-strong)", background: amount === v ? "var(--brand-soft)" : "var(--surface)", color: amount === v ? "var(--brand-strong)" : "var(--text-muted)", borderRadius: "var(--radius-md)", cursor: "pointer", font: "inherit", fontSize: 13, fontWeight: 600 }}>${(v / 1000)}k</button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <MetricTile label="Est. shares" value={shares.toFixed(2)} />
          <MetricTile label="New weight" value={weight.toFixed(1) + "%"} sub="of portfolio" />
          <MetricTile label="Proj. 1y" value={<ChangeValue value={11.4} format="currency" showCaret={false} percent={null} currency="$" />} sub="at house est. +11.4%" />
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
          <Button variant="primary" block leadingIcon={<Icon name="plus" size={16} />}>Add ${amount.toLocaleString()} to portfolio</Button>
          <Button variant="secondary" leadingIcon={<Icon name="star" size={16} />}>Watch</Button>
        </div>
      </Card>
    );
  }

  function AskBox({ d }) {
    const suggestions = ["Is " + d.ticker + " halal?", "Compare to MSFT", "What are the risks?", "Why the Invest call?"];
    return (
      <Card pad="lg" style={{ background: "linear-gradient(180deg, var(--evergreen-50), var(--surface))" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ color: "var(--brand)" }}><Icon name="sparkles" size={18} /></span>
          <span style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 15 }}>Ask Grad Fund</span>
        </div>
        <Input placeholder={"Ask anything about " + d.name + "…"} trailingIcon={<span style={{ color: "var(--brand)" }}><Icon name="send" size={16} /></span>} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
          {suggestions.map((s) => <span key={s} style={{ padding: "5px 11px", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)", fontSize: 12.5, color: "var(--text-muted)", background: "var(--surface)", cursor: "pointer" }}>{s}</span>)}
        </div>
      </Card>
    );
  }

  window.StockDetailScreen = function StockDetailScreen({ security, onBack }) {
    const D = window.GFData;
    const base = D.detail;
    // merge: use full detail for AAPL, else synthesize from the row
    const d = security && security.ticker === base.ticker ? base
      : security ? { ...base, ...security, metrics: base.metrics, halalBreakdown: base.halalBreakdown, peers: base.peers, spark: security.spark || base.spark } : base;
    const [tab, setTab] = React.useState("overview");
    const halalPass = d.halalBreakdown.filter((r) => r.pass).length;

    return (
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
        <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer", font: "inherit", fontSize: 13.5, padding: 0, alignSelf: "flex-start" }}>
          <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}><Icon name="chevronRight" size={16} /></span> Back to portfolio
        </button>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <CompanyMark ticker={d.ticker} name={d.name} size={60} radius="var(--radius-lg)" />
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h1 style={{ margin: 0, fontSize: "var(--text-2xl)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>{d.name}</h1>
              <AssetTypeBadge type={d.type} />
            </div>
            <div style={{ color: "var(--text-muted)", marginTop: 3, fontSize: 14, fontFamily: "var(--font-mono)" }}>{d.ticker} · {d.exchange || "NASDAQ"} · {d.region} · {d.currency || "USD"}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="gf-mono" style={{ fontFamily: "var(--font-mono)", fontSize: 30, fontWeight: 600, color: "var(--text-strong)", letterSpacing: "-0.02em" }}>{fmt(d.price)}</div>
            <ChangeValue value={d.day} percent={null} size="md" style={{ marginTop: 2 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
            <VerdictPill verdict={d.verdict} />
            <HalalBadge status={d.halal} />
          </div>
        </div>

        <Tabs value={tab} onChange={setTab} items={[{ id: "overview", label: "Overview" }, { id: "halal", label: "Halal screening", count: 1 }, { id: "peers", label: "Comparables" }]} />

        {tab === "overview" && (
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 22, alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <Card pad="lg">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <CardHeader title="Price" subtitle="Last 90 days" style={{ marginBottom: 0 }} />
                  <ChangeValue value={d.day} size="sm" />
                </div>
                <Sparkline data={d.spark} width={680} height={150} color="var(--evergreen-600)" strokeWidth={2.2} style={{ width: "100%" }} />
              </Card>
              <Card pad="lg">
                <CardHeader title="Key metrics" subtitle="Trailing twelve months" />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "22px 18px" }}>
                  {d.metrics.map((m) => <MetricTile key={m.label} label={m.label} value={m.value} hint={m.hint} />)}
                </div>
              </Card>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <PositionSizer d={d} />
              <AskBox d={d} />
            </div>
          </div>
        )}

        {tab === "halal" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, alignItems: "start" }}>
            <Card pad="lg">
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                <HalalBadge status={d.halal} />
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{halalPass}/{d.halalBreakdown.length} screens passed</span>
              </div>
              <div style={{ marginTop: 8 }}>{d.halalBreakdown.map((r) => <HalalRow key={r.label} r={r} />)}</div>
            </Card>
            <Card pad="lg" style={{ background: "var(--evergreen-50)" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "var(--brand)", marginTop: 2 }}><Icon name="shield" size={20} /></span>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 15 }}>What we check</div>
                  <p style={{ fontSize: 13.5, color: "var(--text)", lineHeight: 1.55, marginTop: 6 }}>
                    Grad Fund screens each security against AAOIFI-style rules: the core business must be permissible, and interest income, debt, and non-compliant revenue must each stay under their thresholds. We flag <b>Review</b> when a holding is borderline so you and Dad can decide together.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {tab === "peers" && (
          <Card pad="lg">
            <CardHeader title="Comparables" subtitle={`${d.sector} · same industry`} />
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead><tr style={{ fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-subtle)", fontWeight: 700 }}>
                <th style={{ textAlign: "left", paddingBottom: 10 }}>Company</th>
                <th style={{ textAlign: "center", paddingBottom: 10 }}>Halal</th>
                <th style={{ textAlign: "right", paddingBottom: 10 }}>P/E</th>
                <th style={{ textAlign: "right", paddingBottom: 10 }}>Mkt cap</th>
                <th style={{ textAlign: "right", paddingBottom: 10 }}>1y return</th>
              </tr></thead>
              <tbody>
                <tr className="gf-tr"><td style={{ padding: "12px 0" }}><div style={{ display: "flex", alignItems: "center", gap: 12 }}><CompanyMark ticker={d.ticker} size={32} /><b style={{ color: "var(--text-strong)" }}>{d.ticker}</b> <Badge tone="brand" size="sm">This</Badge></div></td>
                  <td style={{ textAlign: "center" }}><HalalBadge status={d.halal} showLabel={false} size="sm" /></td>
                  <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>31.2</td><td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>$2.94T</td><td style={{ textAlign: "right" }}><ChangeValue value={22.6} size="sm" showCaret={false} /></td></tr>
                {d.peers.map((p) => (
                  <tr key={p.ticker} className="gf-tr">
                    <td style={{ padding: "12px 0" }}><div style={{ display: "flex", alignItems: "center", gap: 12 }}><CompanyMark ticker={p.ticker} size={32} /><span><b style={{ color: "var(--text-strong)" }}>{p.ticker}</b> <span style={{ color: "var(--text-muted)", fontSize: 13 }}>{p.name}</span></span></div></td>
                    <td style={{ textAlign: "center" }}><HalalBadge status={p.halal} showLabel={false} size="sm" /></td>
                    <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>{p.pe}</td>
                    <td style={{ textAlign: "right", fontFamily: "var(--font-mono)" }}>{p.mcap}</td>
                    <td style={{ textAlign: "right" }}><ChangeValue value={p.ret} size="sm" showCaret={false} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}
      </div>
    );
  };
})();
