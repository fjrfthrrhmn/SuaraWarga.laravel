import { AgendaList, PollingList, PostList, Spotlights } from '@/components/content';
import { LayoutApp } from '@/components/shared';
import { Button, Headline } from '@/components/ui';
import { Head } from '@inertiajs/react';
import { CheckSquare, FileText } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Head title="Beranda" />

            <div className="relative">
                {/* <GradientOverlay className="opacity-60 dark:opacity-40" /> */}
                {/* <DotPattern /> */}

                <LayoutApp className="relative z-10 space-y-12">
                    <Headline
                        span="Hallo, Warga!"
                        text="Suara Kamu Masa, Depan Kami"
                        description="Laporkan masalah, ikuti kegiatan dan bersama wujudkan lingkungan yang lebih baik"
                    >
                        <div className="flex w-full flex-col gap-2 *:flex-1 sm:flex-row">
                            <Button>
                                <FileText />
                                Laporkan
                            </Button>
                            <Button variant="secondary">
                                <CheckSquare />
                                Ikut Voting
                            </Button>
                        </div>
                    </Headline>

                    {/* Content is here... */}
                    <Spotlights />
                    <AgendaList />
                    <PollingList />
                    <PostList />
                </LayoutApp>
            </div>
        </>
    );
}
