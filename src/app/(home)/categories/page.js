import CardTwo from '@/src/components/sections/blogs/cardTwo'
import PageTitle from '@/src/components/sections/pageTitle'
import SideBar from '@/src/components/sections/sideBar'
import { blogData } from '@/src/lib/fackData/blogData'
import React from 'react'

const Categories = () => {
    return (
        <main>
            <PageTitle pageName={"Categories"} breadcrumbLink={"Categories"} />
            <div className='lg:py-15 py-9'>
                <div className='max-w-[1350px] mx-auto px-[15px]'>
                    <div className='grid lg:grid-cols-[33%_66%] grid-cols-1 gap-12.5'>
                        <div>
                            <SideBar blog={true} search={true} />
                        </div>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-7.5 justify-between'>
                            {
                                blogData.slice(0, 8).map(({ id, author, date, thumb, title, category }) => {
                                    return <CardTwo key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Categories