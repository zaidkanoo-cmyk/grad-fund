import React from "react";

/**
 * ChangeValue — renders a gain/loss number with directional color + caret.
 * Positive = evergreen, negative = red, flat = neutral. Tabular figures.
 */
export function ChangeValue({
  value = 0,
  percent = null,
  format = "percent",
  showCaret = true,
  showSign = true,
  size = "md",
  weight = "semibold",
  align = "right",
  currency = "$",
  style = {},
}) {
  const dir = value > 0 ? 1 : value < 0 ? -1 : 0;
  const color = dir > 0 ? "var(--gain)" : dir < 0 ? "var(--loss)" : "var(--text-subtle)";
  const fs = { sm: "var(--text-sm)", md: "var(--text-base)", lg: "var(--text-lg)", xl: "var(--text-2xl)" }[size] || "var(--text-base)";
  const fw = { regular: 400, medium: 500, semibold: 600, bold: 700 }[weight] || 600;

  const abs = Math.abs(value);
  const fmt = (n) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  let body;
  if (format === "percent") body = `${fmt(abs)}%`;
  else if (format === "currency") body = `${currency}${fmt(abs)}`;
  else body = fmt(abs);

  const sign = showSign ? (dir > 0 ? "+" : dir < 0 ? "−" : "") : "";
  const caret = dir > 0 ? "▲" : dir < 0 ? "▼" : "•";

  return (
    <span
      className="gf-num"
      style={{
        display: "inline-flex", alignItems: "baseline", gap: 4, justifyContent: align === "right" ? "flex-end" : "flex-start",
        color, fontFamily: "var(--font-mono)", fontSize: fs, fontWeight: fw,
        fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap", ...style,
      }}
    >
      {showCaret && <span style={{ fontSize: "0.7em", transform: "translateY(-0.06em)" }}>{caret}</span>}
      <span>{sign}{body}</span>
      {percent != null && format !== "percent" && (
        <span style={{ opacity: 0.72, fontSize: "0.86em" }}>
          ({dir > 0 ? "+" : dir < 0 ? "−" : ""}{Math.abs(percent).toFixed(2)}%)
        </span>
      )}
    </span>
  );
}
