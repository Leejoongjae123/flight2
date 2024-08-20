import React from 'react'
import Link from "next/link"
import { Button } from '../ui/button'
import Title from '../ui/title'
import RightArrow from '../../../public/icons/rightArrow'
import Document from '../../../public/icons/document'
import Shield from '../../../public/icons/shield'
import Discount from '../../../public/icons/discount'
import Buy from '../../../public/icons/buy'
import SlideUp from '../animations/slideUp'
import SlideLeft from '../animations/slideLeft'
import Paper from '../../../public/icons/paper'
import GoodFirms from '../../../public/icons/paper'
import { FaArrowTurnUp } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { MdMilitaryTech } from "react-icons/md";
import Activity from '../../../public/icons/activity'
import Work from '../../../public/icons/work'
import Setting from '../../../public/icons/setting'
const ourItems = [
  {
    id: 1,
    title: "G1000 유경험자",
    icon: <Activity height={"36"} width={"36"} />,
    desc: "G1000 숙련도 (높이 선호됨)"
  },
  {
    id: 2,
    title: "CFI",
    icon: <Shield height={"36"} width={"36"} />,
    desc: "초기 CFI 신청 자격"
  },
  {
    id: 3,
    title: "CFII",
    icon: <Setting height={"36"} width={"36"} />,
    desc: "CFII"
  },
  {
    id: 4,
    title: "MEI",
    icon: <GoodFirms height={"36"} width={"36"} />,
    desc: "MEI"
  },


]
const Solutions = () => {
  return (
    <section className=''>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <div className='grid lg:grid-cols-1 grid-cols-1'>
          <div>
            <SlideLeft>
              {/* <div className=''>
                <p className='text-center font-semibold text-muted-foreground pt-7.5  '>커버 레터, 이력서 및 두 통의 전문 추천서를 hiring@undaerospace.com으로 보내십시오. 지원 이메일 또는 커버 레터에 가능한 가장 빠른 클래스 시작 날짜를 명시하십시오. 이전 지원자는 새로운 교육 클래스가 열릴 때 다시 지원해야 합니다. 면접에 선정된 지원자는 개별적으로 이메일을 통해 연락받게 됩니다.</p>
              </div> */}

            </SlideLeft>
          </div>
          <div className='mt-10 pt-14 lg:pt-0'>
            <div className='grid sm:grid-cols-4 grid-cols-1 sm:gap-y-[72px] gap-y-10 [&>*:nth-child(2)>.icon]:text-[#5A5579] [&>*:nth-child(2)>.icon]:bg-[#5a55791a] [&>*:nth-child(3)>.icon]:text-[#FE2E79] [&>*:nth-child(3)>.icon]:bg-[#9a2e791a] [&>*:nth-child(4)>.icon]:text-[#009F96] [&>*:nth-child(5)>.icon]:bg-[#009f961a]'>
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

export default Solutions

const Card = ({ id, icon, title, desc }) => {
  return (
    <SlideUp id={id}>
      <div className='flex flex-col items-center justify-center'>
        <div className='bg-[rgba(162,46,254,0.10)] icon rounded-2xl w-[85px] h-[85px] mb-7.5 flex justify-center items-center text-purple'>
          {icon}
        </div>
        <p className='text-center text-xl font-extrabold text-muted-foreground relative hover-underline after:bg-muted after:h-[1px]'>{title}</p>
      </div>
    </SlideUp>
  )
}