"use client";

import { useState } from "react";
import { Heart, ShieldCheck, Lock, CheckCircle2, IndianRupee } from "lucide-react";
import { donationAmounts, donationImpact } from "@/app/data/content";

export function DonateWidget() {
  const [freq, setFreq] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<number>(1000);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const effective = custom ? Number(custom) || 0 : amount;
  const impactLine =
    donationImpact[effective] ??
    (effective >= 5000
      ? "funds a full week of a learning centre"
      : effective > 0
        ? "brings real help to a family in need"
        : "");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (effective <= 0 || !name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    // TODO: integrate a real payment gateway (Razorpay / UPI)
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-lift ring-1 ring-line sm:p-10">
        <CheckCircle2 className="mx-auto size-16 text-success" />
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">Thank you, {name.split(" ")[0]}! 💛</h3>
        <p className="mt-2 text-muted">
          This is a demo confirmation for a{" "}
          <strong className="text-ink">
            ₹{effective.toLocaleString("en-IN")} {freq === "monthly" ? "monthly" : "one-time"}
          </strong>{" "}
          gift. In production, a secure payment step would appear here.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft/50"
        >
          Make another donation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-lift ring-1 ring-line sm:p-8">
      {/* Frequency toggle */}
      <div className="grid grid-cols-2 gap-1 rounded-full bg-cream p-1">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFreq(f)}
            className={`rounded-full py-2.5 text-sm font-bold transition-colors ${
              freq === f ? "bg-primary text-white shadow-soft" : "text-muted hover:text-ink"
            }`}
          >
            {f === "once" ? "Give once" : "Give monthly"}
          </button>
        ))}
      </div>

      {/* Amount chips */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {donationAmounts.map((a) => {
          const activeChip = !custom && amount === a;
          return (
            <button
              key={a}
              type="button"
              onClick={() => {
                setAmount(a);
                setCustom("");
              }}
              className={`rounded-xl border py-3 text-sm font-bold transition-colors ${
                activeChip
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-white text-ink hover:border-primary/40"
              }`}
            >
              ₹{a.toLocaleString("en-IN")}
            </button>
          );
        })}
      </div>

      {/* Custom amount */}
      <div className="relative mt-3">
        <IndianRupee className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
        <input
          type="number"
          min={1}
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="Other amount"
          className="w-full rounded-xl border border-line bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Impact line */}
      {effective > 0 && impactLine && (
        <p className="mt-4 rounded-xl bg-accent-soft/60 px-4 py-3 text-sm text-accent-dark">
          <strong>₹{effective.toLocaleString("en-IN")}</strong> {impactLine}.
        </p>
      )}

      {/* Donor details */}
      <div className="mt-5 grid gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-base font-bold text-white shadow-soft transition-colors hover:bg-accent-dark"
      >
        <Heart className="size-5" fill="currentColor" />
        Donate ₹{effective.toLocaleString("en-IN")}
        {freq === "monthly" ? " / month" : ""}
      </button>

      {/* Trust signals */}
      <div className="mt-5 flex flex-col gap-2 text-xs text-muted">
        <span className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-primary" />
          {/* TODO: confirm 80G eligibility */}
          Eligible for tax benefits under 80G (to be confirmed)
        </span>
        <span className="flex items-center gap-2">
          <Lock className="size-4 text-primary" />
          Secure, encrypted payments — this is a demo, no charge is made
        </span>
      </div>
    </form>
  );
}
