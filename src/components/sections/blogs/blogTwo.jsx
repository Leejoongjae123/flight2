import SlideUp from '@/src/components/animations/slideUp'
import { Button } from '@/src/components/ui/button'
import Title from '@/src/components/ui/title'
import { blogData } from '@/src/lib/fackData/blogData'
import React from 'react'
import CardTwo from './cardTwo'
import ZoomIn from '@/src/components/animations/zoomIn'
import Image from 'next/image'
import Link from 'next/link'

const BlogTwo = () => {
  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Our Introduction</Button>
            <Title size={"5xl"} className="pt-6 text-center max-w-[898px]">UND 항공대학교 글로벌 패스웨이 혜택</Title>
          </div>
        </SlideUp>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between'>
          {/* {
            blogData.slice(0, 4).map(({ id, author, date, thumb, title, category }) => <CardTwo key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />)
          } */}
          <div className='group'>
            <ZoomIn id="1">
              <div className='relative overflow-hidden  rounded-2.5xl after:absolute after:w-full after:h-full after:top-0 after:left-0  after:rounded-2.5xl'>
                {/* <div className='absolute z-10 top-5 left-5'>
                        <Link href={"/categories"} className='px-2.5 py-[5px] inline-block font-semibold rounded-lg text-base bg-background text-muted-foreground'>{category[0]}</Link>
                    </div> */}
                <div className='relative h-[40vh]'>
                  <Image src="/images/blog/character1.png" fill sizes='(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw' style={{ width: "100%" }} alt='thumb' className='group-hover:scale-110 transition-all duration-700' />
                </div>
                <div className='absolute z-10 bottom-5 px-5'>
                  <Title size={"2xl"}>
                    <span className='multiline-hover text-white transition-all duration-500'>UND 항공대학 4년제<br/>학사학위 취득</span>
                  </Title>
                  {/* <div className='flex items-center gap-7.5 pt-6'>
                            <Link href={"/author"} className='text-base font-semibold text-white hover:text-primary-foreground transition-all duration-500'> {author.author_name}</Link>
                            <p className='text-base font-semibold text-white relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full'>{date}</p>
                        </div> */}
                </div>
              </div>
            </ZoomIn>
          </div>
          <div className='group'>
            <ZoomIn id="2">
              <div className='relative overflow-hidden  rounded-2.5xl after:absolute after:w-full after:h-full after:top-0 after:left-0  after:rounded-2.5xl'>
                {/* <div className='absolute z-10 top-5 left-5'>
                        <Link href={"/categories"} className='px-2.5 py-[5px] inline-block font-semibold rounded-lg text-base bg-background text-muted-foreground'>{category[0]}</Link>
                    </div> */}
                <div className='relative h-[40vh]'>
                  <Image src="/images/blog/character2.png" fill sizes='(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw' style={{ width: "100%" }} alt='thumb' className='group-hover:scale-110 transition-all duration-700' />
                </div>
                <div className='absolute z-10 bottom-5 px-5'>
                  <Title size={"2xl"}>
                    <span className='multiline-hover text-white transition-all duration-500'>이론과 실무 능력을 갖춘<br/>사업용 조종사 양성</span>
                  </Title>
                  {/* <div className='flex items-center gap-7.5 pt-6'>
                            <Link href={"/author"} className='text-base font-semibold text-white hover:text-primary-foreground transition-all duration-500'> {author.author_name}</Link>
                            <p className='text-base font-semibold text-white relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full'>{date}</p>
                        </div> */}
                </div>
              </div>
            </ZoomIn>
          </div>
          <div className='group'>
            <ZoomIn id="3">
              <div className='relative overflow-hidden  rounded-2.5xl after:absolute after:w-full after:h-full after:top-0 after:left-0  after:rounded-2.5xl'>
                {/* <div className='absolute z-10 top-5 left-5'>
                        <Link href={"/categories"} className='px-2.5 py-[5px] inline-block font-semibold rounded-lg text-base bg-background text-muted-foreground'>{category[0]}</Link>
                    </div> */}
                <div className='relative h-[40vh]'>
                  <Image src="/images/blog/character3.png" fill sizes='(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw' style={{ width: "100%" }} alt='thumb' className='group-hover:scale-110 transition-all duration-700' />
                </div>
                <div className='absolute z-10 bottom-5 px-5'>
                  <Title size={"2xl"}>
                    <span className='multiline-hover text-white transition-all duration-500'>SAT 면제, ELS 조건부<br/>입학가능</span>
                  </Title>
                  {/* <div className='flex items-center gap-7.5 pt-6'>
                            <Link href={"/author"} className='text-base font-semibold text-white hover:text-primary-foreground transition-all duration-500'> {author.author_name}</Link>
                            <p className='text-base font-semibold text-white relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full'>{date}</p>
                        </div> */}
                </div>
              </div>
            </ZoomIn>
          </div>
          <div className='group'>
            <ZoomIn id="4">
              <div className='relative overflow-hidden  rounded-2.5xl after:absolute after:w-full after:h-full after:top-0 after:left-0  after:rounded-2.5xl'>
                {/* <div className='absolute z-10 top-5 left-5'>
                        <Link href={"/categories"} className='px-2.5 py-[5px] inline-block font-semibold rounded-lg text-base bg-background text-muted-foreground'>{category[0]}</Link>
                    </div> */}
                <div className='relative h-[40vh]'>
                  <Image src="/images/blog/character4.png" fill sizes='(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw' style={{ width: "100%" }} alt='thumb' className='group-hover:scale-110 transition-all duration-700' />
                </div>
                <div className='absolute z-10 bottom-5 px-5'>
                  <Title size={"2xl"}>
                    <span className='multiline-hover text-white transition-all duration-500'>국내외 항공사와<br/>취업 연계과정 진행</span>
                  </Title>
                  {/* <div className='flex items-center gap-7.5 pt-6'>
                            <Link href={"/author"} className='text-base font-semibold text-white hover:text-primary-foreground transition-all duration-500'> {author.author_name}</Link>
                            <p className='text-base font-semibold text-white relative after:absolute after:-left-[15px] after:top-1/2 after:-translate-y-1/2 after:bg-secondary after:w-[6px] after:h-[6px] after:rounded-full'>{date}</p>
                        </div> */}
                </div>
              </div>
            </ZoomIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogTwo