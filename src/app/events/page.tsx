import Image from "next/image";
import { Metadata } from "next";
import { Calendar, MapPin, ArrowRight, CheckCircle2, Flag, Navigation, BookOpen } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Jadwal Event & Kompetisi",
  description: "Kalender kegiatan resmi, latihan bersama, dan kejuaraan orienteering yang diselenggarakan di Provinsi DKI Jakarta.",
};

// Define Event Type
type AppEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  category: string;
  status: string;
  image: string | null;
  is_past: boolean;
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function EventsPage() {
  // Fetch events from Supabase
  const { data: eventsData, error } = await supabase
    .from('events')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Failed to fetch events:", error);
  }

  const allEvents = (eventsData || []) as AppEvent[];
  
  // Filter events based on is_past flag
  const upcomingEvents = allEvents.filter(evt => !evt.is_past);
  const pastEvents = allEvents.filter(evt => evt.is_past);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Minimalist Header */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-0.5 bg-foni-navy"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Jadwal & Agenda</span>
            <div className="w-8 h-0.5 bg-foni-navy"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">
            Event & <span className="text-foni-navy">Kompetisi</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            Kalender kegiatan resmi, latihan bersama, dan kejuaraan orienteering yang diselenggarakan di Provinsi DKI Jakarta.
          </p>
        </section>

        {/* 2. Upcoming Events - Rounded Cards */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Kegiatan Mendatang</h2>
            <div className="h-0.5 flex-1 bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-4xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-foni-navy group hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                <div className="h-60 relative overflow-hidden bg-slate-100 p-3">
                  <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden">
                    <Image
                      src={evt.image || '/logo/logofonidki.png'}
                      alt={evt.title}
                      fill
                      className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                  
                  {evt.status === 'registration_open' && (
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-foni-navy shadow-sm flex items-center gap-2 z-10">
                      <span className="w-2 h-2 rounded-full bg-foni-orange animate-pulse"></span>
                      Daftar Buka
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-bold shadow-sm backdrop-blur-md z-10 flex items-center gap-1.5 ${
                    evt.category === 'Workshop' 
                      ? 'bg-amber-500/90 text-white' 
                      : 'bg-blue-600/90 text-white'
                  }`}>
                    {evt.category === 'Workshop' ? <BookOpen className="w-3 h-3" /> : <Flag className="w-3 h-3" />}
                    {evt.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-foni-orange font-bold text-xs uppercase tracking-widest mb-4">
                    <Calendar className="w-4 h-4" />
                    {evt.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-foni-navy transition-colors line-clamp-2">
                    {evt.title}
                  </h3>
                  
                  <div className="space-y-4 mb-8 mt-auto">
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
                  
                  <button className={`cursor-pointer w-full py-4 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
                    evt.status === 'registration_open' 
                      ? 'bg-foni-navy text-white hover:bg-slate-800' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}>
                    {evt.status === 'registration_open' ? 'Daftar Sekarang' : 'Detail Info'} 
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Past Events - Clean List/Timeline */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Kegiatan Sebelumnya</h2>
            <div className="h-0.5 flex-1 bg-slate-200"></div>
          </div>
          
          <div className="bg-white rounded-4xl border border-slate-200 shadow-sm p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((evt) => (
                <div 
                  key={evt.id}
                  className="cursor-pointer group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-foni-navy hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2 text-xs font-bold uppercase tracking-widest">
                      <span className={`px-2 py-1 rounded-md text-[10px] ${
                        evt.category === 'Workshop' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {evt.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {evt.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-foni-navy transition-colors mb-4 sm:mb-0">
                      {evt.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-2 shrink-0">
                    <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600">
                      <MapPin className="w-3 h-3 text-foni-orange" /> {evt.location}
                    </div>
                    <div className="inline-flex items-center gap-2 bg-foni-navy/5 px-3 py-1.5 rounded-lg border border-foni-navy/10 text-xs font-bold text-foni-navy">
                      <Navigation className="w-3 h-3" /> {evt.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
