import { pengurusHierarchy } from "@/lib/dummyData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil Pengurus",
  description:
    "Susunan pengurus daerah Federasi Orienteering Nasional Indonesia (FONI) Provinsi DKI Jakarta masa bakti 2026-2030.",
};

export default function ProfilPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Minimalis Sejarah Organisasi */}
        <div className="mb-15 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-foni-orange"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Organisasi
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Sejarah <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-800 to-orange-400">
              Organisasi
            </span>
          </h1>
        </div>
        {/* Sejarah Organisasi */}
        <section className="mb-24">
          <div className="bg-slate-50 border border-slate-200 rounded-4xl p-6 md:p-10">
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              <strong className="text-slate-900">FONI PENGPROV DKI Jakarta</strong>{" "}
              memiliki sejarah yang cukup panjang dalam memajukan olahraga
              navigasi di ibu kota. Sebagai bagian dari induk organisasi
              nasional, FONI Pengprov DKI Jakarta berperan penting sebagai{" "}
              <em>"barometer"</em> perkembangan orienteering di Indonesia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Point 1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-foni-navy/10 flex items-center justify-center shrink-0">
                    <span className="text-foni-navy font-black text-lg">1</span>
                  </div>
                  <h3 className="text-foni-navy font-bold text-xl">
                    Deklarasi & Pembentukan
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Secara resmi dideklarasikan pada{" "}
                  <strong>21 April 2018</strong> dalam rangkaian acara{" "}
                  <em>Gathering Orienteering Jakarta (Go Jak)</em> di Universitas Negeri Jakarta.  Bertujuan
                  memperkuat struktur organisasi olahraga orienteering di
                  wilayah Jakarta agar lebih terorganisir.
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-foni-navy/10 flex items-center justify-center shrink-0">
                    <span className="text-foni-navy font-black text-lg">2</span>
                  </div>
                  <h3 className="text-foni-navy font-bold text-xl">
                    Masa Pandemi & Inovasi
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pada masa pandemi COVID-19 (2021), FONI Pengprov DKI Jakarta menjadi
                  pionir melalui pilot project{" "}
                  <strong>"The New of Orienteering"</strong>. Acara ini
                  menerapkan protokol kesehatan ketat dan menjadi percontohan
                  nasional dalam menggelar kompetisi.
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-foni-navy/10 flex items-center justify-center shrink-0">
                    <span className="text-foni-navy font-black text-lg">
                      3
                    </span>
                  </div>
                  <h3 className="text-foni-navy font-bold text-xl">
                    Prestasi di FORNAS
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mencetak sejarah emas dengan mempertahankan gelar{" "}
                  <strong>Juara Umum tiga kali berturut-turut</strong> di ajang
                  FORNAS, termasuk prestasi terbaru pada FORNAS VIII 2025 di
                  NTB, mempertegas posisi Jakarta sebagai pusat atlet
                  berprestasi.
                </p>
              </div>

              {/* Point 4 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-foni-navy/10 flex items-center justify-center shrink-0">
                    <span className="text-foni-navy font-black text-lg">4</span>
                  </div>
                  <h3 className="text-foni-navy font-bold text-xl">
                    Menuju Kota Global
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Membawa Jakarta ke kancah dunia melalui{" "}
                  <strong>
                    JIOC (Jakarta International Orienteering Championship)
                  </strong>
                  , sebuah <em>World Ranking Event</em> yang menarik atlet dari
                  Singapura, Hong Kong, Jepang, hingga Eropa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Header Minimalis */}
        <div className="mb-24 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-foni-navy"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Struktural Organisasi
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Susunan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-foni-navy to-blue-600">
              Pengurus
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light">
            Mengenal lebih dekat sosok-sosok di balik pengembangan olahraga orienteering di Provinsi DKI Jakarta. Berdasarkan Surat Keputusan (SK) Pengurus Pusat FONI (Federasi Orienteering Nasional Indonesia) dengan Nomor [Masukkan Nomor SK] Tahun 2026, untuk masa bakti 2026–2030.
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
                  <h2
                    className={`text-xl font-bold uppercase tracking-wider ${
                      index === 0
                        ? "text-foni-navy"
                        : "text-slate-400 group-hover:text-slate-900 transition-colors"
                    }`}
                  >
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
