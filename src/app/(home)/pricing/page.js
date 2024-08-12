import React from 'react'
import FaqTwo from '@/src/components/sections/faqs/faqTwo'
import PageTitle from '@/src/components/sections/pageTitle'
import PriceOne from '@/src/components/sections/pricing/priceOne'
import PriceThree from '@/src/components/sections/pricing/priceThree'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'

export const metadata = {
    title: "NextPro | Pricing",
    description: "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};

const Pricing = () => {
    return (
        <min>
            <PageTitle pageName={"Pricing Plan"} breadcrumbLink={"Pricing Plan"} />
            <PriceThree/>
            <PriceOne/>
            <FaqTwo/>
            <SubscribeTwo/>
        </min>
    )
}

export default Pricing