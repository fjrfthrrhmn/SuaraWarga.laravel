export interface AgendaType {
    id: string;
    title: string;
    date: string; // ISO date (YYYY-MM-DD)
    time?: string; // optional, e.g. "18:30"
    location: string;
    description: string;
    imageUrl: string;
    status: 'upcoming' | 'past'; // ditambahkan statically
}

export const AGENDA: AgendaType[] = [
    {
        id: 'agenda-001',
        title: 'Rapat Umum Warga & Town Hall',
        date: '2025-10-05',
        time: '19:00',
        location: 'Balai RW 05',
        description: 'Sesi town-hall untuk mendengarkan aspirasi warga, tanya jawab, dan penetapan agenda kerja RT/RW.',
        imageUrl: 'https://i.pinimg.com/736x/d1/b3/7f/d1b37fd2ff9c5693fd968310de8e932f.jpg',
        status: 'upcoming',
    },
    {
        id: 'agenda-002',
        title: 'Aksi Bersih Lingkungan',
        date: '2025-10-12',
        time: '08:00',
        location: 'Lapangan RW 05',
        description: 'Gotong royong bersih-bersih area publik, edukasi pengelolaan sampah, pembagian jadwal piket.',
        imageUrl: 'https://i.pinimg.com/1200x/36/91/43/369143893733ef6dbdbf6d03466297b8.jpg',
        status: 'upcoming',
    },
    {
        id: 'agenda-003',
        title: 'Family Fun Day — Sosialisasi SuaraWarga',
        date: '2025-10-19',
        time: '10:00',
        location: 'Taman Kelurahan',
        description: 'Event keluarga: booth registrasi SuaraWarga, demo pelaporan, games edukatif untuk anak.',
        imageUrl: 'https://i.pinimg.com/736x/c0/79/3d/c0793d7adfc77c66f335e859673f3df2.jpg',
        status: 'upcoming',
    },
    {
        id: 'agenda-004',
        title: 'Family Fun Day — Sosialisasi SuaraWarga',
        date: '2024-10-19',
        time: '10:00',
        location: 'Taman Kelurahan',
        description: 'Event keluarga: booth registrasi SuaraWarga, demo pelaporan, games edukatif untuk anak.',
        imageUrl: 'https://i.pinimg.com/736x/c0/79/3d/c0793d7adfc77c66f335e859673f3df2.jpg',
        status: 'upcoming',
    },
];

export type SpotlightType = {
    id: string | number;
    imageUrl: string;
};

export const SPOTLIGHTS: SpotlightType[] = [
    {
        id: 1,
        imageUrl: 'https://i.pinimg.com/736x/f2/c7/17/f2c71746d6a6ba60b32514711ee94553.jpg',
    },
    {
        id: 2,
        imageUrl: 'https://i.pinimg.com/736x/0c/be/95/0cbe95979d6ded5f830beaa87fcd39d2.jpg',
    },
    {
        id: 3,
        imageUrl: 'https://i.pinimg.com/1200x/2b/14/ae/2b14ae474e2deebed05f5a5bf91309ce.jpg',
    },
    {
        id: 4,
        imageUrl: 'https://i.pinimg.com/736x/43/a6/ce/43a6cece37b8816e6eeb963e1dd34d8c.jpg',
    },
];

export interface PollingOption {
    id: string;
    label: string;
    votes: number;
}

export interface PollingType {
    id: string;
    question: string;
    imageUrl: string;
    shortDescription: string;
    description: string;
    options: PollingOption[];
    status: 'active' | 'closed';
    startDate: string; // ISO date
    endDate: string; // ISO date
}

export const POLLING: PollingType[] = [
    {
        id: 'poll-001',
        question: 'Apakah warga setuju dengan pembangunan taman bermain baru di RW 05?',
        shortDescription: 'Voting untuk pembangunan taman bermain.',
        imageUrl: 'https://i.pinimg.com/736x/98/c7/df/98c7dfc4d21b7577649d13ec83be2a77.jpg',
        description:
            'RW 05 merencanakan pembangunan taman bermain untuk anak-anak. Tujuan polling ini adalah untuk mengetahui pendapat warga terkait prioritas penggunaan dana lingkungan. Harap berikan suara Anda sebelum tanggal 5 Oktober 2025.',
        options: [
            { id: 'opt-001', label: 'Setuju', votes: 35 },
            { id: 'opt-002', label: 'Tidak Setuju', votes: 12 },
            { id: 'opt-003', label: 'Butuh Penjelasan Lebih Lanjut', votes: 8 },
        ],
        status: 'active',
        startDate: '2025-09-25',
        endDate: '2025-10-05',
    },
    {
        id: 'poll-002',
        question: 'Jenis kegiatan lingkungan mana yang ingin warga prioritaskan bulan depan?',
        shortDescription: 'Pilih kegiatan lingkungan prioritas.',
        imageUrl: 'https://i.pinimg.com/736x/47/bf/0f/47bf0f91157585646ecf2e858dc7f0dd.jpg',
        description:
            'Polling ini untuk menentukan kegiatan lingkungan yang paling diminati warga bulan depan. Pilihan termasuk gotong royong, workshop edukasi sampah, dan Family Fun Day. Setiap suara akan membantu pengurus menentukan agenda kegiatan.',
        options: [
            { id: 'opt-001', label: 'Gotong Royong', votes: 25 },
            { id: 'opt-002', label: 'Workshop Edukasi Sampah', votes: 15 },
            { id: 'opt-003', label: 'Family Fun Day', votes: 20 },
        ],
        status: 'active',
        startDate: '2025-09-20',
        endDate: '2025-09-30',
    },
];

export interface UserType {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface PostType {
    id: string;
    title: string;
    summary: string;
    content: string;
    author: UserType;
    date: string; // ISO date
    imageUrl?: string;
}

export const POSTS: PostType[] = [
    {
        id: 'post-001',
        title: 'Turnamen Basket RW 05',
        summary: 'Ikuti turnamen basket seru untuk warga RW 05!',
        content:
            'RW 05 menyelenggarakan turnamen basket antar RT. Semua warga dipersilakan ikut serta baik sebagai pemain maupun penonton. Hadiah menarik menanti pemenang. Ayo tunjukkan kemampuanmu di lapangan dan tingkatkan sportivitas komunitas!',
        author: {
            id: 'user-001',
            name: 'Admin RW 05',
            avatarUrl: 'https://i.pravatar.cc/150?img=32',
        },
        date: '2025-09-20',
        imageUrl: 'https://i.pinimg.com/736x/bd/7c/7f/bd7c7f7f054ab64ae948b901ad1a8995.jpg',
    },
    {
        id: 'post-002',
        title: 'Informasi Hari Buruh 2025',
        summary: 'RW 05 memperingati Hari Buruh dengan kegiatan sosial.',
        content:
            'Dalam rangka memperingati Hari Buruh 1 Mei 2025, RW 05 mengajak semua warga untuk ikut serta dalam kegiatan bakti sosial dan penghargaan bagi pekerja berprestasi di lingkungan kita. Mari merayakan Hari Buruh dengan semangat gotong royong dan kepedulian.',
        author: {
            id: 'user-002',
            name: 'Sekretaris RW 05',
            avatarUrl: 'https://i.pravatar.cc/150?img=12',
        },
        date: '2025-05-01',
        imageUrl: 'https://i.pinimg.com/736x/76/80/66/76806653b939ec5120db8cb076f1c450.jpg',
    },
];
