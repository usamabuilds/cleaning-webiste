"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

import type { QuoteFormValues } from "@/types";

const initialValues: QuoteFormValues = {
  fullName: "",
  phone: "",
  postcode: "",
  serviceType: "House clearance",
  details: "",
  photo: null,
};

export function QuoteForm(): JSX.Element {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const selectedPhotoLabel = useMemo(() => {
    if (!values.photo) return "No file selected";
    const sizeInMb = (values.photo.size / (1024 * 1024)).toFixed(1);
    return `${values.photo.name} (${sizeInMb} MB)`;
  }, [values.photo]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setValues((previous) => ({ ...previous, photo: file }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
      <h2 className="text-xl font-semibold text-slate-900">Request a quote</h2>
      <p className="text-sm text-slate-600">Frontend-only scaffold. Connect to backend/email workflow when ready.</p>

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

        <label className="text-sm font-medium text-slate-700">
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
          <input type="file" accept="image/*" onChange={handlePhotoChange} className="w-full text-sm" />
          <p className="mt-2 text-xs text-slate-500">{selectedPhotoLabel}</p>
        </div>
      </label>

      <button type="submit" className="w-full rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 sm:w-auto">
        Send quote request
      </button>

      {submitted ? (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
          Thanks — this is a frontend-only demo. No data has been sent yet.
        </p>
      ) : null}
    </form>
  );
}
