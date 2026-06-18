import * as React from "react";

/**
 * Directional gain/loss number — green up / red down, tabular monospace.
 * @startingPoint section="Finance" subtitle="Colored delta with caret" viewport="700x130"
 */
export interface ChangeValueProps {
  /** Signed value. Sign drives color & caret direction. */
  value: number;
  /** Optional secondary percent shown in parens (when format isn't "percent"). */
  percent?: number | null;
  /** @default "percent" */
  format?: "percent" | "currency" | "number";
  /** @default true */
  showCaret?: boolean;
  /** @default true */
  showSign?: boolean;
  /** @default "md" */
  size?: "sm" | "md" | "lg" | "xl";
  /** @default "semibold" */
  weight?: "regular" | "medium" | "semibold" | "bold";
  /** @default "right" */
  align?: "left" | "right";
  /** Currency glyph for format="currency". @default "$" */
  currency?: string;
  style?: React.CSSProperties;
}

/**
 * Directional gain/loss number — green up / red down, tabular monospace.
 */
export function ChangeValue(props: ChangeValueProps): JSX.Element;
