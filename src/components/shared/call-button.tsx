import type { CallButtonProps } from "@/types";

const variantStyles: Record<NonNullable<CallButtonProps["variant"]>, string> = {
  solid: "bg-emerald-700 text-white hover:bg-emerald-800 border border-emerald-700",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  ghost: "border border-white/40 bg-white/10 text-white hover:bg-white/20",
};

function sanitizePhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\s+/g, "");
}

export function CallButton({
  phoneNumber,
  label = "Call now",
  variant = "solid",
  className,
}: CallButtonProps) {
  return (
    <a
      href={`tel:${sanitizePhoneNumber(phoneNumber)}`}
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${variantStyles[variant]} ${className ?? ""}`}
    >
      {label}
    </a>
  );
}
