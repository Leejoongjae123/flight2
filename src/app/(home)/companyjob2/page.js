import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TestimonialOne from '@/src/components/sections/testimonials/testimonialOne'
import TestimonialThree from '@/src/components/sections/testimonials/testimonialThree'
import TestimonialTwo from '@/src/components/sections/testimonials/testimonialTwo'
import JobsPost from '@/src/components/sections/jobs/jobsPost'
import ServiceTwo from '@/src/components/sections/services/serviceTwo'
import ServiceFive from '@/src/components/sections/services/sesrviceFive'

const Testimonial = () => {
    return (
        <main>
            <PageTitle pageName={"UNDAF 비행교관(CFI) 취업"} breadcrumbLink={"Testimonials"} description={"CFI:Certificated Flight Instructor"} />
            <ServiceFive></ServiceFive>
        </main>
    )
}

export default Testimonial