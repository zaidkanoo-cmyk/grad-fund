import React from "react";

/**
 * AllocationBar — single horizontal stacked bar showing portfolio allocation.
 * segments: [{ label, value, color }]. Renders proportional segments + optional legend.
 */
export function AllocationBar({ segments = [], height = 12, showLegend = true, gap = 2, style = {} }) {
  const total = segments.reduce((s, x) => s + (x.value || 0), 0) || 1;
  return (
    <div style={{ ...style }}>
      <div style={{ display: "flex", gap, width: "100%", height, borderRadius: "var(--radius-pill)", overflow: "hidden", background: "var(--surface-sunken)" }}>
        {segments.map((s, i) => (
          <div
            key={i}
            title={`${s.label}: ${((s.value / total) * 100).toFixed(1)}%`}
            style={{ width: `${(s.value / total) * 100}%`, background: s.color || "var(--gray-400)", minWidth: s.value > 0 ? 3 : 0 }}
          />
        ))}
      </div>
      {showLegend && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px", marginTop: 12 }}>
          {segments.map((s, i) => (
            <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 9, height: 9, borderRadius: 3, background: s.color || "var(--gray-400)", flex: "none" }} />
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text)", fontWeight: "var(--weight-medium)" }}>{s.label}</span>
              <span className="gf-num" style={{ fontSize: "var(--text-sm)", color: "var(--text-subtle)", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>
                {((s.value / total) * 100).toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
