import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kebijakan privasi resmi situs FONI Pengprov DKI Jakarta. Menjelaskan pengumpulan, penggunaan, dan perlindungan data.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-slate-500 leading-relaxed">
            Terakhir diperbarui:{" "}
            {new Date().toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="bg-slate-900 rounded-4xl border border-slate-200 shadow-sm p-6 md:p-10">
          <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-foni-navy prose-a:no-underline hover:prose-a:underline">
            <p>
              Kebijakan privasi ini menjelaskan bagaimana FONI Pengprov DKI Jakarta mengelola informasi ketika Anda menggunakan situs ini.
            </p>

            <h2>1. Data yang Kami Kumpulkan</h2>
            <p>
              Situs ini dapat memproses data yang Anda berikan saat berinteraksi, misalnya melalui formulir contact atau email, termasuk perihal (subject) dan isi email yang Anda tulis.
            </p>

            <h2>2. Penggunaan Data</h2>
            <p>
              Data digunakan untuk merespons pertanyaan, menyediakan informasi yang relevan, dan meningkatkan kualitas layanan serta pengalaman pengguna.
            </p>

            <h2>3. Cookie dan Analitik</h2>
            <p>
              Situs dapat menggunakan cookie atau teknologi serupa untuk kebutuhan fungsional dan pengukuran performa. Jika kami menambahkan analitik pihak ketiga, kebijakan ini akan diperbarui.
            </p>

            <h2>4. Berbagi Data</h2>
            <p>
              Kami tidak menjual data pribadi. Data dapat dibagikan hanya jika diperlukan untuk pemenuhan layanan, kepatuhan hukum, atau dengan persetujuan Anda.
            </p>

            <h2>5. Keamanan</h2>
            <p>
              Kami menerapkan langkah-langkah yang wajar untuk melindungi data. Namun, tidak ada metode transmisi atau penyimpanan yang 100% aman.
            </p>

            <h2>6. Retensi</h2>
            <p>
              Data akan disimpan selama diperlukan untuk tujuan yang dijelaskan, atau sesuai kewajiban hukum yang berlaku.
            </p>

            <h2>7. Hak Anda</h2>
            <p>
              Anda dapat meminta klarifikasi, pembaruan, atau penghapusan informasi yang relevan dengan menghubungi kami. Kami akan menangani permintaan secara wajar sesuai ketentuan yang berlaku.
            </p>

            <h2>8. Hubungi Kami</h2>
            <p>
              Untuk pertanyaan terkait privasi, silakan hubungi kami melalui halaman{" "}
              <Link href="/contact">Contact</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

