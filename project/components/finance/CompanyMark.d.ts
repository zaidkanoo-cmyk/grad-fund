import * as React from "react";

export interface CompanyMarkProps {
  /** Ticker symbol — drives initials + deterministic color. */
  ticker?: string;
  /** Company / fund name (fallback for initials & alt text). */
  name?: string;
  /** Optional real logo URL; when set, renders the image instead of a monogram. */
  src?: string | null;
  /** Pixel size (square). @default 40 */
  size?: number;
  /** Corner radius token or value. @default var(--radius-md) */
  radius?: string;
  style?: React.CSSProperties;
}

/** Security avatar: real logo if `src` given, else a deterministic colored monogram. */
export function CompanyMark(props: CompanyMarkProps): JSX.Element;
