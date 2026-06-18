/* @ds-bundle: {"format":3,"namespace":"GradFundDesignSystem_42702f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"AllocationBar","sourcePath":"components/finance/AllocationBar.jsx"},{"name":"AssetTypeBadge","sourcePath":"components/finance/AssetTypeBadge.jsx"},{"name":"ChangeValue","sourcePath":"components/finance/ChangeValue.jsx"},{"name":"CompanyMark","sourcePath":"components/finance/CompanyMark.jsx"},{"name":"HalalBadge","sourcePath":"components/finance/HalalBadge.jsx"},{"name":"MetricTile","sourcePath":"components/finance/MetricTile.jsx"},{"name":"Sparkline","sourcePath":"components/finance/Sparkline.jsx"},{"name":"VerdictPill","sourcePath":"components/finance/VerdictPill.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e3f032ce9d10","components/core/Button.jsx":"8d304d89ffa0","components/core/Card.jsx":"e17b8b3e01e6","components/core/IconButton.jsx":"7ca576d3f182","components/finance/AllocationBar.jsx":"98800e4e0a0f","components/finance/AssetTypeBadge.jsx":"4fee4668b1d4","components/finance/ChangeValue.jsx":"241988610e90","components/finance/CompanyMark.jsx":"e88831e45ee6","components/finance/HalalBadge.jsx":"c20b60527c3a","components/finance/MetricTile.jsx":"19f8d6186eb9","components/finance/Sparkline.jsx":"21f832b9b2b3","components/finance/VerdictPill.jsx":"26a9aa99d60a","components/forms/Input.jsx":"807b9190d144","components/forms/Switch.jsx":"91eef1488377","components/navigation/Tabs.jsx":"a3d69724f481","ui_kits/mobile-app/MobileDetail.jsx":"036993b209b8","ui_kits/mobile-app/MobilePortfolio.jsx":"d63e7496a969","ui_kits/web-dashboard/AddPositionDrawer.jsx":"a99ba3a33964","ui_kits/web-dashboard/AppShell.jsx":"658276413f2e","ui_kits/web-dashboard/CompareScreen.jsx":"5ff9e5189680","ui_kits/web-dashboard/Icons.jsx":"92ec6bf43512","ui_kits/web-dashboard/OverviewScreen.jsx":"27cab55c2f71","ui_kits/web-dashboard/StockDetailScreen.jsx":"0ea44f8b2cfd","ui_kits/web-dashboard/WatchlistScreen.jsx":"2dffbca8640a","ui_kits/web-dashboard/data.js":"0ef3d6c09e44"},"inlinedExternals":[],"unexposedExports":[{"name":"assetColor","sourcePath":"components/finance/AssetTypeBadge.jsx"}]} */

(() => {

const __ds_ns = (window.GradFundDesignSystem_42702f = window.GradFundDesignSystem_42702f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Small status/label pill. Tones map to semantic tokens.
 */
function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  size = "md",
  dot = false,
  style = {}
}) {
  const tones = {
    neutral: {
      c: "var(--gray-700)",
      soft: "var(--gray-100)",
      solid: "var(--gray-700)"
    },
    brand: {
      c: "var(--brand-strong)",
      soft: "var(--brand-soft)",
      solid: "var(--brand)"
    },
    positive: {
      c: "var(--positive-700)",
      soft: "var(--positive-50)",
      solid: "var(--positive-500)"
    },
    negative: {
      c: "var(--negative-700)",
      soft: "var(--negative-50)",
      solid: "var(--negative-500)"
    },
    amber: {
      c: "var(--amber-700)",
      soft: "var(--amber-50)",
      solid: "var(--amber-500)"
    },
    info: {
      c: "var(--blue-700)",
      soft: "var(--blue-50)",
      solid: "var(--blue-500)"
    }
  };
  const t = tones[tone] || tones.neutral;
  const sm = size === "sm";
  const isSolid = variant === "solid";
  const isOutline = variant === "outline";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: sm ? 18 : 22,
      padding: sm ? "0 7px" : "0 9px",
      fontFamily: "var(--font-sans)",
      fontSize: sm ? "var(--text-2xs)" : "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.01em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-pill)",
      color: isSolid ? "#fff" : t.c,
      background: isSolid ? t.solid : isOutline ? "transparent" : t.soft,
      border: isOutline ? `1px solid ${t.c}` : "1px solid transparent",
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: isSolid ? "#fff" : t.solid
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Grad Fund Button — the primary action primitive.
 * Tokens only; no external CSS. Tabular-safe label rendering.
 */
function Button({
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
    sm: {
      height: 32,
      padding: "0 12px",
      font: "var(--text-sm)",
      gap: 6,
      radius: "var(--radius-sm)"
    },
    md: {
      height: 40,
      padding: "0 16px",
      font: "var(--text-base)",
      gap: 8,
      radius: "var(--radius-md)"
    },
    lg: {
      height: 48,
      padding: "0 22px",
      font: "var(--text-md)",
      gap: 10,
      radius: "var(--radius-md)"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--brand-on)",
      border: "1px solid var(--brand)"
    },
    secondary: {
      background: "var(--surface)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text)",
      border: "1px solid transparent"
    },
    danger: {
      background: "var(--negative-500)",
      color: "#fff",
      border: "1px solid var(--negative-500)"
    },
    brandSoft: {
      background: "var(--brand-soft)",
      color: "var(--brand-strong)",
      border: "1px solid var(--brand-soft)"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const isOff = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isOff,
    onClick: onClick,
    className: "gf-btn",
    style: {
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
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && leadingIcon, children != null && /*#__PURE__*/React.createElement("span", null, children), !loading && trailingIcon);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "gf-spin 0.7s linear infinite"
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. The canonical Grad Fund card: white, hairline border, soft shadow.
 */
function Card({
  children,
  pad = "md",
  interactive = false,
  selected = false,
  as = "div",
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)"
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "gf-card",
    style: {
      background: "var(--surface)",
      border: `1px solid ${selected ? "var(--brand)" : "var(--border)"}`,
      borderRadius: "var(--card-radius)",
      boxShadow: selected ? "0 0 0 1px var(--brand), var(--shadow-sm)" : "var(--card-shadow)",
      padding: pads[pad] ?? pads.md,
      transition: "var(--transition-base)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), children);
}

/** Optional header row for a Card: title left, actions right. */
function CardHeader({
  title,
  subtitle,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-md)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)",
      letterSpacing: "var(--tracking-snug)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, subtitle)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon-only button. Pass a Lucide (or any) icon node as children.
 */
function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 30,
    md: 36,
    lg: 42
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid transparent"
    },
    outline: {
      background: "var(--surface)",
      color: "var(--text)",
      border: "1px solid var(--border-strong)"
    },
    solid: {
      background: "var(--brand)",
      color: "#fff",
      border: "1px solid var(--brand)"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    className: "gf-iconbtn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "var(--transition-base)",
      padding: 0,
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/finance/AllocationBar.jsx
try { (() => {
/**
 * AllocationBar — single horizontal stacked bar showing portfolio allocation.
 * segments: [{ label, value, color }]. Renders proportional segments + optional legend.
 */
function AllocationBar({
  segments = [],
  height = 12,
  showLegend = true,
  gap = 2,
  style = {}
}) {
  const total = segments.reduce((s, x) => s + (x.value || 0), 0) || 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap,
      width: "100%",
      height,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      background: "var(--surface-sunken)"
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    title: `${s.label}: ${(s.value / total * 100).toFixed(1)}%`,
    style: {
      width: `${s.value / total * 100}%`,
      background: s.color || "var(--gray-400)",
      minWidth: s.value > 0 ? 3 : 0
    }
  }))), showLegend && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px 18px",
      marginTop: 12
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 3,
      background: s.color || "var(--gray-400)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text)",
      fontWeight: "var(--weight-medium)"
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "gf-num",
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-subtle)",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums"
    }
  }, (s.value / total * 100).toFixed(1), "%")))));
}
Object.assign(__ds_scope, { AllocationBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/AllocationBar.jsx", error: String((e && e.message) || e) }); }

// components/finance/AssetTypeBadge.jsx
try { (() => {
const ASSET_META = {
  stock: {
    label: "Stock",
    color: "var(--asset-stock)"
  },
  etf: {
    label: "ETF",
    color: "var(--asset-etf)"
  },
  fund: {
    label: "Fund",
    color: "var(--asset-etf)"
  },
  bond: {
    label: "Bond",
    color: "var(--asset-bond)"
  },
  future: {
    label: "Future",
    color: "var(--asset-future)"
  },
  option: {
    label: "Option",
    color: "var(--asset-option)"
  },
  crypto: {
    label: "Crypto",
    color: "var(--asset-crypto)"
  },
  cash: {
    label: "Cash",
    color: "var(--asset-cash)"
  }
};

/**
 * AssetTypeBadge — labels the instrument class with a consistent accent dot/color.
 */
function AssetTypeBadge({
  type = "stock",
  size = "md",
  style = {}
}) {
  const m = ASSET_META[type] || ASSET_META.stock;
  const sm = size === "sm";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      height: sm ? 18 : 22,
      padding: sm ? "0 8px 0 6px" : "0 9px 0 7px",
      borderRadius: "var(--radius-sm)",
      background: "var(--surface-sunken)",
      border: "1px solid var(--border)",
      color: "var(--text)",
      fontFamily: "var(--font-sans)",
      fontSize: sm ? "var(--text-2xs)" : "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: m.color,
      flex: "none"
    }
  }), m.label);
}
const assetColor = type => (ASSET_META[type] || ASSET_META.stock).color;
Object.assign(__ds_scope, { AssetTypeBadge, assetColor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/AssetTypeBadge.jsx", error: String((e && e.message) || e) }); }

// components/finance/ChangeValue.jsx
try { (() => {
/**
 * ChangeValue — renders a gain/loss number with directional color + caret.
 * Positive = evergreen, negative = red, flat = neutral. Tabular figures.
 */
function ChangeValue({
  value = 0,
  percent = null,
  format = "percent",
  showCaret = true,
  showSign = true,
  size = "md",
  weight = "semibold",
  align = "right",
  currency = "$",
  style = {}
}) {
  const dir = value > 0 ? 1 : value < 0 ? -1 : 0;
  const color = dir > 0 ? "var(--gain)" : dir < 0 ? "var(--loss)" : "var(--text-subtle)";
  const fs = {
    sm: "var(--text-sm)",
    md: "var(--text-base)",
    lg: "var(--text-lg)",
    xl: "var(--text-2xl)"
  }[size] || "var(--text-base)";
  const fw = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }[weight] || 600;
  const abs = Math.abs(value);
  const fmt = n => n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  let body;
  if (format === "percent") body = `${fmt(abs)}%`;else if (format === "currency") body = `${currency}${fmt(abs)}`;else body = fmt(abs);
  const sign = showSign ? dir > 0 ? "+" : dir < 0 ? "−" : "" : "";
  const caret = dir > 0 ? "▲" : dir < 0 ? "▼" : "•";
  return /*#__PURE__*/React.createElement("span", {
    className: "gf-num",
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 4,
      justifyContent: align === "right" ? "flex-end" : "flex-start",
      color,
      fontFamily: "var(--font-mono)",
      fontSize: fs,
      fontWeight: fw,
      fontVariantNumeric: "tabular-nums",
      whiteSpace: "nowrap",
      ...style
    }
  }, showCaret && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.7em",
      transform: "translateY(-0.06em)"
    }
  }, caret), /*#__PURE__*/React.createElement("span", null, sign, body), percent != null && format !== "percent" && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.72,
      fontSize: "0.86em"
    }
  }, "(", dir > 0 ? "+" : dir < 0 ? "−" : "", Math.abs(percent).toFixed(2), "%)"));
}
Object.assign(__ds_scope, { ChangeValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/ChangeValue.jsx", error: String((e && e.message) || e) }); }

// components/finance/CompanyMark.jsx
try { (() => {
/**
 * CompanyMark — logo placeholder for a security: monogram in a soft tile.
 * No real logos are bundled; pass `src` to use a real one, else a deterministic
 * colored monogram is generated from the ticker/name.
 */
const PALETTE = ["#2563B0", "#0F7257", "#6B5BD0", "#C6841C", "#B0457E", "#C97A12", "#1F8463", "#9E2A24"];
function hashIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = h * 31 + str.charCodeAt(i) >>> 0;
  return h % mod;
}
function CompanyMark({
  ticker = "",
  name = "",
  src = null,
  size = 40,
  radius = "var(--radius-md)",
  style = {}
}) {
  const seed = ticker || name || "?";
  const initials = (ticker || name).replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
  const bg = PALETTE[hashIndex(seed, PALETTE.length)];
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: name || ticker,
      style: {
        width: size,
        height: size,
        borderRadius: radius,
        objectFit: "cover",
        border: "1px solid var(--border)",
        background: "#fff",
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": name || ticker,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: radius,
      flex: "none",
      background: `color-mix(in oklab, ${bg} 14%, white)`,
      color: bg,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: size * 0.38,
      letterSpacing: "-0.02em",
      border: "1px solid var(--border)",
      userSelect: "none",
      ...style
    }
  }, initials);
}
Object.assign(__ds_scope, { CompanyMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/CompanyMark.jsx", error: String((e && e.message) || e) }); }

// components/finance/HalalBadge.jsx
try { (() => {
/**
 * HalalBadge — Sharia-compliance status, first-class across Grad Fund.
 * status: "compliant" | "review" | "non-compliant" | "unrated"
 */
function HalalBadge({
  status = "review",
  size = "md",
  showLabel = true,
  style = {}
}) {
  const map = {
    compliant: {
      c: "var(--halal-ok)",
      soft: "var(--positive-50)",
      glyph: "✓",
      label: "Halal"
    },
    review: {
      c: "var(--halal-review)",
      soft: "var(--amber-50)",
      glyph: "!",
      label: "Review"
    },
    "non-compliant": {
      c: "var(--halal-no)",
      soft: "var(--negative-50)",
      glyph: "✕",
      label: "Not halal"
    },
    unrated: {
      c: "var(--text-subtle)",
      soft: "var(--gray-100)",
      glyph: "?",
      label: "Unrated"
    }
  };
  const m = map[status] || map.review;
  const sm = size === "sm";
  const dim = sm ? 16 : 18;
  return /*#__PURE__*/React.createElement("span", {
    title: `Halal status: ${m.label}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: showLabel ? 6 : 0,
      height: sm ? 20 : 24,
      padding: showLabel ? sm ? "0 8px 0 6px" : "0 10px 0 7px" : 0,
      width: showLabel ? "auto" : sm ? 20 : 24,
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      background: m.soft,
      color: m.c,
      fontFamily: "var(--font-sans)",
      fontSize: sm ? "var(--text-2xs)" : "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.01em",
      whiteSpace: "nowrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: "50%",
      background: m.c,
      color: "#fff",
      fontSize: sm ? 10 : 11,
      lineHeight: 1,
      flex: "none"
    }
  }, m.glyph), showLabel && m.label);
}
Object.assign(__ds_scope, { HalalBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/HalalBadge.jsx", error: String((e && e.message) || e) }); }

// components/finance/MetricTile.jsx
try { (() => {
/**
 * MetricTile — a single labelled KPI/metric. Used in grids on detail & overview.
 */
function MetricTile({
  label,
  value,
  sub = null,
  hint = null,
  align = "left",
  emphasis = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      textAlign: align,
      alignItems: align === "right" ? "flex-end" : "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-subtle)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase"
    }
  }, label, hint && /*#__PURE__*/React.createElement("span", {
    title: hint,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 13,
      height: 13,
      borderRadius: "50%",
      border: "1px solid var(--border-strong)",
      color: "var(--text-subtle)",
      fontSize: 9,
      fontWeight: 700,
      cursor: "help"
    }
  }, "?")), /*#__PURE__*/React.createElement("div", {
    className: "gf-num",
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: emphasis ? "var(--text-2xl)" : "var(--text-lg)",
      fontWeight: emphasis ? "var(--weight-semibold)" : "var(--weight-semibold)",
      color: "var(--text-strong)",
      letterSpacing: "var(--tracking-snug)",
      fontVariantNumeric: "tabular-nums",
      lineHeight: 1.1
    }
  }, value), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, sub));
}
Object.assign(__ds_scope, { MetricTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/MetricTile.jsx", error: String((e && e.message) || e) }); }

// components/finance/Sparkline.jsx
try { (() => {
/**
 * Sparkline — tiny inline price/return trend. Auto-colors by net direction
 * (first vs last) unless `color` is given. Pure SVG, no deps.
 */
function Sparkline({
  data = [],
  width = 96,
  height = 28,
  color = null,
  fill = true,
  strokeWidth = 1.75,
  style = {}
}) {
  const pts = data.length ? data : [1, 1];
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const span = max - min || 1;
  const dx = pts.length > 1 ? width / (pts.length - 1) : width;
  const pad = strokeWidth + 1;
  const y = v => pad + (1 - (v - min) / span) * (height - pad * 2);
  const coords = pts.map((v, i) => [i * dx, y(v)]);
  const line = coords.map(([x, yy], i) => `${i ? "L" : "M"}${x.toFixed(1)},${yy.toFixed(1)}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;
  const up = pts[pts.length - 1] >= pts[0];
  const stroke = color || (up ? "var(--gain)" : "var(--loss)");
  const gid = "sg" + Math.random().toString(36).slice(2, 8);
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    style: {
      display: "block",
      overflow: "visible",
      ...style
    },
    preserveAspectRatio: "none"
  }, fill && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: stroke,
    stopOpacity: "0.18"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: stroke,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#${gid})`,
    stroke: "none"
  })), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/finance/VerdictPill.jsx
try { (() => {
/**
 * VerdictPill — Grad Fund's house call on a security: Invest / Watch / Avoid.
 */
function VerdictPill({
  verdict = "watch",
  size = "md",
  style = {}
}) {
  const map = {
    buy: {
      label: "Invest",
      c: "var(--verdict-buy)",
      soft: "var(--positive-50)"
    },
    watch: {
      label: "Watch",
      c: "var(--verdict-watch)",
      soft: "var(--amber-50)"
    },
    avoid: {
      label: "Avoid",
      c: "var(--verdict-avoid)",
      soft: "var(--negative-50)"
    }
  };
  const m = map[verdict] || map.watch;
  const sm = size === "sm";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: sm ? 22 : 28,
      padding: sm ? "0 10px" : "0 12px",
      borderRadius: "var(--radius-pill)",
      background: m.soft,
      color: m.c,
      border: `1px solid color-mix(in oklab, ${m.c} 35%, transparent)`,
      fontFamily: "var(--font-sans)",
      fontSize: sm ? "var(--text-xs)" : "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: m.c
    }
  }), m.label);
}
Object.assign(__ds_scope, { VerdictPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/finance/VerdictPill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional leading icon (e.g. search) and affixes.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: "gf-input",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: block ? "100%" : "auto",
      height: h,
      padding: "0 12px",
      background: disabled ? "var(--surface-sunken)" : "var(--surface)",
      border: `1px solid ${invalid ? "var(--negative-500)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-md)",
      transition: "var(--transition-base)",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-subtle)"
    }
  }, leadingIcon), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)",
      fontSize: fs
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    placeholder: placeholder,
    type: type,
    disabled: disabled,
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      fontSize: fs,
      color: "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-subtle)",
      fontSize: fs
    }
  }, suffix), trailingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--text-subtle)"
    }
  }, trailingIcon));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Switch / toggle. Controlled via `checked` + `onChange(next)`.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  size = "md",
  style = {}
}) {
  const w = size === "sm" ? 36 : 44;
  const h = size === "sm" ? 20 : 24;
  const knob = h - 6;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const control = /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    style: {
      position: "relative",
      display: "inline-block",
      width: w,
      height: h,
      borderRadius: "var(--radius-pill)",
      flex: "none",
      background: checked ? "var(--brand)" : "var(--gray-300)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? w - knob - 3 : 3,
      width: knob,
      height: knob,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--dur-fast) var(--ease-out)"
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Underline tabs. Controlled via `value` + `onChange(id)`.
 * items: [{ id, label, count? }]
 */
function Tabs({
  items = [],
  value,
  onChange,
  size = "md",
  style = {}
}) {
  const fs = size === "sm" ? "var(--text-sm)" : "var(--text-base)";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      borderBottom: "1px solid var(--border)",
      ...style
    }
  }, items.map(it => {
    const active = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.id),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "10px 1px",
        marginBottom: -1,
        background: "none",
        border: "none",
        borderBottom: `2px solid ${active ? "var(--brand)" : "transparent"}`,
        color: active ? "var(--text-strong)" : "var(--text-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: fs,
        fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)",
        cursor: "pointer",
        transition: "var(--transition-base)",
        whiteSpace: "nowrap"
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-2xs)",
        fontWeight: "var(--weight-semibold)",
        color: active ? "var(--brand-strong)" : "var(--text-subtle)",
        background: active ? "var(--brand-soft)" : "var(--surface-sunken)",
        borderRadius: "var(--radius-pill)",
        padding: "1px 6px",
        lineHeight: 1.5
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobileDetail.jsx
try { (() => {
/* MobileDetail — phone single-security screen. → window.MobileDetail */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const {
    ChangeValue,
    HalalBadge,
    VerdictPill,
    AssetTypeBadge,
    CompanyMark,
    Sparkline,
    MetricTile,
    Button,
    Tabs
  } = NS;
  const Icon = window.GFIcon;
  const fmt = n => "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  window.MobileDetail = function MobileDetail({
    security,
    onBack
  }) {
    const base = window.GFData.detail;
    const d = security && security.ticker === base.ticker ? base : security ? {
      ...base,
      ...security,
      spark: security.spark || base.spark
    } : base;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--surface)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 18px 8px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: onBack,
      style: {
        color: "var(--text-muted)",
        display: "inline-flex",
        cursor: "pointer",
        transform: "rotate(180deg)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 22
    })), /*#__PURE__*/React.createElement(CompanyMark, {
      ticker: d.ticker,
      name: d.name,
      size: 32
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: "var(--text-strong)"
      }
    }, d.ticker), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, d.region, " \xB7 ", d.exchange || "NASDAQ")), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "star",
      size: 22
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 18px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "gf-mono",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 32,
        fontWeight: 600,
        color: "var(--text-strong)",
        letterSpacing: "-0.02em"
      }
    }, fmt(d.price)), /*#__PURE__*/React.createElement(ChangeValue, {
      value: d.day,
      size: "md"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(VerdictPill, {
      verdict: d.verdict,
      size: "sm"
    }), /*#__PURE__*/React.createElement(HalalBadge, {
      status: d.halal,
      size: "sm"
    }), /*#__PURE__*/React.createElement(AssetTypeBadge, {
      type: d.type,
      size: "sm"
    }))), /*#__PURE__*/React.createElement(Sparkline, {
      data: d.spark,
      width: 354,
      height: 130,
      color: "var(--evergreen-600)",
      strokeWidth: 2.2,
      style: {
        width: "100%",
        padding: "8px 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 18px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: "var(--text-strong)",
        margin: "12px 0"
      }
    }, "Key metrics"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "18px 16px"
      }
    }, base.metrics.slice(0, 8).map(m => /*#__PURE__*/React.createElement(MetricTile, {
      key: m.label,
      label: m.label,
      value: m.value
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--evergreen-50)",
        borderRadius: "var(--radius-lg)",
        padding: 16,
        margin: "20px 0",
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--brand)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 20
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 14,
        color: "var(--text-strong)"
      }
    }, "Halal: compliant"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text)",
        marginTop: 3,
        lineHeight: 1.5
      }
    }, "Passed all 4 screens \u2014 permissible business, low interest income, low debt."))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 18px 26px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "star",
        size: 16
      })
    }, "Watch"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      })
    }, "Add position")));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobileDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile-app/MobilePortfolio.jsx
try { (() => {
/* MobilePortfolio — phone portfolio screen. → window.MobilePortfolio */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const {
    ChangeValue,
    HalalBadge,
    AssetTypeBadge,
    CompanyMark,
    Sparkline,
    AllocationBar,
    Badge
  } = NS;
  const assetColor = window.GFAssetColor;
  const Icon = window.GFIcon;
  const D = window.GFData;
  const fmtK = n => "$" + n.toLocaleString("en-US", {
    maximumFractionDigits: 0
  });
  const fmt = n => "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  function Tab({
    icon,
    label,
    active
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        color: active ? "var(--brand)" : "var(--text-subtle)",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: active ? 600 : 500
      }
    }, label));
  }
  window.MobilePortfolio = function MobilePortfolio({
    onOpen
  }) {
    const S = D.summary;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "var(--bg-app)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflow: "auto",
        padding: "8px 18px 18px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 0 16px"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "Good morning"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: "var(--text-strong)"
      }
    }, "Portfolio")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "var(--evergreen-600)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700
      }
    }, "Y")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--evergreen-700)",
        borderRadius: "var(--radius-xl)",
        padding: 20,
        color: "#fff",
        boxShadow: "var(--shadow-md)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        opacity: 0.8,
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase"
      }
    }, "Total value"), /*#__PURE__*/React.createElement("div", {
      className: "gf-mono",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 34,
        fontWeight: 600,
        letterSpacing: "-0.02em",
        marginTop: 4
      }
    }, fmt(S.totalValue)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 8,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.85
      }
    }, "Today ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: S.dayPct >= 0 ? "#7FE9B6" : "#FFB4AE"
      }
    }, S.dayPct >= 0 ? "+" : "−", Math.abs(S.dayPct).toFixed(2), "%")), /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: 0.85
      }
    }, "All time ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: "#7FE9B6"
      }
    }, "+", S.totalRet.toFixed(1), "%"))), /*#__PURE__*/React.createElement(Sparkline, {
      data: D.detail.spark.slice(40),
      width: 300,
      height: 44,
      color: "#7FE9B6",
      fill: false,
      strokeWidth: 2,
      style: {
        width: "100%",
        marginTop: 12,
        opacity: 0.95
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 16,
        marginTop: 14,
        boxShadow: "var(--shadow-sm)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: "var(--text-strong)",
        marginBottom: 12
      }
    }, "Allocation"), /*#__PURE__*/React.createElement(AllocationBar, {
      height: 12,
      showLegend: false,
      segments: D.allocation.byClass.map(s => ({
        label: s.label,
        value: s.value,
        color: assetColor(s.type)
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px 14px",
        marginTop: 12
      }
    }, D.allocation.byClass.slice(0, 4).map(s => /*#__PURE__*/React.createElement("span", {
      key: s.label,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: assetColor(s.type)
      }
    }), s.label, " ", s.value, "%")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px 2px 10px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, "Holdings"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--brand)",
        fontWeight: 600
      }
    }, "See all")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, D.holdings.slice(0, 6).map(h => /*#__PURE__*/React.createElement("div", {
      key: h.ticker,
      onClick: () => onOpen(h),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-md)",
        padding: "11px 12px",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(CompanyMark, {
      ticker: h.ticker,
      name: h.name,
      size: 36
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 14
      }
    }, h.ticker), /*#__PURE__*/React.createElement(HalalBadge, {
      status: h.halal,
      showLabel: false,
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, h.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "gf-mono",
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 13.5,
        color: "var(--text-strong)"
      }
    }, fmt(h.price)), /*#__PURE__*/React.createElement(ChangeValue, {
      value: h.day,
      size: "sm"
    })))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        padding: "10px 18px 26px",
        borderTop: "1px solid var(--border)",
        background: "var(--surface)"
      }
    }, /*#__PURE__*/React.createElement(Tab, {
      icon: "home",
      label: "Portfolio",
      active: true
    }), /*#__PURE__*/React.createElement(Tab, {
      icon: "star",
      label: "Watchlist"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--brand)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-md)",
        marginTop: -24
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 24
    }))), /*#__PURE__*/React.createElement(Tab, {
      icon: "scale",
      label: "Compare"
    }), /*#__PURE__*/React.createElement(Tab, {
      icon: "settings",
      label: "More"
    })));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile-app/MobilePortfolio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-dashboard/AddPositionDrawer.jsx
try { (() => {
/* AddPositionDrawer — slide-in add-position / money-in flow. → window.AddPositionDrawer */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const {
    Card,
    Badge,
    ChangeValue,
    HalalBadge,
    AssetTypeBadge,
    CompanyMark,
    Input,
    Button,
    IconButton,
    MetricTile
  } = NS;
  const Icon = window.GFIcon;
  const D = window.GFData;
  window.AddPositionDrawer = function AddPositionDrawer({
    open,
    onClose
  }) {
    const universe = [...D.holdings, ...D.watchlist];
    const [q, setQ] = React.useState("");
    const [pick, setPick] = React.useState(null);
    const [amount, setAmount] = React.useState(2500);
    const results = q ? universe.filter(s => (s.ticker + s.name).toLowerCase().includes(q.toLowerCase())).slice(0, 6) : universe.slice(0, 5);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 50,
        pointerEvents: open ? "auto" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(24,32,30,0.32)",
        opacity: open ? 1 : 0,
        transition: "opacity var(--dur-base) var(--ease-out)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: 440,
        maxWidth: "92vw",
        background: "var(--surface)",
        boxShadow: "var(--shadow-xl)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform var(--dur-base) var(--ease-out)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 24px",
        borderBottom: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: "var(--text-strong)"
      }
    }, "Add a position"), /*#__PURE__*/React.createElement(IconButton, {
      label: "Close",
      variant: "ghost",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 24px",
        overflow: "auto",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lblStyle
    }, "Find a company or fund"), /*#__PURE__*/React.createElement(Input, {
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 16
      }),
      placeholder: "Search ticker or name\u2026",
      value: q,
      onChange: e => setQ(e.target.value)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, results.map(s => {
      const active = pick && pick.ticker === s.ticker;
      return /*#__PURE__*/React.createElement("button", {
        key: s.ticker,
        onClick: () => setPick(s),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: 10,
          borderRadius: "var(--radius-md)",
          border: `1px solid ${active ? "var(--brand)" : "var(--border)"}`,
          background: active ? "var(--brand-soft)" : "var(--surface)",
          cursor: "pointer",
          textAlign: "left",
          font: "inherit"
        }
      }, /*#__PURE__*/React.createElement(CompanyMark, {
        ticker: s.ticker,
        name: s.name,
        size: 34
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          fontSize: 13.5,
          color: "var(--text-strong)",
          display: "flex",
          gap: 8,
          alignItems: "center"
        }
      }, s.ticker, /*#__PURE__*/React.createElement(AssetTypeBadge, {
        type: s.type,
        size: "sm"
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: "var(--text-muted)"
        }
      }, s.name)), /*#__PURE__*/React.createElement(HalalBadge, {
        status: s.halal,
        showLabel: false,
        size: "sm"
      }));
    })), pick && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14,
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: lblStyle
    }, "How much are we putting in?"), /*#__PURE__*/React.createElement(Input, {
      prefix: "$",
      mono: true,
      value: amount,
      onChange: e => setAmount(Math.max(0, +String(e.target.value).replace(/[^0-9.]/g, "") || 0))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, [1000, 2500, 5000].map(v => /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => setAmount(v),
      style: {
        flex: 1,
        padding: "9px 0",
        border: "1px solid var(--border-strong)",
        background: amount === v ? "var(--brand-soft)" : "var(--surface)",
        color: amount === v ? "var(--brand-strong)" : "var(--text-muted)",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        font: "inherit",
        fontSize: 13,
        fontWeight: 600
      }
    }, "$", v / 1000, "k"))), /*#__PURE__*/React.createElement(Card, {
      pad: "md",
      style: {
        background: "var(--gray-50)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(MetricTile, {
      label: "Est. shares",
      value: (amount / pick.price).toFixed(2)
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Price",
      value: "$" + pick.price.toLocaleString(),
      align: "right"
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 24px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      disabled: !pick,
      onClick: onClose
    }, pick ? `Add $${amount.toLocaleString()} ${pick.ticker}` : "Pick a company"))));
  };
  const lblStyle = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "var(--text-muted)",
    marginBottom: 7,
    letterSpacing: "0.01em"
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-dashboard/AddPositionDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-dashboard/AppShell.jsx
try { (() => {
/* AppShell — sidebar + topbar chrome for the Grad Fund dashboard. → window.AppShell */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const {
    IconButton,
    Button,
    Input,
    Switch,
    Badge
  } = NS;
  const Icon = window.GFIcon;
  const NAV = [{
    id: "overview",
    label: "Portfolio",
    icon: "home"
  }, {
    id: "watchlist",
    label: "Watchlist",
    icon: "star"
  }, {
    id: "compare",
    label: "Compare",
    icon: "scale"
  }, {
    id: "screener",
    label: "Screener",
    icon: "list"
  }];
  function NavItem({
    item,
    active,
    onClick
  }) {
    return React.createElement("button", {
      onClick,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        width: "100%",
        padding: "9px 12px",
        borderRadius: "var(--radius-md)",
        border: "none",
        background: active ? "var(--brand-soft)" : "transparent",
        color: active ? "var(--brand-strong)" : "var(--text-muted)",
        font: "inherit",
        fontSize: "var(--text-base)",
        fontWeight: active ? 600 : 500,
        cursor: "pointer",
        textAlign: "left",
        transition: "var(--transition-base)"
      }
    }, React.createElement(Icon, {
      name: item.icon,
      size: 19
    }), item.label);
  }
  window.AppShell = function AppShell({
    active,
    onNav,
    halalOnly,
    setHalalOnly,
    onAdd,
    children,
    onSearch
  }) {
    return React.createElement("div", {
      style: {
        display: "flex",
        height: "100vh",
        background: "var(--bg-app)",
        overflow: "hidden",
        fontFamily: "var(--font-sans)"
      }
    },
    // Sidebar
    React.createElement("aside", {
      style: {
        width: 232,
        flex: "none",
        background: "var(--surface)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        padding: "20px 16px"
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 6px 22px"
      }
    }, React.createElement("img", {
      src: "../../assets/gradfund-mark.svg",
      height: 30,
      alt: ""
    }), React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: 18,
        letterSpacing: "-0.02em",
        color: "var(--text-strong)"
      }
    }, "Grad Fund")), React.createElement("nav", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, NAV.map(it => React.createElement(NavItem, {
      key: it.id,
      item: it,
      active: active === it.id,
      onClick: () => onNav(it.id)
    }))), React.createElement("div", {
      style: {
        marginTop: "auto",
        padding: 12,
        borderRadius: "var(--radius-md)",
        background: "var(--surface-sunken)",
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "var(--evergreen-600)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 13
      }
    }, "Y"), React.createElement("div", {
      style: {
        lineHeight: 1.25
      }
    }, React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "You & Dad"), React.createElement("div", {
      style: {
        fontSize: 11,
        color: "var(--text-subtle)"
      }
    }, "Joint account")))),
    // Main column
    React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0
      }
    }, React.createElement("header", {
      style: {
        height: 64,
        flex: "none",
        background: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 24px"
      }
    }, React.createElement("div", {
      style: {
        width: 340,
        maxWidth: "40%"
      }
    }, React.createElement(Input, {
      leadingIcon: React.createElement(Icon, {
        name: "search",
        size: 16
      }),
      placeholder: "Search a company, ticker or fund…",
      onFocus: onSearch
    })), React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, React.createElement(Switch, {
      checked: halalOnly,
      onChange: setHalalOnly,
      label: "Halal-only",
      size: "sm"
    }), React.createElement(IconButton, {
      label: "Alerts",
      variant: "ghost"
    }, React.createElement(Icon, {
      name: "bell",
      size: 19
    })), React.createElement(Button, {
      variant: "primary",
      leadingIcon: React.createElement(Icon, {
        name: "plus",
        size: 16
      }),
      onClick: onAdd
    }, "Add position"))), React.createElement("main", {
      style: {
        flex: 1,
        overflow: "auto",
        padding: "28px 32px"
      }
    }, children)));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-dashboard/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-dashboard/CompareScreen.jsx
try { (() => {
/* CompareScreen — side-by-side comparables. → window.CompareScreen */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const {
    Card,
    Badge,
    ChangeValue,
    HalalBadge,
    VerdictPill,
    AssetTypeBadge,
    CompanyMark,
    Sparkline,
    IconButton,
    Button
  } = NS;
  const Icon = window.GFIcon;
  const fmt = n => "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const COLS = [{
    ticker: "AAPL",
    name: "Apple",
    type: "stock",
    region: "US",
    halal: "compliant",
    verdict: "buy",
    price: 201.34,
    day: 1.62,
    m: {
      "Market cap": "$2.94T",
      "P/E (TTM)": "31.2",
      "Fwd P/E": "27.8",
      "Div yield": "0.51%",
      "Net margin": "25.3%",
      "ROE": "147%",
      "Debt/Equity": "1.87",
      "1y return": 22.6
    },
    spark: window.GFData.detail.spark
  }, {
    ticker: "MSFT",
    name: "Microsoft",
    type: "stock",
    region: "US",
    halal: "compliant",
    verdict: "buy",
    price: 432.18,
    day: -0.84,
    m: {
      "Market cap": "$3.21T",
      "P/E (TTM)": "36.0",
      "Fwd P/E": "31.2",
      "Div yield": "0.72%",
      "Net margin": "36.1%",
      "ROE": "39%",
      "Debt/Equity": "0.78",
      "1y return": 28.4
    },
    spark: window.GFData.holdings[2].spark
  }, {
    ticker: "ARAMCO",
    name: "Saudi Aramco",
    type: "stock",
    region: "KSA",
    halal: "compliant",
    verdict: "buy",
    price: 7.84,
    day: 0.26,
    m: {
      "Market cap": "$1.89T",
      "P/E (TTM)": "16.1",
      "Fwd P/E": "15.4",
      "Div yield": "6.30%",
      "Net margin": "27.8%",
      "ROE": "31%",
      "Debt/Equity": "0.42",
      "1y return": 6.1
    },
    spark: window.GFData.watchlist[1].spark
  }];
  const ROWS = ["Market cap", "P/E (TTM)", "Fwd P/E", "Div yield", "Net margin", "ROE", "Debt/Equity", "1y return"];
  // best value per row (lower better for P/E & Debt, higher better otherwise)
  const lowerBetter = {
    "P/E (TTM)": 1,
    "Fwd P/E": 1,
    "Debt/Equity": 1
  };
  window.CompareScreen = function CompareScreen({
    onOpen
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: "var(--text-3xl)",
        fontWeight: 800,
        letterSpacing: "-0.025em",
        color: "var(--text-strong)"
      }
    }, "Compare"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-muted)",
        marginTop: 4,
        fontSize: 14.5
      }
    }, "Three large-caps, side by side")), /*#__PURE__*/React.createElement(Card, {
      pad: "none",
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: {
        width: 168,
        background: "var(--surface-sunken)",
        borderBottom: "1px solid var(--border)"
      }
    }), COLS.map(c => /*#__PURE__*/React.createElement("th", {
      key: c.ticker,
      style: {
        padding: "20px 18px",
        borderBottom: "1px solid var(--border)",
        borderLeft: "1px solid var(--divider)",
        textAlign: "center",
        verticalAlign: "top"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(CompanyMark, {
      ticker: c.ticker,
      name: c.name,
      size: 44
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 15
      }
    }, c.ticker), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, c.name, " \xB7 ", c.region)), /*#__PURE__*/React.createElement("div", {
      className: "gf-mono",
      style: {
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: 18,
        color: "var(--text-strong)"
      }
    }, fmt(c.price)), /*#__PURE__*/React.createElement(ChangeValue, {
      value: c.day,
      size: "sm"
    }), /*#__PURE__*/React.createElement(Sparkline, {
      data: c.spark,
      width: 130,
      height: 32
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(VerdictPill, {
      verdict: c.verdict,
      size: "sm"
    }), /*#__PURE__*/React.createElement(HalalBadge, {
      status: c.halal,
      size: "sm",
      showLabel: false
    }))))))), /*#__PURE__*/React.createElement("tbody", null, ROWS.map((row, i) => {
      const vals = COLS.map(c => c.m[row]);
      const nums = vals.map(v => typeof v === "number" ? v : parseFloat(String(v).replace(/[^0-9.]/g, "")));
      const best = lowerBetter[row] ? Math.min(...nums) : Math.max(...nums);
      return /*#__PURE__*/React.createElement("tr", {
        key: row,
        style: {
          background: i % 2 ? "var(--gray-50)" : "transparent"
        }
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          padding: "13px 18px",
          fontSize: 12.5,
          fontWeight: 600,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          color: "var(--text-subtle)"
        }
      }, row), COLS.map((c, j) => {
        const v = c.m[row];
        const isBest = nums[j] === best;
        if (row === "1y return") return /*#__PURE__*/React.createElement("td", {
          key: c.ticker,
          style: {
            padding: "13px 18px",
            textAlign: "center",
            borderLeft: "1px solid var(--divider)"
          }
        }, /*#__PURE__*/React.createElement(ChangeValue, {
          value: v,
          size: "sm",
          showCaret: false
        }));
        return /*#__PURE__*/React.createElement("td", {
          key: c.ticker,
          style: {
            padding: "13px 18px",
            textAlign: "center",
            borderLeft: "1px solid var(--divider)",
            fontFamily: "var(--font-mono)",
            fontVariantNumeric: "tabular-nums",
            fontSize: 14,
            fontWeight: isBest ? 700 : 500,
            color: isBest ? "var(--brand-strong)" : "var(--text)"
          }
        }, v, isBest && /*#__PURE__*/React.createElement("span", {
          style: {
            marginLeft: 5,
            fontSize: 11
          }
        }, "\u2605"));
      }));
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      })
    }, "Add a company")));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-dashboard/CompareScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-dashboard/Icons.jsx
try { (() => {
/* Lucide-style 2px-stroke icon set (subset), as React components.
   Grad Fund uses Lucide (https://lucide.dev) — these inline glyphs match its
   stroke weight & terminals so the kit is self-contained. Swap for lucide-react in prod. */
(function () {
  const S = ({
    d,
    size = 20,
    fill,
    children,
    vb = "0 0 24 24",
    ...p
  }) => React.createElement("svg", {
    width: size,
    height: size,
    viewBox: vb,
    fill: fill || "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  }, children || React.createElement("path", {
    d
  }));
  const Icons = {
    home: p => S({
      ...p,
      children: [React.createElement("path", {
        key: 1,
        d: "M3 10.5 12 3l9 7.5"
      }), React.createElement("path", {
        key: 2,
        d: "M5 9.5V21h14V9.5"
      })]
    }),
    grid: p => S({
      ...p,
      children: [React.createElement("rect", {
        key: 1,
        x: 3,
        y: 3,
        width: 7,
        height: 7,
        rx: 1.5
      }), React.createElement("rect", {
        key: 2,
        x: 14,
        y: 3,
        width: 7,
        height: 7,
        rx: 1.5
      }), React.createElement("rect", {
        key: 3,
        x: 3,
        y: 14,
        width: 7,
        height: 7,
        rx: 1.5
      }), React.createElement("rect", {
        key: 4,
        x: 14,
        y: 14,
        width: 7,
        height: 7,
        rx: 1.5
      })]
    }),
    list: p => S({
      ...p,
      children: [React.createElement("path", {
        key: 1,
        d: "M8 6h13M8 12h13M8 18h13"
      }), React.createElement("path", {
        key: 2,
        d: "M3.5 6h.01M3.5 12h.01M3.5 18h.01"
      })]
    }),
    star: p => S({
      d: "M12 3.5l2.7 5.5 6 .9-4.35 4.2 1 6L12 17.3 6.65 20.1l1-6L3.3 9.9l6-.9z",
      ...p
    }),
    scale: p => S({
      ...p,
      children: [React.createElement("path", {
        key: 1,
        d: "M12 3v18M7 7l-4 7h8zM17 7l-4 7h8z"
      }), React.createElement("path", {
        key: 2,
        d: "M7 21h10M3 7h6m6 0h6"
      })]
    }),
    wallet: p => S({
      ...p,
      children: [React.createElement("rect", {
        key: 1,
        x: 3,
        y: 6,
        width: 18,
        height: 14,
        rx: 2.5
      }), React.createElement("path", {
        key: 2,
        d: "M3 9h13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3"
      }), React.createElement("circle", {
        key: 3,
        cx: 16.5,
        cy: 13,
        r: .9,
        fill: "currentColor",
        stroke: "none"
      })]
    }),
    search: p => S({
      ...p,
      children: [React.createElement("circle", {
        key: 1,
        cx: 11,
        cy: 11,
        r: 7
      }), React.createElement("path", {
        key: 2,
        d: "m21 21-4.3-4.3"
      })]
    }),
    plus: p => S({
      d: "M12 5v14M5 12h14",
      ...p
    }),
    bell: p => S({
      ...p,
      children: [React.createElement("path", {
        key: 1,
        d: "M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"
      }), React.createElement("path", {
        key: 2,
        d: "M10.5 20a2 2 0 0 0 3 0"
      })]
    }),
    settings: p => S({
      ...p,
      children: [React.createElement("circle", {
        key: 1,
        cx: 12,
        cy: 12,
        r: 3
      }), React.createElement("path", {
        key: 2,
        d: "M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
      })]
    }),
    chevronRight: p => S({
      d: "M9 6l6 6-6 6",
      ...p
    }),
    chevronDown: p => S({
      d: "M6 9l6 6 6-6",
      ...p
    }),
    arrowUpRight: p => S({
      d: "M7 17 17 7M8 7h9v9",
      ...p
    }),
    x: p => S({
      d: "M6 6l12 12M18 6 6 18",
      ...p
    }),
    filter: p => S({
      d: "M3 5h18l-7 8v6l-4 2v-8z",
      ...p
    }),
    sparkles: p => S({
      ...p,
      children: [React.createElement("path", {
        key: 1,
        d: "M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"
      }), React.createElement("path", {
        key: 2,
        d: "M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"
      })]
    }),
    info: p => S({
      ...p,
      children: [React.createElement("circle", {
        key: 1,
        cx: 12,
        cy: 12,
        r: 9
      }), React.createElement("path", {
        key: 2,
        d: "M12 11v5M12 8h.01"
      })]
    }),
    globe: p => S({
      ...p,
      children: [React.createElement("circle", {
        key: 1,
        cx: 12,
        cy: 12,
        r: 9
      }), React.createElement("path", {
        key: 2,
        d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
      })]
    }),
    send: p => S({
      d: "M22 2 11 13M22 2l-7 20-4-9-9-4z",
      ...p
    }),
    trendingUp: p => S({
      d: "M3 17l6-6 4 4 8-8M21 7h-5m5 0v5",
      ...p
    }),
    shield: p => S({
      d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
      ...p
    }),
    menu: p => S({
      d: "M3 6h18M3 12h18M3 18h18",
      ...p
    })
  };
  window.GFIcon = function GFIcon({
    name,
    size = 20,
    ...rest
  }) {
    const fn = Icons[name];
    return fn ? fn({
      size,
      ...rest
    }) : null;
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-dashboard/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-dashboard/OverviewScreen.jsx
try { (() => {
/* OverviewScreen — portfolio home. → window.OverviewScreen */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const {
    Card,
    CardHeader,
    Badge,
    ChangeValue,
    HalalBadge,
    VerdictPill,
    AssetTypeBadge,
    CompanyMark,
    MetricTile,
    AllocationBar,
    Sparkline,
    Tabs
  } = NS;
  const assetColor = window.GFAssetColor;
  const Icon = window.GFIcon;
  const D = window.GFData;
  const fmt = n => "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const fmtK = n => "$" + n.toLocaleString("en-US", {
    maximumFractionDigits: 0
  });
  const RANGES = [{
    id: "1d",
    label: "1D"
  }, {
    id: "1w",
    label: "1W"
  }, {
    id: "1m",
    label: "1M"
  }, {
    id: "1y",
    label: "1Y"
  }, {
    id: "all",
    label: "All"
  }];
  const series = (() => {
    const a = [100];
    for (let i = 1; i < 60; i++) a.push(a[i - 1] * (1 + (Math.sin(i * 0.35) + i / 120 + (Math.random() - 0.45)) * 0.018));
    return a;
  })();
  function HoldingRow({
    h,
    onOpen
  }) {
    return /*#__PURE__*/React.createElement("tr", {
      onClick: () => onOpen(h),
      style: {
        cursor: "pointer"
      },
      className: "gf-tr"
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 8px 12px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(CompanyMark, {
      ticker: h.ticker,
      name: h.name,
      size: 38
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: "var(--text-strong)",
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, h.ticker, /*#__PURE__*/React.createElement(AssetTypeBadge, {
      type: h.type,
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        marginTop: 1
      }
    }, h.name)))), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(HalalBadge, {
      status: h.halal,
      showLabel: false,
      size: "sm"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        width: 96
      }
    }, /*#__PURE__*/React.createElement(Sparkline, {
      data: h.spark,
      width: 84,
      height: 28
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontVariantNumeric: "tabular-nums",
        fontSize: 14,
        color: "var(--text-strong)",
        fontWeight: 500
      }
    }, fmt(h.price)), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        paddingLeft: 18
      }
    }, /*#__PURE__*/React.createElement(ChangeValue, {
      value: h.day,
      size: "sm"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        paddingLeft: 18,
        fontFamily: "var(--font-mono)",
        fontVariantNumeric: "tabular-nums",
        fontSize: 14,
        color: "var(--text-strong)",
        fontWeight: 600
      }
    }, fmtK(h.value)), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        paddingLeft: 18
      }
    }, /*#__PURE__*/React.createElement(ChangeValue, {
      value: h.totalRet,
      size: "sm",
      showCaret: false
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        paddingLeft: 12,
        width: 86
      }
    }, /*#__PURE__*/React.createElement(VerdictPill, {
      verdict: h.verdict,
      size: "sm"
    })));
  }
  window.OverviewScreen = function OverviewScreen({
    onOpen,
    holdings
  }) {
    const [range, setRange] = React.useState("1y");
    const S = D.summary;
    const list = holdings || D.holdings;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: "var(--text-3xl)",
        fontWeight: 800,
        letterSpacing: "-0.025em",
        color: "var(--text-strong)"
      }
    }, "Portfolio"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-muted)",
        marginTop: 4,
        fontSize: 14.5
      }
    }, S.positions, " positions \xB7 last synced 2 min ago")), /*#__PURE__*/React.createElement(Badge, {
      tone: "positive",
      dot: true
    }, "Markets open")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.7fr 1fr",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Card, {
      pad: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "var(--text-subtle)"
      }
    }, "Total value"), /*#__PURE__*/React.createElement("div", {
      className: "gf-mono",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 40,
        fontWeight: 600,
        color: "var(--text-strong)",
        letterSpacing: "-0.02em",
        marginTop: 6,
        fontVariantNumeric: "tabular-nums"
      }
    }, fmt(S.totalValue)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "var(--text-muted)"
      }
    }, "Today ", /*#__PURE__*/React.createElement(ChangeValue, {
      value: S.dayPct,
      size: "sm",
      style: {
        marginLeft: 4
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "var(--text-muted)"
      }
    }, "All time ", /*#__PURE__*/React.createElement(ChangeValue, {
      value: S.totalRet,
      size: "sm",
      showCaret: false,
      style: {
        marginLeft: 4
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 200
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: RANGES,
      value: range,
      onChange: setRange,
      size: "sm"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Sparkline, {
      data: series,
      width: 680,
      height: 120,
      color: "var(--evergreen-600)",
      strokeWidth: 2.2,
      style: {
        width: "100%"
      }
    }))), /*#__PURE__*/React.createElement(Card, {
      pad: "lg"
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Allocation",
      subtitle: "By asset class"
    }), /*#__PURE__*/React.createElement(AllocationBar, {
      height: 14,
      segments: D.allocation.byClass.map(s => ({
        label: s.label,
        value: s.value,
        color: assetColor(s.type)
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--divider)",
        margin: "16px 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "14px 18px"
      }
    }, /*#__PURE__*/React.createElement(MetricTile, {
      label: "Invested",
      value: fmtK(S.invested)
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Total gain",
      value: /*#__PURE__*/React.createElement(ChangeValue, {
        value: S.totalGain,
        format: "currency",
        size: "md",
        showCaret: false
      })
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Halal mix",
      value: "71%",
      sub: "of holdings compliant"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Cash",
      value: "$2,560"
    })))), /*#__PURE__*/React.createElement(Card, {
      pad: "lg"
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Holdings",
      subtitle: `${list.length} positions`
    }), /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        fontSize: 11,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "var(--text-subtle)",
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "left",
        paddingBottom: 8
      }
    }, "Holding"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "center",
        paddingBottom: 8
      }
    }, "Halal"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "left",
        paddingBottom: 8
      }
    }, "30d"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 8
      }
    }, "Price"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 8,
        paddingLeft: 18
      }
    }, "Today"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 8,
        paddingLeft: 18
      }
    }, "Value"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 8,
        paddingLeft: 18
      }
    }, "Total ret."), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 8
      }
    }, "Call"))), /*#__PURE__*/React.createElement("tbody", null, list.map(h => /*#__PURE__*/React.createElement(HoldingRow, {
      key: h.ticker,
      h: h,
      onOpen: onOpen
    }))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-dashboard/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-dashboard/StockDetailScreen.jsx
try { (() => {
/* StockDetailScreen — the full single-security view. → window.StockDetailScreen */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const {
    Card,
    CardHeader,
    Badge,
    ChangeValue,
    HalalBadge,
    VerdictPill,
    AssetTypeBadge,
    CompanyMark,
    MetricTile,
    Sparkline,
    Tabs,
    Button,
    IconButton,
    Input
  } = NS;
  const Icon = window.GFIcon;
  const fmt = n => "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  function HalalRow({
    r
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "11px 0",
        borderBottom: "1px solid var(--divider)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: "50%",
        flex: "none",
        marginTop: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
        background: r.pass ? "var(--halal-ok)" : "var(--halal-no)"
      }
    }, r.pass ? "✓" : "✕"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 14,
        color: "var(--text-strong)"
      }
    }, r.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        marginTop: 1
      }
    }, r.note)));
  }
  function PositionSizer({
    d
  }) {
    const [amount, setAmount] = React.useState(5000);
    const shares = amount / d.price;
    const port = 128450;
    const weight = amount / (port + amount) * 100;
    return /*#__PURE__*/React.createElement(Card, {
      pad: "lg"
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "How much should we put in?",
      subtitle: "Model a position before committing"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        alignItems: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      prefix: "$",
      mono: true,
      value: amount,
      onChange: e => setAmount(Math.max(0, +String(e.target.value).replace(/[^0-9.]/g, "") || 0))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, [1000, 5000, 10000].map(v => /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => setAmount(v),
      style: {
        padding: "8px 12px",
        border: "1px solid var(--border-strong)",
        background: amount === v ? "var(--brand-soft)" : "var(--surface)",
        color: amount === v ? "var(--brand-strong)" : "var(--text-muted)",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        font: "inherit",
        fontSize: 13,
        fontWeight: 600
      }
    }, "$", v / 1000, "k")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(MetricTile, {
      label: "Est. shares",
      value: shares.toFixed(2)
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "New weight",
      value: weight.toFixed(1) + "%",
      sub: "of portfolio"
    }), /*#__PURE__*/React.createElement(MetricTile, {
      label: "Proj. 1y",
      value: /*#__PURE__*/React.createElement(ChangeValue, {
        value: 11.4,
        format: "currency",
        showCaret: false,
        percent: null,
        currency: "$"
      }),
      sub: "at house est. +11.4%"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      block: true,
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      })
    }, "Add $", amount.toLocaleString(), " to portfolio"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "star",
        size: 16
      })
    }, "Watch")));
  }
  function AskBox({
    d
  }) {
    const suggestions = ["Is " + d.ticker + " halal?", "Compare to MSFT", "What are the risks?", "Why the Invest call?"];
    return /*#__PURE__*/React.createElement(Card, {
      pad: "lg",
      style: {
        background: "linear-gradient(180deg, var(--evergreen-50), var(--surface))"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--brand)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 15
      }
    }, "Ask Grad Fund")), /*#__PURE__*/React.createElement(Input, {
      placeholder: "Ask anything about " + d.name + "…",
      trailingIcon: /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--brand)"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "send",
        size: 16
      }))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 12
      }
    }, suggestions.map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        padding: "5px 11px",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-pill)",
        fontSize: 12.5,
        color: "var(--text-muted)",
        background: "var(--surface)",
        cursor: "pointer"
      }
    }, s))));
  }
  window.StockDetailScreen = function StockDetailScreen({
    security,
    onBack
  }) {
    const D = window.GFData;
    const base = D.detail;
    // merge: use full detail for AAPL, else synthesize from the row
    const d = security && security.ticker === base.ticker ? base : security ? {
      ...base,
      ...security,
      metrics: base.metrics,
      halalBreakdown: base.halalBreakdown,
      peers: base.peers,
      spark: security.spark || base.spark
    } : base;
    const [tab, setTab] = React.useState("overview");
    const halalPass = d.halalBreakdown.filter(r => r.pass).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "none",
        border: "none",
        color: "var(--text-muted)",
        cursor: "pointer",
        font: "inherit",
        fontSize: 13.5,
        padding: 0,
        alignSelf: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        transform: "rotate(180deg)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronRight",
      size: 16
    })), " Back to portfolio"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(CompanyMark, {
      ticker: d.ticker,
      name: d.name,
      size: 60,
      radius: "var(--radius-lg)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 220
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: "var(--text-2xl)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        color: "var(--text-strong)"
      }
    }, d.name), /*#__PURE__*/React.createElement(AssetTypeBadge, {
      type: d.type
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-muted)",
        marginTop: 3,
        fontSize: 14,
        fontFamily: "var(--font-mono)"
      }
    }, d.ticker, " \xB7 ", d.exchange || "NASDAQ", " \xB7 ", d.region, " \xB7 ", d.currency || "USD")), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "gf-mono",
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 30,
        fontWeight: 600,
        color: "var(--text-strong)",
        letterSpacing: "-0.02em"
      }
    }, fmt(d.price)), /*#__PURE__*/React.createElement(ChangeValue, {
      value: d.day,
      percent: null,
      size: "md",
      style: {
        marginTop: 2
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(VerdictPill, {
      verdict: d.verdict
    }), /*#__PURE__*/React.createElement(HalalBadge, {
      status: d.halal
    }))), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        id: "overview",
        label: "Overview"
      }, {
        id: "halal",
        label: "Halal screening",
        count: 1
      }, {
        id: "peers",
        label: "Comparables"
      }]
    }), tab === "overview" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr",
        gap: 22,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Card, {
      pad: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Price",
      subtitle: "Last 90 days",
      style: {
        marginBottom: 0
      }
    }), /*#__PURE__*/React.createElement(ChangeValue, {
      value: d.day,
      size: "sm"
    })), /*#__PURE__*/React.createElement(Sparkline, {
      data: d.spark,
      width: 680,
      height: 150,
      color: "var(--evergreen-600)",
      strokeWidth: 2.2,
      style: {
        width: "100%"
      }
    })), /*#__PURE__*/React.createElement(Card, {
      pad: "lg"
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Key metrics",
      subtitle: "Trailing twelve months"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "22px 18px"
      }
    }, d.metrics.map(m => /*#__PURE__*/React.createElement(MetricTile, {
      key: m.label,
      label: m.label,
      value: m.value,
      hint: m.hint
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(PositionSizer, {
      d: d
    }), /*#__PURE__*/React.createElement(AskBox, {
      d: d
    }))), tab === "halal" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 22,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      pad: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement(HalalBadge, {
      status: d.halal
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }, halalPass, "/", d.halalBreakdown.length, " screens passed")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, d.halalBreakdown.map(r => /*#__PURE__*/React.createElement(HalalRow, {
      key: r.label,
      r: r
    })))), /*#__PURE__*/React.createElement(Card, {
      pad: "lg",
      style: {
        background: "var(--evergreen-50)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--brand)",
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield",
      size: 20
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 15
      }
    }, "What we check"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13.5,
        color: "var(--text)",
        lineHeight: 1.55,
        marginTop: 6
      }
    }, "Grad Fund screens each security against AAOIFI-style rules: the core business must be permissible, and interest income, debt, and non-compliant revenue must each stay under their thresholds. We flag ", /*#__PURE__*/React.createElement("b", null, "Review"), " when a holding is borderline so you and Dad can decide together."))))), tab === "peers" && /*#__PURE__*/React.createElement(Card, {
      pad: "lg"
    }, /*#__PURE__*/React.createElement(CardHeader, {
      title: "Comparables",
      subtitle: `${d.sector} · same industry`
    }), /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        fontSize: 11,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "var(--text-subtle)",
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "left",
        paddingBottom: 10
      }
    }, "Company"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "center",
        paddingBottom: 10
      }
    }, "Halal"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 10
      }
    }, "P/E"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 10
      }
    }, "Mkt cap"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 10
      }
    }, "1y return"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", {
      className: "gf-tr"
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(CompanyMark, {
      ticker: d.ticker,
      size: 32
    }), /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--text-strong)"
      }
    }, d.ticker), " ", /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      size: "sm"
    }, "This"))), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(HalalBadge, {
      status: d.halal,
      showLabel: false,
      size: "sm"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, "31.2"), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, "$2.94T"), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(ChangeValue, {
      value: 22.6,
      size: "sm",
      showCaret: false
    }))), d.peers.map(p => /*#__PURE__*/React.createElement("tr", {
      key: p.ticker,
      className: "gf-tr"
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(CompanyMark, {
      ticker: p.ticker,
      size: 32
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--text-strong)"
      }
    }, p.ticker), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        fontSize: 13
      }
    }, p.name)))), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(HalalBadge, {
      status: p.halal,
      showLabel: false,
      size: "sm"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, p.pe), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)"
      }
    }, p.mcap), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(ChangeValue, {
      value: p.ret,
      size: "sm",
      showCaret: false
    }))))))));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-dashboard/StockDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-dashboard/WatchlistScreen.jsx
try { (() => {
/* WatchlistScreen — watchlist + screener table with filters. → window.WatchlistScreen */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const {
    Card,
    Badge,
    ChangeValue,
    HalalBadge,
    VerdictPill,
    AssetTypeBadge,
    CompanyMark,
    Sparkline,
    IconButton,
    Button,
    Input
  } = NS;
  const Icon = window.GFIcon;
  const D = window.GFData;
  const fmt = n => "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  const TYPES = ["all", "stock", "etf", "bond", "crypto"];
  const REGIONS = ["All", "US", "Global", "KSA", "UK", "FR"];
  function Chip({
    active,
    children,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        padding: "6px 13px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        border: `1px solid ${active ? "var(--brand)" : "var(--border-strong)"}`,
        background: active ? "var(--brand-soft)" : "var(--surface)",
        color: active ? "var(--brand-strong)" : "var(--text-muted)",
        font: "inherit",
        fontSize: 13,
        fontWeight: active ? 600 : 500,
        textTransform: "capitalize",
        transition: "var(--transition-base)"
      }
    }, children);
  }
  window.WatchlistScreen = function WatchlistScreen({
    onOpen,
    mode = "watchlist",
    halalOnly
  }) {
    const [type, setType] = React.useState("all");
    const [region, setRegion] = React.useState("All");
    let rows = D.watchlist;
    if (type !== "all") rows = rows.filter(r => r.type === type);
    if (region !== "All") rows = rows.filter(r => r.region === region);
    if (halalOnly) rows = rows.filter(r => r.halal !== "non-compliant");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1180,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: "var(--text-3xl)",
        fontWeight: 800,
        letterSpacing: "-0.025em",
        color: "var(--text-strong)"
      }
    }, mode === "screener" ? "Screener" : "Watchlist"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "var(--text-muted)",
        marginTop: 4,
        fontSize: 14.5
      }
    }, mode === "screener" ? "Filter the market by class, region and compliance" : "Companies you and Dad are tracking")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      })
    }, "New list")), /*#__PURE__*/React.createElement(Card, {
      pad: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        flexWrap: "wrap",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, TYPES.map(t => /*#__PURE__*/React.createElement(Chip, {
      key: t,
      active: type === t,
      onClick: () => setType(t)
    }, t === "all" ? "All types" : t))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        height: 22,
        background: "var(--border)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, REGIONS.map(r => /*#__PURE__*/React.createElement(Chip, {
      key: r,
      active: region === r,
      onClick: () => setRegion(r)
    }, r)))), /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        fontSize: 11,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "var(--text-subtle)",
        fontWeight: 700
      }
    }, /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "left",
        paddingBottom: 10
      }
    }, "Company"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "center",
        paddingBottom: 10
      }
    }, "Halal"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "left",
        paddingBottom: 10
      }
    }, "Trend"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 10
      }
    }, "Price"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 10,
        paddingLeft: 16
      }
    }, "Today"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 10,
        paddingLeft: 16
      }
    }, "P/E"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 10,
        paddingLeft: 16
      }
    }, "Mkt cap"), /*#__PURE__*/React.createElement("th", {
      style: {
        textAlign: "right",
        paddingBottom: 10
      }
    }, "Call"), /*#__PURE__*/React.createElement("th", {
      style: {
        paddingBottom: 10
      }
    }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
      key: r.ticker,
      className: "gf-tr",
      onClick: () => onOpen(r),
      style: {
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px 8px 12px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(CompanyMark, {
      ticker: r.ticker,
      name: r.name,
      size: 36
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: "var(--text-strong)",
        fontSize: 14,
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, r.ticker, /*#__PURE__*/React.createElement(AssetTypeBadge, {
      type: r.type,
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        marginTop: 1
      }
    }, r.name, " \xB7 ", r.region)))), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(HalalBadge, {
      status: r.halal,
      showLabel: false,
      size: "sm"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        width: 90
      }
    }, /*#__PURE__*/React.createElement(Sparkline, {
      data: r.spark,
      width: 78,
      height: 26
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        fontFamily: "var(--font-mono)",
        fontVariantNumeric: "tabular-nums",
        fontSize: 14,
        color: "var(--text-strong)",
        fontWeight: 500
      }
    }, fmt(r.price)), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        paddingLeft: 16
      }
    }, /*#__PURE__*/React.createElement(ChangeValue, {
      value: r.day,
      size: "sm"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        paddingLeft: 16,
        fontFamily: "var(--font-mono)",
        fontVariantNumeric: "tabular-nums",
        fontSize: 13.5,
        color: "var(--text-muted)"
      }
    }, r.pe ?? "—"), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        paddingLeft: 16,
        fontFamily: "var(--font-mono)",
        fontVariantNumeric: "tabular-nums",
        fontSize: 13.5,
        color: "var(--text-muted)"
      }
    }, r.mcap), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(VerdictPill, {
      verdict: r.verdict,
      size: "sm"
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: "right",
        width: 44
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Add to portfolio",
      variant: "ghost"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 17
    }))))))), rows.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "32px 0",
        color: "var(--text-subtle)",
        fontSize: 14
      }
    }, "No companies match these filters.")));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-dashboard/WatchlistScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-dashboard/data.js
try { (() => {
/* Mock data for the Grad Fund dashboard kit. Plain JS → window.GFData. */
(function () {
  const spark = (base, n, vol) => {
    const out = [base];
    for (let i = 1; i < n; i++) out.push(Math.max(1, out[i - 1] * (1 + (Math.sin(i * vol) + (Math.random() - 0.5)) * 0.02)));
    return out.map(x => +x.toFixed(2));
  };
  const holdings = [{
    ticker: "AAPL",
    name: "Apple Inc.",
    type: "stock",
    sector: "Technology",
    region: "US",
    halal: "compliant",
    verdict: "buy",
    price: 201.34,
    day: 1.62,
    shares: 38,
    cost: 142.1,
    weight: 14.8,
    spark: spark(180, 30, 0.6)
  }, {
    ticker: "VWRA",
    name: "Vanguard FTSE All-World",
    type: "etf",
    sector: "Diversified",
    region: "Global",
    halal: "review",
    verdict: "buy",
    price: 128.45,
    day: 0.41,
    shares: 210,
    cost: 96.2,
    weight: 27.6,
    spark: spark(110, 30, 0.3)
  }, {
    ticker: "MSFT",
    name: "Microsoft Corp.",
    type: "stock",
    sector: "Technology",
    region: "US",
    halal: "compliant",
    verdict: "buy",
    price: 432.18,
    day: -0.84,
    shares: 22,
    cost: 305.0,
    weight: 16.2,
    spark: spark(400, 30, 0.5)
  }, {
    ticker: "ARMM",
    name: "Arm Holdings",
    type: "stock",
    sector: "Semiconductors",
    region: "UK",
    halal: "compliant",
    verdict: "watch",
    price: 158.7,
    day: 3.21,
    shares: 30,
    cost: 120.0,
    weight: 8.1,
    spark: spark(120, 30, 0.9)
  }, {
    ticker: "SUKK",
    name: "iShares Sukuk Bond",
    type: "bond",
    sector: "Fixed income",
    region: "Global",
    halal: "compliant",
    verdict: "buy",
    price: 102.3,
    day: 0.08,
    shares: 180,
    cost: 100.5,
    weight: 9.4,
    spark: spark(99, 30, 0.15)
  }, {
    ticker: "TSLA",
    name: "Tesla Inc.",
    type: "stock",
    sector: "Automotive",
    region: "US",
    halal: "review",
    verdict: "watch",
    price: 245.6,
    day: -2.18,
    shares: 14,
    cost: 210.0,
    weight: 5.6,
    spark: spark(260, 30, 1.1)
  }, {
    ticker: "ES=F",
    name: "S&P 500 E-mini Future",
    type: "future",
    sector: "Index",
    region: "US",
    halal: "non-compliant",
    verdict: "avoid",
    price: 5482.0,
    day: 0.36,
    shares: 1,
    cost: 5300.0,
    weight: 7.2,
    spark: spark(5300, 30, 0.4)
  }, {
    ticker: "BTC",
    name: "Bitcoin",
    type: "crypto",
    sector: "Digital asset",
    region: "Global",
    halal: "review",
    verdict: "watch",
    price: 64210.0,
    day: -1.12,
    shares: 0.12,
    cost: 48000.0,
    weight: 3.5,
    spark: spark(60000, 30, 1.4)
  }];
  holdings.forEach(h => {
    h.value = +(h.price * h.shares).toFixed(2);
    h.costValue = +(h.cost * h.shares).toFixed(2);
    h.totalRet = +((h.price - h.cost) / h.cost * 100).toFixed(2);
    h.totalGain = +((h.price - h.cost) * h.shares).toFixed(2);
  });
  const totalValue = +holdings.reduce((s, h) => s + h.value, 0).toFixed(2);
  const totalCost = +holdings.reduce((s, h) => s + h.costValue, 0).toFixed(2);
  const totalGain = +(totalValue - totalCost).toFixed(2);
  const totalRet = +(totalGain / totalCost * 100).toFixed(2);
  const dayChange = +holdings.reduce((s, h) => s + h.value * (h.day / 100), 0).toFixed(2);
  const dayPct = +(dayChange / (totalValue - dayChange) * 100).toFixed(2);
  const watchlist = [{
    ticker: "NVDA",
    name: "NVIDIA Corp.",
    type: "stock",
    sector: "Semiconductors",
    region: "US",
    halal: "compliant",
    verdict: "watch",
    price: 1204.7,
    day: 2.84,
    pe: 64.2,
    mcap: "2.96T",
    spark: spark(1000, 24, 0.8)
  }, {
    ticker: "ARAMCO",
    name: "Saudi Aramco",
    type: "stock",
    sector: "Energy",
    region: "KSA",
    halal: "compliant",
    verdict: "buy",
    price: 7.84,
    day: 0.26,
    pe: 16.1,
    mcap: "1.89T",
    spark: spark(7.2, 24, 0.3)
  }, {
    ticker: "ADBE",
    name: "Adobe Inc.",
    type: "stock",
    sector: "Technology",
    region: "US",
    halal: "compliant",
    verdict: "watch",
    price: 512.3,
    day: -1.4,
    pe: 44.0,
    mcap: "228B",
    spark: spark(540, 24, 0.6)
  }, {
    ticker: "MC.PA",
    name: "LVMH",
    type: "stock",
    sector: "Consumer",
    region: "FR",
    halal: "review",
    verdict: "watch",
    price: 712.0,
    day: 0.9,
    pe: 22.8,
    mcap: "356B",
    spark: spark(700, 24, 0.4)
  }, {
    ticker: "JPM",
    name: "JPMorgan Chase",
    type: "stock",
    sector: "Financials",
    region: "US",
    halal: "non-compliant",
    verdict: "avoid",
    price: 198.4,
    day: 0.52,
    pe: 11.9,
    mcap: "571B",
    spark: spark(180, 24, 0.5)
  }, {
    ticker: "QQQM",
    name: "Invesco Nasdaq 100",
    type: "etf",
    sector: "Diversified",
    region: "US",
    halal: "review",
    verdict: "watch",
    price: 198.2,
    day: 1.1,
    pe: null,
    mcap: "28B",
    spark: spark(170, 24, 0.4)
  }];
  const allocation = {
    byClass: [{
      label: "Stocks",
      value: 50.3,
      type: "stock"
    }, {
      label: "ETFs",
      value: 27.6,
      type: "etf"
    }, {
      label: "Bonds",
      value: 9.4,
      type: "bond"
    }, {
      label: "Futures",
      value: 7.2,
      type: "future"
    }, {
      label: "Crypto",
      value: 3.5,
      type: "crypto"
    }, {
      label: "Cash",
      value: 2.0,
      type: "cash"
    }]
  };

  // Detail for one security (AAPL)
  const detail = {
    ticker: "AAPL",
    name: "Apple Inc.",
    type: "stock",
    sector: "Technology",
    region: "US",
    exchange: "NASDAQ",
    currency: "USD",
    halal: "compliant",
    verdict: "buy",
    price: 201.34,
    day: 1.62,
    dayAbs: 3.21,
    spark: spark(150, 90, 0.5),
    metrics: [{
      label: "Market cap",
      value: "$2.94T"
    }, {
      label: "P/E (TTM)",
      value: "31.2",
      hint: "Price ÷ trailing 12-mo earnings"
    }, {
      label: "Fwd P/E",
      value: "27.8"
    }, {
      label: "Div yield",
      value: "0.51%"
    }, {
      label: "EPS (TTM)",
      value: "$6.43"
    }, {
      label: "Revenue",
      value: "$385.7B"
    }, {
      label: "Net margin",
      value: "25.3%"
    }, {
      label: "ROE",
      value: "147%"
    }, {
      label: "Debt / Equity",
      value: "1.87"
    }, {
      label: "Beta",
      value: "1.24"
    }, {
      label: "52-wk range",
      value: "$164–$237"
    }, {
      label: "Avg volume",
      value: "54.2M"
    }],
    halalBreakdown: [{
      label: "Core business",
      pass: true,
      note: "Consumer technology — permissible"
    }, {
      label: "Interest income",
      pass: true,
      note: "1.2% of revenue — under 5% threshold"
    }, {
      label: "Debt ratio",
      pass: true,
      note: "28% of market cap — under 33% threshold"
    }, {
      label: "Non-compliant revenue",
      pass: true,
      note: "0.4% — within tolerance"
    }],
    peers: [{
      ticker: "MSFT",
      name: "Microsoft",
      pe: 36.0,
      mcap: "3.21T",
      ret: 28.4,
      halal: "compliant"
    }, {
      ticker: "GOOGL",
      name: "Alphabet",
      pe: 26.1,
      mcap: "2.18T",
      ret: 19.2,
      halal: "compliant"
    }, {
      ticker: "SSNLF",
      name: "Samsung",
      pe: 14.8,
      mcap: "367B",
      ret: 6.1,
      halal: "review"
    }]
  };

  // Asset-class accent colors (mirrors --asset-* tokens). The bundle's lowercase
  // `assetColor` export isn't on the public namespace, so the kit uses this.
  window.GFAssetColor = t => ({
    stock: "#2563B0",
    etf: "#0F7257",
    fund: "#0F7257",
    bond: "#6B5BD0",
    future: "#C6841C",
    option: "#B0457E",
    crypto: "#C97A12",
    cash: "#7E8887"
  })[t] || "#7E8887";
  window.GFData = {
    holdings,
    watchlist,
    allocation,
    detail,
    summary: {
      totalValue,
      totalCost,
      totalGain,
      totalRet,
      dayChange,
      dayPct,
      invested: totalCost,
      positions: holdings.length
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-dashboard/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.AllocationBar = __ds_scope.AllocationBar;

__ds_ns.AssetTypeBadge = __ds_scope.AssetTypeBadge;

__ds_ns.ChangeValue = __ds_scope.ChangeValue;

__ds_ns.CompanyMark = __ds_scope.CompanyMark;

__ds_ns.HalalBadge = __ds_scope.HalalBadge;

__ds_ns.MetricTile = __ds_scope.MetricTile;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.VerdictPill = __ds_scope.VerdictPill;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
