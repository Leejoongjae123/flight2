import React from 'react'
import BlogArtical from '@/src/components/sections/blogs/blogArtical'
import PageTitle from '@/src/components/sections/pageTitle'

export const metadata = {
    title: "NextPro | Blog-Single-2",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
  };
  
const BLogSIngle2 = () => {
    return (
        <main>
            <PageTitle pageName={"입학생 사전교육"} breadcrumbLink={"Blog"} breadcrumbCurrent={"New Study: Instagram Reels Outperform TikTok & Facebook Videos."}  />
            <BlogArtical sidebarShow={false}/>
        </main>
    )
}

export default BLogSIngle2