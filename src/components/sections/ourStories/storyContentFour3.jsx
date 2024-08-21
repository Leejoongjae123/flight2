import React from 'react'
import Link from 'next/link'
import Highlight from '@/src/components/ui/highlight'
import Title from '@/src/components/ui/title'
import Category from '../../../../public/icons/category'
import Filter from '../../../../public/icons/filter'
import Shield from '../../../../public/icons/shield'
import { cn } from '@/src/lib/utils'
import { Button } from '@/src/components/ui/button'
import ProgressBar from '../../ui/progressBar'
import SlideUp from '@/src/components/animations/slideUp'
import { FaCheckCircle } from "react-icons/fa";

const StoryContentFour = () => {

  return (

    <SlideUp>
      <Title size={"5xl"}>
        CFI 취업과정
      </Title>
      <ol className="text-gray-500 border-s border-gray-200 flex  flex-col my-10 gap-y-5">
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <FaCheckCircle className='text-blue-600 w-20 h-20' />

          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">인증</h3>
            <p className="">
              한국내 유일 UND 항공대학교 공식 인증 항공 교육 플랫폼
            </p>
          </div>
        </li>
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <FaCheckCircle className='text-blue-600 w-20 h-20' />

          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">자격</h3>
            <p className="">FAA 사업용 조종사 CPL 면장 취득자 ▷ 국내외 항공사 미취업자 포함</p>
          </div>
        </li>
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <FaCheckCircle className='text-blue-600 w-20 h-20' />

          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">특전</h3>
            <p className="">교관과정 이수 ▷UND항공대학교 자격전형 ▷ UND 항공대학교 비행교관 정식취업(비행교관 급여 35$/hr)</p>

          </div>
        </li>

      </ol>

    </SlideUp >

  )
}

export default StoryContentFour


const Card = ({ icon, color, bgColor, title }) => {
  return (
    <div className='flex items-center gap-2.5 group'>
      <div className={cn(`${color}  min-w-12.5 min-h-12.5 flex items-center justify-center relative z-[1] after:absolute after:left-0 after:top-0 after:w-full after:h-full ${bgColor} after:opacity-[0.08] group-hover:after:opacity-25 hover:transition-all after:duration-500 after:rounded-full after:z-[-1]`)}>
        <span className='group-hover:scale-90 transition-all duration-500'>{icon}</span>
      </div>
      <p className='font-bold lg:max-w-[154px] leading-[120%]'>{title}</p>
    </div>
  )
}