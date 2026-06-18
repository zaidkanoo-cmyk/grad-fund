import * as React from "react";

export interface AllocationSegment {
  label: string;
  value: number;
  /** Segment color — use assetColor(type) for class-based allocation. */
  color?: string;
}
export interface AllocationBarProps {
  segments: AllocationSegment[];
  /** Bar thickness in px. @default 12 */
  height?: number;
  /** Show the legend row below. @default true */
  showLegend?: boolean;
  /** Gap between segments in px. @default 2 */
  gap?: number;
  style?: React.CSSProperties;
}

/** Single stacked bar for portfolio allocation (by asset class, sector, or holding). */
export function AllocationBar(props: AllocationBarProps): JSX.Element;
