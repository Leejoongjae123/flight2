"use client"
import React, { useState, useEffect } from 'react'
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
import { createClient } from '@/utils/supabase/client'
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

  const supabase = createClient()
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false }).limit(5)
      if (error) {
        console.error(error)
      } else {
        setNews(data)
        if (data.length > 0) {
          setTab(data[0].id)
        }
      }
    }
    fetchNews()
  }, [])



  return (
    <section className=' py-15'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Our News</Button>
            <Title size={"5xl"} className="max-w-[872px] pt-6 text-center">UND 항공대학교 글로벌 패스웨이 <br /> <Highlight>주요 뉴스</Highlight></Title>
          </div>
        </SlideUp>
        <div className='lg:pt-20 pt-8'>
          <Tabs onValueChange={onTabChange} value={tab}>
            <TabsList className="bg-transparent justify-between lg:flex-nowrap flex-wrap xl:gap-5 gap-2 w-full">
              {
                news.map(({ id, title }) => {
                  return (
                    <TabsTrigger key={id} value={id} className={"bg-[#F4F6FF] dark:bg-[#1c242b] rounded-[10px] lg:basis-[20%] md:basis-[25%] sm:basis-[33%] basis-1/2 grow xl:px-6 px-2 xl:py-4 py-2 whitespace-normal text-start xl:gap-5 gap-1 data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-white overflow-hidden"}>

                      <div className='flex justify-center items-center h-[5vh]'>
                        <div className='w-full h-full'>
                          <span className='font-semibold text-lg text-center line-clamp-2'>{title}</span>
                        </div>
                      </div>

                    </TabsTrigger>
                  )
                })
              }
            </TabsList>
            {
              news.map(({ id, imageUrl, description }) => {
                return (
                  <TabsContent key={id} value={id} className={"lg:pt-7.5 md:pt-[110px] sm:pt-[190px] pt-[360px]"}>
                    <SlideUp>
                      <div className='grid grid-cols-1 md:grid-cols-3 bg-[#F4F6FF] dark:bg-[#1c242b] py-7.5 rounded-[30px] gap-x-10'>
                        <div className='col-span-1 md:col-span-2'>
                          <div className='flex flex-col h-full px-10'>
                            <p className='pt-5 pb-7.5 line-clamp-4'>{description.replace(/<[^>]+>/g, "")}</p>
                            <div className='flex justify-center items-center my-5'>
                              <Button size='sm' asChild variant='outline'>
                                <Link href={"/news/postings/" + id}> 더보기 </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className='relative col-span-1 h-[30vh] mx-10'>
                          <Image src={imageUrl} fill className='group-hover:scale-105 transition-all duration-700 object-cover rounded-2xl' />
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