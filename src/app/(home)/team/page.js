import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/src/components/sections/teams/teamGrid'
import TeamPersonalCard from '@/src/components/sections/teams/teamPersonalCard'
import TestimonialTwo from '@/src/components/sections/testimonials/testimonialTwo'



const Team = () => {
    return (
        <main>
            <PageTitle pageName={"Our Team"} breadcrumbLink={"Our Team"} />
            <TeamPersonalCard isDetails={true} />
            <TeamGrid />
            <TestimonialTwo />
            <SubscribeTwo />
        </main>
    )
}

export default Team