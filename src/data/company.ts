export type CompanyProfile = {
  brandName: string;
  logoAlt: string;
  phoneLabel: string;
  phoneHref?: string;
  whatsappLabel: string;
  whatsappHref?: string;
  quoteHref: string;
};

export const companyProfile: CompanyProfile = {
  brandName: "Crucial Recycling",
  logoAlt: "Brand logo placeholder",
  phoneLabel: "Call (add number)",
  phoneHref: undefined,
  whatsappLabel: "WhatsApp (add link)",
  whatsappHref: undefined,
  quoteHref: "/get-a-quote",
};
