Compact stacked bar for portfolio mix — by asset class, sector, or jurisdiction. Values are auto-normalized to 100%.

```jsx
<AllocationBar segments={[
  { label: "Stocks", value: 58, color: assetColor("stock") },
  { label: "ETFs",   value: 24, color: assetColor("etf") },
  { label: "Bonds",  value: 12, color: assetColor("bond") },
  { label: "Cash",   value: 6,  color: assetColor("cash") },
]}/>
```

Pair colors with `assetColor()` from AssetTypeBadge for consistency. Set `showLegend={false}` for an inline mini-bar.
