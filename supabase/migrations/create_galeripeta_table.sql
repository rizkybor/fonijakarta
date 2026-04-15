CREATE TABLE IF NOT EXISTS public.galeripeta (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    region TEXT NOT NULL,
    scale TEXT NOT NULL,
    contour_interval TEXT NOT NULL,
    year TEXT NOT NULL,
    norm TEXT NOT NULL,
    area_size TEXT NOT NULL,
    status TEXT NOT NULL,
    image TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Hapus data dummy sebelumnya jika ada untuk menghindari duplikat
DELETE FROM public.galeripeta;

-- Seed Data Dummy
INSERT INTO public.galeripeta (name, region, scale, contour_interval, year, norm, area_size, status, image) VALUES
('Taman Margasatwa Ragunan', 'Jakarta Selatan', '1:4.000', '2m', '2023', 'ISSprOM 2019-2', '1.4 km²', 'Active', 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop'),
('Hutan Kota Srengseng', 'Jakarta Barat', '1:5.000', '2.5m', '2022', 'ISOM 2017-2', '0.8 km²', 'Needs Update', 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop'),
('Bumi Perkemahan Cibubur', 'Jakarta Timur', '1:10.000', '5m', '2025', 'ISOM 2017-2', '2.1 km²', 'Active', 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1976&auto=format&fit=crop'),
('Kompleks Gelora Bung Karno', 'Jakarta Pusat', '1:4.000', '2m', '2024', 'ISSprOM 2019-2', '1.2 km²', 'Active', 'https://images.unsplash.com/photo-1555696958-c5049b866f6f?q=80&w=1974&auto=format&fit=crop'),
('Hutan Kota UI Depok', 'Jakarta Selatan', '1:10.000', '5m', '2021', 'ISOM 2017-2', '3.5 km²', 'Needs Update', 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop');

-- Aktifkan RLS di tabel galeripeta
ALTER TABLE public.galeripeta ENABLE ROW LEVEL SECURITY;

-- Buat policy agar semua orang bisa membaca (SELECT) data galeripeta
CREATE POLICY "Izinkan semua orang membaca galeripeta" 
ON public.galeripeta 
FOR SELECT 
USING (true);