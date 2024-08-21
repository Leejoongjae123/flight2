import React from 'react'
import Link from 'next/link'
import { Button } from '../../ui/button'
import Title from '../../ui/title'
import Category from '../../../../public/icons/category'
import Filter from '../../../../public/icons/filter'
import Shield from '../../../../public/icons/shield'
import { cn } from '@/src/lib/utils'
import RightArrow from '../../../../public/icons/rightArrow'
import SoftwareLogo from './softwareLogo'
import SlideUp from '@/src/components/animations/slideUp'
import { GrTarget } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { FiCheckSquare } from "react-icons/fi";
const ProvideOne = () => {
  return (
    <section className='lg:py-15 py-9'>

      <div className='max-w-[1350px] mx-auto px-[15px] flex flex-col justify-center items-center'>
        <div className='mb-10'>
          <Button variant="secondary">Introduction</Button>
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 justify-center w-full  p-10'>
          <div className='flex flex-col justify-center items-center'>
            <SlideUp>

              <Title size={"4xl"} className="max-w-[703px] pt-6 text-center md:text-left">육군항공준사관</Title>
              <div className='max-w-[563px]'>
                <p className='font-semibold text-muted-foreground pt-6 text-center md:text-left'>
                  자랑스러운 선진 육군에서 펼쳐지는 꿈의 날개!
                </p>
                <p className='font-semibold text-muted-foreground pt-6 text-center md:text-left'>
                  회전익 항공기 조종 준사관
                </p>
              </div>
              <div className='flex flex-col gap-6 xl:mt-10 mt-8 pb-12.5 w-full'>
                <Card bgColor={"after:bg-accent"} color={"text-muted-foreground"} icon={<FiCheckSquare />} title={"선발 주체 : 대한민국 육군"} />
                <Card bgColor={"after:bg-accent"} color={"text-purple"} icon={<GoGoal />} title={"목적 : 헬기 조종사 인원 선발"} />
                <Card bgColor={"after:bg-accent"} color={"text-red"} icon={<FaPeopleGroup />} title={"인원 : 36명(2023년 1분기 기준)"} />
                <Card bgColor={"after:bg-accent"} color={"text-muted-foreground"} icon={<LuCalendarDays />} title={"선발 : 매년 2회"} />
              </div>
            </SlideUp>
          </div>
          <div className='h-full'>
            <SoftwareLogo />
          </div>
        </div>
        <section className="bg-white dark:bg-gray-900 w-full">
          <div className="mx-auto p-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                시험응시 자격 요건
              </h2>
            </div>

            <div
              className="w-full p-15 mx-auto mt-8 space-y-5 border border-gray-100 rounded-lg bg-[rgba(46,77,254,0.05)] ">
              <div className="pb-5 border-b border-gray-200 ">
                <h3 className="text-2xl font-semibold text-gray-900">
                  연령 제한
                </h3>
                <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                  임관일 기준 만 20세 이상 ~ 만 50세 이하
                </p>
              </div>

              <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  학력 요건
                </h3>
                <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                  고등학교 졸업 이상의 학력
                </p>
              </div>

              <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  군필조건
                </h3>
                <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                  병역 미필자, 예비역 및 현역(간부/병, 타군) 구분 없이 남/여지원 가능
                </p>
              </div>

              <div className="pb-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  신체조건
                </h3>
                <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                  국민 체력 인증센터 인증 통과(1차 평가)
                </p>
                <p className="mt-1 text-lg font-normal text-gray-500 dark:text-gray-400">
                  항공종사자 신체검사 1종에 준하는 신체 능력(2차 평가)
                </p>
              </div>


            </div>


          </div>
        </section>
      </div>
    </section>
  )
}

export default ProvideOne


const Card = ({ icon, color, bgColor, title }) => {
  return (
    <div className='flex items-center gap-2.5 group'>
      {/* <div className={cn(`${color} min-w-12.5 min-h-12.5 flex items-center justify-center relative z-[1] after:absolute after:left-0 after:top-0 after:w-full after:h-full  after:opacity-[0.08] group-hover:after:opacity-25 hover:transition-all after:duration-500 after:rounded-full after:z-[-1]`)}> */}
      <div className='bg-accent w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground'>
        <span className='group-hover:scale-90 transition-all duration-500'>{icon}</span>
      </div>
      <p className='font-bold leading-[120%] text-muted-foreground'>{title}</p>
    </div>
  )
}