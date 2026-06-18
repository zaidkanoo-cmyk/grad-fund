import * as React from "react";

export interface InputProps {
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  /** Static text before the field (e.g. "$"). */
  prefix?: React.ReactNode;
  /** Static text after the field (e.g. "USD"). */
  suffix?: React.ReactNode;
  disabled?: boolean;
  invalid?: boolean;
  /** Monospace the entered text (good for amounts/tickers). @default false */
  mono?: boolean;
  /** @default true */
  block?: boolean;
  style?: React.CSSProperties;
}

/** Single-line text/number input with icon & affix slots. */
export function Input(props: InputProps): JSX.Element;
