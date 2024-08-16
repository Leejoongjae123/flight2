import React from 'react'
import FaqTwo from '@/src/components/sections/faqs/faqTwo'
import Mission from '@/src/components/sections/mission'
import StoryFive from '@/src/components/sections/ourStories/storyFive'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/src/components/sections/teams/teamGrid'
import TestimonialTwo from '@/src/components/sections/testimonials/testimonialTwo'
import TeamOne from '@/src/components/sections/teams/teamOne'

const About = () => {
  return (
    <main>
        <PageTitle pageName={"UND 항공대학 소개"} breadcrumbLink={"About us"}/>
        {/* <StoryFive counter={false}/> */}
        <Mission/>
        {/* <TeamOne /> */}
        {/* <TeamGrid/>
        <TestimonialTwo/>
        <FaqTwo/>
        <SubscribeTwo/> */}
    </main>
  )
}

export default About