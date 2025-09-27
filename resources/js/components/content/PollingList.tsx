import { TitleList } from '@/components/ui';
import { PollingCard } from '@/components/widgets';
import { POLLING } from '@/data';

export const PollingList = () => {
    return (
        <>
            <TitleList title="Polling Aktif" url="#" />
            <div className="grid grid-cols-1 gap-10">
                {POLLING.map((item) => {
                    return <PollingCard key={item.id} {...item} />;
                })}
            </div>
        </>
    );
};
