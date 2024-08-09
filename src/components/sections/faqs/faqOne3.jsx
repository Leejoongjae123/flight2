import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { faqData2 } from '@/lib/fackData/faqData2'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SlideUp from '@/components/animations/slideUp'

const FaqOne = () => {
  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        {/* <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Introduction</Button>
            <Title size={"5xl"} className="lg:max-w-[817px] max-w-full pt-6 text-center">육군항공준사관 </Title>
            <ul>
              <li className='pt-7.5 pb-10 font-semibold text-center'>선발 주체 대한민국 육군
              </li>
              <li className='pt-7.5 pb-10 font-semibold text-center'>목적 회전익항공기 조종사 인원 선발, 준사관 임관
              </li>
              <li className='pt-7.5 pb-10 font-semibold text-center'>선발 인원 36명(2023년 1분기 기준)
              </li>
              <li className='pt-7.5 pb-10 font-semibold text-center'>매년 2회 
              </li>
            </ul>
            <p className='pt-7.5 pb-10 font-semibold text-center max-w-[679px]'>유학 준비는 꿈의 시작입니다! 먼저, 목표 국가와 학교를 선택한 후, 필요한 서류를 준비하세요. 저희 유학원에서는 입학 신청서 작성부터 비자 신청까지 모든 과정을 도와드립니다.</p>
          </div>
        </SlideUp> */}
        <div className='max-w-[871px] mx-auto'>
          <Accordion type="single" defaultValue="one" collapsible>
            {
              faqData2.map(({ ans, id, question }) => {
                return (
                  <SlideUp key={id} id={id}>
                    <AccordionItem  value={id} className='mb-2.5 bg-gray rounded-[15px] border-none'>
                      <AccordionTrigger className="font-semibold border-none lg:px-7.5 px-4 lg:py-7.5 py-4 text-left [&[data-state=open]]:text-primary-foreground [&[data-state=closed]]:text-muted-foreground">{question}</AccordionTrigger>
                      <AccordionContent className="lg:px-7.5 px-4 text-muted-foreground">
                        {ans}
                      </AccordionContent>
                    </AccordionItem>
                  </SlideUp>
                )
              })
            }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FaqOne