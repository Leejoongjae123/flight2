import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import ProjectArtical from '@/src/components/sections/projectArtical'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'



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