import React from 'react'
import Title from '../../ui/title'
import Image from 'next/image'
import Link from 'next/link'
import SideBar from '../sideBar'
import QuoteIcon from '../../../../public/icons/quoteIcon'
import NextPrevPost from './nextPrevPost'
import Tags from './tags'
import Author from './author'
import Comments from './comments'
import LeveRelpy from './leveRelpy'
import { blogData } from '@/src/lib/fackData/blogData'
import CardOne from './cardOne'
import SlideUp from '@/src/components/animations/slideUp'
import { Button } from '@/src/components/ui/button'

const BlogArtical = ({ sidebarShow }) => {
  return (
    <section className=''>
      <SlideUp>
        <div className={`${sidebarShow ? "" : ""} max-w-[1350px] mx-auto px-[15px]`}>
          <div className={`grid  ${sidebarShow ? "xl:grid-cols-[33%_66%] lg:grid-cols-[40%_60%] grid-cols-1" : "grid-cols-1"} gap-12.5`}>
            {
              sidebarShow &&
              <div className=''>
                <SideBar blog={true} search={true} />
              </div>
            }
            <div>
              <div className='flex justify-center items-center'>
                {/* <Title size={"5xl"} className={"lg:text-5xl md:text-4.5xl text-3xl text-center"}>입학생 사전교육</Title> */}
                <Button variant="secondary">Orientation</Button>

              </div>


              <div>



                <div className='flex sm:flex-row flex-col justify-center gap-7.5 lg:pt-12.5 pt-6'>
                  <div className='md:h-auto w-auto'>
                    <Image src={'/images/blog/staffs1.png'} width={324} height={275} style={{ width: '100%' }} alt='inner-img-1' className='rounded-[30px] w-full' />
                  </div>
                  {/* <div className='md:h-auto w-auto'>
                    <Image src={'/images/blog/staffs2.png'} width={324} height={275} style={{ width: '100%' }} alt='inner-img-2' className='rounded-[30px]' />
                  </div> */}
                </div>

                <div className='max-w-[1080px] mx-auto lg:px-12.5'>
                  <div className='lg:pt-12.5 pt-6'>
                    <Title size={"4xl"}>UND항공대학교 입학/편입전 선행교육</Title>
                    <p className='pt-[15px]'>UND항공대학교 글로벌 패스웨이의 특화된 선행교육 커리큘럼(항공 Track 교육)은
UND항공대학교에서의 성공적 전공 과목 이수를 위한 전공 예비 지식, 현지 사용 언어, 관습과 문화를
체계적, 효율적으로 교육.
</p>
                    <ol className='list-decimal list-inside pt-[15px] ml-5 text-lg gap-y-2 flex flex-col'>
                      <li>항공정의(Aviation Definitions)</li>
                      <li>항공기의 구조(Aircraft Construction)</li>
                      <li>항공기 시스템1(Aircraft Systems 1)</li>
                      <li>항공기 시스템2(Aircraft Systems 2)</li>
                      <li>항공기 시스템3(Aircraft Systems 3)</li>
                      <li>비행 역학1(Aerodynamics of Flight1)</li>
                      <li>비행 역학2(Aerodynamics of Flight2)</li>
                      <li>무게와 균형(Weight and balance)</li>
                      <li>항공 기상 1(Aviation Weather1)</li>
                      <li>항공 기상 2(Aviation Weather2)</li>
                      <li>항공 기상 업무(Aviation Weather Services)</li>
                      <li>비행 성능(Aircraft Performance)</li>
                      <li>공역(Airspace), 항공고시보(NOTAM)</li>
                      <li>항법 1(Navigation 1)</li>
                      <li>항법 2(Navigation 2)</li>
                      <li>무선 통신(Radio Communication)</li>
                      <li>항공 차트(Aeronautical Chart)</li>
                      <li>인적 요소(Human Factors)</li>
                      <li>공항 인프라(Airport Sign, marking, Lightings</li>
                      <li>파일럿 메뉴얼(Pilot Operating Handbook)</li>
                    </ol>
                  </div>
                  {/* <hr className='lg:mt-12.5 mt-6 lg:pb-15 pb-6 text-[#B0C2E2]' />
                  <div className=''>
                    <Title size={"4xl"}>결과:</Title>
                    <p className='pt-6'> 신입생 사전 교육은 학생들이 새로운 학문적 여정을 성공적으로 시작하고 대학 생활에 원활히 적응할 수 있도록 돕는 중요한 과정입니다. 이 교육을 통해 학생들은 학업 준비, 사회적 네트워킹, 캠퍼스 리소스 활용 능력을 향상시킬 수 있으며, 자신감을 가지고 대학 생활을 시작할 수 있게 됩니다. 따라서 신입생 사전 교육은 학생들의 성공과 만족도를 높이는 데 필수적인 요소로 자리잡고 있습니다.</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
    </section >
  )
}

export default BlogArtical