import React from "react";

/**
 * MetricTile — a single labelled KPI/metric. Used in grids on detail & overview.
 */
export function MetricTile({ label, value, sub = null, hint = null, align = "left", emphasis = false, style = {} }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: align, alignItems: align === "right" ? "flex-end" : "flex-start", ...style }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        fontSize: "var(--text-xs)", fontWeight: "var(--weight-semibold)",
        color: "var(--text-subtle)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase",
      }}>
        {label}
        {hint && <span title={hint} style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 13, height: 13, borderRadius: "50%", border: "1px solid var(--border-strong)",
          color: "var(--text-subtle)", fontSize: 9, fontWeight: 700, cursor: "help",
        }}>?</span>}
      </div>
      <div className="gf-num" style={{
        fontFamily: "var(--font-mono)",
        fontSize: emphasis ? "var(--text-2xl)" : "var(--text-lg)",
        fontWeight: emphasis ? "var(--weight-semibold)" : "var(--weight-semibold)",
        color: "var(--text-strong)", letterSpacing: "var(--tracking-snug)",
        fontVariantNumeric: "tabular-nums", lineHeight: 1.1,
      }}>{value}</div>
      {sub && <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{sub}</div>}
    </div>
  );
}
