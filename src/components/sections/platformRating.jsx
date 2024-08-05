"use client"
import React from 'react'
import Link from 'next/link';
import SlotCounter from "react-slot-counter"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';

import Rating from '../ui/rating';
import SlideRight from '../animations/slideRight';
import { ratingData } from '@/lib/fackData/ratingData';
import ScrollingBanner from "@/components/sections/scrollingbanner/scrolling-banner";
import {Logo1, Logo10, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9} from "@/components/sections/scrollingbanner/logos";
const logos = [  {
  key: "logo-1",
  logo: Logo1,
},
{
  key: "logo-2",
  logo: Logo2,
},
{
  key: "logo-3",
  logo: Logo3,
},
{
  key: "logo-4",
  logo: Logo4,
},
{
  key: "logo-5",
  logo: Logo5,
},
{
  key: "logo-6",
  logo: Logo6,
},
{
  key: "logo-7",
  logo: Logo7,
},
{
  key: "logo-8",
  logo: Logo8,
},
{
  key: "logo-9",
  logo: Logo9,
},
{
  key: "logo-10",
  logo: Logo10,
},
];

const PlatformRating = () => {
  return (
    <div className='container lg:pt-15 pt-9 overflow-x-hidden'>
      <div className='lg:py-12.5 py-6 xl:pl-12 pl-4 lg:pr-0 pr-4 bg-destructive dark:bg-accent border border-[#B0C2E2] dark:border-[#3f4652] rounded-[30px] relative after:absolute after:right-0 after:top-0 after:h-full after:w-16 after:rounded-tr-[30px] after:rounded-br-[30px] after:z-10 lg:after:bg-[linear-gradient(270deg,_#F2F4FB_2.14%,_rgba(242,_244,_251,_0.00)_191.43%)] dark:lg:after:bg-[linear-gradient(270deg,_#202932_2.14%,_rgba(242,_244,_251,_0.00)_191.43%)]'>
        <div className=' md:grid md:grid-cols-3 justify-between lg:items-center gap-5'>
          <div className='lg:flex grid sm:grid-cols-1 grid-cols-1 xl:gap-12.5 gap-6'>
            {/* <div className='bg-primary rounded-2xl xl:px-7.5  px-5 xl:pt-7.5 xl:pb-[22px] py-4 flex justify-between gap-7 rating-platform'>
              <div className='w-[20vw]'>
                <h5 className='text-[32px] font-extrabold text-white leading-[140%]'>
                  <SlotCounter startValue={0} value={80} debounceDelay={5000} duration={2} animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }} />%
                </h5>
                <p className='text-white'>취업성공률</p>
              </div>
              <span className='inline-block w-[1px] h-full bg-white'></span>
              <div className='w-[20vw]'>
                <h5 className='text-[32px] font-extrabold text-white leading-[140%] flex items-end'>
                  <SlotCounter startValue={0} value={10} debounceDelay={5000} duration={2} animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }} /><span>+</span>
                </h5>
                <p className='text-white'>Affiliate Company</p>
              </div>
            </div> */}
            <div className='self-center'>
              <p className='font-semibold text-muted-foreground '>2012년 이래로 다양한 제휴사들과 함께 글로벌 파일럿의 꿈을 키워가고 있습니다.</p>
            </div>
          </div>
          <div className='col-span-2 overflow-x-hidden pt-10 lg:pt-0 '>
            <SlideRight>
              <Swiper
                // modules={[Autoplay]}
                spaceBetween={10}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1400: { slidesPerView: 2.5 },
                  1550: { slidesPerView: 3.2 },
                }}
              >
                {
                  ratingData.map(({ id, icon, link, platformName, rating }) => {
                    return (
                      <SwiperSlide key={id} className='h-full'>
                        <div className='flex flex-col items-center justify-center sm:justify-start gap-x-10'>
                          <div className='icon__container w-[8vw] h-[10vh]'>
                            {icon}
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </SlideRight>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PlatformRating