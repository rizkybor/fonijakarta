import { pengurusHierarchy } from "@/lib/dummyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Pengurus",
  description: "Susunan pengurus daerah Federasi Orienteering Nasional Indonesia (FONI) Provinsi DKI Jakarta masa bakti 2026-2030.",
};

export default function ProfilPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Minimalis */}
        <div className="mb-24 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[var(--color-foni-navy)]"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Organisasi</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Susunan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-foni-navy)] to-blue-600">Pengurus Daerah</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
            Mengenal lebih dekat sosok-sosok di balik pengembangan olahraga orienteering di Provinsi DKI Jakarta untuk masa bakti 2026-2030.
          </p>
        </div>

        {/* Struktur Hirarki Minimalis (Editorial Style) */}
        <div className="border-t border-slate-200">
          {pengurusHierarchy.map((group, index) => (
            <div
              key={group.level}
              className="py-12 border-b border-slate-100 flex flex-col md:flex-row gap-8 md:gap-16 group"
            >
              {/* Level / Title Section */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="sticky top-24">
                  <h2 className={`text-xl font-bold uppercase tracking-wider ${
                    index === 0 ? 'text-[var(--color-foni-navy)]' :
                    'text-slate-400 group-hover:text-slate-900 transition-colors'
                  }`}>
                    {group.level}
                  </h2>
                </div>
              </div>

              {/* Members List Section */}
              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                  {group.members.map((member, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight">
                        {member.name}
                      </h3>
                      {member.position !== group.level && (
                        <p className="text-sm text-slate-500 font-medium">
                          {member.position}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
