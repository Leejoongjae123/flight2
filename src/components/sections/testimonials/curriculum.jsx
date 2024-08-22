"use client"
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from "swiper/modules"
import 'swiper/css';
import "swiper/css/effect-fade"
import { Button } from '@/src/components/ui/button'
import Title from '@/src/components/ui/title'
import { testimonialData } from '@/src/lib/fackData/testimonialData';
import CardOne from './cardOne';
import SlideUp from '@/src/components/animations/slideUp';
import Script from 'next/script'
import CurriculumTable1 from '@/src/components/sections/testimonials/curriculumtable1';
import CurriculumTable2 from '@/src/components/sections/testimonials/curriculumtable2';
import CurriculumTable3 from '@/src/components/sections/testimonials/curriculumtable3';
import Strategy from '@/src/components/sections/strategy'
import CardFive from '@/src/components/sections/blogs/cardFive'

const Curriculum = () => {
const majordata = [
  { id: 1, title: '공항관리학과', thumb: '/images/major/major1.jpg' },
  { id: 2, title: '항공경영학과', thumb: '/images/major/major2.jpg' },
  { id: 3, title: '항공기계공학과', thumb: '/images/major/major3.jpg' },
  { id: 4, title: '항공관제학과', thumb: '/images/major/major4.jpg' },
  { id: 5, title: '항공운항학과', thumb: '/images/major/major5.jpg' },  
  { id: 6, title: '무인기(UAV)학과', thumb: '/images/major/major6.jpg' },
]

  return (
    <section className=''>
      <div className='max-w-[1350px] mx-auto'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Major</Button>
            <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">학과소개</Title>
            <p className='pt-6 text-center text-muted-foreground font-bold text-2xl'>UND 항공대학교 학과소개</p>
          </div>
        </SlideUp>
        <SlideUp>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between px-5 lg:px-0'>
          {
            majordata.map(({ id, title, thumb }) => <CardFive key={id} id={id} title={title} thumb={thumb} />)
          }
        </div>
        </SlideUp>
        <SlideUp>
          <div className='flex flex-col items-center my-10'>
            <Button variant="secondary">Curriculum</Button>
            <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">UND항공대학교 학과별 커리큘럼</Title>
            <p className='pt-6 text-center text-muted-foreground font-bold text-2xl'>항공운항학과</p>
          </div>
        </SlideUp>
        <SlideUp>
          <CurriculumTable1></CurriculumTable1>

        </SlideUp>
        <SlideUp>
          <CurriculumTable2></CurriculumTable2>
        </SlideUp>
        <SlideUp>
          <CurriculumTable3></CurriculumTable3>
        </SlideUp>
        <SlideUp>
          <Strategy></Strategy>
        </SlideUp>

      </div>
    </section>
  )
}

export default Curriculum