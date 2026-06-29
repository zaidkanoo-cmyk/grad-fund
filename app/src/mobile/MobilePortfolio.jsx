import React from "react";
import { ChangeValue } from "../components/finance/ChangeValue.jsx";
import { HalalBadge } from "../components/finance/HalalBadge.jsx";
import { AssetTypeBadge, assetColor } from "../components/finance/AssetTypeBadge.jsx";
import { CompanyMark } from "../components/finance/CompanyMark.jsx";
import { Sparkline } from "../components/finance/Sparkline.jsx";
import { AllocationBar } from "../components/finance/AllocationBar.jsx";
import { GFIcon } from "../components/finance/Icons.jsx";

const fmtK = (n) => "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
const fmt = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function BottomTab({ icon, label, active }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: active ? "var(--brand)" : "var(--text-subtle)", flex: 1 }}>
      <GFIcon name={icon} size={22} />
      <span style={{ fontSize: 10.5, fontWeight: active ? 600 : 500 }}>{label}</span>
    </div>
  );
}

export function MobilePortfolio({ onOpen, data }) {
  const S = data.summary;
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--bg-app)" }}>
      <div style={{ flex: 1, overflow: "auto", padding: "8px 18px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0 16px" }}>
          <div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Good morning</div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>Portfolio</div>
          </div>
          <span style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--evergreen-600)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>Y</span>
        </div>

        <div style={{ background: "var(--evergreen-700)", borderRadius: "var(--radius-xl)", padding: 20, color: "#fff", boxShadow: "var(--shadow-md)" }}>
          <div style={{ fontSize: 12.5, opacity: 0.8, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>Total value</div>
          <div className="gf-mono" style={{ fontFamily: "var(--font-mono)", fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 4 }}>{fmt(S.totalValue)}</div>
          <div style={{ display: "flex", gap: 16, marginTop: 8, fontSize: 13 }}>
            <span style={{ opacity: 0.85 }}>Today <b style={{ color: S.dayPct >= 0 ? "#7FE9B6" : "#FFB4AE" }}>{S.dayPct >= 0 ? "+" : "−"}{Math.abs(S.dayPct).toFixed(2)}%</b></span>
            <span style={{ opacity: 0.85 }}>All time <b style={{ color: "#7FE9B6" }}>+{S.totalRet.toFixed(1)}%</b></span>
          </div>
          <Sparkline data={data.detail.spark.slice(40)} width={300} height={44} color="#7FE9B6" fill={false} strokeWidth={2} style={{ width: "100%", marginTop: 12, opacity: 0.95 }} />
        </div>

        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: 16, marginTop: 14, boxShadow: "var(--shadow-sm)" }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: "var(--text-strong)", marginBottom: 12 }}>Allocation</div>
          <AllocationBar height={12} showLegend={false} segments={data.allocation.byClass.map((s) => ({ label: s.label, value: s.value, color: assetColor(s.type) }))} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 14px", marginTop: 12 }}>
            {data.allocation.byClass.slice(0, 4).map((s) => (
              <span key={s.label} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-muted)" }}>
                <span style={{ width: 8, height: 8, borderRadius: 2, background: assetColor(s.type) }} />
                {s.label} {s.value}%
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 2px 10px" }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text-strong)" }}>Holdings</span>
          <span style={{ fontSize: 13, color: "var(--brand)", fontWeight: 600 }}>See all</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {data.holdings.slice(0, 6).map((h) => (
            <div key={h.ticker} onClick={() => onOpen(h)} style={{ display: "flex", alignItems: "center", gap: 12, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "11px 12px", cursor: "pointer" }}>
              <CompanyMark ticker={h.ticker} name={h.name} size={36} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontWeight: 700, color: "var(--text-strong)", fontSize: 14 }}>{h.ticker}</span>
                  <HalalBadge status={h.halal} showLabel={false} size="sm" />
                </div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{h.name}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="gf-mono" style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 13.5, color: "var(--text-strong)" }}>{fmt(h.price)}</div>
                <ChangeValue value={h.day} size="sm" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", padding: "10px 18px 26px", borderTop: "1px solid var(--border)", background: "var(--surface)" }}>
        <BottomTab icon="home" label="Portfolio" active />
        <BottomTab icon="star" label="Watchlist" />
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <span style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--brand)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-md)", marginTop: -24 }}>
            <GFIcon name="plus" size={24} />
          </span>
        </div>
        <BottomTab icon="scale" label="Compare" />
        <BottomTab icon="settings" label="More" />
      </div>
    </div>
  );
}
