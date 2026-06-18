---
name: grad-fund-design
description: Use this skill to generate well-branded interfaces and assets for Grad Fund (a clean, light, trustworthy personal-investing dashboard — portfolios, watchlists, screeners, stock/ETF/bond/futures/crypto detail views, halal screening, position sizing), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files (`tokens/`, `components/`, `ui_kits/`, `guidelines/`, `assets/`).

Grad Fund is light and banking-grade — evergreen accent, warm-neutral slate, muted green-up/red-down market color, Public Sans + IBM Plex Mono with tabular figures, restrained shadows, no gradients/photography/emoji. Halal status and a house verdict (Invest / Watch / Avoid) are first-class signals on every security.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view: link `styles.css` for tokens, mount components from `window.GradFundDesignSystem_42702f` via the compiled `_ds_bundle.js`, and reuse patterns from `ui_kits/`.

If working on production code, copy assets and read the rules here to become an expert in designing with this brand. Prefer the finance primitives (`ChangeValue`, `HalalBadge`, `VerdictPill`, `AssetTypeBadge`, `CompanyMark`, `MetricTile`, `AllocationBar`, `Sparkline`) for any market/portfolio UI rather than re-inventing them.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some clarifying questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
