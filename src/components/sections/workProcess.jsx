import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import Title from '../ui/title'
import Category from '../../../public/icons/category'
import Filter from '../../../public/icons/filter'
import Shield from '../../../public/icons/shield'
import Analysis from '../../../public/icons/analysis'
import Paper from '../../../public/icons/paper'
import User from '../../../public/icons/user'
import SlideUp from '../animations/slideUp'

const processData = [
  {
    id: 1,
    title: "학교 (1961)",
    desc: "UND 항공대학교은 1961년에 설립되어, 당시부터 항공 교육의 중심지로 자리 잡았습니다.",
    Icon: Category
  },
  {
    id: 2,
    title: "전미 최고의 항공 교육 기관으로의 성장 (1980-1990)",
    desc: "우리는 성과 지표를 모니터링하고 분석하여, 데이터에 기반한 조정을 통해 디지털 존재감을 지속적으로 최적화합니다.",
    Icon: Analysis
  },
  {
    id: 3,
    title: "전미 최첨단 시설, 커리큘럼 구축(2000년대)",
    desc: "최신 비행 시뮬레이터와 교육 장비를 도입하여 학생들에게 최상의 교육 환경을 제공하고 있습니다.",
    Icon: Paper
  },
  {
    id: 4,
    title: "전세계/글로벌 파트너쉽 확대(현재)",
    desc: "전 세계 여러 대학 및 항공사와의 협력을 통해, 학생들에게 국제적인 경험을 쌓을 수 있는 기회를 제공합니다.",
    Icon: User
  },

]
const WorkProcess = () => {
  return (
    <section className='lg:pb-15 pb-9 lg:pt-[178px] pt-20'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <div className='grid xl:grid-cols-[605px_642px] lg:grid-cols-[500px_auto] grid-cols-1 gap-x-10 justify-between items-start'>
          <SlideUp>
            <div className='bg-accent rounded-[30px] w-full relative'>
              <div className='absolute left-0 lg:-top-[138px] md:-top-20 -top-14 max-w-[200px] md:max-w-full animate-up-down'>
                <Image src={"/images/shapes/rocket1-1.png"} width={330} height={412} className='w-full' alt="rocket" />
              </div>
              <div className=''>
                <Image src={"/images/shapes/process1-2.png"} width={582} height={658} className='w-full' alt="laptop" />
              </div>
              <div className='absolute right-0 -bottom-48 lg:block hidden animate-left-right'>
                <Image src={"/images/shapes/process1-1.png"} width={330} height={412} alt="bord" />
              </div>
            </div>
          </SlideUp>
          <div className='pt-12 lg:pt-0'>
            <SlideUp>
              <Button variant="secondary">Our Process</Button>
              <Title size={"5xl"} className="max-w-[642px] pt-6">University of North Dakota 항공대학 소개 및 연혁</Title>
              <p>University of North Dakota (UND) 항공대학은 세계적으로 유명한 항공 교육 기관으로, 학생들에게 뛰어난 교육과 실습 기회를 제공합니다. 항공학 분야에서의 혁신과 연구를 선도하며, 학생들이 안전하고 전문적인 조종사로 성장할 수 있도록 지원합니다. 또한, 항공과 관련된 다양한 프로그램을 통해 학생들이 다양한 경로로 진출할 수 있도록 돕고 있습니다.
              </p>
            </SlideUp>
            <ul className='pt-12.5'>
              {
                processData.map(({ desc, Icon, id, title }) => <ProcessCard key={id} title={title} id={id} icon={<Icon height={"34px"} width={"34px"} />} desc={desc} />)
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess


const ProcessCard = ({ id, title, icon, desc }) => {
  return (

    <li className='pb-7.5 last:pb-0 group'>
      <SlideUp id={id}>
        <div className='flex items-center lg:gap-8 gap-4'>
          <div className='lg:min-w-[85px] lg:min-h-[85px] min-w-16 min-h-16 rounded-full flex justify-center items-center text-primary-foreground transition-all duration-500 bg-[rgba(46,77,254,0.08)] group-hover:bg-[rgba(46,77,254,0.28)]'>
            {icon}
          </div>
          <div className='max-w-[509px]'>
            <Title size={"2xl"}>
              <Link href="/about-us" className='relative hover-underline after:bg-muted after:h-[1px] after:-bottom-1'>{title}</Link>
            </Title>
            <p>{desc}</p>
          </div>
        </div>
      </SlideUp>
    </li>

  )
}