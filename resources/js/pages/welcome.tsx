import { LayoutApp } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Headline } from "@/components/ui/Headline";
import { GradientOverlay } from "@/components/ui/overlay";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Beranda" />

            <div className="relative">
                <GradientOverlay />

                <LayoutApp>
                    <div className="space-y-20 relative z-10">
                        <Headline
                            text="Suara Kamu Masa, Depan Kami"
                            description="Laporkan masalah, ikuti kegiatan dan bersama wujudkan lingkungan yang lebih baik"
                            span="Hallo, Warga!"
                        >
                            <div className="w-full flex flex-col sm:flex-row gap-2">
                                <Button>Laporkan</Button>
                                <Button variant="outline">Ikut Voting</Button>
                            </div>
                        </Headline>
                    </div>
                </LayoutApp>
            </div>
        </>
    )
}
