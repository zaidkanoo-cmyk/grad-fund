Text / number input with leading icon and prefix/suffix slots. Use `prefix="$"` for money, `mono` for tickers and amounts.

```jsx
<Input leadingIcon={<SearchIcon size={16}/>} placeholder="Search stocks, ETFs, funds…" />
<Input prefix="$" suffix="USD" mono placeholder="0.00" />
<Input invalid value="??" />
```

Sizes `sm | md | lg`. Set `invalid` for error state.
