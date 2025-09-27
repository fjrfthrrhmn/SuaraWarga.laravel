import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import Typography from '../ui/typography'
import { IconMenuDeep, IconBell, IconMoon } from '@tabler/icons-react'
import { useState } from 'react'

export const Header = () => {
    const [isOpen, setIsOpen] = useState();
    const today = format(new Date(), "EEE, dd MMM", { locale: id })

    return (
        <div className="w-full py-6">
            <div className="flex justify-between items-center">
                <Typography.Text variant="xs/normal">
                    Hari ini {today}
                </Typography.Text>

                <div className="flex gap-2">
                    <IconBell />
                    <IconMoon />
                    <IconMenuDeep />
                </div>
            </div>
        </div>
    )
}
