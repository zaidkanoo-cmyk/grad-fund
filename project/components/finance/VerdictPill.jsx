import React from "react";

/**
 * VerdictPill — Grad Fund's house call on a security: Invest / Watch / Avoid.
 */
export function VerdictPill({ verdict = "watch", size = "md", style = {} }) {
  const map = {
    buy:    { label: "Invest", c: "var(--verdict-buy)",   soft: "var(--positive-50)" },
    watch:  { label: "Watch",  c: "var(--verdict-watch)", soft: "var(--amber-50)" },
    avoid:  { label: "Avoid",  c: "var(--verdict-avoid)", soft: "var(--negative-50)" },
  };
  const m = map[verdict] || map.watch;
  const sm = size === "sm";
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        height: sm ? 22 : 28, padding: sm ? "0 10px" : "0 12px",
        borderRadius: "var(--radius-pill)", background: m.soft, color: m.c,
        border: `1px solid color-mix(in oklab, ${m.c} 35%, transparent)`,
        fontFamily: "var(--font-sans)", fontSize: sm ? "var(--text-xs)" : "var(--text-sm)",
        fontWeight: "var(--weight-bold)", letterSpacing: "0.02em",
        textTransform: "uppercase", whiteSpace: "nowrap", ...style,
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: m.c }} />
      {m.label}
    </span>
  );
}
