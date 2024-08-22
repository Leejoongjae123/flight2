import React from 'react'
import BlogArtical2 from '@/src/components/sections/blogs/blogArtical2'
import PageTitle from '@/src/components/sections/pageTitle'
import UnderConstruction from '@/src/components/sections/UnderConstruction'

const BLogSIngle2 = () => {
    return (
        <main>
            <PageTitle pageName={"UNDAF 장학금 안내"} breadcrumbLink={"Blog"} breadcrumbCurrent={"New Study: Instagram Reels Outperform TikTok & Facebook Videos."}  />
            <UnderConstruction/>
            <BlogArtical2 sidebarShow={false}/>
        </main>
    )
}

export default BLogSIngle2