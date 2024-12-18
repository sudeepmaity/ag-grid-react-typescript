// NavLinkType.tsx
import { ReactNode } from "react";

export type NavLinkBadgeStatus = "success" | "warning" | "idle" | "error";

export type NavLinkType = {
  linkText: string;
  path: string;
  linkClassName?: string;
  icon?: ReactNode; // Change this from SvgIconProps to ReactNode
  sublinks?: NavLinkType[];
  expanded?: boolean;
  testId?: string;
  dataTestId?: string;
  category?: string;
  isDisabled?: boolean;
  isHidden?: boolean;
  notification?: "dot" | "standard";
  notificationStatus?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | undefined;
  onClickCustom?: () => void;
  badgeContentFunction?: (
    token: string,
    props: any
  ) => Promise<number | NavLinkBadgeStatus | undefined>;
};
