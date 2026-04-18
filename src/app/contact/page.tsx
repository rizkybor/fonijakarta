import { Metadata } from "next";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

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
            <div className="w-8 h-0.5 bg-foni-orange"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pusat Bantuan</span>
            <div className="w-8 h-0.5 bg-foni-orange"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1]">
            Hubungi <span className="text-foni-navy">Kami</span>
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
                  <div className="w-12 h-12 rounded-2xl bg-foni-navy/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-foni-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-widest">Sekretariat</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      GOR Cendrawasih, Bambu larangan pengasingan<br />
                      RT.9/RW.8, Kalideres, Kec. Kalideres<br />
                      Kota Jakarta Barat, DKI Jakarta (11730)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-foni-orange/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-foni-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-widest">Telepon / WA</h3>
                    <p className="text-slate-500 text-sm font-mono">+62 812-3456-7890 / +62 896-0292-1403</p>
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
                <a href="https://www.instagram.com/foni_jakarta/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-bold text-slate-500 hover:text-foni-navy hover:bg-foni-navy/5 transition-all">
                  Instagram <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Map Bento */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 h-64 md:h-80 relative bg-slate-100 group">
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4214.840799504154!2d106.71731188090908!3d-6.14289517797142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f80185d6b2d5%3A0x6f17ae343162a09c!2sGOR%20Cendrawasih!5e1!3m2!1sen!2sid!4v1776498143403!5m2!1sen!2sid" 
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
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
