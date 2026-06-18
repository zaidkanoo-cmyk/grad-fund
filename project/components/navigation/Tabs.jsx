import React from "react";

/**
 * Underline tabs. Controlled via `value` + `onChange(id)`.
 * items: [{ id, label, count? }]
 */
export function Tabs({ items = [], value, onChange, size = "md", style = {} }) {
  const fs = size === "sm" ? "var(--text-sm)" : "var(--text-base)";
  return (
    <div
      role="tablist"
      style={{ display: "flex", alignItems: "center", gap: "var(--space-5)", borderBottom: "1px solid var(--border)", ...style }}
    >
      {items.map((it) => {
        const active = it.id === value;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(it.id)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "10px 1px", marginBottom: -1, background: "none", border: "none",
              borderBottom: `2px solid ${active ? "var(--brand)" : "transparent"}`,
              color: active ? "var(--text-strong)" : "var(--text-muted)",
              fontFamily: "var(--font-sans)", fontSize: fs,
              fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
              cursor: "pointer", transition: "var(--transition-base)", whiteSpace: "nowrap",
            }}
          >
            {it.label}
            {it.count != null && (
              <span style={{
                fontSize: "var(--text-2xs)", fontWeight: "var(--weight-semibold)",
                color: active ? "var(--brand-strong)" : "var(--text-subtle)",
                background: active ? "var(--brand-soft)" : "var(--surface-sunken)",
                borderRadius: "var(--radius-pill)", padding: "1px 6px", lineHeight: 1.5,
              }}>{it.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
