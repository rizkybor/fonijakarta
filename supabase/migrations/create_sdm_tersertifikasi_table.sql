CREATE TABLE IF NOT EXISTS public.sdm_tersertifikasi (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    region TEXT NOT NULL,
    role TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    club TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Clear existing data
DELETE FROM public.sdm_tersertifikasi;

-- Seed data sesuai yang tampil di UI saat ini
INSERT INTO public.sdm_tersertifikasi (region, role, name, phone, club) VALUES
('Jakarta Pusat', 'mapper', 'Agus', '0812-xxx', 'Monas OC'),
('Jakarta Pusat', 'planner', 'Beni', '0813-xxx', 'Pusat Orienteering'),
('Jakarta Pusat', 'adviser', 'Citra', '0814-xxx', 'Monas OC'),

('Jakarta Selatan', 'mapper', 'Deni', '0815-xxx', 'Selatan OC'),
('Jakarta Selatan', 'mapper', 'Dina', '0816-xxx', 'Ragunan Club'),
('Jakarta Selatan', 'planner', 'Eko', '0817-xxx', 'Selatan OC'),

('Jakarta Timur', 'mapper', 'Fajar', '0818-xxx', 'Timur OC'),
('Jakarta Timur', 'planner', 'Gilang', '0819-xxx', 'Timur OC'),
('Jakarta Timur', 'adviser', 'Hadi', '0820-xxx', 'Cibubur OC'),

('Jakarta Barat', 'planner', 'Iwan', '0821-xxx', 'Barat OC'),

('Jakarta Utara', 'mapper', 'Joko', '0822-xxx', 'Utara OC');

-- Enable RLS
ALTER TABLE public.sdm_tersertifikasi ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Izinkan semua orang membaca sdm_tersertifikasi"
ON public.sdm_tersertifikasi
FOR SELECT
USING (true);

