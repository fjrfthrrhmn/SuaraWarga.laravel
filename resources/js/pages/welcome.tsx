import { AgendaList } from "@/components/content/AgendaList";
import { LayoutApp } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Headline } from "@/components/ui/Headline";
import { GradientOverlay } from "@/components/ui/overlay";
import { Head } from "@inertiajs/react";
import { FileText, CheckSquare } from "lucide-react";


export default function Home() {
    return (
        <>
            <Head title="Beranda" />

            <div className="relative">
                {/* <GradientOverlay className="opacity-60 dark:opacity-40" /> */}

                <LayoutApp>
                    <div className="space-y-10 relative z-10">
                        <Headline
                            span="Hallo, Warga!"
                            text="Suara Kamu Masa, Depan Kami"
                            description="Laporkan masalah, ikuti kegiatan dan bersama wujudkan lingkungan yang lebih baik"
                        >
                            <div className="w-full flex flex-col sm:flex-row gap-2">
                                <Button>
                                    <FileText />
                                    Laporkan
                                </Button>
                                <Button variant="outline">
                                    <CheckSquare />
                                    Ikut Voting
                                </Button>
                            </div>
                        </Headline>

                        {/* Content is here... */}

                        <AgendaList />
                    </div>
                </LayoutApp>
            </div>
        </>
    )
}
