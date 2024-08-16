import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/src/components/sections/teams/teamGrid'
import TeamSlider from '@/src/components/sections/teams/teamSlider'


const TeamCarousel = () => {
  return (
    <main>
        <PageTitle pageName={"Our Team"} breadcrumbLink={"Team Carousel"}/>
        <TeamSlider/>
        <TeamGrid/>
        <SubscribeTwo/>
    </main>
  )
}

export default TeamCarousel