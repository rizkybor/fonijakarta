"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

const RECIPIENT_EMAIL = "fonijakarta@gmail.com";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const mailSubject = subject || "Pesan dari Website FONI Pengprov DKI Jakarta";
    const bodyLines = [message];
    const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      mailSubject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    setIsSubmitting(true);
    window.location.href = mailto;
    window.setTimeout(() => setIsSubmitting(false), 800);
  };

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="space-y-3">
        <label
          htmlFor="subject"
          className="text-xs font-bold text-slate-400 uppercase tracking-widest"
        >
          Perihal (Subjek)
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          defaultValue=""
          placeholder="Tulis perihal email Anda"
          className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-foni-navy/20 focus:border-foni-navy outline-none transition-all text-slate-700 font-medium"
          required
        />
      </div>
      <div className="space-y-3">
        <label
          htmlFor="message"
          className="text-xs font-bold text-slate-400 uppercase tracking-widest"
        >
          Isi Email
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue=""
          placeholder="Tulis isi email Anda di sini..."
          className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-foni-navy/20 focus:border-foni-navy outline-none transition-all text-slate-700 font-medium resize-none"
          required
        ></textarea>
      </div>
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer w-full md:w-auto bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-3 disabled:opacity-60"
        >
          Email Langsung <Mail className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
