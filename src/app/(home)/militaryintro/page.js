import React from 'react'
import FaqOne2 from '@/src/components/sections/faqs/faqOne2'
import FaqTwo from '@/src/components/sections/faqs/faqTwo'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
import ProvideOne from '@/src/components/sections/provides/provideOne'


const Faq = () => {
    return (
        <main>
            <PageTitle pageName={"육군 항공 준사관 소개"} breadcrumbLink={"Faq"} />
            <ProvideOne />
            {/* <FaqTwo /> */}
            {/* <SubscribeTwo /> */}
        </main>
    )
}

export default Faq