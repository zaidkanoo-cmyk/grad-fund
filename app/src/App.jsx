import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { AppShell } from "./screens/AppShell.jsx";
import { OverviewScreen } from "./screens/OverviewScreen.jsx";
import { WatchlistScreen } from "./screens/WatchlistScreen.jsx";
import { StockDetailScreen } from "./screens/StockDetailScreen.jsx";
import { CompareScreen } from "./screens/CompareScreen.jsx";
import { AddPositionDrawer } from "./screens/AddPositionDrawer.jsx";
import { TradeDrawer } from "./screens/TradeDrawer.jsx";
import { OrdersScreen } from "./screens/OrdersScreen.jsx";
import { MobilePortfolio } from "./mobile/MobilePortfolio.jsx";
import { MobileDetail } from "./mobile/MobileDetail.jsx";
import { mockData } from "./services/mockData.js";
import { fetchPortfolio } from "./services/financeApi.js";

function Dashboard() {
  const [nav, setNav]             = useState("overview");
  const [detail, setDetail]       = useState(null);
  const [halalOnly, setHalalOnly] = useState(false);
  const [addDrawer, setAddDrawer] = useState(false);
  const [tradeDrawer, setTradeDrawer] = useState(false);
  const [tradePreselect, setTradePreselect] = useState(null);
  const [data, setData]           = useState(mockData);
  const [ibkrConnected, setIbkrConnected] = useState(false);

  useEffect(() => {
    fetchPortfolio().then(d => {
      setData(d);
      setIbkrConnected(!!d.ibkrConnected);
    }).catch(() => {});
  }, []);

  // Refresh portfolio after a trade is placed
  function handleTradeDone() {
    fetchPortfolio().then(d => { setData(d); setIbkrConnected(!!d.ibkrConnected); }).catch(() => {});
  }

  const openDetail = (sec) => setDetail(sec);
  const back = () => setDetail(null);
  const go = (id) => { setDetail(null); setNav(id); };

  const openTrade = (sec = null) => { setTradePreselect(sec); setTradeDrawer(true); };

  const filteredData = halalOnly
    ? { ...data, holdings: data.holdings.filter(h => h.halal !== "non-compliant") }
    : data;

  let body;
  if (detail) {
    body = (
      <StockDetailScreen
        security={detail}
        onBack={back}
        baseDetail={data.detail || mockData.detail}
        onTrade={(sec) => openTrade(sec)}
      />
    );
  } else if (nav === "overview") {
    body = <OverviewScreen onOpen={openDetail} data={filteredData} onTrade={openTrade} />;
  } else if (nav === "watchlist") {
    body = <WatchlistScreen onOpen={openDetail} mode="watchlist" halalOnly={halalOnly} data={data} />;
  } else if (nav === "screener") {
    body = <WatchlistScreen onOpen={openDetail} mode="screener" halalOnly={halalOnly} data={data} />;
  } else if (nav === "compare") {
    body = <CompareScreen onOpen={openDetail} />;
  } else if (nav === "orders") {
    body = <OrdersScreen onTrade={() => openTrade()} />;
  }

  return (
    <>
      <AppShell
        active={nav}
        onNav={go}
        halalOnly={halalOnly}
        setHalalOnly={setHalalOnly}
        onAdd={() => setAddDrawer(true)}
        onTrade={() => openTrade()}
        onSearch={() => {}}
        ibkrConnected={ibkrConnected}
      >
        {body}
      </AppShell>
      <AddPositionDrawer open={addDrawer} onClose={() => setAddDrawer(false)} data={data} />
      <TradeDrawer
        open={tradeDrawer}
        onClose={() => { setTradeDrawer(false); handleTradeDone(); }}
        data={data}
        preselect={tradePreselect}
      />
    </>
  );
}

function StatusBar() {
  return (
    <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 26px", fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 700, color: "var(--text-strong)" }}>
      <span>9:41</span>
      <span style={{ display: "flex", gap: 6, fontSize: 13 }}>5G ▪ 100%</span>
    </div>
  );
}

function Phone({ label, children }) {
  return (
    <div style={{ width: 410 }}>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--text-muted)", marginBottom: 14, textAlign: "center" }}>{label}</div>
      <div style={{ width: 410, height: 868, background: "#0c1110", borderRadius: 52, padding: 12, boxShadow: "var(--shadow-xl)" }}>
        <div style={{ width: "100%", height: "100%", background: "var(--bg-app)", borderRadius: 41, overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: 11, left: "50%", transform: "translateX(-50%)", width: 120, height: 30, background: "#0c1110", borderRadius: "0 0 18px 18px", zIndex: 5 }} />
          <StatusBar />
          <div style={{ height: "calc(100% - 44px)" }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function MobilePage() {
  const [sec, setSec] = useState(null);
  const data = mockData;
  return (
    <div style={{ minHeight: "100vh", background: "var(--gray-100)", display: "flex", gap: 48, alignItems: "flex-start", justifyContent: "center", padding: 48, flexWrap: "wrap" }}>
      <Phone label="Portfolio — tap a holding">
        {sec
          ? <MobileDetail security={sec} onBack={() => setSec(null)} baseDetail={data.detail} />
          : <MobilePortfolio onOpen={setSec} data={data} />
        }
      </Phone>
      <Phone label="Security detail">
        <MobileDetail security={data.detail} onBack={() => {}} baseDetail={data.detail} />
      </Phone>
    </div>
  );
}

function NavBar() {
  const loc = useLocation();
  const linkStyle = (path) => ({
    padding: "8px 18px", borderRadius: "var(--radius-md)", textDecoration: "none",
    fontWeight: 600, fontSize: 14,
    background: loc.pathname === path ? "var(--brand-soft)" : "transparent",
    color: loc.pathname === path ? "var(--brand-strong)" : "var(--text-muted)",
  });
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, height: 48, background: "var(--surface)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 4, padding: "0 16px", zIndex: 100 }}>
      <img src="/gradfund-mark.svg" height={24} alt="" style={{ marginRight: 8 }} />
      <Link to="/" style={linkStyle("/")}>Desktop</Link>
      <Link to="/mobile" style={linkStyle("/mobile")}>Mobile</Link>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mobile" element={
          <>
            <NavBar />
            <div style={{ paddingTop: 48 }}><MobilePage /></div>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}
