import { AGENDA } from "@/data"
import { AgendaCard } from "../widgets/card"
import Typography from "../ui/typography"
import { Link } from "@inertiajs/react"

export const AgendaList = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <Typography.Title variant="4/bold">Agenda Terdekat</Typography.Title>
                <Link href={'#'} className="decoration-2 underline underline-offset-8">
                    <Typography.Text variant="sm/semibold">Lihat Semua</Typography.Text>
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {AGENDA.map(item => {
                    return <AgendaCard key={item.id} {...item} />
                })}
            </div>
        </>
    )
}
