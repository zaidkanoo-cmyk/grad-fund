A single labelled metric for stat grids on the overview and stock-detail pages.

```jsx
<MetricTile label="Market cap" value="$2.94T" />
<MetricTile label="P/E (TTM)" value="31.2" hint="Price / trailing 12-mo earnings" />
<MetricTile label="Total value" value="$128,450" sub="across 12 positions" emphasis />
<MetricTile label="Today" value={<ChangeValue value={1.4}/>} align="right" />
```

Combine in a CSS grid; `value` accepts any node (use `ChangeValue` for deltas). `hint` adds a "?" tooltip.
