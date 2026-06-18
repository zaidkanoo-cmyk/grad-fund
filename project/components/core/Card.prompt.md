The base surface for nearly everything — holdings, metric panels, dialogs. White, hairline border, soft low shadow.

```jsx
<Card>
  <CardHeader title="Holdings" subtitle="12 positions" action={<Button size="sm" variant="ghost">View all</Button>} />
  …
</Card>
<Card interactive selected onClick={open}>…</Card>
```

`pad`: none|sm|md|lg. Use `selected` for the active row/tile.
