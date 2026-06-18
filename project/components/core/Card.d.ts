import * as React from "react";

/**
 * The base surface container — white, hairline border, soft shadow.
 * @startingPoint section="Core" subtitle="Surface card with optional header" viewport="700x180"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Inner padding. @default "md" */
  pad?: "none" | "sm" | "md" | "lg";
  /** Adds pointer cursor + hover affordance. @default false */
  interactive?: boolean;
  /** Brand outline + ring for selected state. @default false */
  selected?: boolean;
  as?: any;
  style?: React.CSSProperties;
}
export interface CardHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * The base surface container — white, hairline border, soft shadow.
 */
export function Card(props: CardProps): JSX.Element;
export function CardHeader(props: CardHeaderProps): JSX.Element;
