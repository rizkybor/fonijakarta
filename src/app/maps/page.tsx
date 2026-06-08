// src/app/maps/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import { Search, ArrowRight, ChevronDown } from "lucide-react";
import { supabase } from "@/lib/supabase";
import MapCard from "@/components/maps/mapCard";

export const metadata: Metadata = {
  title: "Galeri Peta IOF",
  description:
    "Koleksi peta teknikal berstandar IOF (International Orienteering Federation) yang dikelola resmi oleh FONI Pengprov DKI Jakarta.",
};

// Define Map Type
export type AppMap = {
  id: string;
  name: string;
  region: string;
  scale: string;
  contour_interval: string;
  year: string;
  norm: string;
  area_size: string;
  status: string;
  image: string;
  software: string | null;
  notes: string | null;
  contact_name: string | null;
  contact_phone: string | null;
  contact_email: string | null;
  contact_instagram: string | null;
  contact_twitter: string | null;
  contact_facebook: string | null;
};

export const revalidate = 60;

export default async function MapsPage() {
  const { data: mapsData } = await supabase
    .from("galeripeta")
    .select("*")
    .order("created_at", { ascending: false });

  const allMaps = (mapsData || []) as AppMap[];

  const groupedMaps = allMaps.reduce(
    (acc, mapItem) => {
      const region = mapItem.region || "Lainnya";
      if (!acc[region]) acc[region] = [];
      acc[region].push(mapItem);
      return acc;
    },
    {} as Record<string, AppMap[]>,
  );

  const regions = Object.keys(groupedMaps).sort();

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-0.5 bg-foni-navy"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Peta Wilayah
            </span>
            <div className="w-8 h-0.5 bg-foni-navy"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1] max-w-4xl mx-auto">
            Galeri Peta <br />
            <span className="text-foni-navy">DKI Jakarta</span>
          </h1>

          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Wilayah DKI Jakarta yang sudah dipetakan dengan menggunakan standar
            ISSPROM atau ISOM.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <section className="sticky top-[80px] lg:top-[96px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-foni-navy transition-colors" />
            <input
              type="text"
              placeholder="Cari area..."
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:border-foni-navy focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <div className="relative shrink-0">
              <select className="appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-bold cursor-pointer focus:outline-none focus:border-foni-navy transition-all">
                <option disabled value="">
                  Jenis
                </option>
                <option value="isspsom">ISSprOM</option>
                <option value="isom">ISOM</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            <div className="relative shrink-0">
              <select className="appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-bold cursor-pointer focus:outline-none focus:border-foni-navy transition-all">
                <option disabled value="">
                  Status Peta
                </option>
                <option value="active">Aktif</option>
                <option value="needs_update">Perlu Update</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Maps Grouped by Region */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {regions.map((region) => (
            <div key={region} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  {region}
                </h2>
                <div className="h-0.5 flex-1 bg-slate-200"></div>
                <span className="text-sm font-bold text-slate-400">
                  {groupedMaps[region].length} Peta
                </span>
              </div>

              <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
                {groupedMaps[region].map((mapItem) => (
                  <MapCard key={mapItem.id} mapItem={mapItem} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-foni-navy rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Hubungi Bidang Pemetaan
              </h2>
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                Tim Mapper dari FONI Pengprov DKI Jakarta siap membantu ataupun
                merekomendasikan instansi atau sekolah Anda menyediakan peta
                orienteering dengan menggunakan standar ISSPROM atau ISOM
                terupdate sebagai acuan penggunaan simbol simbol didalam peta.
              </p>
            </div>
            <Link
              href="https://wa.me/628567503492"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white text-foni-navy px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-slate-100 transition-colors flex items-center gap-3"
            >
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}