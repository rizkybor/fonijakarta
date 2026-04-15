CREATE TABLE IF NOT EXISTS public.events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    location TEXT NOT NULL,
    type TEXT NOT NULL,
    category TEXT NOT NULL,
    status TEXT NOT NULL,
    image TEXT,
    is_past BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Hapus data lama jika ada untuk hindari duplikat saat testing ulang
DELETE FROM public.events;

-- Insert Upcoming Events
INSERT INTO public.events (title, date, location, type, category, status, image, is_past) VALUES
('Jakarta Orienteering Championship 2026', '24 Mei 2026', 'Taman Margasatwa Ragunan', 'Sprint Distance', 'Event', 'registration_open', 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop', false),
('Kejurprov FONI DKI 2026', '12 Agustus 2026', 'Hutan Kota Srengseng', 'Middle Distance', 'Event', 'upcoming', 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop', false),
('Workshop Pemetaan IOF Standar ISOM', '15 April 2026', 'Bumi Perkemahan Cibubur', 'Training & Sertifikasi', 'Workshop', 'registration_open', 'https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1974&auto=format&fit=crop', false);

-- Insert Past Events
INSERT INTO public.events (title, date, location, type, category, status, is_past) VALUES
('FORNAS VII Jawa Barat', 'Juli 2023', 'Bandung', 'Multi Event', 'Event', 'completed', true),
('Jakarta Sprint Series 2025', 'November 2025', 'Monas', 'Sprint Distance', 'Event', 'completed', true),
('Pelatihan Dasar Course Planner', 'Agustus 2025', 'GOR Ciracas', 'Klinik Teknis', 'Workshop', 'completed', true);

-- Aktifkan RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Buat policy agar semua orang bisa membaca (SELECT) data events
CREATE POLICY "Izinkan semua orang membaca events" 
ON public.events 
FOR SELECT 
USING (true);