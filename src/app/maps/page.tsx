import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Search, Map as MapIcon, Maximize, Clock, FileText, ArrowRight, ChevronDown, Lock } from "lucide-react";
import { mapGallery } from "@/lib/dummyData";

export const metadata: Metadata = {
  title: "Galeri Peta IOF",
  description: "Koleksi peta teknikal berstandar IOF (International Orienteering Federation) yang dikelola resmi oleh FONI DKI Jakarta.",
};

export default function MapsPage() {
  // Group maps by region
  const groupedMaps = mapGallery.reduce((acc, mapItem) => {
    const region = mapItem.region || "Lainnya";
    if (!acc[region]) acc[region] = [];
    acc[region].push(mapItem);
    return acc;
  }, {} as Record<string, typeof mapGallery>);

  const regions = Object.keys(groupedMaps).sort();

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* 1. Minimalist Hero Section */}
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[var(--color-foni-navy)]"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Database Wilayah</span>
            <div className="w-8 h-[2px] bg-[var(--color-foni-navy)]"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1] max-w-4xl mx-auto">
            Galeri Peta <br />
            <span className="text-[var(--color-foni-navy)]">DKI Jakarta</span>
          </h1>
          
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Koleksi peta teknikal berstandar IOF yang dikelola resmi oleh Pengprov FONI DKI Jakarta.
          </p>
        </div>
      </section>

      {/* 2. Clean Filter Bar */}
      <section className="sticky top-[80px] lg:top-[96px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[var(--color-foni-navy)] transition-colors" />
            <input 
              type="text" 
              placeholder="Cari area..." 
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium focus:outline-none focus:border-[var(--color-foni-navy)] focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <div className="relative shrink-0">
              <select className="appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-bold cursor-pointer focus:outline-none focus:border-[var(--color-foni-navy)] transition-all">
                <option value="">Standar IOF</option>
                <option value="isspsom">ISSprOM (Sprint)</option>
                <option value="isom">ISOM (Forest)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            
            <div className="relative shrink-0">
              <select className="appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-bold cursor-pointer focus:outline-none focus:border-[var(--color-foni-navy)] transition-all">
                <option value="">Status Peta</option>
                <option value="active">Aktif</option>
                <option value="needs_update">Perlu Update</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Maps Grouped by Region (Horizontal Scroll Carousel) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {regions.map((region) => (
            <div key={region} className="mb-20 last:mb-0">
              {/* Region Header */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{region}</h2>
                <div className="h-[2px] flex-1 bg-slate-200"></div>
                <span className="text-sm font-bold text-slate-400">{groupedMaps[region].length} Peta</span>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
                {groupedMaps[region].map((mapItem) => (
                  <div 
                    key={mapItem.id} 
                    className="min-w-[320px] md:min-w-[400px] w-[85vw] md:w-[400px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200 flex flex-col hover:border-[var(--color-foni-navy)] transition-colors duration-300 group"
                  >
                    {/* Image Thumbnail */}
                    <div className="relative h-48 bg-slate-100 overflow-hidden rounded-t-2xl">
                      <Image 
                        src={mapItem.image} 
                        alt={mapItem.name} 
                        fill 
                        className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      
                      <div className="absolute top-3 left-3">
                        <div className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white rounded shadow-sm ${
                          mapItem.status === 'Active' 
                            ? 'bg-[var(--color-foni-navy)]' 
                            : 'bg-amber-500'
                        }`}>
                          {mapItem.status === 'Active' ? 'AKTIF' : 'UPDATE'}
                        </div>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="inline-block px-2 py-1 rounded bg-[var(--color-foni-orange)]/10 text-[var(--color-foni-orange)] font-bold text-[10px] uppercase tracking-widest mb-3 w-fit">
                        {mapItem.norm}
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 leading-tight mb-6 line-clamp-2">
                        {mapItem.name}
                      </h3>

                      {/* Technical Specs - Clean List */}
                      <div className="space-y-3 mb-8 mt-auto">
                        <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                          <span className="text-slate-500 flex items-center gap-2"><MapIcon className="w-4 h-4"/> Skala</span>
                          <span className="font-bold text-slate-900">{mapItem.scale}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                          <span className="text-slate-500 flex items-center gap-2"><FileText className="w-4 h-4"/> Kontur</span>
                          <span className="font-bold text-slate-900">{mapItem.contourInterval}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                          <span className="text-slate-500 flex items-center gap-2"><Maximize className="w-4 h-4"/> Area</span>
                          <span className="font-bold text-slate-900">{mapItem.areaSize}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-500 flex items-center gap-2"><Clock className="w-4 h-4"/> Tahun</span>
                          <span className="font-bold text-slate-900">{mapItem.year}</span>
                        </div>
                      </div>

                      {/* CTA Button in Card */}
                      <button className="w-full py-3 rounded-lg font-bold text-sm bg-slate-100 text-slate-700 hover:bg-[var(--color-foni-navy)] hover:text-white transition-colors flex items-center justify-center gap-2">
                        <Lock className="w-4 h-4" /> Minta Akses Peta
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Minimalist CTA Section */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--color-foni-navy)] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                Ajukan Pembuatan Peta Baru
              </h2>
              <p className="text-lg text-slate-300 font-light leading-relaxed">
                Tim Mapper tersertifikasi kami siap membantu instansi atau sekolah Anda membuat peta orienteering standar IOF.
              </p>
            </div>
            <Link 
              href="/contact"
              className="shrink-0 bg-white text-[var(--color-foni-navy)] px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-slate-100 transition-colors flex items-center gap-3"
            >
              Hubungi Kami <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
