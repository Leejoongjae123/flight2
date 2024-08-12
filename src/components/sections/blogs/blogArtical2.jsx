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
              <div>
                <div>
                  <Title size={"5xl"} className={"text-center lg:text-5xl md:text-4.5xl text-3xl "}>UND Aerospace Foundation</Title>
                </div>
                <div className='lg:pt-12.5 pt-6'>
                  {
                    sidebarShow ?
                      <Image src={'/images/blog/blog-post1-10.png'} width={872} height={472} alt='thumb' className='rounded-[30px]' />
                      :
                      <Image src={'/images/blog/blog-single-feature1-1.jpg'} width={1320} height={568} alt='thumb' className='rounded-[30px]' />
                  }
                </div>
                <div>
                  <div className='max-w-[1080px] mx-auto lg:pt-12.5 pt-6 lg:px-12.5'>
                    <p>UND Aerospace Foundation은 Ray Foundation과 협력하여 특별한 개인에게 비범한 장학 기회를 제공하게 되어 기쁩니다.
                      이 장학금은 자격이 있는 퇴역 군인이나 승인된 부양 가족(훈련 시작 전에 만 17세 이상이어야 함)에게 최대 $12,000의 사설 비행사 훈련 비용을 지원합니다. 훈련 시작 날짜는 지속적으로 업데이트되며 여기에서 확인할 수 있습니다.<br></br> https://airlinepilot.training/upcoming-classes/.</p>
                    <div className='lg:pt-12.5 py-6'>
                      <Title size={"2xl"}> <span>1.</span>배경</Title>
                      <p className='pt-[15px]'>GI 법안®은 직업 훈련을 위한 항공 훈련에 사용할 수 있습니다. 그러나, 사설 비행사 자격증은 필수 조건입니다(www.va.gov). 이 장학금은 UND Aerospace Phoenix Flight Training Center(UND Phoenix FTC)에서 사설 비행사 자격증을 취득하는 데 필요한 비용의 큰 부분을 충당하기 위해 설계되었습니다. 사설 비행사 과정이 완료된 후, GI 법안® 교육 혜택은 도구 항공기, 상업 비행사, 다중 엔진 비행사, 궁극적으로는 인증된 비행 강사 자격증을 취득하는 지속적인 학업에 사용될 수 있습니다.</p>
                    </div>
                  </div>
                  <div className='max-w-[1080px] mx-auto lg:px-12.5 px-0'>
                    <div className='lg:pb-12.5 pb-6'>
                      <Title size={"2xl"}> <span>2.</span> 위치</Title>
                      <p className='pt-[15px]'>UNDAF Phoenix는 FAA 인증 Part 141 비행 학교이며, 애리조나주에서 퇴역 군인 및 그들의 자격 있는 부양 가족을 VA 교육 혜택을 사용하여 훈련하도록 승인되었습니다. 우리는 27년 이상 항공 과학 기술 분야의 준 학사 학위를 제공해 온 Chandler-Gilbert Community College(CGCC)와 협력하고 있습니다. 이 프로그램은 항공 분야에서의 경력을 준비하는 학생들을 위한 전문 항공 훈련 프로그램입니다.</p>
                    </div>
                    <div>
                      <Title size={"2xl"}> <span>3.</span>방법</Title>
                      <p className='pt-[15px]'>수혜자는 1월, 3월, 6월 및 9월에 시작되는 네 개의 지정된 날짜 중 하나에서 시작하는 가속화된 사설 비행사 자격증 과정을 시작하게 됩니다. 자세한 내용은 https://airlinepilot.training/upcoming-classes/를 참조하십시오. 이 기간 동안 각 참가자는 FAA 사설 비행사 자격증을 취득하게 됩니다. 가속화된 사설 비행사 프로그램은 주 5일간의 집중 과정으로 진행되며, 매일 3번의 지상 학교와 비행 교육을 포함합니다. 이는 학생들의 전일제 참여가 필요합니다.
                        이 자격증 취득 과정은 수혜자가 AAS 항공 과학 기술 학위를 최종적으로 취득하고 FAA 인증 비행 강사 자격증을 받을 때까지 5학기 동안 교육을 계속할 것으로 예상되는 CGCC 학기의 시작과 일치합니다.
                        학생들은 교육을 받기 위해 약 24개월 동안 Mesa, AZ 지역에 거주할 것으로 예상됩니다. 모든 과정은 영어로 진행됩니다. 장학금은 이주 비용을 포함하지 않습니다.</p>
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
          <div className='flex sm:flex-row flex-col justify-between gap-7.5 lg:pt-12.5 pt-6'>
            <div className='w-full'>
              <Image src={'/images/scholarship/scholarship1.png'} width={424} height={475} style={{ width: '100%' }} alt='inner-img-1' className='rounded-[30px] w-full' />
            </div>
            <div className='w-full'>
              <Image src={'/images/scholarship/scholarship2.png'} width={424} height={475} style={{ width: '100%' }} alt='inner-img-2' className='rounded-[30px]' />
            </div>
          </div>
          <div className='max-w-[1080px] mx-auto lg:px-12.5 px-0 mt-10'>
            <div className='lg:pb-12.5 pb-6'>
              <Title size={"2xl"}> <span>4.</span> 총 교육 비용</Title>
              <p className='pt-[15px]'>Ray Foundation 장학금은 각 개인에게 직접 지급되지 않습니다. 훈련 시작 시 각 개인의 비행 계좌에 $12,000이 제공됩니다. 이 돈은 비행 훈련 비용을 충당하기 위해 사용됩니다.
                사설 비행사 자격증 취득을 완료하는 데 드는 비용은 약 $16,499입니다. 지상 학교와 가변 월간 연료 할증료의 추가 비용을 합하면 평균 총 비용은 $18,199입니다. 이는 사설 비행사 자격증 취득 비용의 약 30%가 학생의 부담임을 의미합니다. 이러한 이유로 각 수혜자는 훈련 시작 전에 비행 계좌에 $2,000을 입금해야 합니다. 이 $2,000은 훈련 시작 전에 전액 환불 가능합니다.
                각 학생은 자신만의 iPad, 헤드셋, Foreflight® 구독(UNDAF를 통해 구입해야 함) 및 이 프로그램에 필요한 기타 물품을 제공해야 합니다. 이러한 비용은 $18,199 추정치에 포함되지 않습니다.</p>
            </div>
            <div>
              <Title size={"2xl"}> <span>5.</span>FAA 사설 비행사 지식 시험 (필기 시험)</Title>
              <p className='pt-[15px]'>신청 절차와 인터뷰 과정을 성공적으로 완료한 후, 장학금으로 선발된 지원자는 비행 훈련을 시작하기 전에 FAA 사설 비행사 지식 시험을 통과해야 하며, 이 비용은 지원자가 부담합니다. 시험은 전국의 승인된 PSI 시험 센터에서 가능합니다. (https://candidate.psiexams.com/index.jsp)
                이 단계에 대한 자세한 지침은 UNDAF 장학금 팀에서 제공할 것입니다.</p>
            </div>
          </div>

        </div>
      </SlideUp>
      <SlideUp>
        <div className={`${sidebarShow ? "" : ""} max-w-[1350px] mx-auto px-[15px]`}>
          <div className='max-w-[1080px] mx-auto lg:px-12.5 px-0 mt-10'>
            <div className='lg:pb-6 pb-6'>
              <Title size={"2xl"}> <span>4.</span> 편입 장학금</Title>
              <p className='pt-[15px]'>기준을 충족하고 지원서를 완전히 작성하여 가을 학기 지원 마감일인 8월 15일과 봄 학기 지원 마감일인 12월 15일까지 제출하면, 다음의 학업 장학금 중 하나를 자동으로 받을 수 있습니다.</p>
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
              <p className='pt-[15px]'>장학금은 UND 등록부에서 계산한 모든 학점에 대한 누적 GPA를 기준으로 수여됩니다. UND로 120학점 이상을 편입하는 학생은 장학금 대상이 아닙니다. 풀타임 학생이어야 하며 학기당 최소 12학점 이상 등록해야 합니다. 모든 장학금은 변경될 수 있습니다. 자금이 있는 경우, 마감일 이후에 장학금이 수여될 수 있습니다.</p>
            </div>
          </div>

        </div>
      </SlideUp>
    </section >
  )
}

export default BlogArtical