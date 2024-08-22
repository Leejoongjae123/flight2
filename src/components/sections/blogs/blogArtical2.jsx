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
import { Button } from '@/src/components/ui/button'
import SlideUp from '@/src/components/animations/slideUp'


const BlogArtical = ({ sidebarShow }) => {
  return (
    <section className='lg:flex justify-center items-center flex-col'>

      <SlideUp>
        <div className='flex flex-col justify-center items-center'>
          <Button className='my-10' variant="secondary">Scholarship</Button>
          <div className={`${sidebarShow ? "" : ""} max-w-[1350px] mx-auto px-[15px]`}>
            <div className={`grid  ${sidebarShow ? "xl:grid-cols-[33%_66%] lg:grid-cols-[40%_60%] grid-cols-1" : "grid-cols-1"} gap-12.5`}>
              {
                sidebarShow &&
                <div className=''>
                  <SideBar blog={true} search={true} />
                </div>
              }
              <div className='flex flex-col justify-center items-center'>
                <div>
                  <Title size={"5xl"} className={"text-center lg:text-5xl md:text-4.5xl text-3xl "}>UNDAF Scholarship</Title>
                </div>
                <div className=' my-10 relative w-[90vw] md:w-[45vw] h-[40vh] justify-center items-center'>
                  {
                    sidebarShow ?
                      <Image src={'/images/blog/blog-post1-10.png'} fill alt='thumb' className='rounded-[30px]' />
                      :
                      <Image src={'/images/blog/blog-single-feature1-1.jpg'} fill alt='thumb' className='rounded-[30px]' />
                  }
                </div>
                <div>
                  <div className='max-w-[1080px] mx-auto lg:px-12.5'>
                    <div className='pb-6 '>
                      <Title size={"2xl"}> <span>1.</span>혜택</Title>
                      <p className='pt-[15px]'>UNDAF 장학금 수혜 학생은 UND Aerospace Phoenix Flight Training Center(UND Phoenix FTC)에서 조종사 자격증을 취득하는데 필요한 재정적인 도움을 받을 수 있습니다. UNDAF 장학금은 자가용 조종사 과정부터 계기 한정, 사업용 조종사 과정을 수료 후 비행 교관 자격증 과정까지 지원됩니다.</p>
                    </div>
                  </div>
                  <div className='max-w-[1080px] mx-auto lg:px-12.5'>
                    <div className='py-6'>
                      <Title size={"2xl"}> <span>2.</span>배경</Title>
                      <p className='pt-[15px]'>UNDAF Phoenix는 FAA 인증 Part 141 비행 학교이며, 초창기 애리조나주 피닉스(Phoenix, A.Z)에서 퇴역 군인 및 그들의 자격 있는 가족 구성원들의 교육 혜택을 제공하기 위해 설립되었습니다. 또한, 27년 이상 항공 과학 기술 분야의 학사 학위를 수여해 온 Chandler-Gilbert Community College(CGCC)와 협력하고 있습니다. </p>
                    </div>
                  </div>
                  <div className='max-w-[1080px] mx-auto lg:px-12.5'>
                    <div className='py-6'>
                      <Title size={"2xl"}> <span>3.</span> 지원방법</Title>
                      <p className='pt-[15px]'>장학금 수혜자는 1월, 3월, 6월 및 9월에 시작되는 학기에 자가용 자격증 과정, 계기 한정 자격증, 사업용 자격증 과정 중 하나를 시작할 수 있습니다.
                        이 자격증 취득 과정은 수혜자가 FAA 사업용 조종사 자격증을 받을 때까지 5학기 동안 교육이 진행됩니다. 비행 훈련 학생들은 교육을 받기 위해 약 24개월 동안 Mesa, AZ 지역에 거주해야 하며 풀타임 교육을 받아야 합니다. 모든 교육 과정은 영어로 진행되며 장학금에 거주 및 생활 비용을 포함하지 않습니다.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className={`${sidebarShow ? "" : ""} max-w-[1350px] mx-auto px-[15px]`}>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-10 md:px-20 gap-y-10'>
            <div className='col-span-1 h-[25vh] relative'>
              <Image src={'/images/scholarship/scholarship1.png'} fill alt='inner-img-1' className='rounded-[30px] w-full' />
            </div>
            <div className='col-span-1 h-[25vh] relative'>
              <Image src={'/images/scholarship/scholarship2.png'} fill alt='inner-img-2' className='rounded-[30px]' />
            </div>
          </div>
          <div className='max-w-[1080px] mx-auto lg:px-12.5 px-0 mt-10'>
            <div className='lg:pb-12.5 pb-6'>
              <Title size={"2xl"}> <span>4.</span> 총 교육 비용</Title>
              <p className='pt-[15px]'>훈련 시작 시 각 개인의 비행 계좌에 $12,000이 제공됩니다. 이 돈은 비행 훈련 비용에 사용할 수 있습니다. UNDAF에서 자가용 조종사부터 사업용 조종사 자격증 취득을 완료하는데 드는 비행 교육 비용은 약 $16,499입니다. 지상 학술 교육과 추가적인 주유 할증료의 비용을 합하면 비행 교육 비행의 평균 총비용은 $18,199입니다. 결론적으로 장학금 수혜 학생은 장학금을 제외한 사업용 조종사 취득 비용의 약 30%를 개인 부담합니다. 때문에 수혜자는 훈련 시작 전에 비행 계좌에 $2,000을 입금해야 하며 이 $2,000은 훈련 시작 전 전액 환불 가능합니다. 각 학생은 UNDAF를 통해 개인 iPad, 헤드셋, Foreflight® 구독 및 이 프로그램에 필요한 기타 물품을 구매해야 하며 이러한 비용은 장학금에 포함되지 않습니다.</p>

            </div>
            <div>
              <Title size={"2xl"}> <span>5.</span>FAA 지식 필기 시험</Title>
              <p className='pt-[15px]'>신청 절차와 인터뷰 과정을 통해 장학금 수혜 학생으로 선발된 지원자는 비행 훈련을 시작하기 전에 과정에 따라 FAA 자가용 조종사 자격증, 계기 한정 자격증, 사업용 조종사 자격증 지식 필기시험을 통과해야 하며, 이 비용은 지원자의 부담입니다. 지식 필기시험은 전국의 승인된 PSI 시험 센터에서 가능합니다. 이 단계에 대한 자세한 지침은 UNDAF 장학금 팀에서 제공합니다.</p>
            </div>
          </div>

        </div>
      </SlideUp>
      <SlideUp>
        <div className={`${sidebarShow ? "" : ""} max-w-[1350px] mx-auto px-[15px]`}>
          <div className='max-w-[1080px] mx-auto lg:px-12.5 px-0 mt-10'>
            <div className='lg:pb-6 pb-6'>
              <Title size={"2xl"}> <span>4.</span> 편입 장학금</Title>
              <p className='pt-[15px]'>UNDAF의 편입 기준을 충족하고 지원서를 완전히 작성하여 가을 학기 지원 마감일인 8월 15일과 봄 학기 지원 마감일인 12월 15일까지 편입 장학금 지원서를 제출하면, 다음의 학업 장학금 중 하나를 자동으로 받을 수 있습니다. UNDAF의 편입 장학금의 기준은 아래와 같습니다.</p>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
              <table className="text-xl text-left text-gray-500 w-full">
                <thead className=" text-xl text-center text-gray-700 uppercase bg-[rgba(46,77,254,0.05)]">
                  <tr>
                    <th scope="col" className="py-3 w-1/2">
                      Cumulative College GPA
                    </th>
                    <th scope="col" className="py-3 w-full">Transfer Student Scholarship Award</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white ">
                    <th
                      scope="row"
                      className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                    >
                      3.90 - 4.00 GPA
                    </th>
                    <td className="text-center px-6 py-4 w-full">$2,000 ($1,000/학기)</td>

                  </tr>
                  <tr className="bg-white ">
                    <th
                      scope="row"
                      className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      3.50 - 3.89 GPA
                    </th>
                    <td className="text-center px-6 py-4 w-full">$1,000 ($500/학기)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className='pt-[15px]'>장학금은 학생기록부에서 계산한 모든 학점에 대한 누적 GPA를 기준으로 수여됩니다. UND로 120학점 이상을 편입하는 학생은 장학금 대상이 아닙니다. 풀타임 학생이어야 하며 학기당 최소 12학점 이상 등록해야 합니다. 매 학기 모든 장학금 수여 기준은 변경될 수 있습니다. </p>
            </div>
          </div>

        </div>
      </SlideUp>
    </section >
  )
}

export default BlogArtical