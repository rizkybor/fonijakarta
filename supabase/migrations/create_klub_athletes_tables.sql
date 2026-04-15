CREATE TABLE IF NOT EXISTS public.klub (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    region TEXT NOT NULL,
    registered BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.athletes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    klub_id UUID REFERENCES public.klub(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    gender TEXT NOT NULL,
    class TEXT NOT NULL,
    nre INTEGER DEFAULT 0,
    wre INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Clear existing data
DELETE FROM public.athletes;
DELETE FROM public.klub;

-- Seed Klub Data
INSERT INTO public.klub (id, name, region, registered) VALUES
('d0000000-0000-0000-0000-000000000001', 'Monas Orienteering Club', 'Jakarta Pusat', true),
('d0000000-0000-0000-0000-000000000003', 'MKP Orienteering Club', 'Jakarta Pusat', true),
('d0000000-0000-0000-0000-000000000006', 'Gambir Navigation Team', 'Jakarta Pusat', true),
('d0000000-0000-0000-0000-000000000007', 'Menteng Orienteers', 'Jakarta Pusat', true),
('d0000000-0000-0000-0000-000000000008', 'Kemayoran Skyline OC', 'Jakarta Pusat', true),
('d0000000-0000-0000-0000-000000000009', 'Sawah Besar Sprint Squad', 'Jakarta Pusat', true),
('d0000000-0000-0000-0000-000000000010', 'Cempaka Putih Pathfinders', 'Jakarta Pusat', true),
('d0000000-0000-0000-0000-000000000011', 'Tanah Abang Urban OC', 'Jakarta Pusat', true),
('d0000000-0000-0000-0000-000000000012', 'Senen Orienteering Community', 'Jakarta Pusat', false),
('d0000000-0000-0000-0000-000000000013', 'Johar Baru Trailblazers', 'Jakarta Pusat', true),
('d0000000-0000-0000-0000-000000000002', 'Selatan OC', 'Jakarta Selatan', true);

-- Seed Athletes Data
INSERT INTO public.athletes (klub_id, name, gender, class, nre, wre) VALUES
('d0000000-0000-0000-0000-000000000001', 'Andi Saputra', 'L', 'M21', 1200, 450),
('d0000000-0000-0000-0000-000000000001', 'Budi Santoso', 'L', 'M21', 1050, 0),
('d0000000-0000-0000-0000-000000000001', 'Citra Kirana', 'P', 'W21', 1100, 320),
('d0000000-0000-0000-0000-000000000003', 'Fajar Nugraha', 'L', 'M21', 1150, 120),
('d0000000-0000-0000-0000-000000000003', 'Gita Permata', 'P', 'W21', 950, 0),
('d0000000-0000-0000-0000-000000000006', 'Hendra Wijaya', 'L', 'M40', 1400, 600),
('d0000000-0000-0000-0000-000000000006', 'Indah Lestari', 'P', 'W21', 1000, 0),
('d0000000-0000-0000-0000-000000000007', 'Joko Anwar', 'L', 'M21', 880, 0),
('d0000000-0000-0000-0000-000000000007', 'Karin Putri', 'P', 'W18', 750, 0),
('d0000000-0000-0000-0000-000000000008', 'Luthfi Hakim', 'L', 'M18', 920, 0),
('d0000000-0000-0000-0000-000000000009', 'Manda Sari', 'P', 'W21', 1120, 210),
('d0000000-0000-0000-0000-000000000009', 'Naufal Aziz', 'L', 'M21', 1080, 0),
('d0000000-0000-0000-0000-000000000010', 'Oki Setiawan', 'L', 'M21', 990, 0),
('d0000000-0000-0000-0000-000000000011', 'Putra Pratama', 'L', 'M35', 1250, 300),
('d0000000-0000-0000-0000-000000000011', 'Qonita Shaliha', 'P', 'W21', 890, 0),
('d0000000-0000-0000-0000-000000000012', 'Rizky Fauzi', 'L', 'M21', 0, 0),
('d0000000-0000-0000-0000-000000000013', 'Santi Rahayu', 'P', 'W35', 1020, 0),
('d0000000-0000-0000-0000-000000000013', 'Taufik Hidayat', 'L', 'M21', 1180, 410),
('d0000000-0000-0000-0000-000000000002', 'Deni Ramdani', 'L', 'M21', 980, 0),
('d0000000-0000-0000-0000-000000000002', 'Eka Putri', 'P', 'W21', 1300, 510);

-- Enable RLS
ALTER TABLE public.klub ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.athletes ENABLE ROW LEVEL SECURITY;

-- Create Policies for public read
CREATE POLICY "Izinkan semua orang membaca klub" 
ON public.klub FOR SELECT USING (true);

CREATE POLICY "Izinkan semua orang membaca athletes" 
ON public.athletes FOR SELECT USING (true);
