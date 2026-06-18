import * as React from "react";

export interface IconButtonProps {
  /** The icon node (e.g. a Lucide icon). */
  children: React.ReactNode;
  /** Accessible label / tooltip. */
  label: string;
  /** @default "ghost" */
  variant?: "ghost" | "outline" | "solid";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Square icon-only button (toolbars, table row actions, close buttons). */
export function IconButton(props: IconButtonProps): JSX.Element;
