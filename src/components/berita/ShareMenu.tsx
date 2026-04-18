"use client";

import { useMemo, useState } from "react";
import { Check, Link as LinkIcon, Share2, MessageCircle } from "lucide-react";

type Props = {
  title: string;
  url: string;
};

export default function ShareMenu({ title, url }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappHref = useMemo(() => {
    const text = `${title}\n${url}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }, [title, url]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold transition-colors"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Share2 className="w-4 h-4" />
        <span className="hidden sm:inline">Bagikan</span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-3 w-[260px] bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-20"
          role="menu"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-800 font-bold text-sm"
            role="menuitem"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
              <MessageCircle className="w-4 h-4 text-emerald-600" />
            </div>
            Bagikan ke WhatsApp
          </a>

          <button
            type="button"
            onClick={copyLink}
            className="cursor-pointer w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-800 font-bold text-sm"
            role="menuitem"
          >
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100">
              {copied ? (
                <Check className="w-4 h-4 text-blue-600" />
              ) : (
                <LinkIcon className="w-4 h-4 text-blue-600" />
              )}
            </div>
            {copied ? "Link disalin" : "Salin link"}
            <span className="ml-auto text-xs font-mono text-slate-400">embed</span>
          </button>

          {/* <div className="px-4 pt-3 pb-2 border-t border-slate-100 mt-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
              Embed
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-600 break-all select-all">
              {`<a href=\"${url}\">${title}</a>`}
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}
