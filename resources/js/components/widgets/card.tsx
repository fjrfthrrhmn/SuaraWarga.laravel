import { AgendaType } from "@/data"
import Typography from "../ui/typography"
import { Button } from "../ui/button"
import { IconBell } from "@tabler/icons-react"
import { format } from 'date-fns'
import { id } from "date-fns/locale"

export const AgendaCard = ({ ...props }: AgendaType) => {
    const { title, date, description, imageUrl, location } = props
    const formattedDate = format(date, "EEEE dd MMM yyyy", { locale: id });

    return (
        <>
            <div>
                <img src={imageUrl} alt={title} className="w-full h-60 bg-cover object-cover rounded-2xl" />

                <div className="space-y-2 my-4">
                    <Typography.Text variant="sm/medium">
                        {formattedDate} — {location}
                    </Typography.Text>
                    <Typography.Title variant="5/bold">
                        {title}
                    </Typography.Title>
                    <Typography.Text>
                        {description}
                    </Typography.Text>
                </div>

                <Button className="w-full">
                    <IconBell /> Ingatkan Saya
                </Button>
            </div>
        </>
    )
}
