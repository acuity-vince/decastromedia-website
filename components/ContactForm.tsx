"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong");
      }

      setState("success");
      form.reset();
    } catch (err: unknown) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full bg-white/5 border border-white/15 text-brand-white font-body text-sm px-4 py-3 placeholder-white/30 focus:outline-none focus:border-brand-teal transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="font-body text-xs uppercase tracking-widest text-white/40 block mb-2">
            Name <span className="text-brand-green">*</span>
          </label>
          <input name="name" required type="text" placeholder="Vince De Castro" className={inputClass} />
        </div>
        <div>
          <label className="font-body text-xs uppercase tracking-widest text-white/40 block mb-2">
            Company
          </label>
          <input name="company" type="text" placeholder="De Castro Media" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="font-body text-xs uppercase tracking-widest text-white/40 block mb-2">
          Email <span className="text-brand-green">*</span>
        </label>
        <input name="email" required type="email" placeholder="you@company.com" className={inputClass} />
      </div>

      <div>
        <label className="font-body text-xs uppercase tracking-widest text-white/40 block mb-2">
          Service
        </label>
        <select name="service" className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
          <option value="" disabled>Select a service...</option>
          <option value="AI Audit">AI Audit</option>
          <option value="Claude Training">1-Day Claude Training</option>
          <option value="SMB Website">SMB Website</option>
          <option value="Other">Other / Not Sure Yet</option>
        </select>
      </div>

      <div>
        <label className="font-body text-xs uppercase tracking-widest text-white/40 block mb-2">
          Message <span className="text-brand-green">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me what you're working on..."
          className={inputClass}
        />
      </div>

      {state === "error" && (
        <p className="font-body text-xs text-red-400">{errorMsg}</p>
      )}

      {state === "success" ? (
        <div className="border border-brand-teal/30 bg-brand-teal/10 px-5 py-4">
          <p className="font-body text-sm text-brand-green">
            Message sent. I&apos;ll be in touch shortly.
          </p>
        </div>
      ) : (
        <button
          type="submit"
          disabled={state === "loading"}
          className="font-body font-semibold text-sm uppercase tracking-widest bg-brand-green text-brand-black px-8 py-4 hover:brightness-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "loading" ? "Sending..." : "Send Message"}
        </button>
      )}
    </form>
  );
}
