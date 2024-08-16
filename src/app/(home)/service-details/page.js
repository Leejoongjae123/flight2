import React from 'react' 
import ContactForm from '@/src/components/sections/contactForm'
import PageTitle from '@/src/components/sections/pageTitle'
import ServiceArtical from '@/src/components/sections/services/serviceArtical'



const ServicesDetails = () => {
  return (
    <main>
      <PageTitle pageName={"Social Media Marketing"} breadcrumbLink={"services"} breadcrumbCurrent={"Social Media Marketing"} />
      <ServiceArtical />
      <ContactForm color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"} />
      <div className='lg:pb-15 pb-9'></div>
    </main>
  )
}

export default ServicesDetails