-- ============================================
-- STEP 1: Drop tabel lama (beserta policy & RLS)
-- ============================================
DROP TABLE IF EXISTS public.galeripeta;

-- ============================================
-- STEP 2: Buat tabel baru dengan skema lengkap
-- ============================================
CREATE TABLE public.galeripeta (
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
    software TEXT,
    notes TEXT,
    contact_name TEXT,
    contact_phone TEXT,
    contact_email TEXT,
    contact_instagram TEXT,
    contact_twitter TEXT,
    contact_facebook TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- STEP 3: Insert data
-- ============================================
INSERT INTO public.galeripeta 
  (name, region, scale, contour_interval, year, norm, area_size, status, image, software, notes, contact_name, contact_phone, contact_email, contact_instagram, contact_twitter, contact_facebook)
VALUES
  ('Taman Lapangan Banteng', 'Jakarta Pusat', '1:2.000', '2m', '2024', 'ISSprOM 2019-2', '0.12 km²', 'Active', 'src/assets/maps/maplapangan-banteng.png', 'OOM', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  ('SMAN 110 Jakarta Utara', 'Jakarta Utara', '1:1.000', '1m', '2024', 'ISSprOM 2019-2', '0.02 km²', 'Active', 'src/assets/maps/map_sman_110_jakarta.png', 'OOM', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  ('Petogogan (SMKN 29 Jakarta)', 'Jakarta Selatan', '1:1.000', '1m', '2024', 'ISSprOM 2019-2', '0.03 km²', 'Active', 'src/assets/maps/map_petogogan_smkn_29_jakarta.png', 'OOM', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  ('Setu Babakan', 'Jakarta Selatan', '1:4.000', '2m', '2024', 'ISSprOM 2019-2', '0.32 km²', 'Active', 'src/assets/maps/map_setu_babakan.png', 'OOM', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  ('UIN Jakarta', 'Jakarta Selatan', '1:2.000', '2m', '2025', 'ISSprOM 2019-2', '0.40 km²', 'Active', 'src/assets/maps/map_uin_jakarta.png', 'OOM', 'Tahun Pembuatan Ulang (Remake)', NULL, NULL, NULL, NULL, NULL, NULL),
  ('Ancol', 'Jakarta Utara', '1:4.000', '2m', '2025', 'ISSprOM 2019-2', '1.5 km²', 'Active', 'src/assets/maps/map_ancol.png', 'OOM', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
  ('SMAN 70 Jakarta', 'Jakarta Selatan', '1:1.000', '1m', '2026', 'ISSprOM 2019-2', '0.04 km²', 'Active', 'src/assets/maps/map_sman_70_jakarta.png', 'OOM', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ============================================
-- STEP 4: Aktifkan RLS & buat policy
-- ============================================
ALTER TABLE public.galeripeta ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Izinkan semua orang membaca galeripeta" 
ON public.galeripeta 
FOR SELECT 
USING (true);