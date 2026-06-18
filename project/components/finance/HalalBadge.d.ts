import * as React from "react";

/**
 * Sharia-compliance status badge — first-class signal on every holding & detail view.
 * @startingPoint section="Finance" subtitle="Halal compliance status pill" viewport="700x120"
 */
export interface HalalBadgeProps {
  /** @default "review" */
  status?: "compliant" | "review" | "non-compliant" | "unrated";
  /** @default "md" */
  size?: "sm" | "md";
  /** Show text label beside the glyph. @default true */
  showLabel?: boolean;
  style?: React.CSSProperties;
}

/**
 * Sharia-compliance status badge — first-class signal on every holding & detail view.
 */
export function HalalBadge(props: HalalBadgeProps): JSX.Element;
