import React from 'react'
import Approach from '@/components/sections/approach'
import BlogTwo from '@/components/sections/blogs/blogTwo'
import CountDown from '@/components/sections/countDown'
import Dashboard from '@/components/sections/dashboard'
import HeroFive from '@/components/sections/heroes/heroFive'
import StoryFive from '@/components/sections/ourStories/storyFive'
import PlatformRating from '@/components/sections/platformRating'
import PriceThree from '@/components/sections/pricing/priceThree'
import ProvideTwo from '@/components/sections/provides/provideTwo'
import ServiceSix from '@/components/sections/services/serviceSix'
import ServiceThree from '@/components/sections/services/servicesThree'
import SubscribeOne from '@/components/sections/subscribes/subscribeOne'
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo'
import TestimonialTwo from '@/components/sections/testimonials/testimonialTwo'
import HeaderOne from '@/components/sections/headers/headerOne'
import FooterOne from '@/components/sections/footers/footerOne'
import FaqTwo from '@/components/sections/faqs/faqTwo'
import FaqOne from '@/components/sections/faqs/faqOne'

const Home = () => {
  return (
    <>
      
      <main>
        <HeroFive />
        <PlatformRating />
        
        <BlogTwo />
        <ServiceSix />
        <Approach />
        <FaqOne />
        {/* <StoryFive counter={true} />
        <ServiceThree />
        <FaqTwo />
        <ProvideTwo order_0={"order-0"} order_1={"order-1"} />
        <Dashboard />
        <CountDown />
        <TestimonialTwo />
        <SubscribeTwo />
        <PriceThree /> */}

        {/* <SubscribeOne className={"-mb-40 lg:py-0 py-0 lg:pt-15 pt-15"} /> */}
      </main>
      {/* <FooterOne /> */}
    </>
  );
};

export default Home;
