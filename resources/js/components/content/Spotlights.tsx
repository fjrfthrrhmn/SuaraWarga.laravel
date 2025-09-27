import { Marquee } from '@/components/ui'
import { SPOTLIGHTS } from '@/data'

export const Spotlights = () => {
    return (
        <>
            <Marquee pauseOnHover className="[--duration:20s]">
                {SPOTLIGHTS.map((item) => <img src={item.imageUrl} alt={"spotlights"} className='w-56 h-72 object-cover bg-top rounded-2xl' key={item.id} />)}
            </Marquee>
        </>
    )
}
