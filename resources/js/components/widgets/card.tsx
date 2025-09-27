import { AgendaType } from "@/data"
import { Button, Typography } from "@/components/ui"
import { IconBell } from "@tabler/icons-react"
import { format } from 'date-fns'
import { id } from "date-fns/locale"
import { useState } from "react"

export const AgendaCard = ({ ...props }: AgendaType) => {
  const { title, date, description, imageUrl, location } = props
  const formattedDate = format(date, "EEEE dd MMM yyyy", { locale: id })

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
        <Typography.Text variant="sm/medium">
          {formattedDate} — {location}
        </Typography.Text>
        <Typography.Title variant="5/bold">{title}</Typography.Title>
        <Typography.Text>{description}</Typography.Text>
      </div>

      <Button className="w-full">
        <IconBell /> Ingatkan Saya
      </Button>
    </div>
  )
}
