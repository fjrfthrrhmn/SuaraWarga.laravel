import { Marquee } from '@/components/ui';
import { SPOTLIGHTS } from '@/data';

export const Spotlights = () => {
    return (
        <>
            <Marquee pauseOnHover className="[--duration:20s]">
                {SPOTLIGHTS.map((item) => (
                    <img src={item.imageUrl} alt={'spotlights'} className="h-72 w-56 rounded-2xl bg-top object-cover" key={item.id} />
                ))}
            </Marquee>
        </>
    );
};
