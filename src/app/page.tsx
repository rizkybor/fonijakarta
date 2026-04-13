import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Map,
  Users,
  Trophy,
  Flag,
  Calendar,
  MapPin,
  Activity,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { siteStats, partners, upcomingEvents } from "@/lib/dummyData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Centered Modern Floating */}
      <section className="pt-32 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="w-2 h-2 rounded-full bg-[var(--color-foni-orange)] animate-pulse" />
          Pengurus Provinsi DKI Jakarta
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
          Satu{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-foni-navy)] to-blue-600">
            Peta
          </span>{" "}
          <br className="hidden md:block" />
          Seribu{" "}
          <span className="text-[var(--color-foni-orange)]">Sinergi</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
          Membangun dan mengembangkan olahraga orienteering di Ibukota. Cerdas
          bernavigasi, tangguh berlari, dan menjunjung tinggi sportivitas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/keanggotaan"
            className="w-full sm:w-auto bg-[var(--color-foni-navy)] text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            Jelajahi Klub{" "}
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/profil"
            className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2"
          >
            Tentang Kami
          </Link>
        </div>
      </section>

      {/* 2. Massive Rounded Hero Video & Floating Stats */}
      <section className="max-w-7xl mx-auto px-6 mt-16 relative z-10 mb-16 md:mb-24">
        {/* Main Video */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-slate-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-[4px] md:border-[6px] lg:border-8 border-white/80 ring-1 ring-slate-200 group">
          <div className="absolute inset-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-1000 scale-[1.3] md:scale-[1.1] group-hover:scale-[1.15]">
            <iframe
              src="https://www.youtube.com/embed/qyfDHtMqiWk?autoplay=1&mute=1&controls=0&loop=1&playlist=qyfDHtMqiWk&playsinline=1&rel=0&showinfo=0&modestbranding=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title="YouTube video player"
              className="absolute top-1/2 left-1/2 w-[150%] h-[150%] md:w-[120%] md:h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply pointer-events-none"></div>

          {/* Inner shadow overlay for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.2)] pointer-events-none rounded-[2.2rem] md:rounded-[2.6rem]"></div>
        </div>

        {/* Stats Cards (Moved Below Video, Minimalist UI & Informative) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 relative z-20">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 flex flex-col items-center text-center transition-all duration-300 group">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-blue-50 text-[var(--color-foni-navy)] mb-5 group-hover:scale-110 group-hover:bg-blue-100 transition-transform">
              <Users className="w-6 h-6" strokeWidth={2} />
            </span>
            <div className="font-black text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tighter">
              {siteStats.athletes}
              <span className="text-[var(--color-foni-orange)] text-[0.6em] align-super">
                +
              </span>
            </div>
            <div className="mt-2 text-xs font-bold text-slate-800 tracking-[0.05em] uppercase">
              Atlet Aktif
            </div>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              Berlatih dan terdaftar resmi di bawah binaan klub se-DKI Jakarta.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 flex flex-col items-center text-center transition-all duration-300 group">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-foni-orange)] mb-5 group-hover:scale-110 group-hover:bg-orange-100 transition-transform">
              <Flag className="w-6 h-6" strokeWidth={2} />
            </span>
            <div className="font-black text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tighter">
              {siteStats.clubs}
            </div>
            <div className="mt-2 text-xs font-bold text-slate-800 tracking-[0.05em] uppercase">
              Klub FONI
            </div>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              Klub orientering aktif yang tersebar di 5 wilayah kota
              administrasi.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 flex flex-col items-center text-center transition-all duration-300 group">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-blue-50 text-[var(--color-foni-navy)] mb-5 group-hover:scale-110 group-hover:bg-blue-100 transition-transform">
              <Map className="w-6 h-6" strokeWidth={2} />
            </span>
            <div className="font-black text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tighter">
              {siteStats.maps}
            </div>
            <div className="mt-2 text-xs font-bold text-slate-800 tracking-[0.05em] uppercase">
              Peta IOF
            </div>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              Peta berstandar internasional untuk kompetisi dan latihan rutin.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 flex flex-col items-center text-center transition-all duration-300 group">
            <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-orange-50 text-[var(--color-foni-orange)] mb-5 group-hover:scale-110 group-hover:bg-orange-100 transition-transform">
              <Trophy className="w-6 h-6" strokeWidth={2} />
            </span>
            <div className="font-black text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tighter">
              {siteStats.events}
            </div>
            <div className="mt-2 text-xs font-bold text-slate-800 tracking-[0.05em] uppercase">
              Event Sukses
            </div>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              Kompetisi daerah dan nasional yang berhasil diselenggarakan.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FONI DKI About (2 Column Section) */}
      <section className="py-20 md:py-32 relative">
        {/* Parallax Section Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Col: Image Mosaic/Visual */}
            <div className="relative">
              <div className="absolute top-10 -left-10 w-40 h-40 bg-[var(--color-foni-orange)]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 -right-10 w-40 h-40 bg-[var(--color-foni-navy)]/10 rounded-full blur-3xl"></div>

              <div className="relative w-full aspect-[4/5] md:aspect-square bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop"
                  alt="Tentang FONI DKI"
                  fill
                  className="object-cover"
                />

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/20">
                  <div className="text-3xl font-black text-[var(--color-foni-navy)] tracking-tighter">
                    2023
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Tahun Berdiri
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Text Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[var(--color-foni-orange)]"></div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Tentang Kami
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
                Menjadi Barometer <br />
                <span className="text-[var(--color-foni-navy)]">
                  Orienteering Nasional
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                Federasi Orienteering Nasional Indonesia (FONI) Pengurus
                Provinsi DKI Jakarta adalah induk organisasi olahraga
                orienteering di tingkat ibu kota yang bernaung di bawah KORMI
                Nasional.
              </p>

              <p className="text-lg text-slate-500 leading-relaxed mb-8 font-light">
                Kami berkomitmen untuk terus mempopulerkan olahraga navigasi ini
                ke berbagai kalangan guna mencetak atlet tangguh yang cerdas
                bernavigasi.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Pembinaan Atlet Berkelanjutan",
                  "Standarisasi Peta IOF",
                  "Sistem Kompetisi Profesional",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-bold text-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/profil"
                className="w-fit bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[var(--color-foni-navy)] transition-all flex items-center gap-3 group shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Susunan Pengurus{" "}
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Supported Logos */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
          Didukung & Terafiliasi Dengan
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 group flex items-center justify-center hover:bg-white hover:border-[var(--color-foni-navy)] hover:shadow-md transition-all duration-300 cursor-default"
            >
              <span className="text-xl md:text-2xl font-bold text-slate-700 tracking-tight group-hover:text-[var(--color-foni-navy)] transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Upcoming Events (Rounded Cards) */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[var(--color-foni-orange)]"></div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Agenda
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Kegiatan Mendatang
            </h2>
          </div>
          <Link
            href="/events"
            className="flex items-center gap-2 text-[var(--color-foni-navy)] font-bold hover:text-[var(--color-foni-orange)] transition-colors group bg-slate-50 px-6 py-3 rounded-full border border-slate-100 hover:border-slate-200 w-fit"
          >
            Semua Jadwal{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <Image
                  src={evt.image}
                  alt={evt.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {evt.status === "registration_open" && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-[var(--color-foni-navy)] shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-foni-orange)] animate-pulse"></span>
                    Daftar Buka
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[var(--color-foni-orange)] font-bold text-xs uppercase tracking-widest mb-4">
                  <Calendar className="w-4 h-4" /> {evt.date}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-[var(--color-foni-navy)] transition-colors line-clamp-2">
                  {evt.title}
                </h3>
                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-slate-400" />
                    </div>
                    <span className="font-medium line-clamp-1">
                      {evt.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      <Flag className="w-4 h-4 text-slate-400" />
                    </div>
                    <span className="font-medium">{evt.type}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SPORTident Tech (Bento Box Layout) */}
      <section className="py-20 md:py-32 relative mt-16 md:mt-24">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555696958-c5049b866f6f?q=80&w=2074&auto=format&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-slate-50/90"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 shadow-sm">
              <Timer className="w-4 h-4 text-[var(--color-foni-orange)]" />{" "}
              Teknologi Pewaktuan
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Berstandar Global
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Bento */}
            <div className="lg:col-span-2 rounded-[2rem] p-8 sm:p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-center group shadow-lg">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-15"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555696958-c5049b866f6f?q=80&w=2074&auto=format&fit=crop)' }}
              ></div>
              <div className="absolute inset-0 bg-[#0F172A]/90 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#1E3A8A]/80 to-[#1E3A8A]/90"></div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 z-10 tracking-tight">
                SPORTident Official
              </h3>
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-lg z-10 font-light">
                Memastikan akurasi split-time presisi tinggi, hasil instan, dan
                keadilan mutlak bagi seluruh peserta kompetisi orienteering.
              </p>

              {/* Decorative Station Concentric Circles */}
              <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-1000 shadow-2xl">
                <div className="w-48 h-48 border border-white/15 rounded-full flex items-center justify-center bg-white/5">
                  <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center bg-slate-900/40">
                    <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_30px_rgba(239,68,68,1)]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Bentos */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-[var(--color-foni-orange)]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Akurasi Milidetik
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Pencatatan presisi tinggi tanpa delay saat pelari menyentuh
                  titik kontrol.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Keamanan Data
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Data rute tersimpan aman di dalam SI-Card pelari secara
                  independen.
                </p>
              </div>
            </div>

            {/* Bottom Bento */}
            <div className="lg:col-span-3 bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-6 sm:gap-8 justify-between">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">
                  Live Results & Printout
                </h4>
                <p className="text-slate-500 leading-relaxed max-w-3xl">
                  Hasil cetak split-time langsung tersedia di garis finish dan
                  terintegrasi otomatis dengan layar pemantauan hasil real-time
                  di arena lomba.
                </p>
              </div>
              <div className="shrink-0">
                <div className="px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm">
                  100% Terintegrasi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
