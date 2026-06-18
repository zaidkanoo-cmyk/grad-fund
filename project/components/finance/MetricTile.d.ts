import * as React from "react";

/**
 * Labelled KPI / financial metric for stat grids.
 * @startingPoint section="Finance" subtitle="Labelled KPI metric" viewport="700x130"
 */
export interface MetricTileProps {
  /** Uppercase metric label (e.g. "P/E", "Market cap", "Dividend yield"). */
  label: React.ReactNode;
  /** The metric value (string or node — often a ChangeValue). */
  value: React.ReactNode;
  /** Optional secondary line under the value. */
  sub?: React.ReactNode;
  /** Tooltip text on a "?" affordance beside the label. */
  hint?: string;
  /** @default "left" */
  align?: "left" | "right";
  /** Larger value type for hero stats. @default false */
  emphasis?: boolean;
  style?: React.CSSProperties;
}

/**
 * Labelled KPI / financial metric for stat grids.
 */
export function MetricTile(props: MetricTileProps): JSX.Element;
