import Link from 'next/link'
import React from 'react'
import { Button } from '@/src/components/ui/button'
import PlayIcon from '@/src/components/ui/playIcon'
import Title from '@/src/components/ui/title'
import Highlight from '@/src/components/ui/highlight'
import Image from 'next/image'
const HeroFive = () => {
  return (
    <section className='lg:pb-15 pb-9'>
      <div className='bg-cover bg-no-repeat bg-center bg-blend-overlay bg-[rgba(0,0,0,0.3)] h-full w-full lg:pb-[213px] pb-32 lg:pt-[303px] pt-40' style={{ backgroundImage: `url(/images/banner/hero-img5-3.jpg)` }}>
        <div className='container'>
          <div className='max-w-[1350px] mx-auto'>
            <div className='max-w-[754px]'>
              <div className='flex justify-start items-center gap-x-5'>
                <div className='w-32 h-16 relative'>
                  <Image src='/images/logo/onlylogo.png' fill></Image>
                </div>
                <div>
                  <Title size={"6xl"} className={"text-white"}>항공대학교</Title>
                </div>
              </div>
              <div className='mt-5'>
              <Title size={"7.5xl"} className={"text-white"}>글로벌 패스웨이 </Title>
              </div>
              
              {/* <p className='text-2xl font-semibold text-white pt-7.5'>
                                세계 최고의 항공 전문가들과 함께하는 UND 항공대학글로벌 패스웨이에서 여러분의 꿈을 현실로 만들어 드립니다.
                                <br /><br />
                                최고의 비행학교와 파트너십을 맺어, 최적의 교육 환경과 커리큘럼을 제공합니다.
                            </p> */}
              <div className='flex sm:flex-row flex-col sm:items-center gap-[32px] pt-[55px] pb-[22px]'>
                {/* <div>
                                    <Button asChild className="dark:text-white hover:border-white hover:text-white">
                                        <Link href="/pricing"> Get Started for Free </Link>
                                    </Button>
                                </div> */}
                {/* <div className='flex items-center gap-2'>
                                    <PlayIcon playOne={false} color="text-white" />
                                    <p className='font-semibold text-white'>How It works?</p>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroFive