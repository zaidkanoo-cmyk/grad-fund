Toggle for binary settings and filters ("Halal-only", "Include leveraged", "Hide cash").

```jsx
<Switch checked={halalOnly} onChange={setHalalOnly} label="Halal-only" />
```

Controlled: pass `checked` and handle `onChange(next)`.
