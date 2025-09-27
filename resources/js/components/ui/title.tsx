import { Link } from "@inertiajs/react"
import { Typography } from "@/components/ui"
import { IconChevronRight } from "@tabler/icons-react"

interface TitleListProps {
    title: string,
    textList?: string,
    url: string
}

const TitleList = ({ ...props }: TitleListProps) => {
    const { textList, title, url } = props

    return (
        <div className="flex justify-between items-center">
            <Typography.Title variant="4/bold" className="flex-1">{title}</Typography.Title>
            <Typography.Text variant="sm/normal" className="group">
                <Link href={url} className="decoration-2 underline underline-offset-8 text-foreground flex gap-1 sm:gap-2 items-end">
                    {textList || "Lihat Semua"}
                    <IconChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
                </Link>
            </Typography.Text>
        </div>
    )
}

export { TitleList }