export interface AgendaType {
  id: string;
  title: string;
  date: string;        // ISO date (YYYY-MM-DD)
  time?: string;       // optional, e.g. "18:30"
  location: string;
  description: string;
  imageUrl: string;
}


export const AGENDA: AgendaType[] = [
  {
    id: "agenda-001",
    title: "Rapat Umum Warga & Town Hall",
    date: "2025-10-05",
    time: "19:00",
    location: "Balai RW 05",
    description: "Sesi town-hall untuk mendengarkan aspirasi warga, tanya jawab, dan penetapan agenda kerja RT/RW.",
    imageUrl: "https://i.pinimg.com/736x/d1/b3/7f/d1b37fd2ff9c5693fd968310de8e932f.jpg"
  },
  {
    id: "agenda-002",
    title: "Aksi Bersih Lingkungan",
    date: "2025-10-12",
    time: "08:00",
    location: "Lapangan RW 05",
    description: "Gotong royong bersih-bersih area publik, edukasi pengelolaan sampah, pembagian jadwal piket.",
    imageUrl: "https://i.pinimg.com/1200x/36/91/43/369143893733ef6dbdbf6d03466297b8.jpg"
  },
  {
    id: "agenda-003",
    title: "Family Fun Day — Sosialisasi SuaraWarga",
    date: "2025-10-19",
    time: "10:00",
    location: "Taman Kelurahan",
    description: "Event keluarga: booth registrasi SuaraWarga, demo pelaporan, games edukatif untuk anak.",
    imageUrl: "https://i.pinimg.com/736x/c0/79/3d/c0793d7adfc77c66f335e859673f3df2.jpg"
  },
];
