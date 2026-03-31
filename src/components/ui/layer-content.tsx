import type { ReactNode } from "react";

type LayerContentProps = {
  children: ReactNode;
  className?: string;
};

export function LayerContent({ children, className }: LayerContentProps) {
  return <div className={["layer-content layer-content-wrap glass-readable", className].filter(Boolean).join(" ")}>{children}</div>;
}
