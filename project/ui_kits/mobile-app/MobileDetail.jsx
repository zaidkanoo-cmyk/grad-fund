/* MobileDetail — phone single-security screen. → window.MobileDetail */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const { ChangeValue, HalalBadge, VerdictPill, AssetTypeBadge, CompanyMark, Sparkline, MetricTile, Button, Tabs } = NS;
  const Icon = window.GFIcon;
  const fmt = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  window.MobileDetail = function MobileDetail({ security, onBack }) {
    const base = window.GFData.detail;
    const d = security && security.ticker === base.ticker ? base : security ? { ...base, ...security, spark: security.spark || base.spark } : base;
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--surface)" }}>
        <div style={{ flex: 1, overflow: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px 8px" }}>
            <span onClick={onBack} style={{ color: "var(--text-muted)", display: "inline-flex", cursor: "pointer", transform: "rotate(180deg)" }}><Icon name="chevronRight" size={22} /></span>
            <CompanyMark ticker={d.ticker} name={d.name} size={32} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text-strong)" }}>{d.ticker}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{d.region} · {d.exchange || "NASDAQ"}</div>
            </div>
            <span style={{ color: "var(--text-subtle)" }}><Icon name="star" size={22} /></span>
          </div>

          <div style={{ padding: "8px 18px" }}>
            <div className="gf-mono" style={{ fontFamily: "var(--font-mono)", fontSize: 32, fontWeight: 600, color: "var(--text-strong)", letterSpacing: "-0.02em" }}>{fmt(d.price)}</div>
            <ChangeValue value={d.day} size="md" />
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <VerdictPill verdict={d.verdict} size="sm" /><HalalBadge status={d.halal} size="sm" /><AssetTypeBadge type={d.type} size="sm" />
            </div>
          </div>

          <Sparkline data={d.spark} width={354} height={130} color="var(--evergreen-600)" strokeWidth={2.2} style={{ width: "100%", padding: "8px 0" }} />

          <div style={{ padding: "8px 18px 0" }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: "var(--text-strong)", margin: "12px 0" }}>Key metrics</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 16px" }}>
              {base.metrics.slice(0, 8).map((m) => <MetricTile key={m.label} label={m.label} value={m.value} />)}
            </div>

            <div style={{ background: "var(--evergreen-50)", borderRadius: "var(--radius-lg)", padding: 16, margin: "20px 0", display: "flex", gap: 10 }}>
              <span style={{ color: "var(--brand)" }}><Icon name="shield" size={20} /></span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-strong)" }}>Halal: compliant</div>
                <div style={{ fontSize: 12.5, color: "var(--text)", marginTop: 3, lineHeight: 1.5 }}>Passed all 4 screens — permissible business, low interest income, low debt.</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "12px 18px 26px", borderTop: "1px solid var(--border)", display: "flex", gap: 10 }}>
          <Button variant="secondary" leadingIcon={<Icon name="star" size={16} />}>Watch</Button>
          <Button variant="primary" block leadingIcon={<Icon name="plus" size={16} />}>Add position</Button>
        </div>
      </div>
    );
  };
})();
