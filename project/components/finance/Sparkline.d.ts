import * as React from "react";

export interface SparklineProps {
  /** Series of numbers (e.g. closing prices). */
  data: number[];
  /** @default 96 */
  width?: number;
  /** @default 28 */
  height?: number;
  /** Override color; defaults to gain/loss by net direction. */
  color?: string | null;
  /** Render the soft area fill under the line. @default true */
  fill?: boolean;
  /** @default 1.75 */
  strokeWidth?: number;
  style?: React.CSSProperties;
}

/** Tiny inline trend line — auto green/red by net direction. */
export function Sparkline(props: SparklineProps): JSX.Element;
