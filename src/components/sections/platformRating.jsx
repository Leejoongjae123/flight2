"use client"
import React from 'react'
import Link from 'next/link';
import SlotCounter from "react-slot-counter"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';

import Rating from '../ui/rating';
import SlideRight from '../animations/slideRight';
import { ratingData } from '@/src/lib/fackData/ratingData';
import ScrollingBanner from "@/src/components/sections/scrollingbanner/scrolling-banner";
import { Logo1, Logo10, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9 } from "@/src/components/sections/scrollingbanner/logos";
const logos = [{
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
import { teamData } from '@/src/lib/fackData/teamData'
import TeamCard from '@/src/components/sections/teams/teamCard'


const PlatformRating = () => {
  const pagination = {
    clickable: true,
    el: ".team-pagination",
    renderBullet: function (index, className) {
      return `<span class='${className} w-2 h-2 bg-muted rounded-full'></span>`;
    },
  };
  return (
    <div className='container lg:pt-15 pt-9 overflow-x-hidden'>
      <div className='lg:py-12.5 py-6 xl:pl-12 pl-4 lg:pr-0 pr-4 bg-destructive dark:bg-accent border border-[#B0C2E2] dark:border-[#3f4652] rounded-[30px] relative after:absolute after:right-0 after:top-0 after:h-full after:w-16 after:rounded-tr-[30px] after:rounded-br-[30px] after:z-10 lg:after:bg-[linear-gradient(270deg,_#F2F4FB_2.14%,_rgba(242,_244,_251,_0.00)_191.43%)] dark:lg:after:bg-[linear-gradient(270deg,_#202932_2.14%,_rgba(242,_244,_251,_0.00)_191.43%)]'>
        <div className=' md:grid md:grid-cols-4 justify-between lg:items-center gap-5'>
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
              <p className='font-semibold text-muted-foreground '>2012년 이래로 UND 항공대학교는 전미 글로벌 항공사와 함께 수준 높은 조종사를 양성하고 있습니다.</p>
            </div>
          </div>
          <div className='col-span-3 overflow-x-hidden pt-10 lg:pt-0 '>
            <SlideRight>
              <div className='relative'>
                <Swiper
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  spaceBetween={10}
                  // slidesPerView={3}
                  breakpoints={{
                    100: {
                      slidesPerView: 2,
                    },
                    640: {
                      slidesPerView: 4,
                    },
                    997: {
                      slidesPerView: 4,
                    },
                  }}

                  slidesPerGroup={2}
                  pagination={pagination}
                  loop={true}
                  effect={"fade"}
                  modules={[Pagination, Navigation, Autoplay]}
                >
                  {teamData.map(({ id, name, position, src }) => {
                    return <SwiperSlide> <TeamCard key={id} id={id} name={name} position={position} src={src} bgColor={"bg-[rgba(0,31,63,0.35)]"} link={"/team-details"} /> </SwiperSlide>
                  })}
                </Swiper>
                {/* <div className='team-pagination flex items-center gap-2 absolute -bottom-6 left-1/2 -translate-x-1/2 z-10 [&_.swiper-pagination-bullet-active]:bg-primary'></div> */}
              </div>
              
            </SlideRight>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PlatformRating