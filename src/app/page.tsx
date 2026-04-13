import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Map, Users, Trophy, Flag, Calendar, MapPin, Activity, ShieldCheck, Timer } from "lucide-react";
import { siteStats, partners, upcomingEvents } from "@/lib/dummyData";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-16">
      {/* 1. Hero Section - Centered Modern Floating */}
      <section className="pt-32 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="w-2 h-2 rounded-full bg-[var(--color-foni-orange)] animate-pulse" />
          Pengurus Provinsi DKI Jakarta
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
          Federasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-foni-navy)] to-blue-600">Orienteering</span> <br className="hidden md:block" />
          Nasional <span className="text-[var(--color-foni-orange)]">Indonesia</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
          Membangun dan mengembangkan olahraga orienteering di Ibukota. Cerdas bernavigasi, tangguh berlari, dan menjunjung tinggi sportivitas.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/keanggotaan" 
            className="w-full sm:w-auto bg-[var(--color-foni-navy)] text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            Jelajahi Klub <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
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
      <section className="max-w-7xl mx-auto px-6 mt-16 relative z-10">
        {/* Main Video */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 group">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 group-hover:scale-105"
          >
            {/* Menggunakan placeholder video alam/hutan sebagai representasi orienteering */}
            <source src="https://cdn.pixabay.com/video/2016/08/22/4747-183787508_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply pointer-events-none"></div>
        </div>

        {/* Overlapping Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 -mt-12 md:-mt-20 px-4 md:px-12 relative z-20">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[var(--color-foni-navy)] transition-colors">
              <Users className="w-6 h-6 text-[var(--color-foni-navy)] group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-1">
              {siteStats.athletes}<span className="text-[var(--color-foni-orange)]">+</span>
            </div>
            <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Atlet Aktif</div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-[var(--color-foni-orange)] transition-colors">
              <Flag className="w-6 h-6 text-[var(--color-foni-orange)] group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-1">{siteStats.clubs}</div>
            <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Klub FONI</div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-[var(--color-foni-navy)] transition-colors">
              <Map className="w-6 h-6 text-[var(--color-foni-navy)] group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-1">{siteStats.maps}</div>
            <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Peta IOF</div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-[var(--color-foni-orange)] transition-colors">
              <Trophy className="w-6 h-6 text-[var(--color-foni-orange)] group-hover:text-white transition-colors" />
            </div>
            <div className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-1">{siteStats.events}</div>
            <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Event Sukses</div>
          </div>
        </div>
      </section>

      {/* 3. FONI DKI About (2 Column Section) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
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
                  <div className="text-3xl font-black text-[var(--color-foni-navy)] tracking-tighter">2023</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Tahun Berdiri</div>
                </div>
              </div>
            </div>

            {/* Right Col: Text Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-[var(--color-foni-orange)]"></div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tentang Kami</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
                Menjadi Barometer <br />
                <span className="text-[var(--color-foni-navy)]">Orienteering Nasional</span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                Federasi Orienteering Nasional Indonesia (FONI) Pengurus Provinsi DKI Jakarta adalah induk organisasi olahraga orienteering di tingkat ibu kota yang bernaung di bawah KORMI Nasional.
              </p>
              
              <p className="text-lg text-slate-500 leading-relaxed mb-8 font-light">
                Kami berkomitmen untuk terus mempopulerkan olahraga navigasi ini ke berbagai kalangan guna mencetak atlet tangguh yang cerdas bernavigasi.
              </p>
              
              <ul className="space-y-4 mb-10">
                {["Pembinaan Atlet Berkelanjutan", "Standarisasi Peta IOF", "Sistem Kompetisi Profesional"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
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
                Susunan Pengurus <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Supported Logos */}
      <section className="py-24 max-w-7xl mx-auto px-6">
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

      {/* 4. Upcoming Events (Rounded Cards) */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[var(--color-foni-orange)]"></div>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Agenda</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Kegiatan Mendatang</h2>
          </div>
          <Link 
            href="/events" 
            className="flex items-center gap-2 text-[var(--color-foni-navy)] font-bold hover:text-[var(--color-foni-orange)] transition-colors group bg-slate-50 px-6 py-3 rounded-full border border-slate-100 hover:border-slate-200 w-fit"
          >
            Semua Jadwal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingEvents.map(evt => (
            <div key={evt.id} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1">
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <Image src={evt.image} alt={evt.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                {evt.status === 'registration_open' && (
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
                    <span className="font-medium line-clamp-1">{evt.location}</span>
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

      {/* 5. SPORTident Tech (Bento Box Layout) */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 lg:p-16 border border-slate-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 shadow-sm">
              <Timer className="w-4 h-4 text-[var(--color-foni-orange)]" /> Teknologi Pewaktuan
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Berstandar Global</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Bento */}
            <div className="lg:col-span-2 bg-[var(--color-foni-navy)] rounded-[2rem] p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-center group shadow-lg">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 z-10 tracking-tight">SPORTident Official</h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md z-10">
                Memastikan akurasi split-time presisi tinggi, hasil instan, dan keadilan mutlak bagi seluruh peserta kompetisi orienteering.
              </p>
              
              {/* Decorative Station */}
              <div className="absolute bottom-[-15%] right-[-5%] w-64 h-64 bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-105 transition-transform duration-700 shadow-2xl">
                <div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center bg-slate-900/50">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-[0_0_30px_rgba(239,68,68,1)]"></div>
                </div>
              </div>
            </div>

            {/* Small Bentos */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-[var(--color-foni-orange)]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Akurasi Milidetik</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Pencatatan presisi tinggi tanpa delay saat pelari menyentuh titik kontrol.</p>
              </div>
              
              <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex-1">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Keamanan Data</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Data rute tersimpan aman di dalam SI-Card pelari secara independen.</p>
              </div>
            </div>

            {/* Bottom Bento */}
            <div className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Live Results & Printout</h4>
                <p className="text-slate-500 leading-relaxed max-w-3xl">
                  Hasil cetak split-time langsung tersedia di garis finish dan terintegrasi otomatis dengan layar pemantauan hasil real-time di arena lomba.
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
