"use client";

import { useState } from "react";
import { Share2, Copy, Check } from "lucide-react";

export default function ShareButtons({
  title,
}: {
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin link:", err);
    }
  };

  const handleWhatsApp = () => {
    const text = `${title}\n${getShareUrl()}`;
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-3">
      <span className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
        <Share2 className="w-4 h-4" /> Bagikan
      </span>

      <button
        type="button"
        onClick={handleWhatsApp}
        className="cursor-pointer inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-100 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-100 transition-colors"
        aria-label="Bagikan ke WhatsApp"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.83 14.06c-.24.68-1.19 1.25-1.95 1.41-.53.11-1.21.2-3.52-.75-2.96-1.22-4.86-4.23-5.01-4.43-.15-.2-1.2-1.6-1.2-3.05s.74-2.16 1-2.46c.26-.3.57-.37.76-.37s.38 0 .55.01c.18.01.41-.07.64.49.24.58.81 2.01.88 2.15.07.15.11.32.02.52-.09.2-.14.32-.28.5-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.92 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.17-.19.72-.83.91-1.11.19-.28.38-.24.64-.14.26.1 1.66.78 1.94.93.28.14.47.21.54.33.07.13.07.72-.17 1.4z" />
        </svg>
        WhatsApp
      </button>

      <button
        type="button"
        onClick={handleCopy}
        className="cursor-pointer inline-flex items-center gap-2 bg-slate-100 text-slate-700 border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors"
        aria-label="Salin link"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-600" />
            Tersalin
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Salin Link
          </>
        )}
      </button>
    </div>
  );
}