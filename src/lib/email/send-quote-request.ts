const QUOTE_RECIPIENT_EMAIL = "usamaqureshi7.773@gmail.com";
const RESEND_API_URL = "https://api.resend.com/emails";

type QuoteRequestPayload = {
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  serviceType: string;
  details: string;
  attachment?: {
    filename: string;
    content: string;
    contentType: string;
  };
};

function readRequiredEnv(name: "RESEND_API_KEY" | "QUOTE_FROM_EMAIL"): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function sendQuoteRequestEmail(payload: QuoteRequestPayload): Promise<void> {
  const apiKey = readRequiredEnv("RESEND_API_KEY");
  const from = readRequiredEnv("QUOTE_FROM_EMAIL");

  const text = [
    "New quote request",
    "",
    `Full name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Postcode: ${payload.postcode}`,
    `Service type: ${payload.serviceType}`,
    "",
    "Job details:",
    payload.details,
  ].join("\n");

  const html = `
    <h2>New quote request</h2>
    <p><strong>Full name:</strong> ${payload.fullName}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Phone:</strong> ${payload.phone}</p>
    <p><strong>Postcode:</strong> ${payload.postcode}</p>
    <p><strong>Service type:</strong> ${payload.serviceType}</p>
    <p><strong>Job details:</strong></p>
    <p>${payload.details.replace(/\n/g, "<br />")}</p>
  `;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [QUOTE_RECIPIENT_EMAIL],
      reply_to: payload.email,
      subject: `Quote request: ${payload.serviceType} (${payload.postcode})`,
      text,
      html,
      attachments: payload.attachment ? [payload.attachment] : undefined,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Email provider error (${response.status}): ${errorBody || "Unknown error"}`);
  }
}
