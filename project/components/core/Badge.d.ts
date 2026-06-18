import * as React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  /** @default "neutral" */
  tone?: "neutral" | "brand" | "positive" | "negative" | "amber" | "info";
  /** @default "soft" */
  variant?: "soft" | "solid" | "outline";
  /** @default "md" */
  size?: "sm" | "md";
  /** Leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Compact status / category label pill. */
export function Badge(props: BadgeProps): JSX.Element;
