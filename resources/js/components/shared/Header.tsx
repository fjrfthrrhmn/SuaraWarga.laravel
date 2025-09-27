import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import Typography from '../ui/typography'
import { Button } from '../ui/button'
import { IconMenuDeep, IconBell, IconMoon } from '@tabler/icons-react'
import { useState } from 'react'
import { AnimatedThemeToggler } from '../ui/theme-toggler'

export const Header = () => {
    const [isOpen, setIsOpen] = useState();
    const today = format(new Date(), "EEE dd MMM yyyy", { locale: id })

    return (
        <div className="w-full py-6">
            <div className="flex justify-between items-center">
                <Typography.Text variant="xs/normal">
                    Hari ini, <br className='sm:hidden' /> {today}
                </Typography.Text>

                <div className="flex gap-1">
                    <Button size={'icon'} variant={'secondary'}>
                        <IconBell stroke={2} />
                    </Button>
                    <Button size={'icon'} variant={'secondary'} asChild>
                        <AnimatedThemeToggler />
                    </Button>
                    <Button size={'icon'}>
                        <IconMenuDeep stroke={2} />
                    </Button>
                </div>
            </div>
        </div>
    )
}
