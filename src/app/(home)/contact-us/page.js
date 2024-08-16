
import React from 'react'
import dynamic from 'next/dynamic'
import ContactForm from '@/src/components/sections/contactForm'
import PageTitle from '@/src/components/sections/pageTitle'
import SubscribeTwo from '@/src/components/sections/subscribes/subscribeTwo'
const ContactMap = dynamic(() => import('@/src/components/sections/map'), { ssr: false })


const ContactUs = () => {
  return (
    <main>
      <PageTitle pageName={"Contact Us"} breadcrumbLink={"Contact"} />
      <ContactMap />
      <ContactForm color={"text-white"} inputColor={"bg-transparent border-white border text-white placeholder:text-white"} />
      <div className='lg:pt-15 pt-9'></div>
      <SubscribeTwo />
    </main>
  )
}

export default ContactUs