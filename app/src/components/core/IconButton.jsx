import React from "react";

export function IconButton({
  children, label, variant = "ghost", size = "md",
  disabled = false, onClick, style = {}, ...rest
}) {
  const sizes = { sm: 30, md: 36, lg: 42 };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost:   { background: "transparent", color: "var(--text-muted)", border: "1px solid transparent" },
    outline: { background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border-strong)" },
    solid:   { background: "var(--brand)", color: "#fff", border: "1px solid var(--brand)" },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className="gf-iconbtn"
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: dim, height: dim, borderRadius: "var(--radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "var(--transition-base)",
        padding: 0, ...v, ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
