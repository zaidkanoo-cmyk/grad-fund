import * as React from "react";

export type AssetType = "stock" | "etf" | "fund" | "bond" | "future" | "option" | "crypto" | "cash";

export interface AssetTypeBadgeProps {
  /** @default "stock" */
  type?: AssetType;
  /** @default "md" */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

/** Instrument-class label with a consistent per-class accent dot. */
export function AssetTypeBadge(props: AssetTypeBadgeProps): JSX.Element;
/** Returns the canonical accent color for an asset type. */
export function assetColor(type: AssetType): string;
