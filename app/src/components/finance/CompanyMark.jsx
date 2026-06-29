import React from "react";

const PALETTE = [
  "#2563B0", "#0F7257", "#6B5BD0", "#C6841C", "#B0457E", "#C97A12", "#1F8463", "#9E2A24",
];

function hashIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % mod;
}

export function CompanyMark({ ticker = "", name = "", src = null, size = 40, radius = "var(--radius-md)", style = {} }) {
  const seed = ticker || name || "?";
  const initials = (ticker || name).replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
  const bg = PALETTE[hashIndex(seed, PALETTE.length)];
  if (src) {
    return (
      <img
        src={src}
        alt={name || ticker}
        style={{ width: size, height: size, borderRadius: radius, objectFit: "cover", border: "1px solid var(--border)", background: "#fff", ...style }}
      />
    );
  }
  return (
    <span
      aria-label={name || ticker}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: size, height: size, borderRadius: radius, flex: "none",
        background: `color-mix(in oklab, ${bg} 14%, white)`, color: bg,
        fontFamily: "var(--font-sans)", fontWeight: "var(--weight-bold)",
        fontSize: size * 0.38, letterSpacing: "-0.02em", border: "1px solid var(--border)",
        userSelect: "none", ...style,
      }}
    >
      {initials}
    </span>
  );
}
