import { Button, Typography } from '@/components/ui';
import { AgendaType, PollingType, PostType } from '@/data';
import { cn } from '@/lib/utils';
import { IconBell } from '@tabler/icons-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { useState } from 'react';

export const AgendaCard = ({ ...props }: AgendaType) => {
    const { title, date, description, imageUrl, location, status } = props;
    const formattedDate = format(date, 'EEE dd MMM', { locale: id });

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <img
                src={imageUrl}
                alt={title}
                className="h-60 w-full cursor-pointer rounded-2xl bg-cover object-cover"
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
                    <img src={imageUrl} alt={title} className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg" />
                </div>
            )}

            <div className="my-4 space-y-2">
                <div className="flex items-center gap-2">
                    <div className={cn('h-2 w-2 animate-pulse rounded-full bg-amber-500 shadow-2xl shadow-amber-500')} title={status} />
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
    );
};

export const PollingCard = ({ ...props }: PollingType) => {
    const { endDate, question, description, imageUrl } = props;
    const formattedDate = format(endDate, 'EEE dd MMM yyyy', { locale: id });

    return (
        <>
            <div className="space-y-4 rounded-2xl border-border bg-secondary/50 p-4 pb-6 shadow">
                <img src={imageUrl} alt={question} className="h-60 w-full origin-top cursor-pointer rounded-2xl bg-cover object-cover" />

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div className={cn('h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-2xl shadow-blue-500')} title={status} />
                        <Typography.Text variant="xs/normal">Sekarang — {formattedDate}</Typography.Text>
                    </div>

                    <Typography.Title variant="6/bold" className="line-clamp-3">
                        {question}
                    </Typography.Title>
                    <Typography.Text variant="xs/normal" className="line-clamp-3">
                        {description}
                    </Typography.Text>
                </div>
            </div>
        </>
    );
};

export const PostCard = ({ ...props }: PostType) => {
    const { imageUrl, date, summary, title } = props;
    const formattedDate = format(date, 'EEE dd MMM', { locale: id });

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="space-y-4">
                <img
                    src={imageUrl}
                    alt={title}
                    className="h-60 w-full origin-top cursor-pointer rounded-2xl bg-cover object-cover"
                    onClick={() => setIsOpen(true)}
                />

                {isOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <img src={imageUrl} alt={title} className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg" />
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <Typography.Text variant="xs/normal">{formattedDate}</Typography.Text>

                    <Typography.Title variant="6/bold" className="line-clamp-3">
                        {title}
                    </Typography.Title>
                    <Typography.Text variant="xs/normal" className="line-clamp-3">
                        {summary}
                    </Typography.Text>
                </div>
            </div>
        </>
    );
};
