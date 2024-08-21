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
        입학 과정
      </Title>
      <ol className="text-gray-500 border-s border-gray-200 flex  flex-col my-10 gap-y-5 text-lg">
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <FaCheckCircle className='text-blue-600 w-20 h-20' />
          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">인증</h3>
            <p className="">
              국내 유일 UND 항공대학교 공식인증 항공교육 플랫폼
            </p>
          </div>
        </li>
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <FaCheckCircle className='text-blue-600 w-20 h-20' />

          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">자격</h3>
            <p className="">국내외 고등학교 졸업자 및 졸업예정자 또는 동등 이상의 자격 소지자</p>
          </div>
        </li>
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <FaCheckCircle className='text-blue-600 w-20 h-20' />

          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">특전</h3>
            <p className="">SAT 일괄 면제 - 협의 완료</p>
            <p className="">영어-ELS 미국 현지 수료 조건으로 입학 가능</p>
          </div>
        </li>
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8  rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
          <FaCheckCircle className='text-blue-600 w-20 h-20' />

          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">학위</h3>
            <p className="">전미 Top1 주립 명문 항공대학교 4년제 학사학위 취득</p>
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