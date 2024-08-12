import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { faqData } from '@/lib/fackData/faqData'
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SlideUp from '@/components/animations/slideUp'
import Link from 'next/link'

const FaqOne = () => {
  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Our Notifications</Button>
            <Title size={"5xl"} className="lg:max-w-[817px] max-w-full pt-6 text-center">공지사항</Title>
            <p className='pt-7.5 pb-10 font-semibold text-center max-w-[679px]'>UND 항공대학 글로벌 패스웨이 최신 항공 정보 안내를 확인하세요</p>
          </div>
        </SlideUp>
        <div className='max-w-[871px] mx-auto'>
          <Accordion type="single" defaultValue="one" collapsible>
            {
              faqData.map(({ ans, id, question }) => {
                return (
                  <SlideUp key={id} id={id}>
                    <AccordionItem value={id} className='mb-2.5 bg-gray rounded-[15px] border-none'>
                      <AccordionTrigger className="font-semibold border-none lg:px-7.5 px-4 lg:py-7.5 py-4 text-left [&[data-state=open]]:text-primary-foreground [&[data-state=closed]]:text-muted-foreground">{question}</AccordionTrigger>
                      <AccordionContent className="lg:px-7.5 px-4 text-muted-foreground">
                        <div>
                        {ans}
                        </div>
                        
                        <div className='w-full flex justify-center items-center my-5'>
                          <Button size='small' variant='outline'>
                            <Link href={"/services"}> <p className='text-sm p-2'>더보기</p> </Link>
                          </Button>
                        </div>
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