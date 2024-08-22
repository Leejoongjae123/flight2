"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Highlight from '../ui/highlight'
import Title from '../ui/title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import Image from 'next/image'
import Link from 'next/link'
import icon_1 from "../../../public/images/shapes/approach-icon4-1.png"
import icon_2 from "../../../public/images/shapes/approach-icon4-2.png"
import icon_3 from "../../../public/images/shapes/approach-icon4-3.png"
import icon_4 from "../../../public/images/shapes/approach-icon4-4.png"
import icon_5 from "../../../public/images/shapes/approach-icon4-5.png"
import SlideUp from '../animations/slideUp'

const tabList = [
  {
    id: "TYPE1",
    tab_name: "과정 개요",
    tab_icon: icon_1,
    tab_content: "/images/resource/approach-image4-1.jpg"

  },
  {
    id: "TYPE2",
    tab_name: "과정 진행",
    tab_icon: icon_2,
    tab_content: "/images/resource/approach-image4-2.jpg"
  },
  {
    id: "TYPE3",
    tab_name: "과정 특징",
    tab_icon: icon_3,
    tab_content: "/images/resource/approach-image4-1.jpg"
  }
]

const Selections = ({selection, setSelection}) => {
  const onTabChange = (value) => {
    setSelection(value);
  }

  return (
    <section className='mb-10 justify-center items-center w-full'>
      <div className='w-[90vw] md:w-[60vw] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Process</Button>
          </div>
        </SlideUp>
        <SlideUp>
          <div className='lg:mt-20 pt-8'>
            <Tabs onValueChange={onTabChange} defaultValue="TYPE1" >
              {/* <TabsList className="bg-transparent justify-between lg:flex-nowrap flex-wrap xl:gap-5 gap-2 w-full"> */}
              <TabsList className="bg-transparent justify-between lg:flex-nowrap flex-wrap xl:gap-5 gap-2 w-full h-full">
                {
                  tabList.map(({ id, tab_icon, tab_name }) => {
                    return (
                      <TabsTrigger key={id} value={id} className={"bg-[#F4F6FF] dark:bg-[#1c242b] rounded-[10px] lg:basis-[20%] md:basis-[25%] sm:basis-[33%] basis-1/2 grow xl:px-6 px-2 xl:py-4 py-2 whitespace-normal text-start xl:gap-5 gap-1 data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-white overflow-hidden"}>
                        {/* <Image src={tab_icon} alt='icon' className={`${id === tab ? "brightness-0 invert" : ""} mr-3 xl:mr-0`} /> */}
                        <div className='flex justify-center items-center h-full'>
                          <div className='w-full h-full flex justify-center items-center'>
                            <span className=' font-semibold text-xl text-center'>{tab_name}</span>
                          </div>
                        </div>
                      </TabsTrigger>
                    )
                  })
                }
              </TabsList>
            </Tabs>
          </div>
          </SlideUp>
      </div>
    
    </section >
  )
}

export default Selections