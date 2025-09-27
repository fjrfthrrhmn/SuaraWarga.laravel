import { Typography } from '@/components/ui';

const sections = [
    {
        title: 'Platform',
        links: [
            { name: 'Pelaporan Masalah', href: '#' },
            { name: 'Postingan', href: '#' },
            { name: 'Voting', href: '#' },
            { name: 'Agenda', href: '#' },
        ],
    },
    {
        title: 'Tentang',
        links: [
            { name: 'Latar Belakang', href: '#' },
            { name: 'Tujuan & Manfaat', href: '#' },
            { name: 'Tim Kami', href: '#' },
            { name: 'Blog', href: '#' },
        ],
    },
    {
        title: 'Bantuan',
        links: [
            { name: 'FAQ', href: '#' },
            { name: 'Hubungi Kami', href: '#' },
            { name: 'Kebijakan Privasi', href: '#' },
            { name: 'Syarat & Ketentuan', href: '#' },
        ],
    },
];

export const Footer = () => {
    return (
        <>
            <div className="mx-auto flex max-w-2xl flex-col gap-4 border-t-2 border-dashed pt-10">
                <Typography.Title variant="4/bold">SuaraWarga</Typography.Title>
                <Typography.Text variant="sm/normal">
                    Platform digital untuk pelaporan, diskusi, voting pembangunan, dan informasi kegiatan warga.
                </Typography.Text>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 text-left md:grid-cols-3">
                {sections.map((section, idx) => (
                    <div key={idx}>
                        <Typography.Text variant="sm/semibold" className="mb-4">
                            {section.title}
                        </Typography.Text>
                        <ul className="space-y-3">
                            {section.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                    <a href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 border-t py-6">
                <Typography.Text variant="xs/normal">© 2024 SuaraWarga. Semua hak cipta dilindungi.</Typography.Text>
            </div>
        </>
    );
};
