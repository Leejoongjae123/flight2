"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Highlight from '../ui/highlight'
import Title from '../ui/title'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
    id: "development",
    tab_name: "새로운 항공기에 대한투자를 승인",
    tab_icon: icon_1,
    tab_content: "/images/resource/approach-image4-1.jpg"
  },
  {
    id: "partnership",
    tab_name: "전미 비즈니스 항공협회 행사 개최",
    tab_icon: icon_2,
    tab_content: "/images/resource/approach-image4-2.jpg"
  },
  {
    id: "decisions",
    tab_name: "2022년 가을학기 항공학과 오리엔테이션 진행",
    tab_icon: icon_3,
    tab_content: "/images/resource/approach-image4-1.jpg"
  },
  {
    id: "execution",
    tab_name: "항공학과 확장공사 완료",
    tab_icon: icon_4,
    tab_content: "/images/resource/approach-image4-2.jpg"
  },
  {
    id: "communication",
    tab_name: "코로나 백신접종 학생 인센티브 장학금 지급",
    tab_icon: icon_5,
    tab_content: "/images/resource/approach-image4-1.jpg"
  },

]
const Approach = () => {
  const [tab, setTab] = useState("development");
  const onTabChange = (value) => {
    setTab(value);
  }

  return (
    <section className=' py-15'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Our News</Button>
            <Title size={"5xl"} className="max-w-[872px] pt-6 text-center">유앤디글로벌 <Highlight>주요 뉴스</Highlight></Title>
          </div>
        </SlideUp>
        <div className='lg:pt-20 pt-8'>
          <Tabs onValueChange={onTabChange} defaultValue="development" >
            <TabsList className="bg-transparent justify-between lg:flex-nowrap flex-wrap xl:gap-5 gap-2 w-full">
              {
                tabList.map(({ id, tab_icon, tab_name }) => {
                  return (
                    <TabsTrigger key={id} value={id} className={"bg-[#F4F6FF] dark:bg-[#1c242b] rounded-[10px] lg:basis-[20%] md:basis-[25%] sm:basis-[33%] basis-1/2 grow xl:px-6 px-2 xl:py-4 py-2 whitespace-normal text-start xl:gap-5 gap-1 data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-white overflow-hidden"}>
                      {/* <Image src={tab_icon} alt='icon' className={`${id === tab ? "brightness-0 invert" : ""} mr-3 xl:mr-0`} /> */}
                      <div className='flex justify-center items-center h-[5vh]'>
                        <div className='w-full h-full'>
                          <span className=' font-semibold text-lg text-center'>{tab_name}</span>
                        </div>

                      </div>

                    </TabsTrigger>
                  )
                })
              }
            </TabsList>
            {
              tabList.map(({ id, tab_content }) => {
                return (
                  <TabsContent key={id} value={id} className={"lg:pt-7.5 md:pt-[110px] sm:pt-[190px] pt-[360px]"}>
                    <SlideUp>
                      <div className='flex lg:flex-row flex-col justify-between bg-[#F4F6FF] dark:bg-[#1c242b] py-7.5 rounded-[30px]'>
                        <div className='lg:pl-[86px] pl-7.5 pr-7.5 lg:pr-0 xl:max-w-[660px] lg:max-w-[550px] '>
                          <Title size={"4xl"}>Strategic Planning Tailored to Your Vision</Title>
                          <p className='pt-5 pb-7.5'>Our strategic planning process begins with a deep dive into your business objectives, target audience, and competitive landscape. We meticulously analyze market trends and consumer insights to craft customized strategies.</p>
                          <Button asChild variant='outline'>
                            <Link href={"/services"}> 더보기 </Link>
                          </Button>

                        </div>
                        <div className='pr-7.5 pl-7.5 lg:pl-0 lg:max-w-[540px] w-full pt-7.5 lg:pt-0'>

                          <Image src={tab_content} width={540} height={361} alt='bg' style={{ width: "100%" }} className='rounded-2.5xl' />
                        </div>
                      </div>
                    </SlideUp>
                  </TabsContent>
                )
              })
            }
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default Approach