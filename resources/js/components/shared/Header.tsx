import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import { Button, AnimatedThemeToggler, Typography } from '@/components/ui'
import { IconMenuDeep, IconBell } from '@tabler/icons-react'
import { useState, useEffect } from 'react'
import { MenuNavigation } from './MenuNavigation'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const today = format(new Date(), "EEE dd MMM yyyy", { locale: id })

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <>
            <div className="w-full py-6 border-b-2 border-dashed px-4 flex justify-between items-center">
                <Typography.Text variant="xs/normal">
                    Hari ini, <br className="sm:hidden" /> {today}
                </Typography.Text>

                <div className="flex gap-2 items-center">
                    <Button size="icon" variant="secondary">
                        <IconBell stroke={2} />
                    </Button>
                    <Button size="icon" variant="secondary" asChild>
                        <AnimatedThemeToggler />
                    </Button>
                    <Button size="icon" onClick={() => setIsOpen(true)}>
                        <IconMenuDeep stroke={2} />
                    </Button>
                </div>
            </div>

            {isOpen && <MenuNavigation onClose={() => setIsOpen(false)} />}
        </>
    )
}