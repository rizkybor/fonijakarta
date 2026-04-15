import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, ShieldCheck, MapPin, Users, Medal, Globe, Building } from "lucide-react";
import { supabase } from "@/lib/supabase";

export async function generateMetadata({ params }: { params: Promise<{ clubId: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const clubId = resolvedParams.clubId;

  const { data: club } = await supabase
    .from('klub')
    .select('name, region')
    .eq('id', clubId)
    .single();
  
  if (!club) return { title: "Klub Tidak Ditemukan" };
  
  return {
    title: `Profil ${club.name}`,
    description: `Daftar roster atlet orienteering dari ${club.name}, klub orienteering asal ${club.region} - DKI Jakarta.`,
  };
}

export const revalidate = 60;

export default async function ClubDetailPage({ params }: { params: Promise<{ clubId: string }> }) {
  const resolvedParams = await params;
  const clubId = resolvedParams.clubId;
  
  const { data: club } = await supabase
    .from('klub')
    .select(`
      *,
      athletes (*)
    `)
    .eq('id', clubId)
    .single();

  if (!club) {
    notFound();
  }

  const athletes = club.athletes || [];

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* 1. Minimalist Header */}
      <section className="relative pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Link href="/keanggotaan" className="inline-flex items-center gap-2 text-slate-400 hover:text-[var(--color-foni-navy)] transition-colors mb-8 text-sm font-bold uppercase tracking-widest group">
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" /> Kembali
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-foni-orange)]/10 flex items-center justify-center">
                  <Building className="w-5 h-5 text-[var(--color-foni-orange)]" />
                </div>
                <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <MapPin className="w-3 h-3" /> {club.region}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                {club.name}
              </h1>
              
              {club.registered && (
                <div className="inline-flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 px-4 py-2 rounded-full text-sm font-bold">
                  <ShieldCheck className="w-4 h-4" /> Klub Terdaftar
                </div>
              )}
            </div>

            <div className="bg-slate-50 border border-slate-200 px-8 py-6 rounded-[2rem] flex flex-col items-center justify-center shrink-0 min-w-[160px]">
              <Users className="w-6 h-6 text-[var(--color-foni-navy)] mb-2" />
              <span className="text-4xl font-black text-slate-900">{athletes.length}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Atlet Aktif</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Athletes Table - Minimalist Editorial */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Roster Atlet</h2>
            <div className="h-[2px] flex-1 bg-slate-200"></div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Nama Lengkap</th>
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">L/P</th>
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest">Kategori</th>
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">NRE Score</th>
                    <th className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">WRE Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {athletes.map((athlete: any) => (
                    <tr key={athlete.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-8 py-5">
                        <span className="font-bold text-slate-900 text-lg group-hover:text-[var(--color-foni-navy)] transition-colors">
                          {athlete.name}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold text-sm">
                          {athlete.gender}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <span className="bg-[var(--color-foni-navy)]/5 text-[var(--color-foni-navy)] px-3 py-1.5 rounded-lg text-sm font-bold tracking-wider">
                          {athlete.class}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="inline-flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-700 text-lg">{athlete.nre}</span>
                          <Medal className="w-4 h-4 text-amber-500" />
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="inline-flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-700 text-lg">{athlete.wre > 0 ? athlete.wre : '-'}</span>
                          <Globe className={`w-4 h-4 ${athlete.wre > 0 ? 'text-blue-500' : 'text-slate-300'}`} />
                        </div>
                      </td>
                    </tr>
                  ))}
                  {athletes.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-8 py-16 text-center">
                        <div className="inline-flex flex-col items-center justify-center text-slate-400">
                          <Users className="w-8 h-8 mb-3 opacity-50" />
                          <p className="font-medium">Belum ada data atlet yang terdaftar.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
