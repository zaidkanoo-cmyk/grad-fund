/* Lucide-style 2px-stroke icon set (subset), as React components.
   Grad Fund uses Lucide (https://lucide.dev) — these inline glyphs match its
   stroke weight & terminals so the kit is self-contained. Swap for lucide-react in prod. */
(function () {
  const S = ({ d, size = 20, fill, children, vb = "0 0 24 24", ...p }) =>
    React.createElement("svg", {
      width: size, height: size, viewBox: vb, fill: fill || "none",
      stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round", ...p,
    }, children || React.createElement("path", { d }));

  const Icons = {
    home: (p) => S({ ...p, children: [React.createElement("path",{key:1,d:"M3 10.5 12 3l9 7.5"}),React.createElement("path",{key:2,d:"M5 9.5V21h14V9.5"})] }),
    grid: (p) => S({ ...p, children: [React.createElement("rect",{key:1,x:3,y:3,width:7,height:7,rx:1.5}),React.createElement("rect",{key:2,x:14,y:3,width:7,height:7,rx:1.5}),React.createElement("rect",{key:3,x:3,y:14,width:7,height:7,rx:1.5}),React.createElement("rect",{key:4,x:14,y:14,width:7,height:7,rx:1.5})] }),
    list: (p) => S({ ...p, children: [React.createElement("path",{key:1,d:"M8 6h13M8 12h13M8 18h13"}),React.createElement("path",{key:2,d:"M3.5 6h.01M3.5 12h.01M3.5 18h.01"})] }),
    star: (p) => S({ d: "M12 3.5l2.7 5.5 6 .9-4.35 4.2 1 6L12 17.3 6.65 20.1l1-6L3.3 9.9l6-.9z", ...p }),
    scale: (p) => S({ ...p, children: [React.createElement("path",{key:1,d:"M12 3v18M7 7l-4 7h8zM17 7l-4 7h8z"}),React.createElement("path",{key:2,d:"M7 21h10M3 7h6m6 0h6"})] }),
    wallet: (p) => S({ ...p, children: [React.createElement("rect",{key:1,x:3,y:6,width:18,height:14,rx:2.5}),React.createElement("path",{key:2,d:"M3 9h13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3"}),React.createElement("circle",{key:3,cx:16.5,cy:13,r:.9,fill:"currentColor",stroke:"none"})] }),
    search: (p) => S({ ...p, children: [React.createElement("circle",{key:1,cx:11,cy:11,r:7}),React.createElement("path",{key:2,d:"m21 21-4.3-4.3"})] }),
    plus: (p) => S({ d: "M12 5v14M5 12h14", ...p }),
    bell: (p) => S({ ...p, children: [React.createElement("path",{key:1,d:"M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"}),React.createElement("path",{key:2,d:"M10.5 20a2 2 0 0 0 3 0"})] }),
    settings: (p) => S({ ...p, children: [React.createElement("circle",{key:1,cx:12,cy:12,r:3}),React.createElement("path",{key:2,d:"M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"})] }),
    chevronRight: (p) => S({ d: "M9 6l6 6-6 6", ...p }),
    chevronDown: (p) => S({ d: "M6 9l6 6 6-6", ...p }),
    arrowUpRight: (p) => S({ d: "M7 17 17 7M8 7h9v9", ...p }),
    x: (p) => S({ d: "M6 6l12 12M18 6 6 18", ...p }),
    filter: (p) => S({ d: "M3 5h18l-7 8v6l-4 2v-8z", ...p }),
    sparkles: (p) => S({ ...p, children: [React.createElement("path",{key:1,d:"M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"}),React.createElement("path",{key:2,d:"M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"})] }),
    info: (p) => S({ ...p, children: [React.createElement("circle",{key:1,cx:12,cy:12,r:9}),React.createElement("path",{key:2,d:"M12 11v5M12 8h.01"})] }),
    globe: (p) => S({ ...p, children: [React.createElement("circle",{key:1,cx:12,cy:12,r:9}),React.createElement("path",{key:2,d:"M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"})] }),
    send: (p) => S({ d: "M22 2 11 13M22 2l-7 20-4-9-9-4z", ...p }),
    trendingUp: (p) => S({ d: "M3 17l6-6 4 4 8-8M21 7h-5m5 0v5", ...p }),
    shield: (p) => S({ d: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z", ...p }),
    menu: (p) => S({ d: "M3 6h18M3 12h18M3 18h18", ...p }),
  };
  window.GFIcon = function GFIcon({ name, size = 20, ...rest }) {
    const fn = Icons[name];
    return fn ? fn({ size, ...rest }) : null;
  };
})();
