import { TitleList } from '@/components/ui'
import { POSTS } from '@/data'
import { PostCard } from '@/components/widgets'

export const PostList = () => {
    return (
        <>
            <TitleList title='Postingan Terbaru' url='#' />
            <div className="grid grid-cols-1 gap-10">
                {POSTS.map(item => {
                    return <PostCard key={item.id} {...item} />
                })}
            </div>
        </>
    )
}
