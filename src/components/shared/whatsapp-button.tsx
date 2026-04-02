import type { WhatsAppButtonProps } from "@/types";

const variantStyles: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  solid: "bg-emerald-700 text-white hover:bg-emerald-800 border border-emerald-700",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  ghost: "border border-white/40 bg-white/10 text-white hover:bg-white/20",
};

function sanitizeWhatsAppNumber(number: string): string {
  return number.replace(/\D+/g, "");
}

export function WhatsAppButton({
  number,
  message,
  label = "WhatsApp us",
  variant = "solid",
  className,
}: WhatsAppButtonProps) {
  const href = `https://wa.me/${sanitizeWhatsAppNumber(number)}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${variantStyles[variant]} ${className ?? ""}`}
    >
      {label}
    </a>
  );
}
