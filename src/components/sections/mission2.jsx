import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Title from '../ui/title'

import Document from '../../../public/icons/document'
import Shield from '../../../public/icons/shield'
import Discount from '../../../public/icons/discount'
import Buy from '../../../public/icons/buy'
import SlideLeft from '../animations/slideLeft'
import SlideUp from '../animations/slideUp'
const ourItems = [
  {
    id: 1,
    title: "비전",
    icon: <Document />,
    desc: "항공 우주 교육 및 연구 분야에서 세계를 선도합니다."
  },
  {
    id: 2,
    title: "미션",
    icon: <Shield height={"36"} width={"36"} />,
    desc: "우리 대학, 우리 주 및 국제 사회를 위해 항공 우주 및 관련 과학 분야에서 최고 품질의 교육, 연구 및 서비스를 만들고 보존하고 제공하기 위해 리더로서 협력한다."
  },
  {
    id: 3,
    title: "핵심가치",
    icon: <Discount height={"36"} width={"36"} />,
    desc: "안전, 무결성, 기업가 정신, 전문성, 탄력성"
  },
  // {
  //     id: 4,
  //     title: "Social Responsibility",
  //     icon: <Buy height={"36"} width={"36"} />,
  //     desc: "We conduct business ethically, supporting sustainability and community initiatives."
  // },

]
const Mission = () => {
  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <div className='flex flex-col lg:flex-col justify-center items-center gap-7.5'>
          {/* <div className='lg:max-w-[620px] w-full'> */}
          <div className='w-full'>
            <SlideLeft>
              <div className='flex flex-col lg:pb-10 pb-5 justify-center items-center'>
                <Button variant="secondary">Curriculum</Button>
                <Title size={"5xl"} className="pt-6">육군 항공 준사관 헬기 자가용 면장 취득과정</Title>
              </div>
              <p className='font-semibold text-muted-foreground text-center'>
                본인에게 유리한 1개 자격증만 적용(외국취득 자격증은 미인정)
              </p>
              <p className='font-semibold text-gray-600 text-center mt-5'>
                회전익 자가용 조종사 면장은 5/100점으로 작지만 50/100점을 차지하는 대면 면접과정에 당락의 큰 요소로 작용합니다.<br />
                UND 글로벌 패스웨이는 UND의 교육용 헬기인 R44 기종으로 회전익 항공기 자가용 <span className='text-red-600'>조종사 면장(PPL)을 취득</span>하여 배점에 큰 우위를 갖춘 인재를 양성하고 있습니다.

              </p>
            </SlideLeft>
          </div>
          <div className='pt-3 lg:pt-0 w-[90vw] md:w-[60vw]'>
            <div className="max-w-[1350px] sm:rounded-lg overflow-x-auto shadow-md ">
              <table className="w-[600px] md:w-full text-medium text-left rtl:text-right text-gray-500 ">
                <thead className=" font-bold text-medium text-muted-foreground uppercase bg-[rgba(46,77,254,0.05)] dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 w-1/3 text-center">
                      구분
                    </th>
                    <th scope="col" className="px-6 py-3 w-1/3 text-center">

                      배점
                    </th>
                    <th scope="col" className="px-6 py-3 w-1/3 text-center">


                      종목
                    </th>
                  </tr>
                </thead>
                <tbody className='text-center text-muted-foreground'>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                      기술사, 기능장
                    </th>
                    <td className="px-6 py-4">
                      5
                    </td>
                    <td className="px-6 py-4">
                      <ul>
                        <li>조종사 면장</li>
                        <li>항공기관기술사</li>
                        <li>항공기체기술사</li>
                        <li>*경량/초경량 면장 제외</li>
                      </ul>

                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                      기사
                    </th>
                    <td className="px-6 py-4">
                      4.25
                    </td>
                    <td className="px-6 py-4">
                      <ul>
                        <li>항공기사</li>
                        <li>항공정비사</li>
                        <li>항공공장정비사</li>
                        <li>헬기정비사 1급</li>
                      </ul>

                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      산업기사
                    </th>
                    <td className="px-6 py-4">
                      3.5
                    </td>
                    <td className="px-6 py-4">
                      <ul>
                        <li>항공산업기사</li>
                        <li>헬기정비사2급</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      기능사
                    </th>
                    <td className="px-6 py-4">
                      2.75
                    </td>
                    <td className="px-6 py-4">
                      <ul>
                        <li>항공장비정비</li>
                        <li>항공기관정비</li>
                        <li>항공기체정비</li>
                        <li>항공전자정비</li>
                        <li>항공무선통신사</li>
                        <li>헬기정비사 3급</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      없음
                    </th>
                    <td className="px-6 py-4">
                      1.2
                    </td>
                    <td className="px-6 py-4">

                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div className='my-5 text-center text-medium'>
              <p>※ 고정익과 회전익(헬기)로 구분된 자격증은 회전익(헬기)자격증만 인정(예:조종사 면장, 항공정비사 등)</p>
              <p>※ 지원서(인터넷) 작성시 공고문 내용을 참고하여 관련 내용을 정확히 입력하여야 검증이 가능</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission

const Card = ({ id, icon, title, desc }) => {
  return (

    <SlideUp id={id}>
      <div className='bg-[rgba(162,46,254,0.10)] icon rounded-2xl p-[22px] w-[85px] h-[85px] mb-7.5 flex justify-center items-center text-purple '>
        {icon}
      </div>
      <Link href={"/service-details"} className='text-xl font-extrabold text-muted-foreground relative hover-underline after:bg-muted after:h-[1px]'>{title}</Link>
      <p className='pt-5'>{desc}</p>
    </SlideUp>
  )
}