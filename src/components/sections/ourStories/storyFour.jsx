'use client'
import React, { useState } from 'react'
import StoryContentFour from './storyContentFour'
import StoryContentFour2 from './storyContentFour2'
import StoryContentFour3 from './storyContentFour3'
import StoryContentFour4 from './storyContentFour4'

import Image from 'next/image'
import ExperienceCounter from './experienceCounter'
import SlideUp from '@/src/components/animations/slideUp'
import Selections from '@/src/components/sections/selections'
import { BsAlphabetUppercase } from "react-icons/bs";

const StoryFour = () => {
  const [selection, setSelection] = useState('TYPE1')

  return (
    <section className='justify-center items flex flex-col'>
      <div className='w-full'>
        <Selections selection={selection} setSelection={setSelection}></Selections>
      </div>
      <div className={`${selection === 'TYPE1' ? '' : 'hidden'} flex flex-col justify-center items-center`}>
        <div className='w-[90vw] md:w-[60vw] mx-auto px-[15px] overflow-x-hidden overflow-y-clip flex justify-center'>
          <div className='flex flex-col md:grid md:grid-cols-3 justify-between items-center gap-5 pb-0 '>
            <div className='col-span-1 relative mx-auto lg:ml-0'>
              <SlideUp>
                <Image src={"/images/process/process1.jpg"} width={500} height={250} sizes='(max-width:1024px) 100vw, 50vw' alt='stroy background' className='rounded-[30px]' />
              </SlideUp>
            </div>
            <div className='col-span-2 md:pl-10'>
              <StoryContentFour />
            </div>
          </div>
        </div>
        <hr className='w-[60vw] my-10 border-0.5 border-gray-300' />
        <div className='w-[90vw] md:w-[60vw] mx-auto px-[15px] overflow-x-hidden overflow-y-clip flex justify-center'>
          <div className='flex flex-col md:grid md:grid-cols-3 justify-between items-center gap-5 pb-0 '>
            <div className='col-span-1 relative mx-auto lg:ml-0'>
              <SlideUp>
                <Image src={"/images/process/process2.jpg"} width={500} height={250} sizes='(max-width:1024px) 100vw, 50vw' alt='stroy background' className='rounded-[30px]' />
              </SlideUp>
            </div>
            <div className='col-span-2 md:pl-10'>
              <StoryContentFour2 />
            </div>
          </div>
        </div>
        <hr className='w-[60vw] my-10 border-0.5 border-gray-300' />

        <div className='w-[90vw] md:w-[60vw] mx-auto px-[15px] overflow-x-hidden overflow-y-clip flex justify-center'>
        <div className='flex flex-col md:grid md:grid-cols-3 justify-between items-center gap-5 pb-0 '>
        <div className='col-span-1 relative mx-auto lg:ml-0'>
              <SlideUp>
                <Image src={"/images/process/process3.jpg"} width={500} height={250} sizes='(max-width:1024px) 100vw, 50vw' alt='stroy background' className='rounded-[30px]' />
              </SlideUp>
            </div>
            <div className='col-span-2 md:pl-10'>
              <StoryContentFour3 />
            </div>
          </div>
        </div>
        <hr className='w-[60vw] my-10 border-0.5 border-gray-300' />

        <div className='w-[90vw] md:w-[60vw] mx-auto px-[15px] overflow-x-hidden overflow-y-clip flex justify-center'>
        <div className='flex flex-col md:grid md:grid-cols-3 justify-between items-center gap-5 pb-0 '>
            <div className='col-span-1 relative mx-auto lg:ml-0'>
              <SlideUp>
                <Image src={"/images/process/process4.jpg"} width={500} height={250} alt='stroy background' className='rounded-[30px] ' />
              </SlideUp>
            </div>
            <div className='col-span-2 md:pl-10'>
              <StoryContentFour4 />
            </div>
          </div>
        </div>
      </div>
      <div className={selection === 'TYPE2' ? '' : 'hidden'}>
        <SlideUp>
          <section class="bg-white antialiased text-[#001F3F]">
            <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 ">
              <div class="p-4 rounded-lg sm:p-12 bg-gray-50 dark:bg-gray-800">
                <div class="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
                  <div class="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                    <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                      <svg aria-hidden="true" class="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 21h18M4 18h16M6 10v8m4-8v8m4-8v8m4-8v8M4 9.5v-.955a1 1 0 0 1 .458-.84l7-4.52a1 1 0 0 1 1.084 0l7 4.52a1 1 0 0 1 .458.84V9.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5Z" />
                      </svg>




                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-[#001F3F] sm:text-2xl dark:text-white">
                        입학지원
                      </h3>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        UND 항공대학교 글로벌 패스웨이를 통한 입학 지원
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        서류, 면접으로 선발
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        SAT 점수 공인영어점수로 대체 가능
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        미달 시 ELS 조건부 입학 가능
                      </p>
                    </div>
                  </div>

                  <div class="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                    <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                      <svg aria-hidden="true" class="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                      </svg>


                    </div>

                    <div>
                      <h3 class="text-xl font-bold text-[#001F3F] sm:text-2xl dark:text-white">
                        입학허가
                      </h3>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        UND 항공대학교 입학 허가서 수령
                      </p>
                    </div>
                  </div>

                  <div class="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                    <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                      <svg aria-hidden="true" class="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5" />
                      </svg>

                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-[#001F3F] sm:text-2xl dark:text-white">
                        선행학습
                      </h3>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        UND 학사적응 비행학술 준비교육(4개월)
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        전공 이론 / 실무교육
                      </p>
                    </div>
                  </div>

                  <div class="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                    <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                      <svg aria-hidden="true" class="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                      </svg>


                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-[#001F3F] sm:text-2xl dark:text-white">
                        UND 항공대학교 진학
                      </h3>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        전공 이론 / 실무 교육
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        비행실습 : FAA 자가용 / 계기 / 사업용 면장 / 비행교관 자격증명 취득
                      </p>

                    </div>
                  </div>

                  <div class="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                    <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                      <svg aria-hidden="true" class="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-[#001F3F] sm:text-2xl dark:text-white">
                        졸업 후 진로
                      </h3>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        UND 항공대학교 졸업
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        졸업 후 OPT 기간을 통한 미국 Regional 항공사 지원 가능
                      </p>
                    </div>
                  </div>


                </div>
              </div>

              {/* <div class="mt-8 text-center lg:mt-16">
                <a href="#" title=""
                  class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button">
                  Get a demo
                  <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </div> */}
            </div>
          </section>
        </SlideUp>
      </div>
      <div className={selection === 'TYPE3' ? '' : 'hidden'}>
        <SlideUp>
          <section class="bg-white antialiased text-[#001F3F]">
            <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 ">
              {/* <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-[#001F3F] sm:text-4xl dark:text-white">
                  Designed for business teams like yours
                </h2>
                <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                  Here we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic
                  growth.
                </p>
              </div> */}

              <div class="p-4 rounded-lg sm:p-12 bg-gray-50 dark:bg-gray-800">
                <div class="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
                  <div class="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                    <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                      <svg aria-hidden="true" class="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 21h18M4 18h16M6 10v8m4-8v8m4-8v8m4-8v8M4 9.5v-.955a1 1 0 0 1 .458-.84l7-4.52a1 1 0 0 1 1.084 0l7 4.52a1 1 0 0 1 .458.84V9.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5Z" />
                      </svg>




                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-[#001F3F] sm:text-2xl dark:text-white">
                        입학지원
                      </h3>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        UND 항공대학교의 모든 한국인 입학은 UND 항공대학교 글로벌 패스웨이에서 독점 진행
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        입학 후에도 입교생의 행정, 비자업무 지원
                      </p>
                    </div>
                  </div>

                  <div class="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                    <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                      <BsAlphabetUppercase className='text-blue-700 text-6xl' />
                    </div>

                    <div>
                      <h3 class="text-xl font-bold text-[#001F3F] sm:text-2xl dark:text-white">
                        어학
                      </h3>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        SAT 성적 제출 면제 (입학생 사전교육 이수 전제)
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        공인 영어성적 (TOEFL IBT76, 듀오링고 110, IELS 6.0)
                      </p>
                    </div>
                  </div>





                  <div class="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                    <div class="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                      <svg aria-hidden="true" class="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold text-[#001F3F] sm:text-2xl dark:text-white">
                        졸업자 헤택
                      </h3>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        UND 항공대학교 비행 교관 취업 지원
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        국내 항공사 전형 정보 제공 및 교육 지원
                      </p>
                      <p class="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                        UND 항공대학교-항공사 연계 패스웨이 프로그램 지원
                      </p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </section>
        </SlideUp>
      </div>

    </section>
  )
}

export default StoryFour


