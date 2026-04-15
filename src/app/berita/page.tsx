import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, ArrowUpRight, TrendingUp, Sparkles, Tag } from "lucide-react";
import { sponsors } from "@/lib/dummyData";
import { supabase } from "@/lib/supabase";

// Define the Berita type
type Berita = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  featured: boolean;
  published_at: string;
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BeritaPage() {
  // Fetch news from Supabase
  const { data: newsArticles } = await supabase
    .from('berita')
    .select('*')
    .order('published_at', { ascending: false });

  const articles = (newsArticles || []) as Berita[];
  const featuredNews = articles.filter(news => news.featured);
  const regularNews = articles.filter(news => !news.featured);

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* 1. Header Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-600 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-[var(--color-foni-orange)]" />
          Kabar Terbaru
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
          Pusat <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-foni-navy)] to-blue-600">Berita</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          Informasi terkini seputar kegiatan, prestasi, dan perkembangan olahraga orienteering di DKI Jakarta.
        </p>
      </section>

      {/* 2. Featured News Carousel */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px] bg-[var(--color-foni-orange)]"></div>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Sorotan Utama</span>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {featuredNews.map((news) => (
            <Link 
              href={`/berita/${news.slug}`} 
              key={news.id}
              className="min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row group snap-center"
            >
              <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto h-64 md:h-[400px] overflow-hidden bg-slate-100">
                <Image 
                  src={news.image} 
                  alt={news.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-[var(--color-foni-navy)] shadow-sm">
                  {news.category}
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-slate-400 text-sm font-bold mb-4">
                  <Calendar className="w-4 h-4 text-[var(--color-foni-orange)]" />
                  {formatDate(news.published_at)}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-[var(--color-foni-navy)] transition-colors line-clamp-3">
                  {news.title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[var(--color-foni-navy)] font-bold text-sm">
                  Baca Selengkapnya <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Main Content & Sidebar Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: News List */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[2px] bg-blue-600"></div>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Berita Lainnya</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {regularNews.map((news) => (
                <Link 
                  href={`/berita/${news.slug}`} 
                  key={news.id}
                  className="bg-white rounded-[2rem] border border-slate-200 p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 group items-center"
                >
                  <div className="relative w-full sm:w-48 aspect-video rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                    <Image 
                      src={news.image} 
                      alt={news.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold text-[var(--color-foni-navy)] uppercase tracking-wider">
                        {news.category}
                      </span>
                      <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> {formatDate(news.published_at)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-10 text-center">
              <button className="bg-white border border-slate-200 text-slate-600 px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                Muat Lebih Banyak
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar / Sponsorship Space */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Sponsor Banner Box */}
            <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm text-center relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="w-16 h-16 mx-auto bg-[var(--color-foni-orange)]/10 rounded-2xl flex items-center justify-center mb-6 text-[var(--color-foni-orange)]">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Space Promosi</h3>
              <p className="text-sm text-slate-500 mb-6">
                Jangkau ribuan audiens aktif dan dukung perkembangan olahraga orienteering di DKI Jakarta.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[var(--color-foni-navy)] px-6 py-3 rounded-full hover:bg-slate-800 transition-colors">
                Hubungi Kami <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            {/* Categories / Tags Widget */}
            <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Tag className="w-5 h-5 text-slate-400" />
                <h3 className="text-lg font-bold text-slate-900">Kategori</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Event", "Prestasi", "Pelatihan", "Sosialisasi", "Pemetaan"].map((cat) => (
                  <Link 
                    key={cat} 
                    href="#"
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Official Sponsor Grid */}
            <div className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">Mitra & Sponsor</h3>
              <div className="grid grid-cols-2 gap-4">
                {sponsors.map((sp) => (
                  <Link 
                    key={sp.id} 
                    href={sp.link}
                    className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-4 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all grayscale hover:grayscale-0"
                    title={sp.name}
                  >
                    <div className="text-xs font-bold text-slate-400 tracking-widest uppercase text-center">
                      {sp.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
