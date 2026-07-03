import { notFound } from "next/navigation";
import { Calendar, MapPin, Flag, User2Icon, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import EventImageModal from "./EventImageModal";
import ShareButtons from "./ShareButtons";

export const revalidate = 60;

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: evt, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !evt) {
    notFound();
  }

  return (
    <div className="pt-42 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-foni-navy"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Jadwal
          </Link>

          <ShareButtons title={evt.title} />
        </div>

        <div className="bg-white rounded-4xl overflow-hidden border border-slate-200 shadow-sm">
          <EventImageModal
            src={evt.image || "/logo/logofonidki.png"}
            alt={evt.title}
          />

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 text-foni-orange font-bold text-xs uppercase tracking-widest mb-4">
              <Calendar className="w-4 h-4" />
              {evt.date}
            </div>

            {evt.status === "upcoming" && (
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-xs font-bold text-slate-500 mb-4">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                Coming Soon
            </div>
            )}

            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              {evt.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 text-sm font-medium text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400" /> {evt.location}
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 text-sm font-medium text-slate-600">
                <Flag className="w-4 h-4 text-slate-400" /> {evt.type}
              </div>
              {evt.organizer && (
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 text-sm font-medium text-slate-600">
                  <User2Icon className="w-4 h-4 text-slate-400" /> {evt.organizer}
                </div>
              )}
            </div>

            {evt.description && (
              <p className="text-slate-600 leading-relaxed mb-10 whitespace-pre-line">
                {evt.description}
              </p>
            )}

            {evt.status === "registration_open" && evt.registration_link && (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                {evt.registration_image && (
                  <div className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-white">
                    <Image
                      src={evt.registration_image}
                      alt="QR Registrasi"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                )}
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-sm text-slate-500 mb-3">
                    Scan QR atau klik tombol di bawah untuk mendaftar
                  </p>
                  <a
                    href={evt.registration_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-foni-navy text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}