import Link from "next/link";
import { Metadata } from "next";
import { Users, Map, Navigation, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Jaringan Keanggotaan & Klub",
  description: "Persebaran klub orienteering terdaftar dan Sumber Daya Manusia (SDM) tersertifikasi di Provinsi DKI Jakarta.",
};

export const revalidate = 60; // Revalidate every 60 seconds

type Athlete = {
  id: string;
  name: string;
  gender: string;
  class: string;
  nre: number;
  wre: number;
};

type Klub = {
  id: string;
  name: string;
  region: string;
  registered: boolean;
  athletes: Athlete[];
};

type SdmTersertifikasi = {
  id: string;
  region: string;
  role: "mapper" | "planner" | "adviser";
  name: string;
  phone: string;
  club: string;
};

export default async function KeanggotaanPage() {
  const regions = [
    { id: "jakpus", name: "Jakarta Pusat" },
    { id: "jaksel", name: "Jakarta Selatan" },
    { id: "jaktim", name: "Jakarta Timur" },
    { id: "jakbar", name: "Jakarta Barat" },
    { id: "jakut", name: "Jakarta Utara" },
    { id: "pulauseribu", name: "Kepulauan Seribu" },
  ];

  const [{ data: clubsData }, { data: sdmData }] = await Promise.all([
    supabase
      .from("klub")
      .select(
        `
        *,
        athletes (*)
      `,
      )
      .order("created_at", { ascending: true }),
    supabase
      .from("sdm_tersertifikasi")
      .select("*")
      .order("created_at", { ascending: true }),
  ]);

  const clubsArray = (clubsData || []) as Klub[];
  const sdmArray = (sdmData || []) as SdmTersertifikasi[];

  const sdmByRegion = sdmArray.reduce((acc, item) => {
    const regionKey = item.region || "Lainnya";
    if (!acc[regionKey]) acc[regionKey] = { mapper: [], planner: [], adviser: [] };
    if (item.role === "mapper") acc[regionKey].mapper.push(item);
    if (item.role === "planner") acc[regionKey].planner.push(item);
    if (item.role === "adviser") acc[regionKey].adviser.push(item);
    return acc;
  }, {} as Record<string, { mapper: SdmTersertifikasi[]; planner: SdmTersertifikasi[]; adviser: SdmTersertifikasi[] }>);

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* 1. Minimalist Hero Section */}
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-0.5 bg-foni-navy"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Keanggotaan Resmi</span>
            <div className="w-8 h-0.5 bg-foni-navy"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1] max-w-4xl mx-auto">
            Keanggotaan Klub <br />
            <span className="text-foni-navy">FONI Pengprov DKI Jakarta</span>
          </h1>
          
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Persebaran klub klub orienteering terdaftar dan Tenaga Ahli di 6 wilayah Provinsi DKI Jakarta.
          </p>
        </div>
      </section>

      {/* 2. Regions Grid - Minimalist Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {regions.map((region) => {
              const regionClubs = clubsArray.filter(c => c.region === region.name);
              const shouldScrollClubs = regionClubs.length > 5;
              const sdm = sdmByRegion[region.name] || { mapper: [], planner: [], adviser: [] };

              return (
                <div key={region.id} className="bg-white rounded-4xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-shadow duration-500 group">
                  {/* Region Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-foni-navy transition-colors">
                      {region.name}
                    </h2>
                    <div className="inline-flex items-center gap-2 bg-amber-50/80 px-3 py-1.5 rounded-full border border-amber-100 shrink-0">
                      <Users className="w-3.5 h-3.5 text-slate-700" />
                      <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">{regionClubs.length} Klub FONI</span>
                    </div>
                  </div>

                  {/* SDM Section - Clean List */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tenaga Ahli</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {/* Mapper Block */}
                      <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100/50">
                        <div className="flex items-center gap-2 mb-4">
                          <Map className="w-3.5 h-3.5 text-slate-700" />
                          <span className="font-bold text-slate-800 text-xs flex-1">Mapper</span>
                          <span className="bg-foni-navy text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">{sdm.mapper.length}</span>
                        </div>
                        <div className="space-y-4">
                          {sdm.mapper.length > 0 ? sdm.mapper.map((m, i) => (
                            <div key={i} className="text-[11px] leading-tight">
                              <p className="font-bold text-slate-900 mb-0.5">{m.name}</p>
                              <p className="text-slate-500">{m.club}</p>
                              <p className="text-slate-400 font-mono mt-1">{m.phone}</p>
                            </div>
                          )) : <p className="text-[11px] text-slate-400 italic">- Tidak ada -</p>}
                        </div>
                      </div>

                      {/* Course Planner Block */}
                      <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100/50">
                        <div className="flex items-center gap-2 mb-4">
                          <Navigation className="w-3.5 h-3.5 text-slate-700" />
                          <span className="font-bold text-slate-800 text-xs flex-1">Course Planner</span>
                          <span className="bg-foni-navy text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">{sdm.planner.length}</span>
                        </div>
                        <div className="space-y-4">
                          {sdm.planner.length > 0 ? sdm.planner.map((m, i) => (
                            <div key={i} className="text-[11px] leading-tight">
                              <p className="font-bold text-slate-900 mb-0.5">{m.name}</p>
                              <p className="text-slate-500">{m.club}</p>
                              <p className="text-slate-400 font-mono mt-1">{m.phone}</p>
                            </div>
                          )) : <p className="text-[11px] text-slate-400 italic">- Tidak ada -</p>}
                        </div>
                      </div>

                      {/* Event Adviser Block */}
                      <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100/50">
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                          <span className="font-bold text-slate-800 text-xs flex-1">Event Adviser</span>
                          <span className="bg-foni-navy text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">{sdm.adviser.length}</span>
                        </div>
                        <div className="space-y-4">
                          {sdm.adviser.length > 0 ? sdm.adviser.map((m, i) => (
                            <div key={i} className="text-[11px] leading-tight">
                              <p className="font-bold text-slate-900 mb-0.5">{m.name}</p>
                              <p className="text-slate-500">{m.club}</p>
                              <p className="text-slate-400 font-mono mt-1">{m.phone}</p>
                            </div>
                          )) : <p className="text-[11px] text-slate-400 italic">- Tidak ada -</p>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clubs Section - Single List Item Model */}
                  <div className="mt-auto">
                    <div className="flex items-center mb-4">
                      <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Daftar Klub ({regionClubs.length})</h3>
                    </div>

                    {regionClubs.length > 0 ? (
                      <div className="relative">
                        <div
                          className={`flex flex-col gap-2.5 ${shouldScrollClubs ? "max-h-90 overflow-y-auto pr-1 hide-scrollbar" : ""}`}
                        >
                        {regionClubs.map(club => (
                          <Link 
                            key={club.id} 
                            href={`/keanggotaan/${club.id}`} 
                            className="group/club flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:border-foni-navy hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                                <Users className="w-4 h-4 text-foni-orange" />
                              </div>
                              <div className="flex flex-col">
                                <p className="font-bold text-slate-900 text-sm group-hover/club:text-foni-navy transition-colors">
                                  {club.name}
                                </p>
                                <p className="text-[10px] text-foni-navy font-bold uppercase tracking-widest mt-0.5 opacity-0 -translate-x-2 group-hover/club:opacity-100 group-hover/club:translate-x-0 transition-all duration-300">
                                  Lihat Detail
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3 shrink-0">
                              <div className="hidden sm:flex bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{club.athletes.length} Atlet</span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-300 group-hover/club:text-foni-navy group-hover/club:translate-x-1 transition-all" />
                            </div>
                          </Link>
                        ))}
                        </div>
                        {shouldScrollClubs && (
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-white to-transparent rounded-b-2xl" />
                        )}
                      </div>
                    ) : (
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 border-dashed text-center">
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Belum ada data klub</p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
