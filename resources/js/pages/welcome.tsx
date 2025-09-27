import { PostList, AgendaList, PollingList, Spotlights } from "@/components/content";
import { LayoutApp } from "@/components/shared";
import { Headline, Button } from "@/components/ui";
import { Head } from "@inertiajs/react";
import { FileText, CheckSquare } from "lucide-react";

export default function Home() {
    return (
        <>
            <Head title="Beranda" />

            <div className="relative">
                {/* <GradientOverlay className="opacity-60 dark:opacity-40" /> */}
                {/* <DotPattern /> */}

                <LayoutApp className="space-y-12 relative z-10">
                    <Headline
                        span="Hallo, Warga!"
                        text="Suara Kamu Masa, Depan Kami"
                        description="Laporkan masalah, ikuti kegiatan dan bersama wujudkan lingkungan yang lebih baik"
                    >
                        <div className="*:flex-1 w-full flex flex-col sm:flex-row gap-2">
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
    )
}
