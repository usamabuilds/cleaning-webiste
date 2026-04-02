export const runtime = "nodejs";

import { z } from "zod";

import { sendQuoteRequestEmail } from "@/lib/email/send-quote-request";

const quoteRequestSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(1, "Phone number is required"),
  postcode: z.string().trim().min(1, "Postcode is required"),
  serviceType: z.string().trim().min(1, "Service type is required"),
  details: z.string().trim().min(1, "Job details are required"),
});

const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);
const maxFileBytes = 10 * 1024 * 1024;

export async function POST(request: Request): Promise<Response> {
  try {
    const formData = await request.formData();

    const parsed = quoteRequestSchema.safeParse({
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      postcode: formData.get("postcode"),
      serviceType: formData.get("serviceType"),
      details: formData.get("details"),
    });

    if (!parsed.success) {
      return Response.json({ error: parsed.error.issues[0]?.message ?? "Invalid quote request" }, { status: 400 });
    }

    const photoInput = formData.get("photo");
    let attachment: { filename: string; content: string; contentType: string } | undefined;

    if (photoInput instanceof File && photoInput.size > 0) {
      if (!allowedMimeTypes.has(photoInput.type)) {
        return Response.json(
          { error: "Unsupported file type. Please upload JPG, PNG, WEBP, or PDF." },
          { status: 400 },
        );
      }

      if (photoInput.size > maxFileBytes) {
        return Response.json({ error: "File is too large. Maximum size is 10MB." }, { status: 400 });
      }

      const bytes = await photoInput.arrayBuffer();
      attachment = {
        filename: photoInput.name,
        content: Buffer.from(bytes).toString("base64"),
        contentType: photoInput.type,
      };
    }

    await sendQuoteRequestEmail({
      ...parsed.data,
      attachment,
    });

    return Response.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to process quote request";
    return Response.json({ error: message }, { status: 500 });
  }
}
