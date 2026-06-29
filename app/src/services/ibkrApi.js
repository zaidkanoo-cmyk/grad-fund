/**
 * Grad Fund backend API client.
 *
 * Calls our Express server (/api/*), which proxies to the IBKR
 * Client Portal Gateway. If the server isn't running, every call
 * rejects — financeApi.js catches that and falls back to mock data.
 */

async function api(path, opts = {}) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || `API ${res.status}`);
  }
  return res.json();
}

export const getAuthStatus  = ()             => api('/api/auth');
export const getPortfolio   = ()             => api('/api/portfolio');
export const getQuote       = (ticker, sec)  => api(`/api/quote/${ticker}${sec ? `?secType=${sec}` : ''}`);
export const getHistory     = (ticker, opts) => api(`/api/history/${ticker}?period=${opts?.period || '1y'}&bar=${opts?.bar || '1d'}${opts?.secType ? `&secType=${opts.secType}` : ''}`);
export const getOrders      = ()             => api('/api/orders');
export const placeOrder     = (order)        => api('/api/orders', { method: 'POST', body: order });
export const cancelOrder    = (orderId)      => api(`/api/orders/${orderId}`, { method: 'DELETE' });
