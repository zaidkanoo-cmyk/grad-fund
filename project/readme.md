# Grad Fund — Design System

A calm, trustworthy, banking-grade design language for **Grad Fund**: a personal investing dashboard you (and your dad) use to track a shared portfolio, build watchlists, screen the market, and decide *what to invest in and how much* — across stocks, ETFs/funds, bonds, futures, options, leverage, and crypto. Halal compliance is a first-class signal throughout.

> **Origin:** Designed from scratch — no existing codebase, Figma, or brand was provided. Direction was set with the user: *clean & trustworthy, light (not dark), humanist sans with tabular figures, both audiences (clean default + drill-down detail), evergreen accent, muted green-up/red-down, first-class halal badges.*

---

## Content fundamentals (voice & tone)

Grad Fund speaks like a **trusted, plain-spoken advisor** — never a hype machine.

- **Decision-first.** Lead with the answer, then the why. "Up 2.4% today. Halal-compliant. We'd **invest**." Every security carries a clear **verdict** (Invest / Watch / Avoid) and a **halal status**.
- **Plain, low-jargon.** Written so a non-expert parent can follow it. Expand or tooltip any acronym (P/E, ROE) on first use. No "synergistic alpha exposure."
- **"We" and "you."** Collaborative and personal — "How much should *we* put in?", "Companies *you and Dad* are tracking." It's a shared, joint account.
- **Calm, short sentences.** No exclamation stacks, no emoji, no urgency tricks. Confidence comes from clarity, not volume.
- **Casing:** Sentence case for headings and labels; UPPERCASE only for tiny metric labels and table headers (with wide tracking). Tickers are uppercase monospace.
- **Numbers are the hero.** Money, percentages, and ratios are always tabular so columns align; gains/losses always carry color + a caret.

Examples — see `guidelines/voice.card.html`.

---

## Visual foundations

**Palette.** Light and warm. App background is a near-white warm slate (`--bg-app` = gray-50); cards are pure white. The brand is **Evergreen** (a calm teal-green, `--brand` = `#0F7257`) used for primary actions, the logo, and positive emphasis — never as a full-bleed background except the mobile balance card and small accents. Neutrals are a warm slate with a faint green cast so they sit happily next to the brand.

**Market color.** The most-used data colors: muted **gain green** (`#15875A`) and muted **loss red** (`#CC3B33`) — desaturated so a screen full of them stays calm. Flat is neutral gray. Amber = caution / "review"; blue = info / neutral data series. Each asset class has a fixed accent (stock=blue, etf=evergreen, bond=violet, future=amber, option=magenta, crypto=orange, cash=gray) used consistently in allocation charts and badges.

**Type.** `Public Sans` (humanist, institutional, trustworthy) for everything UI/body, with strong **tabular figures** on by default. `IBM Plex Mono` for prices, tickers, ratios, and any aligned numeric column. Display weights go to 800 for the wordmark and page titles; body is 400/500. Tight tracking on large display sizes only.

**Spacing & layout.** 4px base scale. Generous but not airy — banking-grade density. Content max-width ~1180px, centered. Cards are the primary container; pages are stacks of cards with 22px gutters. Tables are flush (no zebra by default on the desktop holdings table; light zebra on the compare table for scanability).

**Shape & elevation.** Corner radii are soft but not pill-everything: cards `--radius-lg` (14px), controls `--radius-md` (10px), pills/badges fully round. **Shadows are restrained** — low, cool-neutral, low-opacity (`--shadow-sm` on resting cards, `--shadow-md`/`-lg` only on overlays and the balance card). Hairline 1px borders (`--border`) do most of the separation work; selected/active states add a 1px brand ring.

**Backgrounds & texture.** No gradients (except one subtle evergreen-tint on the "Ask Grad Fund" panel and the solid evergreen mobile balance card). No photography, no illustration, no patterns or grain. The surface vocabulary is white cards on warm-gray — quiet, so data and color carry the meaning.

**Motion.** Calm and quick. Fades and small lifts; **never bouncy**. Durations 140–360ms with an ease-out curve. Drawer slides in from the right. All motion collapses to 0ms under `prefers-reduced-motion`.

**Interaction states.** Hover = a slight brightness drop on filled buttons and a `--surface-hover` wash on table rows / ghost buttons. Press = a 0.5px nudge down (no scale-bounce). Focus = a 3px soft evergreen ring (`--ring`). Disabled = ~55% opacity, `not-allowed`.

**Transparency & blur.** Used sparingly — only the modal scrim (`rgba(24,32,30,0.32)`). No glassmorphism.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) — clean, consistent **~1.9px stroke**, rounded caps/joins. It matches the calm, humanist tone better than filled/duotone sets.
- **Delivery:** The UI kits ship a small inline subset (`ui_kits/web-dashboard/Icons.jsx` → `window.GFIcon`) drawn in Lucide's style so the kit is self-contained and dependency-free. In production, use `lucide-react` (CDN-available) — the names match.
- **SVGs only**, currentColor stroke — icons inherit text color and never carry their own fill color except status glyphs.
- **No emoji** anywhere in the UI. The only "glyph" marks are the status characters inside badges (✓ ! ✕ for halal, ▲ ▼ for direction) — these are intentional, sized, and colored, not decorative emoji.
- **Brand marks:** `assets/gradfund-logo.svg` (wordmark) and `assets/gradfund-mark.svg` (app icon — an upward trend line in an evergreen rounded square).
- **Company logos:** none are bundled. The `CompanyMark` component renders a deterministic colored monogram from the ticker; pass a real logo URL via its `src` prop when available.

⚠️ **Substitution flags** — see Caveats at the bottom.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (only `@import`s).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`.
- `assets/` — `gradfund-logo.svg`, `gradfund-mark.svg`.
- `SKILL.md` — Agent-Skill manifest.

**Foundation cards** — `guidelines/`
- Type: `type-scale`, `numerics` · Colors: `color-brand`, `color-neutral`, `color-market`, `color-status` · Spacing: `spacing`, `radii-elevation` · Brand: `logo`, `voice`.

**Components** (`window.GradFundDesignSystem_42702f`)
- `components/core/` — **Button**, **IconButton**, **Badge**, **Card** (+ CardHeader)
- `components/forms/` — **Input**, **Switch**
- `components/navigation/` — **Tabs**
- `components/finance/` — **ChangeValue**, **HalalBadge**, **VerdictPill**, **AssetTypeBadge**, **CompanyMark**, **MetricTile**, **AllocationBar**, **Sparkline** (+ `assetColor()` helper)

**UI kits**
- `ui_kits/web-dashboard/` — interactive desktop dashboard: Portfolio overview, Watchlist/Screener, Stock detail (with position sizer + Ask box + halal screening + comparables), Compare, Add-position drawer.
- `ui_kits/mobile-app/` — phone portfolio + security detail.

---

## Caveats & substitutions

- **Fonts** are loaded from Google Fonts (Public Sans, IBM Plex Mono), not self-hosted binaries. If you want self-hosted `.woff2` + `@font-face`, ask and I'll swap `tokens/fonts.css`.
- **Icons** use an inline Lucide-style subset, not the real Lucide package. Visually faithful; swap for `lucide-react` in production.
- **No real company logos or market data** — `CompanyMark` monograms and mock data stand in. Wire real logos via `CompanyMark src` and real quotes into `data.js`.
- **Halal screening logic** is illustrative (AAOIFI-style thresholds shown in copy); it is not a certified ruling engine.
