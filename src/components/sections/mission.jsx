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
import Image from 'next/image'
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
          <div className='w-full justify-center'>
            <SlideLeft>
              <div className='flex flex-col lg:pb-10 pb-5 justify-center items-center'>
                <Button variant="secondary">Information</Button>
                <Title size={"5xl"} className="pt-6">대학교 소개</Title>
              </div>
              <div className='flex justify-center'>
                <ul className='py-12.5 flex flex-col gap-2.5 gap-y-5 text-muted-foreground'>
                  <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-1' /> <span>미국내 1위 항공대학교(전미 – 주립대 부분)</span> </li>
                  <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-2' /> <span>항공 운항학과, 항공 관제사학과 전 세계 1위 (134대)</span> </li>
                  <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-3' /> <span>훈련용 항공기 보유 – 전 세계 1위</span> </li>
                  <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-3' /> <span>한국항공대학교 교환학생 프로그램 진행중</span> </li>
                  <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-3' /> <span>대한항공 신입조종사 위탁교육 Pathway 협약(2017년)</span> </li>
                </ul>
              </div>

              {/* <p className='text-muted-foreground pt-7.5'>UND 항공대학교는 대학 항공 교육, 대기 연구, 우주 연구, 지구 시스템 과학 및 정책 연구에서의 우리의 성과로 전국적으로 호평을 받고 있는 항공 우주 학습을 위한 세계적으로 유명한 센터이다. 500명 이상의 교직원과 직원, 전 세계 2,100명 이상의 학생, 그리고 무수한 프로그램과 프로젝트를 가진 John D. Odegard School of Aerospace Sciences는 비행의 미래를 위한 속도를 설정하고 있다.</p> */}
            </SlideLeft>
          </div>
          <div className='pt-3 lg:pt-0 mt-10 text-2xl'>
            <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-y-[72px] gap-y-10 gap-x-7.5
                        [&>*:nth-child(1)>.icon]:text-[#5A5579] [&>*:nth-child(1)>.icon]:bg-[#5a55791a] 
                        [&>*:nth-child(2)>.icon]:text-[#FE2E79] [&>*:nth-child(2)>.icon]:bg-[#9a2e791a] 
                        [&>*:nth-child()>.icon]:text-[#009F96] [&>*:nth-child(3)>.icon]:bg-[#009f961a]
                        '>

              {
                ourItems.map(({ desc, icon, id, title }) => <Card key={id} id={id} desc={desc} title={title} icon={icon} />)
              }

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
      <div className='flex flex-col justify-center items-center'>
        <div className={`icon rounded-2xl p-[22px] w-[85px] h-[85px] mb-7.5 flex justify-center items-center ${id === 1 ? 'bg-[#5a55791a] text-[#5A5579]' : id === 2 ? 'bg-[#9a2e791a] text-[#FE2E79]' : id === 3 ? 'bg-[#009f961a] text-[#009F96]' : 'text-purple bg-[rgba(162,46,254,0.10)]'}`}>
          {icon}
        </div>
        <Link href={"#"} className='text-2xl font-extrabold text-muted-foreground relative hover-underline after:bg-muted after:h-[1px]'>{title}</Link>
        <p className='pt-5 text-center md:text-left'>{desc}</p>
      </div>
    </SlideUp>
  )
}