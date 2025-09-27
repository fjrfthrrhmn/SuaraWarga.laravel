import { AnimatedThemeToggler, Button, Typography } from '@/components/ui';
import { IconBell, IconMenuDeep } from '@tabler/icons-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { MenuNavigation } from './MenuNavigation';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const today = format(new Date(), 'EEE dd MMM yyyy', { locale: id });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <div className="flex w-full items-center justify-between border-b-2 border-dashed px-4 py-6">
                <Typography.Text variant="xs/normal">
                    Hari ini, <br className="sm:hidden" /> {today}
                </Typography.Text>

                <div className="flex items-center gap-2">
                    <Button size="icon" variant="secondary">
                        <IconBell stroke={2} />
                    </Button>
                    <Button size="icon" variant="secondary" asChild>
                        <AnimatedThemeToggler />
                    </Button>
                    <Button size="icon" onClick={() => setIsOpen(true)}>
                        <IconMenuDeep stroke={2} />
                    </Button>
                </div>
            </div>

            {isOpen && <MenuNavigation onClose={() => setIsOpen(false)} />}
        </>
    );
};
