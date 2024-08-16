'use client'
import { usePathname } from 'next/navigation'

import React from 'react'
import StoryContentOne from './storyContentOne'
import StoryContentTwo from './storyContentTwo'

import Image from 'next/image'
import SlideLeft from '@/src/components/animations/slideLeft'

const StoryFive = ({ counter }) => {
  const pathname = usePathname()
    return (
        <section className='overflow-x-hidden'>
            <div className='container'>
                {/* <div className='relative pt-7 pb-6 xl:pb-0 px-2.5 after:absolute after:z-[-1] after:left-0 after:top-0 after:bg-[#2e4dfe0d] after:w-full after:h-[calc(100%-100px)] after:rounded-[50px]'> */}
                <div className='relative pb-6 xl:pb-0 px-2.5 after:absolute after:z-[-1] after:left-0 after:top-0 after:bg-[#2e4dfe0d] after:w-full h-full after:rounded-[50px]'>
                    <div className='flex lg:flex-row flex-col justify-center 2xl:gap-[144px] xl:gap-20 lg:gap-10 gap-5'>

                        <div className='max-w-[780px] mt-8 h-full'>
                            {pathname==='/about-us2/'?(<StoryContentOne />):(<StoryContentTwo />)}
                            
                            
                            {
                                counter &&
                                <div className='flex md:flex-row flex-col gap-25 2xl:mt-24 mt-14'>
                                    <div className='flex gap-[15px]'>
                                        <h2 className='text-[62px] text-muted-foreground font-extrabold'>5k+</h2>
                                        <p className='font-semibold leading-[130%] text-muted-foreground max-w-[113px]'>Website Optimized</p>
                                    </div>
                                    <div className='flex gap-[15px]'>
                                        <h2 className='text-[62px] text-muted-foreground font-extrabold'>15X</h2>
                                        <p className='font-semibold leading-[130%] text-muted-foreground max-w-[159px]'>Conversion Rate Increased</p>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoryFive