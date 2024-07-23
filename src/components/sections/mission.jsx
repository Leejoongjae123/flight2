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
                <Button variant="secondary">Information</Button>
                <Title size={"5xl"} className="pt-6">대학 정보</Title>
              </div>
              <p className='font-semibold text-muted-foreground'>
                UND에서 두 번째로 큰 학위 수여 대학인 UND 존 D. 오데가르드 항공대학은 북미에서 가장 큰 민간 항공기 사용사업체 중 하나입니다.
              </p>
              <p className='text-muted-foreground pt-7.5'>UND 항공대학은 대학 항공 교육, 대기 연구, 우주 연구, 지구 시스템 과학 및 정책 연구에서의 우리의 성과로 전국적으로 호평을 받고 있는 항공 우주 학습을 위한 세계적으로 유명한 센터이다. 500명 이상의 교직원과 직원, 전 세계 2,100명 이상의 학생, 그리고 무수한 프로그램과 프로젝트를 가진 John D. Odegard School of Aerospace Sciences는 비행의 미래를 위한 속도를 설정하고 있다.</p>
            </SlideLeft>
          </div>
          <div className='pt-3 lg:pt-0'>
            <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-y-[72px] gap-y-10 gap-x-7.5
                        [&>*:nth-child(2)>.icon]:text-[#5A5579] [&>*:nth-child(2)>.icon]:bg-[#5a55791a] 
                        [&>*:nth-child(3)>.icon]:text-[#FE2E79] [&>*:nth-child(3)>.icon]:bg-[#9a2e791a] 
                        [&>*:nth-child(4)>.icon]:text-[#009F96] [&>*:nth-child(4)>.icon]:bg-[#009f961a]
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
      <div className='bg-[rgba(162,46,254,0.10)] icon rounded-2xl p-[22px] w-[85px] h-[85px] mb-7.5 flex justify-center items-center text-purple '>
        {icon}
      </div>
      <Link href={"/service-details"} className='text-xl font-extrabold text-muted-foreground relative hover-underline after:bg-muted after:h-[1px]'>{title}</Link>
      <p className='pt-5'>{desc}</p>
    </SlideUp>
  )
}