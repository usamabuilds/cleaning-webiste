import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return <section className={["layer-glass rounded-2xl p-6 sm:p-8", className].filter(Boolean).join(" ")}>{children}</section>;
}
