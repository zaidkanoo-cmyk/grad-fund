import * as React from "react";

/**
 * Primary call-to-action button.
 * @startingPoint section="Core" subtitle="Action button with 5 variants & 3 sizes" viewport="700x150"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "ghost" | "danger" | "brandSoft";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Stretch to full container width. @default false */
  block?: boolean;
  disabled?: boolean;
  /** Show a spinner and disable. @default false */
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Primary call-to-action button.
 */
export function Button(props: ButtonProps): JSX.Element;
