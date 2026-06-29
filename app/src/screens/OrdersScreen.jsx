import React, { useState, useEffect } from "react";
import { Card, CardHeader } from "../components/core/Card.jsx";
import { Badge } from "../components/core/Badge.jsx";
import { Button } from "../components/core/Button.jsx";
import { CompanyMark } from "../components/finance/CompanyMark.jsx";
import { GFIcon } from "../components/finance/Icons.jsx";
import { getOrders, cancelOrder } from "../services/ibkrApi.js";

const STATUS_TONE = {
  Filled:         "positive",
  Submitted:      "brand",
  PreSubmitted:   "brand",
  Cancelled:      "neutral",
  Inactive:       "neutral",
  Unknown:        "neutral",
};

function StatusBadge({ status }) {
  return <Badge tone={STATUS_TONE[status] || "neutral"} dot>{status || "Unknown"}</Badge>;
}

function OrderRow({ order, onCancel }) {
  const isBuy  = order.side?.toUpperCase() === "BUY";
  const canCancel = ["Submitted", "PreSubmitted"].includes(order.status);
  const [cancelling, setCancelling] = useState(false);

  async function handleCancel() {
    setCancelling(true);
    try {
      await onCancel(order.orderId);
    } finally {
      setCancelling(false);
    }
  }

  return (
    <tr className="gf-tr">
      <td style={{ padding: "12px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <CompanyMark ticker={order.ticker || order.symbol || "?"} size={34} />
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-strong)" }}>{order.ticker || order.symbol}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{order.description1 || order.description || "—"}</div>
          </div>
        </div>
      </td>
      <td style={{ textAlign: "center" }}>
        <span style={{ fontWeight: 700, fontSize: 13, color: isBuy ? "var(--positive-600)" : "var(--negative-500)" }}>
          {order.side?.toUpperCase()}
        </span>
      </td>
      <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-strong)" }}>
        {order.totalSize || order.quantity || "—"}
      </td>
      <td style={{ textAlign: "center" }}>
        <span style={{ fontSize: 12.5, color: "var(--text-muted)", background: "var(--surface-sunken)", borderRadius: "var(--radius-sm)", padding: "3px 8px" }}>
          {order.orderType || "MKT"}
        </span>
      </td>
      <td style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>
        {order.price ? "$" + parseFloat(order.price).toFixed(2) : "Market"}
      </td>
      <td style={{ textAlign: "center" }}><StatusBadge status={order.status} /></td>
      <td style={{ textAlign: "right", paddingLeft: 8 }}>
        {canCancel && (
          <Button variant="ghost" size="sm" onClick={handleCancel} loading={cancelling} style={{ fontSize: 12, color: "var(--negative-500)" }}>
            Cancel
          </Button>
        )}
      </td>
    </tr>
  );
}

export function OrdersScreen({ onTrade }) {
  const [orders, setOrders]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await getOrders();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function handleCancel(orderId) {
    try {
      await cancelOrder(orderId);
      await load();
    } catch (err) {
      console.error("Cancel failed:", err.message);
    }
  }

  const active  = orders.filter(o => ["Submitted", "PreSubmitted"].includes(o.status));
  const history = orders.filter(o => !["Submitted", "PreSubmitted"].includes(o.status));

  return (
    <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "var(--text-3xl)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--text-strong)" }}>Orders</h1>
          <div style={{ color: "var(--text-muted)", marginTop: 4, fontSize: 14.5 }}>{active.length} active · {history.length} historical</div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="secondary" leadingIcon={<GFIcon name="refresh" size={16} />} onClick={load} loading={loading}>Refresh</Button>
          <Button variant="primary" leadingIcon={<GFIcon name="zap" size={16} />} onClick={onTrade}>New trade</Button>
        </div>
      </div>

      {error && (
        <div style={{ padding: "14px 18px", background: "var(--negative-50)", borderRadius: "var(--radius-md)", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ color: "var(--negative-500)", marginTop: 1 }}><GFIcon name="alertTriangle" size={18} /></span>
          <div>
            <div style={{ fontWeight: 600, color: "var(--text-strong)", fontSize: 14 }}>Could not connect to IBKR</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{error} — make sure the Client Portal Gateway is running and you are logged in.</div>
          </div>
        </div>
      )}

      {loading && !error && (
        <Card pad="lg">
          <div style={{ textAlign: "center", color: "var(--text-subtle)", padding: "40px 0", fontSize: 14 }}>
            <GFIcon name="refresh" size={24} style={{ display: "block", margin: "0 auto 12px", opacity: 0.5 }} />
            Loading orders…
          </div>
        </Card>
      )}

      {!loading && (
        <>
          <Card pad="lg">
            <CardHeader title="Active orders" subtitle={`${active.length} pending`} />
            {active.length === 0 ? (
              <div style={{ color: "var(--text-subtle)", fontSize: 14, textAlign: "center", padding: "28px 0" }}>
                No active orders — use the Trade button to place one.
              </div>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-subtle)", fontWeight: 700 }}>
                    <th style={{ textAlign: "left", paddingBottom: 8 }}>Security</th>
                    <th style={{ textAlign: "center", paddingBottom: 8 }}>Side</th>
                    <th style={{ textAlign: "right", paddingBottom: 8 }}>Qty</th>
                    <th style={{ textAlign: "center", paddingBottom: 8 }}>Type</th>
                    <th style={{ textAlign: "right", paddingBottom: 8 }}>Price</th>
                    <th style={{ textAlign: "center", paddingBottom: 8 }}>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {active.map(o => <OrderRow key={o.orderId} order={o} onCancel={handleCancel} />)}
                </tbody>
              </table>
            )}
          </Card>

          {history.length > 0 && (
            <Card pad="lg">
              <CardHeader title="Order history" subtitle={`${history.length} orders`} />
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-subtle)", fontWeight: 700 }}>
                    <th style={{ textAlign: "left", paddingBottom: 8 }}>Security</th>
                    <th style={{ textAlign: "center", paddingBottom: 8 }}>Side</th>
                    <th style={{ textAlign: "right", paddingBottom: 8 }}>Qty</th>
                    <th style={{ textAlign: "center", paddingBottom: 8 }}>Type</th>
                    <th style={{ textAlign: "right", paddingBottom: 8 }}>Price</th>
                    <th style={{ textAlign: "center", paddingBottom: 8 }}>Status</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {history.map(o => <OrderRow key={o.orderId} order={o} onCancel={handleCancel} />)}
                </tbody>
              </table>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
