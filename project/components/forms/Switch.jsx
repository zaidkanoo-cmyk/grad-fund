import React from "react";

/**
 * Switch / toggle. Controlled via `checked` + `onChange(next)`.
 */
export function Switch({ checked = false, onChange, disabled = false, label, size = "md", style = {} }) {
  const w = size === "sm" ? 36 : 44;
  const h = size === "sm" ? 20 : 24;
  const knob = h - 6;
  const toggle = () => { if (!disabled && onChange) onChange(!checked); };
  const control = (
    <span
      role="switch"
      aria-checked={checked}
      onClick={toggle}
      style={{
        position: "relative", display: "inline-block", width: w, height: h,
        borderRadius: "var(--radius-pill)", flex: "none",
        background: checked ? "var(--brand)" : "var(--gray-300)",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1,
        transition: "background var(--dur-fast) var(--ease-out)",
      }}
    >
      <span
        style={{
          position: "absolute", top: 3, left: checked ? w - knob - 3 : 3,
          width: knob, height: knob, borderRadius: "50%", background: "#fff",
          boxShadow: "var(--shadow-sm)", transition: "left var(--dur-fast) var(--ease-out)",
        }}
      />
    </span>
  );
  if (!label) return control;
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", ...style }}>
      {control}
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--text)" }}>{label}</span>
    </label>
  );
}
