import React from "react";

export function Sparkline({
  data = [], width = 96, height = 28, color = null,
  fill = true, strokeWidth = 1.75, style = {},
}) {
  const pts = data.length ? data : [1, 1];
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const span = max - min || 1;
  const dx = pts.length > 1 ? width / (pts.length - 1) : width;
  const pad = strokeWidth + 1;
  const y = (v) => pad + (1 - (v - min) / span) * (height - pad * 2);
  const coords = pts.map((v, i) => [i * dx, y(v)]);
  const line = coords.map(([x, yy], i) => `${i ? "L" : "M"}${x.toFixed(1)},${yy.toFixed(1)}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;

  const up = pts[pts.length - 1] >= pts[0];
  const stroke = color || (up ? "var(--gain)" : "var(--loss)");
  const gid = "sg" + Math.random().toString(36).slice(2, 8);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}
      style={{ display: "block", overflow: "visible", ...style }} preserveAspectRatio="none">
      {fill && (
        <>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.18" />
              <stop offset="100%" stopColor={stroke} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#${gid})`} stroke="none" />
        </>
      )}
      <path d={line} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}
