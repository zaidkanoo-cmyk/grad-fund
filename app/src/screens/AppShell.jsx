import React from "react";
import { Button } from "../components/core/Button.jsx";
import { IconButton } from "../components/core/IconButton.jsx";
import { Input } from "../components/forms/Input.jsx";
import { Switch } from "../components/forms/Switch.jsx";
import { GFIcon } from "../components/finance/Icons.jsx";

const NAV = [
  { id: "overview",  label: "Portfolio",  icon: "home" },
  { id: "watchlist", label: "Watchlist",  icon: "star" },
  { id: "orders",    label: "Orders",     icon: "receipt" },
  { id: "compare",   label: "Compare",    icon: "scale" },
  { id: "screener",  label: "Screener",   icon: "list" },
];

function NavItem({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 11, width: "100%",
        padding: "9px 12px", borderRadius: "var(--radius-md)", border: "none",
        background: active ? "var(--brand-soft)" : "transparent",
        color: active ? "var(--brand-strong)" : "var(--text-muted)",
        font: "inherit", fontSize: "var(--text-base)", fontWeight: active ? 600 : 500,
        cursor: "pointer", textAlign: "left", transition: "var(--transition-base)",
      }}
    >
      <GFIcon name={item.icon} size={19} />
      {item.label}
    </button>
  );
}

export function AppShell({ active, onNav, halalOnly, setHalalOnly, onAdd, onTrade, onSearch, children, ibkrConnected }) {
  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--bg-app)", overflow: "hidden", fontFamily: "var(--font-sans)" }}>
      {/* Sidebar */}
      <aside style={{ width: 232, flex: "none", background: "var(--surface)", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", padding: "20px 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0 6px 22px" }}>
          <img src="/gradfund-mark.svg" height={30} alt="" />
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>Grad Fund</span>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {NAV.map((it) => (
            <NavItem key={it.id} item={it} active={active === it.id} onClick={() => onNav(it.id)} />
          ))}
        </nav>
        <div style={{ marginTop: "auto", padding: 12, borderRadius: "var(--radius-md)", background: "var(--surface-sunken)", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--evergreen-600)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>Y</span>
          <div style={{ lineHeight: 1.25 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-strong)" }}>You & Dad</div>
            <div style={{ fontSize: 11, color: "var(--text-subtle)" }}>Joint account</div>
          </div>
        </div>
      </aside>

      {/* Main column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <header style={{ height: 64, flex: "none", background: "var(--surface)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 16, padding: "0 24px" }}>
          <div style={{ width: 340, maxWidth: "40%" }}>
            <Input
              leadingIcon={<GFIcon name="search" size={16} />}
              placeholder="Search a company, ticker or fund…"
              onFocus={onSearch}
            />
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
            <Switch checked={halalOnly} onChange={setHalalOnly} label="Halal-only" size="sm" />
            {ibkrConnected && (
              <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "3px 8px", background: "var(--positive-50)", borderRadius: "var(--radius-pill)", fontSize: 11.5, fontWeight: 600, color: "var(--positive-700)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--positive-500)", display: "inline-block" }} />
                IBKR Live
              </div>
            )}
            <IconButton label="Alerts" variant="ghost"><GFIcon name="bell" size={19} /></IconButton>
            <Button variant="secondary" leadingIcon={<GFIcon name="zap" size={16} />} onClick={onTrade}>Trade</Button>
            <Button variant="primary" leadingIcon={<GFIcon name="plus" size={16} />} onClick={onAdd}>Add position</Button>
          </div>
        </header>
        <main style={{ flex: 1, overflow: "auto", padding: "28px 32px" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
