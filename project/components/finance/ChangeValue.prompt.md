THE workhorse for any up/down number — daily change, total return, P/L. Green up, red down, neutral when flat. Always tabular monospace so columns align.

```jsx
<ChangeValue value={2.41} />                         // ▲ +2.41%
<ChangeValue value={-1284.50} format="currency" percent={-3.2} />
<ChangeValue value={0.84} format="currency" size="xl" showCaret={false} />
```

Sign of `value` drives color and caret. Pass `percent` to append a parenthetical % beside a currency value.
