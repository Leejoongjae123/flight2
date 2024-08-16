import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TestimonialOne from '@/src/components/sections/testimonials/testimonialOne'
import TestimonialThree from '@/src/components/sections/testimonials/testimonialThree'
import TestimonialTwo from '@/src/components/sections/testimonials/testimonialTwo'


const Testimonial = () => {
    return (
        <main>
            <PageTitle pageName={"Testimonials"} breadcrumbLink={"Testimonials"} />
            <TestimonialOne />
            <TestimonialTwo />
            <TestimonialThree />
            <SubscribeTwo />
        </main>
    )
}

export default Testimonial