import React from 'react'
import BlogArtical2 from '@/components/sections/blogs/blogArtical2'
import PageTitle from '@/components/sections/pageTitle'

export const metadata = {
    title: "NextPro | Blog-Single-2",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
  };
  
const BLogSIngle2 = () => {
    return (
        <main>
            <PageTitle pageName={"UND 장학금 안내"} breadcrumbLink={"Blog"} breadcrumbCurrent={"New Study: Instagram Reels Outperform TikTok & Facebook Videos."}  />
            
            <BlogArtical2 sidebarShow={false}/>
        </main>
    )
}

export default BLogSIngle2