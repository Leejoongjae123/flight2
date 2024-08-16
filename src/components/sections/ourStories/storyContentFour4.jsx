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

const StoryContentFour = () => {

  return (

    <SlideUp>
      <Title size={"5xl"}>
        FAA 면장 취득 과정
      </Title>
      <ol className="text-gray-500 border-s border-gray-200 flex  flex-col my-10 gap-y-5">
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg
              className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">인증</h3>
            <p className="">
              한국내 유일 UND 항공대학교 공식 인증 항공 교육 플랫폼
            </p>
          </div>
        </li>
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg
              className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">자격</h3>
            <p className="">국내외 4년제 대학교 졸업자(국내 항공사 취업 학력 기준)
            </p>
            <p className="">국내외 2년제 대학 졸업자(미국 항공사 취업 학력 기준)
            </p>
          </div>
        </li>
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg
              className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">장점</h3>
            <p className="">국내외 항공사 현직/취업 담당관 선호대학교
              <p>전미 최고의 교육시설<br />
                -본교 : Grand Forks N.D<br />
                -분교 : Phoenix A.Z</p>
              <p>최상의 비행 훈련 커리큘럼</p>
              <p>최신 비행 훈련용 항공기(2년/평균기령)</p>
              <p>훈련용 항공기 134대(7년 주기 전체 교체) ▷비행 훈련, 비행 경력 충족 최적화</p>
            </p>

          </div>
        </li>
        <li className="flex gap-x-5 ">
          <span className="flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
            <svg
              className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-1">
            <h3 className="font-medium leading-tight">특전</h3>
            <p className="">UND항공대학교 비행교관 취업 연계</p>
            <p className="">항공사 요구 비행 경력 달성 최적화</p>
            <p className="">미국 지역 항공사 및 LCC 취업 지원</p>
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