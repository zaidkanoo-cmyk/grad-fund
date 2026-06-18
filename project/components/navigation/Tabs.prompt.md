Underline tabs for in-page view switching (Overview / Financials / Halal / News, or All / Stocks / ETFs / Bonds).

```jsx
<Tabs value={tab} onChange={setTab} items={[
  {id:"overview", label:"Overview"},
  {id:"fin", label:"Financials"},
  {id:"halal", label:"Halal", count:1},
]}/>
```

Controlled. Optional `count` renders a chip.
