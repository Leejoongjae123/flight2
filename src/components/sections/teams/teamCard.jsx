import Image from 'next/image'
import React from 'react'
import Title from '@/components/ui/title'
import Link from 'next/link'
import SlideUp from '@/components/animations/slideUp'
import { cn } from '@/lib/utils'
const TeamCard = ({ id, name, position, src, bgColor, link }) => {
  return (
    <SlideUp id={id}>
      <div className='relative p-5 h-25 w-150 group after:absolute after:w-full after:h-full after:top-0 after:left-0 after:transition-all after:duration-700 hover:after:bg-[linear-gradient(0deg,_rgba(0,0,0,0.20)_0%,_rgba(0,0,0,0.20)_100%)] '>
        <Image src={src} alt='team-1' className='w-auto h-full object-contain' fill/>

      </div>
    </SlideUp>
  )
}

export default TeamCard