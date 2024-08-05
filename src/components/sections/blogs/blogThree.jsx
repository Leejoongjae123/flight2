import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { blogData2 } from '@/lib/fackData/blogData2'
import React from 'react'
import CardTwo from './cardTwo'

const BlogTwo = () => {
  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Our Device</Button>
            <Title size={"5xl"} className="pt-6 text-center max-w-[898px]">다양한 기종 보유</Title>
          </div>
        </SlideUp>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between'>
          {
            blogData2.slice(0, 3).map(({ id, author, date, thumb, title, category }) => <CardTwo key={id} id={id} title={title} thumb={thumb} author={author} date={date} category={category} />)
          }
        </div>
      </div>
    </section>
  )
}

export default BlogTwo