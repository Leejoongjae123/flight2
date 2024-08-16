import React from 'react'
import JobDescription from '@/src/components/sections/jobs/jobDescription'
import PageTitle from '@/src/components/sections/pageTitle'



const CareerDetails = () => {
  return (
    <main>
      <PageTitle pageName={"Job Description"} linkName={"Career"} className="lg:mb-0 mb-0" />
      <JobDescription />
    </main>
  )
}

export default CareerDetails