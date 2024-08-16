import React from 'react'
import CardTwo from '@/src/components/sections/blogs/cardTwo'
import PageTitle from '@/src/components/sections/pageTitle'
import { blogData } from '@/src/lib/fackData/blogData'



const BlogGrid = () => {
    return (
        <main>
            <PageTitle pageName={"Blog"} breadcrumbLink={"Blog"} />
            <div className='lg:py-15 py-9'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12.5 justify-between'>
                        {
                            blogData.map(({ id, author, date, thumb, title, category }) => <CardTwo key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />)
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BlogGrid