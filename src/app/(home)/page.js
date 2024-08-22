import React from "react";
import Approach from "@/src/components/sections/approach";
import BlogTwo from "@/src/components/sections/blogs/blogTwo";
import CountDown from "@/src/components/sections/countDown";
import Dashboard from "@/src/components/sections/dashboard";
import HeroFive from "@/src/components/sections/heroes/heroFive";
import StoryFive from "@/src/components/sections/ourStories/storyFive";
import PlatformRating from "@/src/components/sections/platformRating";
import PriceThree from "@/src/components/sections/pricing/priceThree";
import ProvideTwo from "@/src/components/sections/provides/provideTwo";
import ServiceSix from "@/src/components/sections/services/serviceSix";
import ServiceThree from "@/src/components/sections/services/servicesThree";
import SubscribeOne from "@/src/components/sections/subscribes/subscribeOne";
import SubscribeTwo from "@/src/components/sections/subscribes/subscribeTwo";
import TestimonialTwo from "@/src/components/sections/testimonials/testimonialTwo";
import HeaderOne from "@/src/components/sections/headers/headerOne";
import FooterOne from "@/src/components/sections/footers/footerOne";
import FaqTwo from "@/src/components/sections/faqs/faqTwo";
import FaqOne from "@/src/components/sections/faqs/faqOne";
import Open from "@/src/components/sections/UnderConstruction";
import Head from "next/head";

// const metadata = {
//   title: '글로벌 패스웨이',
//   description: '글로벌 패스웨이',
// }

// export const metadata = {
//   title: "UND 항공대학교 글로벌 패스웨이",
//   description:
//     "항공 유학 서비스를 제공하는 웹사이트입니다.",
//   icons: {
//     icon: "/images/logo/onlylogo.png",
//   },
// };

const Home = () => {
  return (
    <>
      <main>
        {/* <Open></Open> */}
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
