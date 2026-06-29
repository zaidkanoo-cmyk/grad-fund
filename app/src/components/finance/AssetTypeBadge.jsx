import React from "react";

const ASSET_META = {
  stock:  { label: "Stock",  color: "var(--asset-stock)" },
  etf:    { label: "ETF",    color: "var(--asset-etf)" },
  fund:   { label: "Fund",   color: "var(--asset-etf)" },
  bond:   { label: "Bond",   color: "var(--asset-bond)" },
  future: { label: "Future", color: "var(--asset-future)" },
  option: { label: "Option", color: "var(--asset-option)" },
  crypto: { label: "Crypto", color: "var(--asset-crypto)" },
  cash:   { label: "Cash",   color: "var(--asset-cash)" },
};

export function AssetTypeBadge({ type = "stock", size = "md", style = {} }) {
  const m = ASSET_META[type] || ASSET_META.stock;
  const sm = size === "sm";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      height: sm ? 18 : 22, padding: sm ? "0 8px 0 6px" : "0 9px 0 7px",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-sunken)", border: "1px solid var(--border)",
      color: "var(--text)", fontFamily: "var(--font-sans)",
      fontSize: sm ? "var(--text-2xs)" : "var(--text-xs)",
      fontWeight: "var(--weight-semibold)", letterSpacing: "0.02em",
      textTransform: "uppercase", whiteSpace: "nowrap", ...style,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: m.color, flex: "none" }} />
      {m.label}
    </span>
  );
}

export const assetColor = (type) => ({
  stock: "#2563B0", etf: "#0F7257", fund: "#0F7257", bond: "#6B5BD0",
  future: "#C6841C", option: "#B0457E", crypto: "#C97A12", cash: "#7E8887",
}[type] || "#7E8887");
