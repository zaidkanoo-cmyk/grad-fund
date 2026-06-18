Tiny inline trend for watchlist/holding rows. Colors itself green or red by net direction (first vs last point) unless you override `color`.

```jsx
<Sparkline data={[101,103,99,104,108,107,111]} />
<Sparkline data={prices} width={120} height={32} fill={false} />
```

Pure SVG, no dependencies. Keep it decorative — for a full interactive chart, build a dedicated chart in the UI kit.
