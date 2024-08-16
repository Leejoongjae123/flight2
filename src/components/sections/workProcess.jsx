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
    title: "학교설립 (1961)",
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
    <section className='lg:pb-15 pb-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <div className='flex justify-center items-center flex-col'>

          <div className='pt-12 lg:pt-0 flex flex-col gap-10'>
            <SlideUp>
              <div className='flex flex-col justify-center items-center'>
                <Button variant="secondary">Our Story</Button>
                <Title size={"5xl"} className="max-w-[642px] pt-6">글로벌 패스웨이 소개              </Title>
                <div className='flex justify-center'>
                  <ul className='py-12.5 flex flex-col gap-2.5 gap-y-5 text-muted-foreground'>
                    <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-1' /> <span>국내 유일 UND항공대학교 인증 교육 플렛폼</span> </li>
                    <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-2' /> <span>항공 유학 선행 교육, 항공분야 전문교육기관</span> </li>
                    <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-3' /> <span>UND항공대학교 공식 교재 및 커리큘럼 도입</span> </li>
                    <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-3' /> <span>UND항공대학교 현직 교수진 화상강의 실시</span> </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <div className='flex flex-col justify-center items-center'>
                <Title size={"5xl"} className="max-w-[1080x] pt-6">UND 글로벌 패스웨이 교수진              </Title>
                <div className='flex justify-center'>
                  <ul className='py-12.5 flex flex-col gap-2.5 gap-y-5 text-muted-foreground'>
                    <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-1' /> <span>한국항공대학교 항공운항학과 졸업</span> </li>
                    <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-2' /> <span>도미유학/FAA 사업용 면장 보유</span> </li>
                    <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-3' /> <span>진에어, 티웨이 부기장 출신</span> </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <div className='flex flex-col justify-center items-center'>
                <Title size={"5xl"} className="max-w-[1080px] pt-6">현직 대한항공 B-737 기장 특강              </Title>
                <div className='flex justify-center'>
                  <ul className='py-12.5 flex flex-col gap-2.5 gap-y-5 text-muted-foreground'>
                    <li className=' flex items-center gap-2.5 text-2xl font-bold'> <Image src={"/images/shapes/check-icon-blue.svg"} width={20} height={20} alt='img-1' /> <span>특강 기장님의 특강 과목과 날짜는 매 특강마다 유동적으로 변경                    </span> </li>
                    
                  </ul>
                </div>
              </div>
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