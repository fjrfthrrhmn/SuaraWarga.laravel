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
    imageUrl: "https://i.pinimg.com/736x/f1/02/5e/f1025ea879b0b3ef63ee8ced3e5bc8fc.jpg"
  },
  {
    id: "agenda-002",
    title: "Aksi Bersih Lingkungan",
    date: "2025-10-12",
    time: "08:00",
    location: "Lapangan RW 05",
    description: "Gotong royong bersih-bersih area publik, edukasi pengelolaan sampah, pembagian jadwal piket.",
    imageUrl: "https://i.pinimg.com/736x/70/c5/36/70c5364662d2b2d109670a3c18e5815e.jpg"
  },
];
