import React from 'react'
import FaqTwo from '@/src/components/sections/faqs/faqTwo'
import Mission from '@/src/components/sections/mission'
import StoryFive from '@/src/components/sections/ourStories/storyFive'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TeamGrid from '@/src/components/sections/teams/teamGrid'
import TestimonialTwo from '@/src/components/sections/testimonials/testimonialTwo'
import UnderConstruction from '@/src/components/sections/UnderConstruction'




const About = () => {
  return (
    <main>
        <PageTitle pageName={"UND 재단 이사장 인사말"} />
        {/* <UnderConstruction></UnderConstruction> */}
        <StoryFive counter={false}/>
        {/* <Mission/>
        <TeamGrid/>
        <TestimonialTwo/>
        <FaqTwo/>
        <SubscribeTwo/> */}
    </main>
  )
}

export default About