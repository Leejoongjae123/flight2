import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import ProjectArtical from '@/src/components/sections/projectArtical'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'

export const metadata = {
  title: "NextPro | Portfolio-Details",
  description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const PortfolioDetails = () => {
  return (
    <main>
      <PageTitle pageName={"Portfolio Details"} breadcrumbLink={"Portfolio Details"}/>
      <ProjectArtical/>
      <SubscribeTwo/>
    </main>
  )
}

export default PortfolioDetails