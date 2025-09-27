import { Typography } from '@/components/ui';
import { Link } from '@inertiajs/react';

interface MenuNavigationProps {
    onClose: () => void;
}

const NAV_ITEMS = [
    { label: 'Beranda', href: '#' },
    { label: 'Agenda', href: '#' },
    { label: 'Polling', href: '#' },
    { label: 'Postingan', href: '#' },
    { label: 'Kontak', href: '#' },
];

export const MenuNavigation: React.FC<MenuNavigationProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-zinc-950/70 backdrop-blur-sm" onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()}>
                <nav className="flex flex-col gap-6 text-center">
                    {NAV_ITEMS.map((item, idx) => (
                        <Link key={idx} href={item.href} onClick={onClose}>
                            <Typography.Text variant="lg/normal" className="text-zinc-50">
                                {item.label}
                            </Typography.Text>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};
