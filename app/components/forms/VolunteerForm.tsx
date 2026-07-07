"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { programs } from "@/app/data/content";

type Fields = {
  name: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
  message: string;
  consent: boolean;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  city: "",
  interest: "",
  message: "",
  consent: false,
};

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

export function VolunteerForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const set = (k: keyof Fields, v: string | boolean) =>
    setValues((s) => ({ ...s, [k]: v }));

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email";
    if (!/^[0-9+\-\s]{7,15}$/.test(values.phone)) e.phone = "Enter a valid phone number";
    if (!values.city.trim()) e.city = "Please enter your city";
    if (!values.interest) e.interest = "Please choose an area";
    if (!values.consent) e.consent = "Please accept to continue";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // TODO: connect to a real API endpoint
    setTimeout(() => setStatus("done"), 900);
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-success/30 bg-success/5 p-10 text-center">
        <CheckCircle2 className="size-14 text-success" />
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Thank you, {values.name.split(" ")[0]}!</h3>
        <p className="mt-2 max-w-sm text-muted">
          Your interest to volunteer has been received. Our team will reach out to you soon.
        </p>
        <button
          onClick={() => {
            setValues(empty);
            setStatus("idle");
          }}
          className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft/50"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            className={inputCls}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            className={inputCls}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            className={inputCls}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+91 …"
          />
        </Field>
        <Field label="City" error={errors.city}>
          <input
            className={inputCls}
            value={values.city}
            onChange={(e) => set("city", e.target.value)}
            placeholder="Your city"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Area of interest" error={errors.interest}>
          <select
            className={inputCls}
            value={values.interest}
            onChange={(e) => set("interest", e.target.value)}
          >
            <option value="">Select a programme…</option>
            {programs.map((p) => (
              <option key={p.id} value={p.title}>
                {p.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message (optional)">
          <textarea
            rows={4}
            className={inputCls}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Tell us how you'd like to help…"
          />
        </Field>
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(e) => set("consent", e.target.checked)}
          className="mt-0.5 size-4 accent-primary"
        />
        <span>
          I agree to be contacted by Meraki Manthan about volunteering opportunities.
          {errors.consent && <span className="block text-accent-dark">{errors.consent}</span>}
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-soft transition-colors hover:bg-primary-dark disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="size-4 animate-spin" />}
        {status === "loading" ? "Submitting…" : "Become a volunteer"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-accent-dark">{error}</span>}
    </label>
  );
}
