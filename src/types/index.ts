export type ContactButtonVariant = "solid" | "outline" | "ghost";

export type CallButtonProps = {
  phoneNumber: string;
  label?: string;
  variant?: ContactButtonVariant;
  className?: string;
};

export type WhatsAppButtonProps = {
  number: string;
  message?: string;
  label?: string;
  variant?: ContactButtonVariant;
  className?: string;
};

export type QuoteFormValues = {
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  serviceType: string;
  details: string;
  photo: File | null;
};

export type CompanyProfile = {
  brandName: string;
  logoAlt: string;
  phoneNumber: string;
  phoneLabel: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  whatsappLabel: string;
  quoteHref: string;
};
