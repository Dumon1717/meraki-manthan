"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export function NewsletterForm({ variant = "footer" }: { variant?: "footer" | "panel" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    // TODO: connect to a real mailing-list API
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  };

  const dark = variant === "footer";

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div
        className={`flex items-center gap-2 rounded-full p-1.5 ${
          dark ? "bg-white/10 ring-1 ring-white/15" : "bg-white shadow-soft ring-1 ring-line"
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-label="Email address"
          className={`min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none ${
            dark ? "text-white placeholder:text-white/50" : "text-ink placeholder:text-muted"
          }`}
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-dark"
        >
          {done ? <Check className="size-4" /> : <Send className="size-4" />}
          <span className="hidden sm:inline">{done ? "Done" : "Subscribe"}</span>
        </button>
      </div>
      {done && (
        <p className={`mt-2 px-2 text-xs ${dark ? "text-primary-light" : "text-success"}`}>
          🎉 Thanks! You&apos;re on the list.
        </p>
      )}
    </form>
  );
}
