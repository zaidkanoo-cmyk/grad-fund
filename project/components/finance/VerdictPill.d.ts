import * as React from "react";

export interface VerdictPillProps {
  /** @default "watch" */
  verdict?: "buy" | "watch" | "avoid";
  /** @default "md" */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

/** House call on a security — Invest / Watch / Avoid. */
export function VerdictPill(props: VerdictPillProps): JSX.Element;
