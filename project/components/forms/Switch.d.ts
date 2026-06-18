import * as React from "react";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** Optional trailing label. */
  label?: React.ReactNode;
  /** @default "md" */
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

/** On/off toggle (e.g. "Halal-only", "Show leveraged"). */
export function Switch(props: SwitchProps): JSX.Element;
