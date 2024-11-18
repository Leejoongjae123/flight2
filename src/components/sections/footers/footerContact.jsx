import Logo from '@/src/components/ui/logo'
import { cn } from '@/src/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterContact = ({ bgColor, color, white_logo }) => {
  return (
    <div className='grid lg:grid-cols-[30%_70%] items-center gap-8'>
      <div className='flex flex-col md:flex-row items-center justify-start gap-x-5'>
        <Image src={"/images/logo-light2.png"} width={200} height={100} alt='logo-white'  />
        <Image src={"/images/logo3.png"} width={200} height={100} alt='logo-white'  />
        {/* <p className=' text-lg'>UND글로벌패스웨이</p> */}
      </div>
      <div className='flex md:flex-row flex-col justify-end gap-4'>
        <div className='flex items-end gap-8'>
          {/* <div className={cn(`w-[75px] h-[75px] rounded-lg ${bgColor} flex justify-center items-center`)}>
            <Image src={'/images/shapes/google-map-pin.png'} width={45} height={50} alt='map arrwo' />
          </div> */}
          <div className={cn(`${color}`)}>

            <p><span className='font-semibold'>주소:</span>서울시 강남구 테헤란로 8길 40 (역삼동, 알티넷 빌딩)</p>
            <p> <span className='font-semibold'>이메일:</span> <Link href={"mailto:pilot@undglobal.co.kr"} className='relative hover-underline after:h-[1px] after:bg-muted'> pilot@undglobal.co.kr</Link> </p>
            <p> <span className='font-semibold'>전화:</span> <Link href={"tal:02-6011-3888"} className='relative hover-underline after:h-[1px] after:bg-muted'> 02-6011-3888</Link> </p>
            <p> <span className='font-semibold'>카카오톡:</span> <Link target='_blank' href={"url:http://pf.kakao.com/_xcxmxhyG"} className='relative hover-underline after:h-[1px] after:bg-muted'>@UND항공대학글로벌패스웨이</Link> </p>

          </div>
        </div>
        <div className='flex items-center gap-4'>
          {/* <div className={cn(`w-[75px] h-[75px] rounded-lg ${bgColor} flex justify-center items-center`)}>
            <Image src={"/images/shapes/skills-icon.png"} width={44} height={50} alt='comments icon' />
          </div> */}
          <div className={cn(`${color}`)}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterContact