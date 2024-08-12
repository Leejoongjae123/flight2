import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/src/components/sections/teams/teamGrid'
import TeamPersonalCard from '@/src/components/sections/teams/teamPersonalCard'
import TestimonialTwo from '@/src/components/sections/testimonials/testimonialTwo'

export const metadata = {
    title: "NextPro | Team",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

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