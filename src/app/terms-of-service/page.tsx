import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Ketentuan layanan resmi situs FONI Pengprov DKI Jakarta. Membahas penggunaan situs, tanggung jawab, dan batasan layanan.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-0.5 bg-foni-orange"></div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 leading-relaxed">
            Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="bg-slate-900 rounded-4xl border border-slate-200 shadow-sm p-6 md:p-10">
          <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-foni-navy prose-a:no-underline hover:prose-a:underline">
            <p>
              Ketentuan ini mengatur penggunaan situs FONI Pengprov DKI Jakarta. Dengan mengakses atau menggunakan situs ini, Anda dianggap memahami dan menyetujui ketentuan berikut.
            </p>

            <h2>1. Ruang Lingkup Layanan</h2>
            <p>
              Situs ini menyediakan informasi seputar organisasi, kegiatan/event, galeri peta, berita, dan layanan terkait orienteering di DKI Jakarta. Informasi dapat berubah sewaktu-waktu.
            </p>

            <h2>2. Akurasi Informasi</h2>
            <p>
              Kami berupaya menjaga informasi tetap akurat dan terbaru. Namun, kami tidak menjamin seluruh konten selalu lengkap, mutakhir, atau bebas dari kesalahan.
            </p>

            <h2>3. Hak Kekayaan Intelektual</h2>
            <p>
              Konten situs (termasuk teks, desain, logo, dan materi visual) dilindungi oleh hak kekayaan intelektual milik FONI Pengprov DKI Jakarta atau pihak terkait. Dilarang menggunakan, menyalin, atau mendistribusikan tanpa izin tertulis.
            </p>

            <h2>4. Perilaku Pengguna</h2>
            <p>
              Anda setuju untuk tidak menggunakan situs ini untuk tindakan yang melanggar hukum, mengganggu layanan, mencoba mengakses sistem tanpa otorisasi, atau menyebarkan konten berbahaya.
            </p>

            <h2>5. Tautan Pihak Ketiga</h2>
            <p>
              Situs dapat memuat tautan ke situs pihak ketiga. Kami tidak bertanggung jawab atas konten, kebijakan, atau praktik dari situs pihak ketiga tersebut.
            </p>

            <h2>6. Batasan Tanggung Jawab</h2>
            <p>
              Sejauh diizinkan oleh hukum yang berlaku, FONI Pengprov DKI Jakarta tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan situs atau ketergantungan pada informasi di dalamnya.
            </p>

            <h2>7. Perubahan Ketentuan</h2>
            <p>
              Ketentuan ini dapat diperbarui dari waktu ke waktu. Versi terbaru akan ditampilkan pada halaman ini dengan tanggal pembaruan.
            </p>

            <h2>8. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan terkait ketentuan layanan, silakan hubungi kami melalui halaman{" "}
              <Link href="/contact">Contact</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

