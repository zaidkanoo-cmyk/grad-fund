import React from "react";

/**
 * Surface container. The canonical Grad Fund card: white, hairline border, soft shadow.
 */
export function Card({
  children,
  pad = "md",
  interactive = false,
  selected = false,
  as = "div",
  style = {},
  ...rest
}) {
  const pads = { none: 0, sm: "var(--space-4)", md: "var(--space-5)", lg: "var(--space-6)" };
  const Tag = as;
  return (
    <Tag
      className="gf-card"
      style={{
        background: "var(--surface)",
        border: `1px solid ${selected ? "var(--brand)" : "var(--border)"}`,
        borderRadius: "var(--card-radius)",
        boxShadow: selected ? "0 0 0 1px var(--brand), var(--shadow-sm)" : "var(--card-shadow)",
        padding: pads[pad] ?? pads.md,
        transition: "var(--transition-base)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Optional header row for a Card: title left, actions right. */
export function CardHeader({ title, subtitle, action, style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: "var(--space-4)", ...style }}>
      <div>
        <div style={{ fontSize: "var(--text-md)", fontWeight: "var(--weight-semibold)", color: "var(--text-strong)", letterSpacing: "var(--tracking-snug)" }}>{title}</div>
        {subtitle && <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: 2 }}>{subtitle}</div>}
      </div>
      {action}
    </div>
  );
}
