"use client"
import React from 'react'
import Image from 'next/image'
import useMoveMentAnimation from '@/src/hooks/useMoveMentAnimation'
import SlideUp from '@/src/components/animations/slideUp'

const SoftwareLogo = () => {
    const [mousPositionX, mousPositionY] = useMoveMentAnimation()
    return (
        <div className='w-full h-full flex justify-center items-center relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[url(/images/shapes/provide-bg1-1.png)] after:bg-contain after:bg-no-repeat after:bg-center after:z-[-1] after:dark:opacity-20' >
            <SlideUp>
                <div >
                    <Image className='rounded-lg' src="/images/heli/heli.jpg" width={350} height={300} alt='provide img' />
                </div>
            </SlideUp>
        </div>
    )
}

export default SoftwareLogo