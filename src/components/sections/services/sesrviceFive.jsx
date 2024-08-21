import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SlideUp from '@/src/components/animations/slideUp'
import { Button } from '@/src/components/ui/button'
import Title from '@/src/components/ui/title'
import { servicesDataFive } from '@/src/lib/fackData/servicesDataFive'
import { FaCheck } from "react-icons/fa";
import Solutions from '@/src/components/sections/solutions'

const ServiceFive = () => {
  return (
    <section className='lg:pb-15 pb-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>

          <div className='flex flex-col items-center gap-y-5'>
            <Button variant="secondary">Jobs</Button>
            <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">비행교관 경력 후 취업</Title>
            <p className='text-center my-5'>
              •	UNDAF의 비행 교관들은 매월 140시간 이상의 교육훈련 비행을 하고 있으며, 비행 교관이 추가 근무를 원하는 경우 더 많은 시간을 일할 기회를 제공합니다.
              추가로 항공 관련 지상 학술을 가르칠 기회도 제공됩니다.
            </p>
            <div className='relative w-full h-[30vh]'>
              <Image src="/images/getajob/getajob2.png" fill className='object-cover rounded-xl' />
            </div>
          </div>




        </SlideUp>
        <div className='lg:pt-11 pt-3'>
          {/* <Title size={"4xl"} className="pt-6 text-center">혜택</Title> */}
          <div className='grid xl:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2'>
            {
              servicesDataFive.map(({ id, description, icon, service_name }) => {
                return (
                  <SlideUp key={id} id={id}>
                    <div className='lg:mt-7.5 mt-5 p-[22px] flex group rounded-[15px] items-center justify-center'>
                      <div className='w-12 h-12 rounded-full flex justify-center items-center bg-accent icon'>
                        <span className='transition-all duration-500 group-hover:scale-90'><FaCheck className="text-muted-foreground" /></span>
                      </div>
                      <div className='flex flex-col w-4/5 pl-5'>
                        <p className='text-xl font-extrabold text-muted-foreground'>{service_name}</p>
                        <p className='pt-5'>{description}</p>
                      </div>
                    </div>
                  </SlideUp>
                )
              })
            }
          </div>
        </div>
        <SlideUp>
          <div className=''>
            <Title size={"5xl"} className="text-center pt-6">교관 임용 후 타임라인</Title>
            <div className='flex flex-col justify-start my-10'>
              <div className='relative w-full h-[28vh] my-5'>
                <Image src="/images/getajob/getajob3.png" fill className='object-cover rounded-2xl'/>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  <div className=" rounded-lg p-6 flex flex-col items-center justify-center gap-5">
                    <div className="bg-accent text-muted-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                      1
                    </div>
                    <p className="text-center">UNDAF 교관 채용 지원서 작성 및 전형</p>
                  </div>
                  <div className=" rounded-lg p-6 flex flex-col items-center justify-center gap-5">
                    <div className="bg-accent text-muted-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                      2
                    </div>
                    <p className="text-center">UNDAF 교관 임용 (교관 임용 후 최소 1년간 의무 근무 조건) 교관 임용후 ~ 1,500시간(1년 소요)</p>
                  </div>
                  <div className=" rounded-lg p-6 flex flex-col items-center justify-center gap-5">
                    <div className="bg-accent text-muted-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                      3
                    </div>
                    <p className="text-center">교관 비행 시간(Daul Given Time) 포함 1,500시간 타임빌딩</p>
                  </div>
                  <div className=" rounded-lg p-6 flex flex-col items-center justify-center gap-5">
                    <div className="bg-accent text-muted-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                      4
                    </div>
                    <p className="text-center">PRE ATP 취득 (1,500시간 이후 취득 가능)</p>
                  </div>
                  <div className=" rounded-lg p-6 flex flex-col items-center justify-center gap-5">
                    <div className="bg-accent text-muted-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                      5
                    </div>
                    <p className="text-center">REGIONAL 항공사 취업 지원</p>
                  </div>
                  <div className=" rounded-lg p-6 flex flex-col items-center justify-center gap-5">
                    <div className="bg-accent text-muted-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                      6
                    </div>
                    <p className="text-center">REGOINAL 항공사 취업 성공</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideUp>
        <SlideUp>
          <div className=''>
            <Title size={"5xl"} className="text-center pt-6">우대 사항</Title>
            <Solutions></Solutions>
            {/* <div className='flex justify-start my-10 w-[50vw]'>
              <ul className='flex flex-col gap-y-10'>
                <li className=' flex items-center gap-2.5 text-lg '> <Image src={"/images/shapes/check-icon-blue.svg"} width={30} height={30} alt='img-1' /> <span>G1000 유경험자</span> </li>
                <li className=' flex items-center gap-2.5 text-lg '> <Image src={"/images/shapes/check-icon-blue.svg"} width={30} height={30} alt='img-2' /> <span>초기 CFI 신청 자격</span> </li>
                <li className=' flex items-center gap-2.5 text-lg '> <Image src={"/images/shapes/check-icon-blue.svg"} width={30} height={30} alt='img-3' /> <span>CFII</span> </li>
                <li className=' flex items-center gap-2.5 text-lg '> <Image src={"/images/shapes/check-icon-blue.svg"} width={30} height={30} alt='img-3' /> <span>MEI</span> </li>

              </ul>
            </div> */}
          </div>
        </SlideUp>
      </div>
    </section>
  )
}

export default ServiceFive