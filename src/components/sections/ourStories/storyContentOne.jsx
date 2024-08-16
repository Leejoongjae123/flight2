import SlideRight from '@/src/components/animations/slideRight'
import SlideUp from '@/src/components/animations/slideUp'
import { Button } from '@/src/components/ui/button'
import PlayIcon from '@/src/components/ui/playIcon'
import Title from '@/src/components/ui/title'
import Link from 'next/link'
import React from 'react'

const StoryContentOne = () => {
  return (
    <div className='h-full'>
      <SlideUp>
        <Title size={"5xl"} className={"xl:leading-[140%] lg:max-w-[1350px]"}>
          UND 항공대학교 글로벌 패스웨이<br/>대표원장 인사말
        </Title>

        <div className='lg:max-w-[1350px]'>
          <p className='font-bold text-muted-foreground mt-6'>
            안녕하세요.<br />
            UND 항공대학교 글로벌 패스웨이의 대표원장 김원섭입니다.<br />
            저희 UND 글로벌 패스웨이에 오신 것을 진심으로 환영합니다. <br />
            UND는 뛰어난 교육과 다양한 프로그램으로 세계적으로 인정받는 대학교입니다. <br />
            저희는 UND와의 국내 최초 MOU를 체결하여, 수준 높은 교육을 통해 미래의 조종사 인재들을 모집하고 있습니다.
          </p>

          <p className='mt-7.5 font-bold'>
            UND 항공대학교 글로벌 패스웨이는<br />
            학생들이 조종사의 꿈을 이루기 위해 최선을 다할 수 있는 환경을 제공합니다.<br />
            저희 프로그램은 이론과 실습을 균형 있게 구성하여, 학생들이 국제적으로 경쟁력 있는 조종사로 성장할 수 있도록 지원합니다. <br />
            또한, 전문 교수진과의 밀접한 협력으로 학생들이 필요한 모든 자원을 활용할 수 있도록 돕고 있습니다.<br />
            우리는 꿈을 이루기 위해 헌신하는 학생들을 모집하고 있으며,<br />
            여러분의 열정과 노력이 UND 항공대학교 글로벌 패스웨이에서 빛을 발할 수 있도록 응원합니다.<br />
            저희와 함께 안전하고 성공적인 조종사로의 여정을 시작해 보세요.
          </p>
          <p className='mt-7.5 font-bold'>
            앞으로 여러분과 함께할 수 있기를 기대하며<br />
            언제든지 문의하시면 저희가 도와드리겠습니다.<br />
            감사합니다.<br /><br />

            김원섭 대표원장, UND 항공대학교 글로벌 패스웨이
          </p>
        </div>

        {/* <div className='flex items-center sm:gap-[32px] gap-6 md:pt-[55px] pt-7 pb-[22px]'>
                    <div>
                        <Button asChild>
                            <Link href="/about-us">  Get Started</Link>
                        </Button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PlayIcon playOne={false} />
                        <p className='font-semibold sm:block hidden'>How It works?</p>
                    </div>
                </div> */}
      </SlideUp>
    </div>
  )
}

export default StoryContentOne