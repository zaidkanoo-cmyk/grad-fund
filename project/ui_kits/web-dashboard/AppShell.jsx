/* AppShell — sidebar + topbar chrome for the Grad Fund dashboard. → window.AppShell */
(function () {
  const NS = window.GradFundDesignSystem_42702f;
  const { IconButton, Button, Input, Switch, Badge } = NS;
  const Icon = window.GFIcon;

  const NAV = [
    { id: "overview", label: "Portfolio", icon: "home" },
    { id: "watchlist", label: "Watchlist", icon: "star" },
    { id: "compare", label: "Compare", icon: "scale" },
    { id: "screener", label: "Screener", icon: "list" },
  ];

  function NavItem({ item, active, onClick }) {
    return React.createElement("button", {
      onClick,
      style: {
        display: "flex", alignItems: "center", gap: 11, width: "100%",
        padding: "9px 12px", borderRadius: "var(--radius-md)", border: "none",
        background: active ? "var(--brand-soft)" : "transparent",
        color: active ? "var(--brand-strong)" : "var(--text-muted)",
        font: "inherit", fontSize: "var(--text-base)", fontWeight: active ? 600 : 500,
        cursor: "pointer", textAlign: "left", transition: "var(--transition-base)",
      },
    },
      React.createElement(Icon, { name: item.icon, size: 19 }),
      item.label
    );
  }

  window.AppShell = function AppShell({ active, onNav, halalOnly, setHalalOnly, onAdd, children, onSearch }) {
    return React.createElement("div", { style: { display: "flex", height: "100vh", background: "var(--bg-app)", overflow: "hidden", fontFamily: "var(--font-sans)" } },
      // Sidebar
      React.createElement("aside", { style: { width: 232, flex: "none", background: "var(--surface)", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", padding: "20px 16px" } },
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "0 6px 22px" } },
          React.createElement("img", { src: "../../assets/gradfund-mark.svg", height: 30, alt: "" }),
          React.createElement("span", { style: { fontWeight: 800, fontSize: 18, letterSpacing: "-0.02em", color: "var(--text-strong)" } }, "Grad Fund")
        ),
        React.createElement("nav", { style: { display: "flex", flexDirection: "column", gap: 3 } },
          NAV.map((it) => React.createElement(NavItem, { key: it.id, item: it, active: active === it.id, onClick: () => onNav(it.id) }))
        ),
        React.createElement("div", { style: { marginTop: "auto", padding: 12, borderRadius: "var(--radius-md)", background: "var(--surface-sunken)", display: "flex", alignItems: "center", gap: 10 } },
          React.createElement("span", { style: { width: 32, height: 32, borderRadius: "50%", background: "var(--evergreen-600)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 } }, "Y"),
          React.createElement("div", { style: { lineHeight: 1.25 } },
            React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: "var(--text-strong)" } }, "You & Dad"),
            React.createElement("div", { style: { fontSize: 11, color: "var(--text-subtle)" } }, "Joint account")
          )
        )
      ),
      // Main column
      React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", minWidth: 0 } },
        React.createElement("header", { style: { height: 64, flex: "none", background: "var(--surface)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 16, padding: "0 24px" } },
          React.createElement("div", { style: { width: 340, maxWidth: "40%" } },
            React.createElement(Input, { leadingIcon: React.createElement(Icon, { name: "search", size: 16 }), placeholder: "Search a company, ticker or fund…", onFocus: onSearch })
          ),
          React.createElement("div", { style: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 } },
            React.createElement(Switch, { checked: halalOnly, onChange: setHalalOnly, label: "Halal-only", size: "sm" }),
            React.createElement(IconButton, { label: "Alerts", variant: "ghost" }, React.createElement(Icon, { name: "bell", size: 19 })),
            React.createElement(Button, { variant: "primary", leadingIcon: React.createElement(Icon, { name: "plus", size: 16 }), onClick: onAdd }, "Add position")
          )
        ),
        React.createElement("main", { style: { flex: 1, overflow: "auto", padding: "28px 32px" } }, children)
      )
    );
  };
})();
