import { AgendaType, PollingType, PostType } from "@/data"
import { Button, Typography } from "@/components/ui"
import { IconBell } from "@tabler/icons-react"
import { format } from 'date-fns'
import { id } from "date-fns/locale"
import { useState } from "react"
import { cn } from "@/lib/utils"

export const AgendaCard = ({ ...props }: AgendaType) => {
    const { title, date, description, imageUrl, location, status } = props
    const formattedDate = format(date, "EEE dd MMM yyyy", { locale: id })

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-60 bg-cover object-cover rounded-2xl cursor-pointer"
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
                    />
                </div>
            )}

            <div className="space-y-2 my-4">
                <div className="flex items-center gap-2">
                    <div className={cn("w-2 h-2 animate-pulse rounded-full bg-amber-500 shadow-2xl shadow-amber-500")} title={status} />
                    <Typography.Text variant="sm/medium">
                        {formattedDate} — {location}
                    </Typography.Text>
                </div>

                <Typography.Title variant="5/bold">{title}</Typography.Title>
                <Typography.Text>{description}</Typography.Text>
            </div>

            <Button className="w-full">
                <IconBell /> Ingatkan Saya
            </Button>
        </div>
    )
}

export const PollingCard = ({ ...props }: PollingType) => {
    const { endDate, question, shortDescription, description, imageUrl } = props
    const formattedDate = format(endDate, "EEE dd MMM yyyy", { locale: id })

    return (
        <>
            <div className="space-y-4 bg-secondary/50 rounded-2xl border-border shadow p-4 pb-6">
                <img
                    src={imageUrl}
                    alt={question}
                    className="w-full h-60 bg-cover origin-top  object-cover rounded-2xl cursor-pointer"
                />

                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center">
                        <div className={cn("w-2 h-2 animate-pulse rounded-full bg-blue-500 shadow-2xl shadow-blue-500")} title={status} />
                        <Typography.Text variant="xs/normal">
                            Sekarang — {formattedDate}
                        </Typography.Text>
                    </div>

                    <Typography.Title variant="6/bold" className="line-clamp-3">{question}</Typography.Title>
                    <Typography.Text variant="xs/normal" className="line-clamp-3">{description}</Typography.Text>
                </div>
            </div>
        </>
    )
}

export const PostCard = ({ ...props }: PostType) => {
    const { imageUrl, content, date, summary, title, author } = props
    const formattedDate = format(date, "EEE dd MMM yyyy", { locale: id })

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="space-y-4">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-60 bg-cover origin-top  object-cover rounded-2xl cursor-pointer"
                    onClick={() => setIsOpen(true)}
                />

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                        onClick={() => setIsOpen(false)}
                    >
                        <img
                            src={imageUrl}
                            alt={title}
                            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
                        />
                    </div>
                )}


                <div className="flex flex-col gap-2">
                    <Typography.Text variant="xs/normal">
                        {formattedDate}
                    </Typography.Text>

                    <Typography.Title variant="6/bold" className="line-clamp-3">{title}</Typography.Title>
                    <Typography.Text variant="xs/normal" className="line-clamp-3">{summary}</Typography.Text>
                </div>
            </div>
        </>
    )
}
