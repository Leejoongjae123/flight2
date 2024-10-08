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
        <Title size={"5xl"} className={"xl:leading-[140%] lg:max-w-[645px]"}>
          UND 항공대학교 재단 이사장
        </Title>

        <div className='lg:max-w-[645px]'>
          <p className='text-muted-foreground mt-6 font-bold'>
          UND 항공대학교 글로벌 패스웨이 지원자 학생 여러분께<br/><br/>

          노스다코타 주립 대학교(UND)에 오신 것을 환영합니다!<br/>
UND는 혁신, 학문, 그리고 개인적 성장이 번성하는 <br/>
활기찬 공동체를 조성하는 데 자부심을 가지고 있습니다. <br/><br/>

이 지역의 선도적인 기관으로서, <br/>
UND는 다양한 프로그램, 세계적인 수준의 교수진, 최첨단 시설을 제공합니다. <br/>
교육에 대한 우리의 헌신은 학생들이 자신의 열정을 추구하고 목표를 달성할 수 있도록 돕습니다. <br/>
여러분이 항공운항학, 공학, 보건 과학을 공부하든, <br/>
학업 여정을 풍요롭게 할 수 있는 다양한 자원과 지원을 찾을 수 있을 것입니다. <br/><br/>
UND의 일원이 되는 독특한 장점 중 하나는 연구와 협업입니다.<br/>
학생들은 경험 많은 교수진과 함께 획기적인 연구 프로젝트에 참여할 기회를 얻게 되며, <br/>
이를 통해 교실을 넘어선 가치 있는 기술과 지식을 습득할 수 있습니다.

          </p>
          <p className='mt-7.5 font-bold'>
          또한, 우리 캠퍼스는 공동체를 중요하게 생각하는 곳입니다.<br/>
우리는 여러분이 포용, 리더십, 그리고 사회적 책임을 촉진하는 <br/>
다양한 학생 조직, 행사에 참여하기를 권장합니다. <br/>
여러분 각자는 캠퍼스에서 모든 사람의 삶을 풍요롭게 하는<br/>
환경을 만드는 데 중요한 역할을 하고 있습니다.<br/><br/>

UND에서의 여정을 헤쳐 나가는 동안,<br/>
여러분이 혼자가 아니라는 것을 기억하세요. <br/>
헌신적인 교수진과 직원들이 여러분을 위해 모든 순간에 지원하고 있습니다. <br/>
함께라면 놀라운 일들을 이룰 수 있습니다. <br/>
다시 한번, 노스다코타 대학교에 오신 것을 환영합니다.<br/><br/>
따뜻한 안부를 전하며,<br/><br/>
척 피니오, UND 항공대학교 재단 이사장

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