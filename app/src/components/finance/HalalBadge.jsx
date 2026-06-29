import React from "react";

export function HalalBadge({ status = "review", size = "md", showLabel = true, style = {} }) {
  const map = {
    compliant:       { c: "var(--halal-ok)",    soft: "var(--positive-50)", glyph: "✓", label: "Halal" },
    review:          { c: "var(--halal-review)", soft: "var(--amber-50)",    glyph: "!", label: "Review" },
    "non-compliant": { c: "var(--halal-no)",     soft: "var(--negative-50)", glyph: "✕", label: "Not halal" },
    unrated:         { c: "var(--text-subtle)",  soft: "var(--gray-100)",    glyph: "?", label: "Unrated" },
  };
  const m = map[status] || map.review;
  const sm = size === "sm";
  const dim = sm ? 16 : 18;
  return (
    <span
      title={`Halal status: ${m.label}`}
      style={{
        display: "inline-flex", alignItems: "center", gap: showLabel ? 6 : 0,
        height: sm ? 20 : 24,
        padding: showLabel ? (sm ? "0 8px 0 6px" : "0 10px 0 7px") : 0,
        width: showLabel ? "auto" : (sm ? 20 : 24), justifyContent: "center",
        borderRadius: "var(--radius-pill)", background: m.soft, color: m.c,
        fontFamily: "var(--font-sans)", fontSize: sm ? "var(--text-2xs)" : "var(--text-xs)",
        fontWeight: "var(--weight-bold)", letterSpacing: "0.01em", whiteSpace: "nowrap", ...style,
      }}
    >
      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: dim, height: dim, borderRadius: "50%", background: m.c, color: "#fff",
        fontSize: sm ? 10 : 11, lineHeight: 1, flex: "none",
      }}>{m.glyph}</span>
      {showLabel && m.label}
    </span>
  );
}
