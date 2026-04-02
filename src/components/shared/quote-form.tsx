"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

type QuoteFormState = {
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  serviceType: string;
  details: string;
  photo: File | null;
};

const initialValues: QuoteFormState = {
  fullName: "",
  email: "",
  phone: "",
  postcode: "",
  serviceType: "House clearance",
  details: "",
  photo: null,
};

const successMessage = "Thanks — your quote request has been sent. We'll respond as soon as possible.";
const errorMessage = "We couldn't send your request right now. Please try again or call/WhatsApp us.";

export function QuoteForm(): JSX.Element {
  const [values, setValues] = useState<QuoteFormState>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const selectedPhotoLabel = useMemo(() => {
    if (!values.photo) return "No file selected";
    const sizeInMb = (values.photo.size / (1024 * 1024)).toFixed(1);
    return `${values.photo.name} (${sizeInMb} MB)`;
  }, [values.photo]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState(null);

    const formData = new FormData();
    formData.append("fullName", values.fullName.trim());
    formData.append("email", values.email.trim());
    formData.append("phone", values.phone.trim());
    formData.append("postcode", values.postcode.trim());
    formData.append("serviceType", values.serviceType);
    formData.append("details", values.details.trim());

    if (values.photo) {
      formData.append("photo", values.photo);
    }

    try {
      const response = await fetch("/api/quote-request", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? errorMessage);
      }

      setSubmitState({ type: "success", message: successMessage });
      setValues(initialValues);
    } catch (error) {
      const message = error instanceof Error ? error.message : errorMessage;
      setSubmitState({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setValues((previous) => ({ ...previous, photo: file }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <h2 className="text-xl font-semibold text-slate-900">Request a quote</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Full name
          <input
            required
            value={values.fullName}
            onChange={(event) => setValues((previous) => ({ ...previous, fullName: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            required
            type="email"
            value={values.email}
            onChange={(event) => setValues((previous) => ({ ...previous, email: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Phone number
          <input
            required
            type="tel"
            value={values.phone}
            onChange={(event) => setValues((previous) => ({ ...previous, phone: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Postcode
          <input
            required
            value={values.postcode}
            onChange={(event) => setValues((previous) => ({ ...previous, postcode: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>

        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          Service type
          <select
            value={values.serviceType}
            onChange={(event) => setValues((previous) => ({ ...previous, serviceType: event.target.value }))}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          >
            <option>House clearance</option>
            <option>Bulky waste collection</option>
            <option>Garden, shed & garage clearance</option>
            <option>Commercial waste collection</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Job details
        <textarea
          required
          rows={4}
          value={values.details}
          onChange={(event) => setValues((previous) => ({ ...previous, details: event.target.value }))}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Tell us what needs removing, access notes, and preferred timing."
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Upload a photo (optional)
        <div className="mt-1 rounded-lg border border-dashed border-slate-300 p-3">
          <input type="file" accept="image/*,.pdf" onChange={handlePhotoChange} className="w-full text-sm" />
          <p className="mt-2 text-xs text-slate-500">{selectedPhotoLabel}</p>
        </div>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-emerald-500 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send quote request"}
      </button>

      {submitState?.type === "success" ? (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">{submitState.message}</p>
      ) : null}

      {submitState?.type === "error" ? (
        <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">{submitState.message}</p>
      ) : null}
    </form>
  );
}
