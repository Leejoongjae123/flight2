import SlideUp from '@/src/components/animations/slideUp'
import { Button } from '@/src/components/ui/button'
import Title from '@/src/components/ui/title'
import { blogData } from '@/src/lib/fackData/blogData'
import React from 'react'
import CardTwo from './cardTwo'

const BlogTwo = () => {
  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Our Introduction</Button>
            <Title size={"5xl"} className="pt-6 text-center max-w-[898px]">UND 항공대학 글로벌 패스웨이 혜택</Title>
          </div>
        </SlideUp>

        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between'>
          {
            blogData.slice(0, 4).map(({ id, author, date, thumb, title, category }) => <CardTwo key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />)
          }
        </div>
      </div>
    </section>
  )
}

export default BlogTwo