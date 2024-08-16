import React from 'react'
import FaqTwo from '@/src/components/sections/faqs/faqTwo'
import Mission2 from '@/src/components/sections/mission2'
import StoryFive from '@/src/components/sections/ourStories/storyFive'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/src/components/sections/teams/teamGrid'
import TestimonialTwo from '@/src/components/sections/testimonials/testimonialTwo'
import TeamOne from '@/src/components/sections/teams/teamOne'


const About = () => {
  return (
    <main>
        <PageTitle pageName={"교과과정"} breadcrumbLink={"About us"}/>
        {/* <StoryFive counter={false}/> */}
        <Mission2/>
        {/* <TeamOne /> */}
        {/* <TeamGrid/>
        <TestimonialTwo/>
        <FaqTwo/>
        <SubscribeTwo/> */}
    </main>
  )
}

export default About