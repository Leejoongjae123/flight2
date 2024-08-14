import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import Title from '../ui/title'
import Paper from '../../../public/icons/paper'
import Setting from '../../../public/icons/setting'
import PlayIcon from '../ui/playIcon'
import SlideUp from '../animations/slideUp'
import SlideLeft from '../animations/slideLeft'
import SlideRight from '../animations/slideRight'
import { HiUserGroup } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { TbLicense } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
const Dashboard = () => {
    return (
        <section className='lg:py-15 py-9 overflow-x-hidden'>
            <div className='max-w-[1350px] mx-auto px-[15px]'>
                <SlideUp>
                    <div className='flex flex-col items-center'>
                        <Button variant="secondary">Advantage</Button>
                        <Title size={"5xl"} className="max-w-[898px] pt-6 text-center">준사관 준비반 장점                        </Title>
                    </div>
                </SlideUp>
                <div className='flex justify-center items-center flex-col pt-12.5 relative z-[1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[calc(100%-276px)] after:bg-accent after:rounded-[30px] after:z-[-1]'>
                    <div className='mx-auto  relative'>
                        <SlideUp>
                            <Image src={"/images/heli/heli2.png"} width={840} height={420} alt="dashboard1" className='rounded-[30px]' />
                            
                        </SlideUp>
                    </div>
                    <div className='pt-[46px] grid grid-cols-2 max-w-[1160px] mx-auto pb-12.5 px-3 lg:px-0 gap-y-15'>
                        <SlideRight id={3}>
                            <Card className="cols-span-1" icon={<FaBook />} title={"UND 항공대학교 글로벌 패스웨이 항공 준사관 커리큘럼"} desc={"현재 인적성 기출 문제집을 기준으로 맞춤형 인적성 강의 제공"} />
                        </SlideRight>
                        <SlideRight id={5}>
                            <Card className="cols-span-1" icon={<HiUserGroup />} title={"스터디 그룹 배정"} desc={"정보 공유 및 동기 부여를 위한 스터디 그룹 배정"} />
                        </SlideRight>
                        <SlideLeft id={5}>
                            <Card className="cols-span-1" icon={<FaCheck />} title={"토론 평가 준비"} desc={"2차 면접 시 그룹 토론 준비를 위한 모의 토론 평가 제공"}/>
                        </SlideLeft>
                        <SlideLeft id={5}>
                            <Card className="cols-span-1" icon={<TbLicense />} title={"FAA 헬기 자가용 면장 취득"} desc={"선진화된 FAA 인가 회전익 항공기 교육기관인 UND의 헬기조종사과정에 입과하여 타 경쟁 교육기관보다 경쟁력 있는 가격과 교육기간"} />
                        </SlideLeft>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard


// --------------- Card
const Card = ({ icon, title, desc }) => {
    return (
        <div className='flex items-center lg:gap-7 gap-4 pt-7 lg:pt-0'>
            <div className='text-4xl lg:min-w-[85px] lg:min-h-[85px] min-w-16 min-h-16 w-32 h-32 lg:w-auto lg:h-auto rounded-full p-5 bg-primary flex justify-center items-center text-white'>
                {icon}
            </div>
            <div className='max-w-[450px]'>
                <Title size={"2xl"}>
                    <Link href={"/service-details"} className='relative hover-underline after:bg-muted after:h-[1px] after:bottom-[1px]'>{title}</Link>
                </Title>
                <p>{desc}</p>
            </div>
        </div>
    )
}