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

              <Title size={"5xl"} className="lg:max-w-[642px] max-w-full pt-6">UND 항공대학교 졸업<br />
                (FAA CPL 사업용 면장 취득)시점까지<br />
                총 300시간의 비행 훈련 시간을<br />
                확보를 할 수 있음</Title>
              <p className='pt-7.5 font-semibold text-muted-foreground'>그리고 비행훈련교관 과정연계등으로,<br/>국내 또는 미국 항공사 요구,<br/>
               1,000hr~1,500hr 비행 시간의 비행 시간을 충족(Satisfy Time Building)이<br/>
               가능하도록 1년 중 비행 가능 일수를 고려한<br/>
               비행 훈련 전용 Training Center 투자 및 운영
              </p>
              <p className='pt-7.5  font-medium'> 피닉스 애리조나주 최신형 훈련용 항공기 운영(134대/비행기 기령 평균 2년)<br/>
                비행 훈련 안전성 확보와 가동률을 높이기 위한 24시간 정비 시스템 가동<br/>
                UND 항공대학교 글로벌 패스웨이는<br/>
                 미국 현지 대학 전공 과정의 국내 선행 학습을 통한<br/>
                  입학/편입 전 항공 분야 전공 관련 학과 예비 지식을<br/>
                   UND 항공대학교의 교재, 표준 커리큘럼, 현지 교수 화상 강의 등을<br/>
                    접목시켜 효과적인 1:1 맞춤형 교육을 실시.
              </p>

            </SlideLeft>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strategy