import { TitleList } from '@/components/ui';
import { PostCard } from '@/components/widgets';
import { POSTS } from '@/data';

export const PostList = () => {
    return (
        <>
            <TitleList title="Postingan Terbaru" url="#" />
            <div className="grid grid-cols-1 gap-10">
                {POSTS.map((item) => {
                    return <PostCard key={item.id} {...item} />;
                })}
            </div>
        </>
    );
};
