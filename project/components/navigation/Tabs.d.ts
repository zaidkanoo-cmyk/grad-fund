import * as React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
  /** Optional trailing count chip. */
  count?: number;
}
export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange?: (id: string) => void;
  /** @default "md" */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

/** Underline tab bar for switching views (Overview / Financials / Halal / News). */
export function Tabs(props: TabsProps): JSX.Element;
