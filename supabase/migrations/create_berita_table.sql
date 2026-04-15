CREATE TABLE IF NOT EXISTS public.berita (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT,
    category TEXT NOT NULL,
    image TEXT NOT NULL,
    featured BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ DEFAULT now(),
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Hapus data dummy sebelumnya jika ada untuk menghindari error duplikat
DELETE FROM public.berita WHERE slug IN (
    'tim-foni-dki-optimis-raih-emas-di-fornas-vii',
    'workshop-pemetaan-standar-isom-2017-2',
    'jakarta-orienteering-series-seri-3',
    'sosialisasi-orienteering-sma-dki',
    'pemutakhiran-peta-hutan-kota-srengseng'
);

-- Seed Data Dummy
INSERT INTO public.berita (slug, title, excerpt, content, category, image, featured, published_at) VALUES
('tim-foni-dki-optimis-raih-emas-di-fornas-vii', 'Tim FONI DKI Jakarta Optimis Raih Emas di FORNAS VII', 'Persiapan intensif terus dilakukan oleh tim pelatda DKI Jakarta menjelang perhelatan Festival Olahraga Rekreasi Nasional (FORNAS) VII di Jawa Barat.', '<p>Persiapan intensif terus dilakukan oleh tim pelatda DKI Jakarta menjelang perhelatan Festival Olahraga Rekreasi Nasional (FORNAS) VII di Jawa Barat. Latihan fisik, teknik navigasi, dan simulasi pertandingan rutin diadakan di berbagai medan latihan, baik taman kota maupun hutan. Target medali emas menjadi fokus utama demi mengharumkan nama DKI Jakarta di kancah nasional.</p>', 'Prestasi', 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop', true, '2025-10-12 10:00:00+07'),
('workshop-pemetaan-standar-isom-2017-2', 'Workshop Pemetaan Standar ISOM 2017-2 Berhasil Diselenggarakan', 'Lebih dari 40 peserta dari berbagai klub orienteering se-Jakarta antusias mengikuti pelatihan pemetaan berstandar internasional yang dipandu oleh ahli dari IOF.', '<p>Workshop ini menghadirkan ahli pemetaan dari IOF untuk memberikan materi teori dan praktik langsung di lapangan. Para peserta dibekali dengan pengetahuan mendalam mengenai simbol-simbol ISOM 2017-2, teknik survei lapangan menggunakan perangkat digital, dan proses digitasi peta. Diharapkan dengan adanya workshop ini, kualitas peta orienteering di DKI Jakarta akan semakin meningkat dan memenuhi standar internasional.</p>', 'Pelatihan', 'https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1974&auto=format&fit=crop', true, '2025-09-05 09:00:00+07'),
('jakarta-orienteering-series-seri-3', 'Jakarta Orienteering Series: Seri 3 Digelar di Monas', 'Ribuan masyarakat Jakarta memadati kawasan Monas untuk mencoba olahraga navigasi darat dalam gelaran seri ketiga JOS tahun ini.', '<p>Kawasan Monumen Nasional (Monas) disulap menjadi arena orienteering yang menantang. Seri ke-3 Jakarta Orienteering Series (JOS) kali ini tidak hanya diikuti oleh atlet profesional, tetapi juga terbuka untuk masyarakat umum kategori pemula (fun). Antusiasme luar biasa terlihat dari jumlah peserta yang mencapai ribuan orang, membuktikan bahwa olahraga orienteering semakin digemari di ibu kota.</p>', 'Event', 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop', false, '2025-08-28 08:00:00+07'),
('sosialisasi-orienteering-sma-dki', 'Sosialisasi Orienteering di Sekolah Menengah Atas DKI Jakarta', 'FONI DKI Jakarta memulai program "Orienteering Goes to School" untuk mengenalkan olahraga cerdas ini ke kalangan pelajar menengah atas.', '<p>Program "Orienteering Goes to School" bertujuan untuk menjaring bibit-bibit atlet muda potensial dari tingkat sekolah. Tim FONI DKI Jakarta mengunjungi berbagai SMA di 5 wilayah kota administrasi untuk memberikan edukasi dasar mengenai navigasi darat, pengenalan kompas, dan simulasi mini orienteering di area sekolah. Program ini diharapkan dapat mencetak generasi baru atlet orienteering berprestasi.</p>', 'Sosialisasi', 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop', false, '2025-08-15 13:00:00+07'),
('pemutakhiran-peta-hutan-kota-srengseng', 'Pemutakhiran Peta Hutan Kota Srengseng Rampung', 'Kabar gembira bagi para orienteer, peta Hutan Kota Srengseng telah diperbarui dengan standar ISSprOM terbaru dan siap digunakan untuk latihan.', '<p>Proses pemutakhiran peta Hutan Kota Srengseng memakan waktu kurang lebih dua bulan. Tim pemetaan FONI DKI Jakarta bekerja keras melakukan survei ulang secara menyeluruh untuk memastikan akurasi data vegetasi, kontur tanah, dan fitur buatan manusia. Peta terbaru ini telah menggunakan standar ISSprOM 2019-2 dan dapat diunduh secara gratis oleh anggota klub terdaftar.</p>', 'Pemetaan', 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop', false, '2025-08-02 15:00:00+07')
ON CONFLICT (slug) DO NOTHING;
