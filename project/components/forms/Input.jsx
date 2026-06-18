import React from "react";

/**
 * Text input with optional leading icon (e.g. search) and affixes.
 */
export function Input({
  value,
  defaultValue,
  onChange,
  placeholder,
  type = "text",
  size = "md",
  leadingIcon = null,
  trailingIcon = null,
  prefix = null,
  suffix = null,
  disabled = false,
  invalid = false,
  mono = false,
  block = true,
  style = {},
  ...rest
}) {
  const h = size === "sm" ? 32 : size === "lg" ? 48 : 40;
  const fs = size === "sm" ? "var(--text-sm)" : "var(--text-base)";
  return (
    <div
      className="gf-input"
      style={{
        display: "flex", alignItems: "center", gap: 8,
        width: block ? "100%" : "auto",
        height: h, padding: "0 12px",
        background: disabled ? "var(--surface-sunken)" : "var(--surface)",
        border: `1px solid ${invalid ? "var(--negative-500)" : "var(--border-strong)"}`,
        borderRadius: "var(--radius-md)",
        transition: "var(--transition-base)",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      {leadingIcon && <span style={{ display: "flex", color: "var(--text-subtle)" }}>{leadingIcon}</span>}
      {prefix && <span style={{ color: "var(--text-subtle)", fontSize: fs }}>{prefix}</span>}
      <input
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        style={{
          flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
          fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
          fontSize: fs, color: "var(--text-strong)", fontVariantNumeric: "tabular-nums",
        }}
        {...rest}
      />
      {suffix && <span style={{ color: "var(--text-subtle)", fontSize: fs }}>{suffix}</span>}
      {trailingIcon && <span style={{ display: "flex", color: "var(--text-subtle)" }}>{trailingIcon}</span>}
    </div>
  );
}
