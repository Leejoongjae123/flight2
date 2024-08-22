import ZoomIn from '@/src/components/animations/zoomIn'
import Title from '@/src/components/ui/title'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardFive({ id, title, date, thumb, author, category }) {
  return (
    <div className='group'>
      <ZoomIn id={id}>
        <div className='relative overflow-hidden rounded-2.5xl after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-2.5xl'>
          <div className='relative'>
            <Image src={thumb} layout='responsive' width={700} height={475} alt='thumb' className='group-hover:scale-105 transition-all duration-700 object-contain' />
            <div className='absolute bottom-0 left-0 w-full bg-gray-400 bg-opacity-50 text-white text-center py-2'>
              <Title size="lg" className='text-white font-bold'>{title}</Title>
            </div>
          </div>
        </div>
      </ZoomIn>
    </div>
  )
}

