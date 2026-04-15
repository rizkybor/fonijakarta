import Link from 'next/link';
import { Compass, Map, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 pt-24">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 text-center relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-foni-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-foni-navy/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-foni-navy/5 rounded-full animate-ping"></div>
            <div className="absolute inset-2 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-slate-50">
              <Compass className="w-12 h-12 text-foni-orange" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
              <Map className="w-5 h-5 text-foni-navy" />
            </div>
          </div>

          <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">404</h1>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Ups! Anda Keluar Peta</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Sepertinya Anda kehilangan orientasi. Halaman yang Anda tuju tidak dapat ditemukan dalam area peta kami, atau mungkin kontrol poinnya sudah dipindahkan.
          </p>

          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-foni-navy text-white px-8 py-4 rounded-full font-bold hover:bg-[var(--color-foni-stardust)] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-foni-navy/30 w-full"
          >
            <Home className="w-5 h-5" /> Kembali ke Titik Start
          </Link>
        </div>
      </div>
    </div>
  );
}
