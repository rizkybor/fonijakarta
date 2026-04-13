import { Metadata } from "next";
import { MapPin, Phone, Mail, Send, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Pusat bantuan dan informasi kontak Sekretariat FONI Provinsi DKI Jakarta.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Minimalist Header */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[var(--color-foni-orange)]"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pusat Bantuan</span>
            <div className="w-8 h-[2px] bg-[var(--color-foni-orange)]"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">
            Hubungi <span className="text-[var(--color-foni-navy)]">Kami</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
            Punya pertanyaan seputar orienteering di Jakarta? Ingin mendaftarkan klub Anda? Jangan ragu untuk mengirim pesan kepada kami.
          </p>
        </section>

        {/* 2. Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column: Contact Info & Map (Takes 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Info Bento */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Informasi Kontak</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-foni-navy)]/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--color-foni-navy)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-widest">Sekretariat</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Gedung KORMI Provinsi DKI Jakarta<br />
                      Jl. Tanah Abang I, Petojo Selatan, Gambir<br />
                      Jakarta Pusat 10160
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-foni-orange)]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[var(--color-foni-orange)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-widest">Telepon / WA</h3>
                    <p className="text-slate-500 text-sm font-mono">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-widest">Email</h3>
                    <p className="text-slate-500 text-sm font-mono">fonijakarta@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap gap-3 sm:gap-4">
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-bold text-slate-500 hover:text-[var(--color-foni-navy)] hover:bg-[var(--color-foni-navy)]/5 transition-all">
                  Instagram <ExternalLink className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-bold text-slate-500 hover:text-[var(--color-foni-navy)] hover:bg-[var(--color-foni-navy)]/5 transition-all">
                  Facebook <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Map Bento */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 h-64 md:h-80 relative bg-slate-100 group">
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6212586617066!2d106.8166504!3d-6.1814234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42d2b512c8b%3A0xc39f82d2a450ed18!2sJl.%20Tanah%20Abang%20I%2C%20Petojo%20Sel.%2C%20Kec.%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Sekretariat FONI DKI Jakarta"
                className="absolute inset-0 grayscale-[0.2]"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Form (Takes 3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Kirim Pesan Langsung</h2>
            <form className="space-y-6" action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    defaultValue="" 
                    placeholder="Masukkan nama Anda"
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[var(--color-foni-navy)]/20 focus:border-[var(--color-foni-navy)] outline-none transition-all text-slate-700 font-medium"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Alamat Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    defaultValue="" 
                    placeholder="nama@email.com"
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[var(--color-foni-navy)]/20 focus:border-[var(--color-foni-navy)] outline-none transition-all text-slate-700 font-medium"
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subjek Pertanyaan</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  defaultValue="" 
                  placeholder="Apa yang ingin Anda tanyakan?"
                  className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[var(--color-foni-navy)]/20 focus:border-[var(--color-foni-navy)] outline-none transition-all text-slate-700 font-medium"
                  required
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pesan</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6}
                  defaultValue="" 
                  placeholder="Tulis pesan detail Anda di sini..."
                  className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-100 focus:bg-white focus:ring-2 focus:ring-[var(--color-foni-navy)]/20 focus:border-[var(--color-foni-navy)] outline-none transition-all text-slate-700 font-medium resize-none"
                  required
                ></textarea>
              </div>
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[var(--color-foni-navy)] text-white font-bold px-10 py-4 rounded-2xl hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3"
                >
                  Kirim Pesan <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
