"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const set = (k: string, val: string) => setV((s) => ({ ...s, [k]: val }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!v.name.trim()) err.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) err.email = "Enter a valid email";
    if (!v.message.trim()) err.message = "Please write a message";
    setErrors(err);
    if (Object.keys(err).length) return;
    setStatus("loading");
    // TODO: connect to a real API / email service
    setTimeout(() => setStatus("done"), 900);
  };

  if (status === "done") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-success/30 bg-success/5 p-10 text-center">
        <CheckCircle2 className="size-14 text-success" />
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Message sent!</h3>
        <p className="mt-2 max-w-sm text-muted">
          Thank you for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-ink">Name</span>
            <input className={inputCls} value={v.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
            {errors.name && <span className="mt-1 block text-xs text-accent-dark">{errors.name}</span>}
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-ink">Email</span>
            <input type="email" className={inputCls} value={v.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" />
            {errors.email && <span className="mt-1 block text-xs text-accent-dark">{errors.email}</span>}
          </label>
        </div>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Subject</span>
          <input className={inputCls} value={v.subject} onChange={(e) => set("subject", e.target.value)} placeholder="How can we help?" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Message</span>
          <textarea rows={5} className={inputCls} value={v.message} onChange={(e) => set("message", e.target.value)} placeholder="Write your message…" />
          {errors.message && <span className="mt-1 block text-xs text-accent-dark">{errors.message}</span>}
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-white shadow-soft transition-colors hover:bg-primary-dark disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
