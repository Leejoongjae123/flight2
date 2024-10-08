import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import SlideUp from '@/src/components/animations/slideUp'
import { Button } from '@/src/components/ui/button'
import Title from '@/src/components/ui/title'
import { servicesDataSix } from '@/src/lib/fackData/servicesDataSix'


const ServiceSix = () => {
  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Our Services</Button>
            <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">입학안내</Title>
          </div>
        </SlideUp>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 pt-12.5'>
          {servicesDataSix.slice(0, 3).map(({ id, description, service_name, icon, url }) => {
            return (
              <div key={id} className='border border-accent rounded-[15px] px-[15px] py-4 text-center flex flex-col justify-center items-center'>
                <SlideUp id={id}>
                  <div className='flex flex-col justify-center items-center gap-y-5 p-5'>
                    <div className='flex justify-center relative h-24 w-24'>
                      <Image src={icon} alt={service_name} fill />
                    </div>
                    <div className='bg-[rgba(46,77,254,0.05)] rounded-[10px] px-[16px] py-10'>
                      <Title className='text-center' size={"2xl"}>
                        <Link href={url} className='multiline-hover'>{service_name}</Link>
                      </Title>
                      <p className='pt-5 text-center'>{description}</p>
                    </div>
                  </div>

                </SlideUp>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceSix