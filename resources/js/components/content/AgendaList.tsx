import { TitleList } from '@/components/ui';
import { AgendaCard } from '@/components/widgets';
import { AGENDA } from '@/data';

export const AgendaList = () => {
    const filtered = AGENDA.filter((item) => new Date(item.date) > new Date());

    return (
        <>
            <TitleList title="Agenda Terdekat" url="#" />

            <div className="grid grid-cols-1 gap-10">
                {filtered.map((item) => {
                    return <AgendaCard key={item.id} {...item} />;
                })}
            </div>
        </>
    );
};
