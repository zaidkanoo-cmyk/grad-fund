import React from "react";

export function Badge({ children, tone = "neutral", variant = "soft", size = "md", dot = false, style = {} }) {
  const tones = {
    neutral:  { c: "var(--gray-700)", soft: "var(--gray-100)", solid: "var(--gray-700)" },
    brand:    { c: "var(--brand-strong)", soft: "var(--brand-soft)", solid: "var(--brand)" },
    positive: { c: "var(--positive-700)", soft: "var(--positive-50)", solid: "var(--positive-500)" },
    negative: { c: "var(--negative-700)", soft: "var(--negative-50)", solid: "var(--negative-500)" },
    amber:    { c: "var(--amber-700)", soft: "var(--amber-50)", solid: "var(--amber-500)" },
    info:     { c: "var(--blue-700)", soft: "var(--blue-50)", solid: "var(--blue-500)" },
  };
  const t = tones[tone] || tones.neutral;
  const sm = size === "sm";
  const isSolid = variant === "solid";
  const isOutline = variant === "outline";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      height: sm ? 18 : 22, padding: sm ? "0 7px" : "0 9px",
      fontFamily: "var(--font-sans)", fontSize: sm ? "var(--text-2xs)" : "var(--text-xs)",
      fontWeight: "var(--weight-semibold)", letterSpacing: "0.01em",
      lineHeight: 1, whiteSpace: "nowrap", borderRadius: "var(--radius-pill)",
      color: isSolid ? "#fff" : t.c,
      background: isSolid ? t.solid : isOutline ? "transparent" : t.soft,
      border: isOutline ? `1px solid ${t.c}` : "1px solid transparent",
      ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: isSolid ? "#fff" : t.solid }} />}
      {children}
    </span>
  );
}
