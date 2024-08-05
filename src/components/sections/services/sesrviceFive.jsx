import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { servicesDataFive } from '@/lib/fackData/servicesDataFive'
import { FaCheck } from "react-icons/fa";
import Solutions from '@/components/sections/solutions'

const ServiceFive = () => {
  return (
    <section className='lg:pt-[120px] pt-16 lg:pb-15 pb-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Jobs</Button>
            <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">비행교관 경력 후 취업</Title>
            <p className='text-center my-5'>우리는 안전, 표준화 및 고객 서비스를 강조합니다.<br />
              UND 항공우주학부는 팀워크를 바탕으로 한 관리 문화를 운영하며, 미세 관리 대신 팀워크에 중점을 둡니다.<br />
              Phoenix-Mesa Gateway 공항에 위치해 있으며, UND 항공우주학부는 계속해서 성장하고 있습니다. UND 항공우주학부의 비행 교관들은 매월 140시간 이상의 비행 시간을 제공하며, 추가 근무를 원하는 경우 더 많은 시간을 일할 수 있는 기회를 제공합니다. 비행 시간은 과정에 따라 매월 60-80시간 정도 소요됩니다.<br />
              항공 관련 지상 학교를 가르칠 수 있는 기회도 제공됩니다.</p>
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
                      <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[rgba(109,231,104,0.5)] icon'>
                        <span className='transition-all duration-500 group-hover:scale-90'><FaCheck className="text-green-700" /></span>
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
        <div>
        <Title size={"5xl"} className="text-center pt-6">우대 사항</Title>
        <Solutions></Solutions>
        </div>

      </div>
    </section>
  )
}

export default ServiceFive