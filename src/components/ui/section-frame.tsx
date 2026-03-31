import type { ReactNode } from "react";

type SectionFrameProps = {
  children: ReactNode;
  className?: string;
};

export function SectionFrame({ children, className }: SectionFrameProps) {
  return <div className={["section-frame", className].filter(Boolean).join(" ")}>{children}</div>;
}
