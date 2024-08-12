import React from "react";
import Approach from "@/src/components/sections/approach";
import ContactForm from "@/src/components/sections/contactForm";
import CountDown from "@/src/components/sections/countDown";
import StoryFour from "@/src/components/sections/ourStories/storyFour";
import PageTitle from "@/src/components/sections/pageTitle";
import PriceThree from "@/src/components/sections/pricing/priceThree";
import ProvideOne from "@/src/components/sections/provides/provideOne";
import ServiceTwo from "@/src/components/sections/services/serviceTwo";
import Solutions from "@/src/components/sections/solutions";

export const metadata = {
  title: "NextPro | Services",
  description:
    "NextPro is a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing",
};
const Services = () => {
  return (
    <main>
      <PageTitle pageName={"교육과정 개요"} breadcrumbLink={"Services"} />
      <StoryFour />
      {/* <ServiceTwo/> */}
      {/* <Approach/> */}
      {/* <CountDown/> */}
      {/* <ProvideOne/> */}
      {/* <Solutions/> */}
      {/* <PriceThree/> */}
      {/* <ContactForm color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"} /> */}
    </main>
  );
};

export default Services;
