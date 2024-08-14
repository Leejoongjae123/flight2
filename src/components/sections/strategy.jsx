import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Title from '../ui/title'
import SlideUp from '../animations/slideUp'
import Link from 'next/link'
import SlideLeft from '../animations/slideLeft'
const Strategy = () => {
  return (
    <section className='lg:py-15 py-9 flex justify-center items-center flex-col'>
      <Button className="my-10" variant="secondary">Our Strategy</Button>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <div className='grid xl:grid-cols-[auto_642px] lg:grid-cols-[auto_530px] grid-cols-1 xl:gap-15 gap-5'>
          <div className='relative'>
            <div className='flex justify-center pr-12.5 lg:pr-0'>
              <Image src="/images/curriculum/curriculum2.png" width={626} height={551} alt="bg" className='rounded-[30px] dark:hidden' />
              <Image src="/images/curriculum/curriculum2.png" width={626} height={551} alt="bg" className='rounded-[30px] hidden dark:block' />
            </div>

          </div>
          <div className='pt-5 lg:pt-0'>
            <SlideLeft>

              <Title size={"5xl"} className="lg:max-w-[642px] max-w-full pt-6">학교 졸업시까지 300시간의 타임빌딩을 할 수 있습니다.</Title>
              <p className='pt-7.5 font-semibold text-muted-foreground'>추가적으로 교관과정을 통해 미국 리저널 항공사 요구사항인 1,000~1,500시간을 충족하실 수 있습니다.</p>
              <p className='pt-7.5  font-medium'> UND 항공대학교 글로벌 패스웨이 수료생은 국내 전공과정 선행학습을 통해 입학/편입 전 비행 관련 학과 지식을 습득할 수 있습니다.</p>

            </SlideLeft>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strategy