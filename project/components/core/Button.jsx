import React from "react";

/**
 * Grad Fund Button — the primary action primitive.
 * Tokens only; no external CSS. Tabular-safe label rendering.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  loading = false,
  leadingIcon = null,
  trailingIcon = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { height: 32, padding: "0 12px", font: "var(--text-sm)", gap: 6, radius: "var(--radius-sm)" },
    md: { height: 40, padding: "0 16px", font: "var(--text-base)", gap: 8, radius: "var(--radius-md)" },
    lg: { height: 48, padding: "0 22px", font: "var(--text-md)", gap: 10, radius: "var(--radius-md)" },
  };
  const variants = {
    primary: { background: "var(--brand)", color: "var(--brand-on)", border: "1px solid var(--brand)" },
    secondary: { background: "var(--surface)", color: "var(--text-strong)", border: "1px solid var(--border-strong)" },
    ghost: { background: "transparent", color: "var(--text)", border: "1px solid transparent" },
    danger: { background: "var(--negative-500)", color: "#fff", border: "1px solid var(--negative-500)" },
    brandSoft: { background: "var(--brand-soft)", color: "var(--brand-strong)", border: "1px solid var(--brand-soft)" },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const isOff = disabled || loading;

  return (
    <button
      type={type}
      disabled={isOff}
      onClick={onClick}
      className="gf-btn"
      style={{
        display: block ? "flex" : "inline-flex",
        width: block ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        fontFamily: "var(--font-sans)",
        fontSize: s.font,
        fontWeight: "var(--weight-semibold)",
        lineHeight: 1,
        letterSpacing: "var(--tracking-snug)",
        borderRadius: s.radius,
        cursor: isOff ? "not-allowed" : "pointer",
        opacity: isOff ? 0.55 : 1,
        transition: "var(--transition-base)",
        whiteSpace: "nowrap",
        userSelect: "none",
        ...v,
        ...style,
      }}
      {...rest}
    >
      {loading && <Spinner />}
      {!loading && leadingIcon}
      {children != null && <span>{children}</span>}
      {!loading && trailingIcon}
    </button>
  );
}

function Spinner() {
  return (
    <span
      aria-hidden="true"
      style={{
        width: 14, height: 14, borderRadius: "50%",
        border: "2px solid currentColor", borderTopColor: "transparent",
        display: "inline-block", animation: "gf-spin 0.7s linear infinite",
      }}
    />
  );
}
