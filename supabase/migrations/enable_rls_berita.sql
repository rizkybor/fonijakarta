-- Aktifkan RLS di tabel berita
ALTER TABLE public.berita ENABLE ROW LEVEL SECURITY;

-- Buat policy agar semua orang bisa membaca (SELECT) data berita
CREATE POLICY "Izinkan semua orang membaca berita" 
ON public.berita 
FOR SELECT 
USING (true);