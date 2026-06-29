import React, { useState, useEffect, useRef } from "react";
import { Button } from "../components/core/Button.jsx";
import { IconButton } from "../components/core/IconButton.jsx";
import { Input } from "../components/forms/Input.jsx";
import { HalalBadge } from "../components/finance/HalalBadge.jsx";
import { AssetTypeBadge } from "../components/finance/AssetTypeBadge.jsx";
import { CompanyMark } from "../components/finance/CompanyMark.jsx";
import { ChangeValue } from "../components/finance/ChangeValue.jsx";
import { GFIcon } from "../components/finance/Icons.jsx";
import { placeOrder, getQuote } from "../services/ibkrApi.js";

const fmtMoney = (n) => "$" + Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtNum   = (n) => n.toLocaleString("en-US", { maximumFractionDigits: 6 });

function ToggleGroup({ value, onChange, options }) {
  return (
    <div style={{ display: "flex", background: "var(--surface-sunken)", borderRadius: "var(--radius-md)", padding: 3, gap: 2 }}>
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          style={{
            flex: 1, padding: "7px 16px", border: "none", borderRadius: "var(--radius-sm)", cursor: "pointer",
            fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600,
            background: value === opt.value ? opt.activeColor || "var(--surface)" : "transparent",
            color: value === opt.value ? opt.activeTextColor || "var(--text-strong)" : "var(--text-muted)",
            boxShadow: value === opt.value ? "var(--shadow-sm)" : "none",
            transition: "var(--transition-base)",
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function SummaryRow({ label, value, bold, color }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "1px solid var(--divider)" }}>
      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{label}</span>
      <span style={{ fontSize: 13.5, fontWeight: bold ? 700 : 500, fontFamily: "var(--font-mono)", color: color || "var(--text-strong)" }}>{value}</span>
    </div>
  );
}

export function TradeDrawer({ open, onClose, data, preselect }) {
  const universe = [...(data?.holdings || []), ...(data?.watchlist || [])];

  const [side, setSide]             = useState("BUY");
  const [orderType, setOrderType]   = useState("MKT");
  const [q, setQ]                   = useState("");
  const [pick, setPick]             = useState(null);
  const [qty, setQty]               = useState("");
  const [dollarAmt, setDollarAmt]   = useState("");
  const [limitPx, setLimitPx]       = useState("");
  const [qtyMode, setQtyMode]       = useState("shares"); // shares | dollars
  const [liveQuote, setLiveQuote]   = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [step, setStep]             = useState("form"); // form | confirm | success | error
  const [errMsg, setErrMsg]         = useState("");
  const [submitting, setSubmitting] = useState(false);
  const quoteTimer = useRef(null);

  // Pre-select a security when the drawer opens for a specific one
  useEffect(() => {
    if (open && preselect) {
      setPick(preselect);
      setQ("");
    }
    if (!open) {
      // Reset on close after animation
      setTimeout(() => {
        setSide("BUY"); setOrderType("MKT"); setQ(""); setPick(null);
        setQty(""); setDollarAmt(""); setLimitPx(""); setStep("form");
        setLiveQuote(null); setErrMsg("");
      }, 300);
    }
  }, [open, preselect]);

  // Fetch live quote when a security is picked
  useEffect(() => {
    if (!pick) { setLiveQuote(null); return; }
    clearTimeout(quoteTimer.current);
    setQuoteLoading(true);
    quoteTimer.current = setTimeout(async () => {
      try {
        const q = await getQuote(pick.ticker);
        setLiveQuote(q);
      } catch {
        setLiveQuote(null);
      } finally {
        setQuoteLoading(false);
      }
    }, 400);
    return () => clearTimeout(quoteTimer.current);
  }, [pick]);

  const price = liveQuote?.price || pick?.price || 0;
  const spread = liveQuote ? fmtMoney(liveQuote.ask - liveQuote.bid) : null;

  // Derive qty ↔ dollars when one changes
  const sharesVal  = qtyMode === "shares" ? parseFloat(qty) || 0 : price ? parseFloat(dollarAmt || 0) / price : 0;
  const dollarsVal = qtyMode === "dollars" ? parseFloat(dollarAmt) || 0 : sharesVal * price;

  const buyingPower = data?.summary?.buyingPower || 0;
  const afterTrade  = side === "BUY" ? buyingPower - dollarsVal : buyingPower + dollarsVal;

  const results = q
    ? universe.filter(s => (s.ticker + s.name).toLowerCase().includes(q.toLowerCase())).slice(0, 5)
    : universe.slice(0, 5);

  const canPreview = pick && sharesVal > 0 && (orderType === "MKT" || parseFloat(limitPx) > 0);

  async function handleSubmit() {
    setSubmitting(true);
    try {
      await placeOrder({
        ticker: pick.ticker,
        side,
        orderType,
        quantity: sharesVal.toFixed(6),
        limitPrice: orderType === "LMT" ? parseFloat(limitPx) : undefined,
        secType: pick.type === "etf" ? "FUND" : pick.type === "future" ? "FUT" : pick.type === "bond" ? "BOND" : pick.type === "crypto" ? "CRYPTO" : "STK",
      });
      setStep("success");
    } catch (err) {
      setErrMsg(err.message);
      setStep("error");
    } finally {
      setSubmitting(false);
    }
  }

  const lb = { display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 7, letterSpacing: "0.01em" };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 60, pointerEvents: open ? "auto" : "none" }}>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(24,32,30,0.38)", opacity: open ? 1 : 0, transition: "opacity 220ms ease" }} />

      {/* Drawer */}
      <div style={{ position: "absolute", top: 0, right: 0, height: "100%", width: 480, maxWidth: "96vw", background: "var(--surface)", boxShadow: "var(--shadow-xl)", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform 240ms cubic-bezier(0.4,0,0.2,1)", display: "flex", flexDirection: "column" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "var(--brand)" }}><GFIcon name="zap" size={20} /></span>
            <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text-strong)" }}>Trade</span>
          </div>
          <IconButton label="Close" variant="ghost" onClick={onClose}><GFIcon name="x" size={18} /></IconButton>
        </div>

        {/* Body */}
        <div style={{ flex: 1, overflow: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 20 }}>

          {step === "success" && (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--positive-50)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <GFIcon name="check" size={28} style={{ color: "var(--positive-600)" }} />
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text-strong)", marginBottom: 8 }}>Order placed</div>
              <div style={{ color: "var(--text-muted)", fontSize: 14 }}>
                {side} {fmtNum(sharesVal)} {pick?.ticker} @ {orderType === "MKT" ? "Market" : fmtMoney(parseFloat(limitPx))}
              </div>
              <div style={{ marginTop: 24 }}>
                <Button variant="secondary" onClick={onClose}>Done</Button>
              </div>
            </div>
          )}

          {step === "error" && (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--negative-50)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <GFIcon name="alertTriangle" size={28} style={{ color: "var(--negative-500)" }} />
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-strong)", marginBottom: 8 }}>Order failed</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 20 }}>{errMsg}</div>
              <Button variant="secondary" onClick={() => setStep("form")}>Try again</Button>
            </div>
          )}

          {(step === "form" || step === "confirm") && (
            <>
              {/* Buy / Sell */}
              <div>
                <label style={lb}>Action</label>
                <ToggleGroup
                  value={side}
                  onChange={setSide}
                  options={[
                    { value: "BUY",  label: "Buy",  activeColor: "var(--positive-600)", activeTextColor: "#fff" },
                    { value: "SELL", label: "Sell", activeColor: "var(--negative-500)", activeTextColor: "#fff" },
                  ]}
                />
              </div>

              {/* Security picker */}
              <div>
                <label style={lb}>Security</label>
                {pick ? (
                  <div style={{ border: "1px solid var(--brand)", borderRadius: "var(--radius-md)", padding: "10px 14px", display: "flex", alignItems: "center", gap: 12, background: "var(--brand-soft)" }}>
                    <CompanyMark ticker={pick.ticker} name={pick.name} size={36} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text-strong)", display: "flex", gap: 8, alignItems: "center" }}>
                        {pick.ticker}<AssetTypeBadge type={pick.type} size="sm" />
                      </div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{pick.name}</div>
                    </div>
                    {quoteLoading ? (
                      <span style={{ fontSize: 12, color: "var(--text-subtle)" }}>fetching…</span>
                    ) : (
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--text-strong)" }}>{fmtMoney(price)}</div>
                        {liveQuote && <ChangeValue value={liveQuote.day} size="sm" />}
                      </div>
                    )}
                    {step === "form" && (
                      <button onClick={() => { setPick(null); setQ(""); }} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-subtle)", padding: 2 }}>
                        <GFIcon name="x" size={16} />
                      </button>
                    )}
                  </div>
                ) : (
                  <>
                    <Input leadingIcon={<GFIcon name="search" size={16} />} placeholder="Search ticker or company…" value={q} onChange={e => setQ(e.target.value)} autoFocus />
                    <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 5 }}>
                      {results.map(s => (
                        <button key={s.ticker} onClick={() => { setPick(s); setQ(""); }} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)", background: "var(--surface)", cursor: "pointer", textAlign: "left", font: "inherit" }}>
                          <CompanyMark ticker={s.ticker} name={s.name} size={30} />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text-strong)" }}>{s.ticker} <AssetTypeBadge type={s.type} size="sm" /></div>
                            <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>{s.name}</div>
                          </div>
                          <HalalBadge status={s.halal} showLabel={false} size="sm" />
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {pick && step === "form" && (
                <>
                  {/* Order type */}
                  <div>
                    <label style={lb}>Order type</label>
                    <ToggleGroup
                      value={orderType}
                      onChange={setOrderType}
                      options={[
                        { value: "MKT", label: "Market" },
                        { value: "LMT", label: "Limit" },
                      ]}
                    />
                    {orderType === "MKT" && (
                      <div style={{ marginTop: 8, fontSize: 12.5, color: "var(--text-muted)" }}>
                        Executes immediately at the best available price.
                        {liveQuote && <span> Bid {fmtMoney(liveQuote.bid)} · Ask {fmtMoney(liveQuote.ask)}</span>}
                      </div>
                    )}
                  </div>

                  {/* Limit price */}
                  {orderType === "LMT" && (
                    <div>
                      <label style={lb}>Limit price</label>
                      <Input prefix="$" mono placeholder={price ? price.toFixed(2) : "0.00"} value={limitPx} onChange={e => setLimitPx(e.target.value.replace(/[^0-9.]/g, ""))} />
                      <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 6 }}>
                        Order fills only at this price or better.
                      </div>
                    </div>
                  )}

                  {/* Quantity mode */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <label style={{ ...lb, marginBottom: 0 }}>Quantity</label>
                      <button onClick={() => setQtyMode(m => m === "shares" ? "dollars" : "shares")} style={{ fontSize: 12, color: "var(--brand)", background: "none", border: "none", cursor: "pointer", fontWeight: 600, padding: 0 }}>
                        Switch to {qtyMode === "shares" ? "$ amount" : "shares"}
                      </button>
                    </div>
                    {qtyMode === "shares" ? (
                      <Input
                        suffix="shares"
                        mono
                        placeholder="0"
                        value={qty}
                        onChange={e => setQty(e.target.value.replace(/[^0-9.]/g, ""))}
                      />
                    ) : (
                      <Input
                        prefix="$"
                        mono
                        placeholder="0.00"
                        value={dollarAmt}
                        onChange={e => setDollarAmt(e.target.value.replace(/[^0-9.]/g, ""))}
                      />
                    )}
                    {/* Quick $ amounts */}
                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                      {[500, 1000, 2500, 5000].map(v => (
                        <button key={v} onClick={() => { setQtyMode("dollars"); setDollarAmt(String(v)); }}
                          style={{ flex: 1, padding: "6px 0", border: "1px solid var(--border-strong)", borderRadius: "var(--radius-sm)", background: "var(--surface)", color: "var(--text-muted)", cursor: "pointer", font: "inherit", fontSize: 12, fontWeight: 600 }}>
                          ${v >= 1000 ? v / 1000 + "k" : v}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Derived info */}
                  {sharesVal > 0 && price > 0 && (
                    <div style={{ background: "var(--gray-50)", borderRadius: "var(--radius-md)", padding: 16 }}>
                      <SummaryRow label="Est. shares" value={fmtNum(sharesVal)} />
                      <SummaryRow label={side === "BUY" ? "Est. cost" : "Est. proceeds"} value={fmtMoney(dollarsVal)} bold />
                      {buyingPower > 0 && <SummaryRow label="Buying power" value={fmtMoney(buyingPower)} />}
                      {buyingPower > 0 && <SummaryRow label="After trade" value={fmtMoney(afterTrade)} color={afterTrade < 0 ? "var(--loss)" : "var(--text-strong)"} />}
                    </div>
                  )}
                </>
              )}

              {/* Confirm step */}
              {pick && step === "confirm" && (
                <div style={{ background: "var(--gray-50)", borderRadius: "var(--radius-lg)", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text-strong)" }}>Order preview</div>
                  <SummaryRow label="Action" value={side} bold />
                  <SummaryRow label="Security" value={`${pick.ticker} · ${pick.name}`} />
                  <SummaryRow label="Type" value={orderType === "MKT" ? "Market" : `Limit @ ${fmtMoney(parseFloat(limitPx))}`} />
                  <SummaryRow label="Quantity" value={`${fmtNum(sharesVal)} shares`} />
                  <SummaryRow label="Est. total" value={fmtMoney(dollarsVal)} bold />
                  <div style={{ marginTop: 4, padding: "10px 12px", background: "var(--evergreen-50)", borderRadius: "var(--radius-md)", fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.5 }}>
                    By placing this order you confirm it for the joint "You & Dad" account. Market orders execute immediately at the best available price.
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {(step === "form" || step === "confirm") && (
          <div style={{ padding: "16px 24px", borderTop: "1px solid var(--border)", display: "flex", gap: 10 }}>
            {step === "form" && (
              <>
                <Button variant="ghost" onClick={onClose}>Cancel</Button>
                <Button
                  variant="primary"
                  block
                  disabled={!canPreview}
                  onClick={() => setStep("confirm")}
                  style={side === "SELL" ? { background: "var(--negative-500)" } : {}}
                >
                  Preview {side === "BUY" ? "buy" : "sell"} order →
                </Button>
              </>
            )}
            {step === "confirm" && (
              <>
                <Button variant="secondary" onClick={() => setStep("form")}>← Edit</Button>
                <Button
                  variant="primary"
                  block
                  loading={submitting}
                  onClick={handleSubmit}
                  style={side === "SELL" ? { background: "var(--negative-500)" } : {}}
                >
                  Place {side === "BUY" ? "buy" : "sell"} order
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
