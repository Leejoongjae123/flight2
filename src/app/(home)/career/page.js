import React from 'react'
import FaqTwo from '@/src/components/sections/faqs/faqTwo'
import JobsPost from '@/src/components/sections/jobs/jobsPost'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TeamOne from '@/src/components/sections/teams/teamOne'

  
const Career = () => {
    return (
        <main>
            <PageTitle pageName={"Career"} breadcrumbLink={"Career"} />
            <TeamOne />
            <JobsPost />
            <FaqTwo />
            <SubscribeTwo />
        </main>
    )
}

export default Career