# Web Dashboard — UI kit

The primary Grad Fund surface: a desktop investing dashboard for you and your dad. Built entirely from the design-system primitives (`window.GradFundDesignSystem_42702f`).

## Run
Open `index.html`. It loads React + the compiled `_ds_bundle.js`, then the screen scripts.

## Screens
- **OverviewScreen** — portfolio home: total value + range chart, allocation by asset class, holdings table with sparklines, halal status, and house verdict.
- **WatchlistScreen** — watchlist / screener (same component, `mode` prop). Filter chips by asset type and region; respects the global Halal-only switch.
- **StockDetailScreen** — the "holy grail" single-security view: header (price, halal, verdict), tabs for Overview / Halal screening / Comparables, key-metric grid, a **position sizer** ("how much should we put in?") and an **Ask Grad Fund** box.
- **CompareScreen** — three large-caps side by side, best-in-row metric highlighted.
- **AddPositionDrawer** — slide-in money-in flow: search → pick → size → confirm.

## Files
- `AppShell.jsx` — sidebar + topbar chrome (search, Halal-only switch, Add position).
- `data.js` — mock portfolio/watchlist/detail data → `window.GFData`.
- `Icons.jsx` — inline Lucide-style glyph set → `window.GFIcon`.

## Notes
- All numbers are mock data. Company logos use `CompanyMark` monograms (no real logos bundled).
- This is a high-fidelity recreation for prototyping, not production code.
