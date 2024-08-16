import React from 'react'
import FaqTwo from '@/src/components/sections/faqs/faqTwo'
import Mission from '@/src/components/sections/mission'
import StoryFive from '@/src/components/sections/ourStories/storyFive'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/src/components/sections/teams/teamGrid'
import TestimonialTwo from '@/src/components/sections/testimonials/testimonialTwo'
import TeamOne from '@/src/components/sections/teams/teamOne'
import Dashboard from '@/src/components/sections/dashboard'


const About = () => {
  return (
    <main>
        <PageTitle pageName={"준사관 준비반 장점"} breadcrumbLink={"About us"}/>
        <Dashboard/>
        {/* <StoryFive counter={false}/> */}
        {/* <Mission/> */}
        {/* <TeamOne /> */}
        {/* <TeamGrid/>
        <TestimonialTwo/>
        <FaqTwo/>
        <SubscribeTwo/> */}
    </main>
  )
}

export default About