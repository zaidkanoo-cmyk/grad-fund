Action button — use for any primary or secondary action; `primary` (evergreen) for the single main action per view, `secondary`/`ghost` for the rest.

```jsx
<Button variant="primary" size="md" onClick={buy}>Add to portfolio</Button>
<Button variant="secondary" leadingIcon={<PlusIcon/>}>New watchlist</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (evergreen fill), `secondary` (outline), `ghost` (text), `danger` (red), `brandSoft` (tinted). Sizes `sm | md | lg`. `block` stretches full width; `loading` shows a spinner and disables.
