import React from 'react'
import BlogArtical from '@/src/components/sections/blogs/blogArtical'
import PageTitle from '@/src/components/sections/pageTitle'


  
const BLogSIngle2 = () => {
    return (
        <main>
            <PageTitle pageName={"UND항공대학교 입학/편입전 선행교육"} breadcrumbLink={"Blog"} breadcrumbCurrent={"New Study: Instagram Reels Outperform TikTok & Facebook Videos."}  />
            <BlogArtical sidebarShow={false}/>
        </main>
    )
}

export default BLogSIngle2