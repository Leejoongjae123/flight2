import Link from 'next/link'
import React from 'react'
import SlideUp from '@/src/components/animations/slideUp'
import { Button } from '@/src/components/ui/button'
import Title from '@/src/components/ui/title'
import { servicesDataTwo } from '@/src/lib/fackData/servicesDataTwo'
import Image from 'next/image'
const ServiceTwo = () => {
    return (
        <section className='lg:pb-15 pb-9'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center gap-y-10'>
                        <Button variant="secondary">Jobs</Button>
                        <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">졸업 직후 국내항공사 취업</Title>
                        <div className='relative w-full h-[30vh] '>
                          <Image src="/images/getajob/getajob.png" fill className='object-cover rounded-xl'/>
                        </div>
                    </div>
                </SlideUp>
                <div className='lg:pt-7.5 pt-2'>
                    <SlideUp>
                        <div className='grid xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-x-10
                    '>
                            {
                                servicesDataTwo.slice(0,6).map(({ id, description, icon_1, service_name }) => {
                                    return (
                                        <div key={id} className='lg:pt-15 pt-8 text-center lg:text-start flex flex-col items-center lg:items-start group'>
                                            <div className='md:w-[120px] md:h-[120px] w-16 h-16 md:p-6 p-4 rounded-full flex justify-center items-center lg:mb-7.5 mb-4 bg-[rgba(46,77,254,0.10)] icon'>
                                                <span className='transition-all duration-500 group-hover:scale-90'>{icon_1}</span>
                                            </div>
                                            <p className='text-xl font-extrabold text-muted-foreground leading-[140%] multiline-hover'>{service_name}</p>
                                            <p className='lg:pt-6 pt-3' dangerouslySetInnerHTML={{ __html: description }}></p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>
    )
}

export default ServiceTwo