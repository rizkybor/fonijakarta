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
  Medal,
} from "lucide-react";
import { partners } from "@/lib/dummyData";
import { supabase } from "@/lib/supabase";
import HeroVideo from "@/components/home/HeroVideo";

export const revalidate = 60;

export default async function Home() {
  type UpcomingEvent = {
    id: string;
    title: string;
    date: string;
    location: string;
    type: string;
    status: string;
    image: string | null;
  };

  const [
    { count: athletesCount },
    { count: clubsCount },
    { count: mapsCount },
    { count: eventsSuccessCount },
    { data: upcomingEventsData },
  ] = await Promise.all([
    supabase.from("athletes").select("id", { count: "exact", head: true }),
    supabase
      .from("klub")
      .select("id", { count: "exact", head: true })
      .eq("registered", true),
    supabase.from("galeripeta").select("id", { count: "exact", head: true }),
    supabase
      .from("events")
      .select("id", { count: "exact", head: true })
      .eq("is_past", true),
    supabase
      .from("events")
      .select("id,title,date,location,type,status,image")
      .eq("is_past", false)
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  const upcomingEvents = (upcomingEventsData || []) as UpcomingEvent[];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Centered Modern Floating */}
      <section className="pt-32 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-600 mb-6 sm:mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="w-2 h-2 rounded-full bg-foni-orange animate-pulse" />
           Situs Resmi FONI Pengprov DKI Jakarta
        </div>

        <h1 className="text-[3.5rem] leading-[0.9] sm:text-6xl md:text-7xl lg:text-[5rem] text-slate-900 tracking-tighter md:leading-[0.9] mb-6 px-2 uppercase transform -skew-x-6 drop-shadow-sm font-(family-name:--font-russo-one)">
          Satu{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-foni-navy via-blue-700 to-cyan-500 drop-shadow-md">
            Peta
          </span>{" "}
          <br className="hidden md:block" />
          Seribu{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-foni-orange to-red-600 drop-shadow-md">Sinergi</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-8 sm:mb-10 px-2">
         Menyediakan informasi seputar event & kompetisi bertaraf Daerah, Nasional serta Internasional, Klub klub terdaftar hingga berita berita perkembangan orienteering di DKI Jakarta maupun Nasional.
        </p>
       
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <Link
            href="/keanggotaan"
            className="w-full sm:w-auto bg-foni-navy text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 relative z-10 mb-16 md:mb-24">
        {/* Main Video */}
        <HeroVideo />

        {/* Stats Cards (Moved Below Video, Minimalist UI & Informative) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 relative z-20">
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 flex flex-col items-center text-center transition-all duration-300 group">
            <span className="inline-flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-xl md:rounded-2xl bg-blue-50 text-foni-navy mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-blue-100 transition-transform">
              <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
            </span>
            <div className="font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tighter">
              {athletesCount ?? 0}
              <span className="text-foni-orange text-[0.6em] align-super">
                +
              </span>
            </div>
            <div className="mt-2 text-[10px] md:text-xs font-bold text-slate-800 tracking-[0.05em] uppercase">
              Atlet Aktif
            </div>
            <p className="mt-2 md:mt-3 text-[10px] md:text-xs text-slate-500 leading-relaxed hidden sm:block">
              Berlatih dan terdaftar resmi di bawah binaan klub se-DKI Jakarta.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 flex flex-col items-center text-center transition-all duration-300 group">
            <span className="inline-flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-xl md:rounded-2xl bg-orange-50 text-foni-orange mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-orange-100 transition-transform">
              <Flag className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
            </span>
            <div className="font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tighter">
              {clubsCount ?? 0}
            </div>
            <div className="mt-2 text-[10px] md:text-xs font-bold text-slate-800 tracking-[0.05em] uppercase">
              Klub Klub Terdaftar
            </div>
            <p className="mt-2 md:mt-3 text-[10px] md:text-xs text-slate-500 leading-relaxed hidden sm:block">
              Klub orientering terdaftar di DKI yang tersebar di 5 wilayah kota
              administrasi.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 flex flex-col items-center text-center transition-all duration-300 group">
            <span className="inline-flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-xl md:rounded-2xl bg-blue-50 text-foni-navy mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-blue-100 transition-transform">
              <Map className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
            </span>
            <div className="font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tighter">
              {mapsCount ?? 0}
            </div>
            <div className="mt-2 text-[10px] md:text-xs font-bold text-slate-800 tracking-[0.05em] uppercase">
              Peta Peta di Wilayah DKI
            </div>
            <p className="mt-2 md:mt-3 text-[10px] md:text-xs text-slate-500 leading-relaxed hidden sm:block">
              Wilayah yang sudah dipetakan untuk kompetisi dan latihan rutin.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 flex flex-col items-center text-center transition-all duration-300 group">
            <span className="inline-flex w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-xl md:rounded-2xl bg-orange-50 text-foni-orange mb-4 md:mb-5 group-hover:scale-110 group-hover:bg-orange-100 transition-transform">
              <Trophy className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
            </span>
            <div className="font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-[1.1] tracking-tighter">
              {eventsSuccessCount ?? 0}
            </div>
            <div className="mt-2 text-[10px] md:text-xs font-bold text-slate-800 tracking-[0.05em] uppercase">
              Event & Kompetisi
            </div>
            <p className="mt-2 md:mt-3 text-[10px] md:text-xs text-slate-500 leading-relaxed hidden sm:block">
              Event maupun Kompetisi yang berhasil diselenggarakan oleh FONI DKI.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FONI DKI About (2 Column Section) */}
      <section className="py-16 sm:py-20 md:py-32 relative">
        {/* Parallax Section Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558978325-ead63dff09cb?q=80&w=2070&auto=format&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-white/85"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left Col: Image Mosaic/Visual */}
            <div className="relative w-full max-w-100 mx-auto lg:max-w-none">
              <div className="absolute top-4 sm:top-10 -left-4 sm:-left-10 w-24 sm:w-40 h-24 sm:h-40 bg-foni-orange/10 rounded-full blur-2xl sm:blur-3xl overflow-hidden"></div>
              <div className="absolute bottom-4 sm:bottom-10 -right-4 sm:-right-10 w-24 sm:w-40 h-24 sm:h-40 bg-foni-navy/10 rounded-full blur-2xl sm:blur-3xl overflow-hidden"></div>

              <div className="relative w-full aspect-4/5 md:aspect-square bg-slate-200 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="/logo/logo-foni.png"
                  alt="Tentang FONI DKI"
                  fill
                  className="object-contain p-6 sm:p-10 md:p-12"
                />

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-white/90 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg border border-white/20">
                  <div className="text-xl sm:text-3xl font-black text-foni-navy tracking-tighter">
                    2018
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Tahun Di Deklarasikan
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Text Content */}
            <div className="flex flex-col justify-center px-2 sm:px-0">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-foni-orange"></div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  Tentang Kami
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
                Menjadi Barometer <br />
                <span className="text-foni-navy">
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
                  "Pendataan Klub serta Pembinaan Atlet Berkelanjutan",
                  "Standarisasi Peta",
                  "Sistem Penyelenggaraan Kompetisi",
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
                className="w-fit bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-foni-navy transition-all flex items-center gap-3 group shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Susunan Pengurus{" "}
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Supported Logos */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 sm:mb-10">
          Didukung & Terafiliasi Dengan
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-4xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 sm:p-6 flex flex-col items-center justify-center gap-3 group hover:-translate-y-0.5"
            >
              <div className="w-full max-w-40 h-14 sm:h-16 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={220}
                  height={80}
                  className="w-auto h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  unoptimized
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-600 tracking-tight text-center group-hover:text-slate-900 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Upcoming Events (Rounded Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12 px-2 sm:px-0">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-foni-orange"></div>
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
            className="flex items-center gap-2 text-foni-navy font-bold hover:text-foni-orange transition-colors group bg-slate-50 px-6 py-3 rounded-full border border-slate-100 hover:border-slate-200 w-fit"
          >
            Semua Jadwal{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="min-w-[320px] md:min-w-95 w-[85vw] md:w-95 shrink-0 snap-start bg-white rounded-4xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
              >
                <div className="relative h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src={
                      evt.image ||
                      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop"
                    }
                    alt={evt.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {evt.status === "registration_open" && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-foni-navy shadow-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-foni-orange animate-pulse"></span>
                      Daftar Buka
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-foni-orange font-bold text-xs uppercase tracking-widest mb-4">
                    <Calendar className="w-4 h-4" /> {evt.date}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-foni-navy transition-colors line-clamp-2">
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
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-4xl p-10 text-center">
            <p className="text-sm font-bold text-slate-600">
              Belum ada kegiatan mendatang.
            </p>
          </div>
        )}
      </section>

      {/* 6. Achievement Showcase (FORNAS NTB) */}
      <section className="py-16 sm:py-24 bg-slate-900 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-foni-orange via-transparent to-transparent"></div>
        <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-slate-300 uppercase tracking-widest mb-6">
                <Medal className="w-4 h-4 text-amber-400" /> 
                Highlight Prestasi Puncak
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                Dominasi <br className="hidden lg:block"/> di <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">FORNAS NTB VIII 2025</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Pada ajang terbaru di Nusa Tenggara Barat, FONI DKI Jakarta kembali mengukuhkan dominasinya sebagai barometer orienteering nasional dengan perolehan medali yang sangat solid.
              </p>
            </div>

            {/* Right Content - Medals Display */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-4xl p-8 sm:p-10 shadow-2xl">
                
                {/* Total Medals */}
                <div className="text-center mb-10 pb-10 border-b border-white/10">
                  <div className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter">18</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Medali Keseluruhan</div>
                </div>

                {/* Medals Breakdown */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
                      <span className="text-3xl sm:text-4xl font-black text-amber-400">6</span>
                    </div>
                    <span className="text-sm font-bold text-white">Emas</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-300/20 border border-slate-300/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(203,213,225,0.1)]">
                      <span className="text-3xl sm:text-4xl font-black text-slate-300">6</span>
                    </div>
                    <span className="text-sm font-bold text-white">Perak</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-700/30 border border-orange-700/40 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(194,65,12,0.2)]">
                      <span className="text-3xl sm:text-4xl font-black text-orange-500">6</span>
                    </div>
                    <span className="text-sm font-bold text-white">Perunggu</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SPORTident Tech (Bento Box Layout) */}
      <section className="py-16 sm:py-20 md:py-32 relative mt-12 sm:mt-16 md:mt-24">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1714724983417-1211761da4bc?q=80&w=2074&auto=format&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-slate-50/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-12 px-2 sm:px-0">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200 text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 sm:mb-6 shadow-sm">
              <Timer className="w-3 h-3 sm:w-4 sm:h-4 text-foni-orange" />{" "}
              Teknologi Pewaktuan
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Berstandar Global
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Main Bento */}
            <div className="lg:col-span-2 rounded-4xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center group shadow-lg min-h-75 sm:min-h-100">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-15"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555696958-c5049b866f6f?q=80&w=2074&auto=format&fit=crop)' }}
              ></div>
              <div className="absolute inset-0 bg-[#0F172A]/90 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-linear-to-br from-[#0F172A]/95 via-[#1E3A8A]/80 to-[#1E3A8A]/90"></div>
              
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
              <div className="bg-white rounded-4xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-foni-orange" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Akurasi Milidetik
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Pencatatan presisi tinggi tanpa delay saat pelari menyentuh
                  titik kontrol.
                </p>
              </div>

              <div className="bg-white rounded-4xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex-1">
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
            <div className="lg:col-span-3 bg-white rounded-4xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-6 sm:gap-8 justify-between">
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
