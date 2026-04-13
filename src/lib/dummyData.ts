export const siteStats = {
  athletes: 450,
  clubs: 32,
  events: 15,
  maps: 24,
};

export const partners = [
  { id: 1, name: "KORMI DKI Jakarta", logo: "/logos/kormi.svg" },
  { id: 2, name: "SPORTident", logo: "/logos/sportident.svg" },
  { id: 3, name: "Dispora DKI", logo: "/logos/dispora.svg" },
  { id: 4, name: "IOF", logo: "/logos/iof.svg" },
];

export const upcomingEvents = [
  {
    id: "evt-1",
    title: "Jakarta Orienteering Championship 2026",
    date: "24 Mei 2026",
    location: "Taman Margasatwa Ragunan",
    type: "Sprint Distance",
    category: "Event",
    status: "registration_open",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "evt-2",
    title: "Kejurprov FONI DKI 2026",
    date: "12 Agustus 2026",
    location: "Hutan Kota Srengseng",
    type: "Middle Distance",
    category: "Event",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "evt-3",
    title: "Workshop Pemetaan IOF Standar ISOM",
    date: "15 April 2026",
    location: "Bumi Perkemahan Cibubur",
    type: "Training & Sertifikasi",
    category: "Workshop",
    status: "registration_open",
    image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1974&auto=format&fit=crop",
  }
];

export const pastEvents = [
  {
    id: "evt-past-1",
    title: "FORNAS VII Jawa Barat",
    date: "Juli 2023",
    location: "Bandung",
    type: "Multi Event",
    category: "Event",
  },
  {
    id: "evt-past-2",
    title: "Jakarta Sprint Series 2025",
    date: "November 2025",
    location: "Monas",
    type: "Sprint Distance",
    category: "Event",
  },
  {
    id: "evt-past-3",
    title: "Pelatihan Dasar Course Planner",
    date: "Agustus 2025",
    location: "GOR Ciracas",
    type: "Klinik Teknis",
    category: "Workshop",
  }
];

export const pengurusHierarchy = [
  {
    level: "Pelindung",
    members: [
      { name: "Gubernur DKI Jakarta", position: "Pelindung" },
      { name: "KORMI DKI Jakarta", position: "Pelindung" },
      { name: "Dispora DKI Jakarta", position: "Pelindung" },
      { name: "Pangdam Jayakarta", position: "Pelindung" },
      { name: "Kapolda Metro Jaya", position: "Pelindung" }
    ]
  },
  {
    level: "Pembina",
    members: [
      { name: "Ade Tri Nugraha", position: "Dewan Pembina" },
      { name: "Zulham Peliang", position: "Dewan Pembina" },
      { name: "Rudy Kurniawan", position: "Dewan Pembina" }
    ]
  },
  {
    level: "Ketua Umum",
    members: [
      { name: "Fauzi Umar, S.Ikom", position: "Ketua Umum" }
    ]
  },
  {
    level: "Ketua Harian",
    members: [
      { name: "M. Sanusi", position: "Ketua Harian" }
    ]
  },
  {
    level: "Sekretaris & Bendahara",
    members: [
      { name: "Rizky Ajie Kurniawan", position: "Sekretaris Umum" },
      { name: "Nabila Rahayu", position: "Wakil Sekretaris Umum" },
      { name: "Tatu Inggit Setiawan", position: "Bendahara" },
      { name: "Ronaldo Muda", position: "Wakil Bendahara" }
    ]
  },
  {
    level: "Bidang Organisasi & Hukum",
    members: [
      { name: "Yuga Prasetyo", position: "Kepala Bidang" },
      { name: "Agung Nugraha", position: "Wakil Bidang" }
    ]
  },
  {
    level: "Bidang Humas & Kemitraan Media",
    members: [
      { name: "Ferry Kamaludin", position: "Kepala Bidang" },
      { name: "Yuniar Chandra Ningtyas", position: "Wakil Bidang" }
    ]
  },
  {
    level: "Bidang Kemitraan & Pemasaran",
    members: [
      { name: "Fahri Apriyanto", position: "Kepala Bidang" },
      { name: "Mira Kusuma", position: "Wakil Bidang" }
    ]
  },
  {
    level: "Bidang Pemetaan & Desain Lintasan",
    members: [
      { name: "Ariyandi Subekti", position: "Kepala Bidang" },
      { name: "Muhammad Fajrialdy", position: "Wakil Bidang" }
    ]
  },
  {
    level: "Bidang Teknis Pencatatan Waktu & Data Lomba",
    members: [
      { name: "Aldi Pratama", position: "Kepala Bidang" },
      { name: "Fadilah Akbar", position: "Wakil Bidang" }
    ]
  },
  {
    level: "Bidang Kompetisi",
    members: [
      { name: "Fajar Tri Saputra", position: "Kepala Bidang" },
      { name: "M. Mahfudz Azalli", position: "Wakil Bidang" }
    ]
  },
  {
    level: "Bidang Pembinaan Prestasi",
    members: [
      { name: "Ilham Oktowijaya", position: "Kepala Bidang" },
      { name: "Dapot Mangido Tua", position: "Wakil Bidang I" },
      { name: "Andy Saputra", position: "Wakil Bidang II" }
    ]
  },
  {
    level: "Bidang Konservasi",
    members: [
      { name: "Hery Yohannes", position: "Kepala Bidang" },
      { name: "Arjun Rampal", position: "Wakil Bidang" }
    ]
  },
  {
    level: "Bidang Dokumentasi & Publikasi",
    members: [
      { name: "Aviv Fajar", position: "Kepala Bidang" },
      { name: "Farhani Fazidah", position: "Wakil Bidang I" },
      { name: "Adisa Azzahra", position: "Wakil Bidang II" }
    ]
  },
  {
    level: "Bidang Wisata & Petualangan",
    members: [
      { name: "Satrio Hutomo", position: "Kepala Bidang" },
      { name: "M.Umar Maaruf", position: "Wakil Bidang" }
    ]
  }
];

export const mapGallery = [
  {
    id: "map-1",
    name: "Taman Margasatwa Ragunan",
    region: "Jakarta Selatan",
    scale: "1:4.000",
    contourInterval: "2m",
    year: "2023",
    norm: "ISSprOM 2019-2",
    areaSize: "1.4 km²",
    status: "Active",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: "map-2",
    name: "Hutan Kota Srengseng",
    region: "Jakarta Barat",
    scale: "1:5.000",
    contourInterval: "2.5m",
    year: "2022",
    norm: "ISOM 2017-2",
    areaSize: "0.8 km²",
    status: "Needs Update",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop",
  },
  {
    id: "map-3",
    name: "Bumi Perkemahan Cibubur",
    region: "Jakarta Timur",
    scale: "1:10.000",
    contourInterval: "5m",
    year: "2025",
    norm: "ISOM 2017-2",
    areaSize: "2.1 km²",
    status: "Active",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1976&auto=format&fit=crop",
  },
  {
    id: "map-4",
    name: "Kompleks Gelora Bung Karno",
    region: "Jakarta Pusat",
    scale: "1:4.000",
    contourInterval: "2m",
    year: "2024",
    norm: "ISSprOM 2019-2",
    areaSize: "1.2 km²",
    status: "Active",
    image: "https://images.unsplash.com/photo-1555696958-c5049b866f6f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "map-5",
    name: "Hutan Kota UI Depok",
    region: "Jakarta Selatan",
    scale: "1:10.000",
    contourInterval: "5m",
    year: "2021",
    norm: "ISOM 2017-2",
    areaSize: "3.5 km²",
    status: "Needs Update",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop",
  }
];

export const keanggotaanRegions = [
  {
    id: "jakpus",
    name: "Jakarta Pusat",
    clubsCount: 4,
    sdm: {
      mapper: [{ name: "Agus", phone: "0812-xxx", club: "Monas OC" }],
      planner: [{ name: "Beni", phone: "0813-xxx", club: "Pusat Orienteering" }],
      adviser: [{ name: "Citra", phone: "0814-xxx", club: "Monas OC" }]
    }
  },
  {
    id: "jaksel",
    name: "Jakarta Selatan",
    clubsCount: 8,
    sdm: {
      mapper: [{ name: "Deni", phone: "0815-xxx", club: "Selatan OC" }, { name: "Dina", phone: "0816-xxx", club: "Ragunan Club" }],
      planner: [{ name: "Eko", phone: "0817-xxx", club: "Selatan OC" }],
      adviser: []
    }
  },
  {
    id: "jaktim",
    name: "Jakarta Timur",
    clubsCount: 10,
    sdm: {
      mapper: [{ name: "Fajar", phone: "0818-xxx", club: "Timur OC" }],
      planner: [{ name: "Gilang", phone: "0819-xxx", club: "Timur OC" }],
      adviser: [{ name: "Hadi", phone: "0820-xxx", club: "Cibubur OC" }]
    }
  },
  {
    id: "jakbar",
    name: "Jakarta Barat",
    clubsCount: 5,
    sdm: {
      mapper: [],
      planner: [{ name: "Iwan", phone: "0821-xxx", club: "Barat OC" }],
      adviser: []
    }
  },
  {
    id: "jakut",
    name: "Jakarta Utara",
    clubsCount: 3,
    sdm: {
      mapper: [{ name: "Joko", phone: "0822-xxx", club: "Utara OC" }],
      planner: [],
      adviser: []
    }
  },
  {
    id: "pulauseribu",
    name: "Kepulauan Seribu",
    clubsCount: 2,
    sdm: {
      mapper: [],
      planner: [],
      adviser: []
    }
  }
];

export const clubsData = {
  "club-1": {
    id: "club-1",
    name: "Monas Orienteering Club",
    region: "Jakarta Pusat",
    registered: true,
    athletes: [
      { id: "a1", name: "Andi Saputra", gender: "L", class: "M21", nre: 1200, wre: 450 },
      { id: "a2", name: "Budi Santoso", gender: "L", class: "M21", nre: 1050, wre: 0 },
      { id: "a3", name: "Citra Kirana", gender: "P", class: "W21", nre: 1100, wre: 320 },
    ]
  },
  "club-3": {
    id: "club-3",
    name: "MKP Orienteering Club",
    region: "Jakarta Pusat",
    registered: true,
    athletes: [
      { id: "a6", name: "Fajar Nugraha", gender: "L", class: "M21", nre: 1150, wre: 120 },
      { id: "a7", name: "Gita Permata", gender: "P", class: "W21", nre: 950, wre: 0 },
    ]
  },
  "club-6": {
    id: "club-6",
    name: "Gambir Navigation Team",
    region: "Jakarta Pusat",
    registered: true,
    athletes: [
      { id: "a8", name: "Hendra Wijaya", gender: "L", class: "M40", nre: 1400, wre: 600 },
      { id: "a9", name: "Indah Lestari", gender: "P", class: "W21", nre: 1000, wre: 0 },
    ]
  },
  "club-7": {
    id: "club-7",
    name: "Menteng Orienteers",
    region: "Jakarta Pusat",
    registered: true,
    athletes: [
      { id: "a10", name: "Joko Anwar", gender: "L", class: "M21", nre: 880, wre: 0 },
      { id: "a11", name: "Karin Putri", gender: "P", class: "W18", nre: 750, wre: 0 },
    ]
  },
  "club-8": {
    id: "club-8",
    name: "Kemayoran Skyline OC",
    region: "Jakarta Pusat",
    registered: true,
    athletes: [
      { id: "a12", name: "Luthfi Hakim", gender: "L", class: "M18", nre: 920, wre: 0 },
    ]
  },
  "club-9": {
    id: "club-9",
    name: "Sawah Besar Sprint Squad",
    region: "Jakarta Pusat",
    registered: true,
    athletes: [
      { id: "a13", name: "Manda Sari", gender: "P", class: "W21", nre: 1120, wre: 210 },
      { id: "a14", name: "Naufal Aziz", gender: "L", class: "M21", nre: 1080, wre: 0 },
    ]
  },
  "club-10": {
    id: "club-10",
    name: "Cempaka Putih Pathfinders",
    region: "Jakarta Pusat",
    registered: true,
    athletes: [
      { id: "a15", name: "Oki Setiawan", gender: "L", class: "M21", nre: 990, wre: 0 },
    ]
  },
  "club-11": {
    id: "club-11",
    name: "Tanah Abang Urban OC",
    region: "Jakarta Pusat",
    registered: true,
    athletes: [
      { id: "a16", name: "Putra Pratama", gender: "L", class: "M35", nre: 1250, wre: 300 },
      { id: "a17", name: "Qonita Shaliha", gender: "P", class: "W21", nre: 890, wre: 0 },
    ]
  },
  "club-12": {
    id: "club-12",
    name: "Senen Orienteering Community",
    region: "Jakarta Pusat",
    registered: false,
    athletes: [
      { id: "a18", name: "Rizky Fauzi", gender: "L", class: "M21", nre: 0, wre: 0 },
    ]
  },
  "club-13": {
    id: "club-13",
    name: "Johar Baru Trailblazers",
    region: "Jakarta Pusat",
    registered: true,
    athletes: [
      { id: "a19", name: "Santi Rahayu", gender: "P", class: "W35", nre: 1020, wre: 0 },
      { id: "a20", name: "Taufik Hidayat", gender: "L", class: "M21", nre: 1180, wre: 410 },
    ]
  },
  // Keep your existing club-2 (Jakarta Selatan)
  "club-2": {
    id: "club-2",
    name: "Selatan OC",
    region: "Jakarta Selatan",
    registered: true,
    athletes: [
      { id: "a4", name: "Deni Ramdani", gender: "L", class: "M21", nre: 980, wre: 0 },
      { id: "a5", name: "Eka Putri", gender: "P", class: "W21", nre: 1300, wre: 510 },
    ]
  }
};
