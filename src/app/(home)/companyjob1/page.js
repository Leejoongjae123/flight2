import React from 'react'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import TestimonialOne from '@/src/components/sections/testimonials/testimonialOne'
import TestimonialThree from '@/src/components/sections/testimonials/testimonialThree'
import TestimonialTwo from '@/src/components/sections/testimonials/testimonialTwo'
import JobsPost from '@/src/components/sections/jobs/jobsPost'
import ServiceTwo from '@/src/components/sections/services/serviceTwo'
export const metadata = {
    title: "NextPro | Testimonial",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};
const Testimonial = () => {
    return (
        <main>
            <PageTitle pageName={"졸업 후 국내항공사 취업"} breadcrumbLink={"Testimonials"} />
            {/* <JobsPost></JobsPost> */}
            <ServiceTwo></ServiceTwo>
            {/* <TestimonialOne />
            <TestimonialTwo />
            <TestimonialThree />
            <SubscribeTwo /> */}
        </main>
    )
}

export default Testimonial