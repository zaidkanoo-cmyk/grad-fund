Avatar for a stock/ETF/fund. No real logos ship with the system, so by default it renders a deterministic colored monogram from the ticker — pass `src` once you have a real logo URL.

```jsx
<CompanyMark ticker="AAPL" name="Apple Inc." />
<CompanyMark ticker="VWRA" size={32} radius="var(--radius-sm)" />
<CompanyMark ticker="MSFT" src="https://logo.example/msft.png" />
```

Same `ticker` always yields the same color, so marks stay stable across views.
