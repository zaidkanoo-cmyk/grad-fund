First-class Sharia-compliance signal. Show it wherever a security appears — watchlist rows, holding cards, the detail header.

```jsx
<HalalBadge status="compliant" />        // ✓ Halal (green)
<HalalBadge status="review" />           // ! Review (amber)
<HalalBadge status="non-compliant" />    // ✕ Not halal (red)
<HalalBadge status="compliant" showLabel={false} size="sm" />  // glyph only, for dense tables
```

Statuses: compliant, review, non-compliant, unrated. Use `showLabel={false}` in tight table cells.
