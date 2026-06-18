/* AddPositionDrawer — slide-in add-position / money-in flow. → window.AddPositionDrawer */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const { Card, Badge, ChangeValue, HalalBadge, AssetTypeBadge, CompanyMark, Input, Button, IconButton, MetricTile } = NS;
  const Icon = window.GFIcon;
  const D = window.GFData;

  window.AddPositionDrawer = function AddPositionDrawer({ open, onClose }) {
    const universe = [...D.holdings, ...D.watchlist];
    const [q, setQ] = React.useState("");
    const [pick, setPick] = React.useState(null);
    const [amount, setAmount] = React.useState(2500);
    const results = q ? universe.filter((s) => (s.ticker + s.name).toLowerCase().includes(q.toLowerCase())).slice(0, 6) : universe.slice(0, 5);

    return (
      <div style={{ position: "fixed", inset: 0, zIndex: 50, pointerEvents: open ? "auto" : "none" }}>
        <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(24,32,30,0.32)", opacity: open ? 1 : 0, transition: "opacity var(--dur-base) var(--ease-out)" }} />
        <div style={{ position: "absolute", top: 0, right: 0, height: "100%", width: 440, maxWidth: "92vw", background: "var(--surface)", boxShadow: "var(--shadow-xl)", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform var(--dur-base) var(--ease-out)", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>Add a position</div>
            <IconButton label="Close" variant="ghost" onClick={onClose}><Icon name="x" size={18} /></IconButton>
          </div>
          <div style={{ padding: "20px 24px", overflow: "auto", flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label style={lblStyle}>Find a company or fund</label>
              <Input leadingIcon={<Icon name="search" size={16} />} placeholder="Search ticker or name…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {results.map((s) => {
                const active = pick && pick.ticker === s.ticker;
                return (
                  <button key={s.ticker} onClick={() => setPick(s)} style={{ display: "flex", alignItems: "center", gap: 12, padding: 10, borderRadius: "var(--radius-md)", border: `1px solid ${active ? "var(--brand)" : "var(--border)"}`, background: active ? "var(--brand-soft)" : "var(--surface)", cursor: "pointer", textAlign: "left", font: "inherit" }}>
                    <CompanyMark ticker={s.ticker} name={s.name} size={34} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)", display: "flex", gap: 8, alignItems: "center" }}>{s.ticker}<AssetTypeBadge type={s.type} size="sm" /></div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.name}</div>
                    </div>
                    <HalalBadge status={s.halal} showLabel={false} size="sm" />
                  </button>
                );
              })}
            </div>
            {pick && (
              <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 4 }}>
                <div>
                  <label style={lblStyle}>How much are we putting in?</label>
                  <Input prefix="$" mono value={amount} onChange={(e) => setAmount(Math.max(0, +String(e.target.value).replace(/[^0-9.]/g, "") || 0))} />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {[1000, 2500, 5000].map((v) => <button key={v} onClick={() => setAmount(v)} style={{ flex: 1, padding: "9px 0", border: "1px solid var(--border-strong)", background: amount === v ? "var(--brand-soft)" : "var(--surface)", color: amount === v ? "var(--brand-strong)" : "var(--text-muted)", borderRadius: "var(--radius-md)", cursor: "pointer", font: "inherit", fontSize: 13, fontWeight: 600 }}>${v / 1000}k</button>)}
                </div>
                <Card pad="md" style={{ background: "var(--gray-50)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <MetricTile label="Est. shares" value={(amount / pick.price).toFixed(2)} />
                    <MetricTile label="Price" value={"$" + pick.price.toLocaleString()} align="right" />
                  </div>
                </Card>
              </div>
            )}
          </div>
          <div style={{ padding: "16px 24px", borderTop: "1px solid var(--border)", display: "flex", gap: 10 }}>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            <Button variant="primary" block disabled={!pick} onClick={onClose}>{pick ? `Add $${amount.toLocaleString()} ${pick.ticker}` : "Pick a company"}</Button>
          </div>
        </div>
      </div>
    );
  };
  const lblStyle = { display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 7, letterSpacing: "0.01em" };
})();
