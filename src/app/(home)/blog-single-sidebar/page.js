import React from 'react'
import BlogArtical from '@/src/components/sections/blogs/blogArtical'
import PageTitle from '@/src/components/sections/pageTitle'



const BlogSingle = () => {
    return (
        <main>
            <PageTitle
                pageName={"Blog"}
                breadcrumbLink={"Blog"}
                breadcrumbCurrent={"New Study: Instagram Reels Outperform TikTok & Facebook Videos."}
            />

            <BlogArtical sidebarShow={true} thumb={'/images/blog/blog-post1-10.png'} />
        </main>
    )
}

export default BlogSingle