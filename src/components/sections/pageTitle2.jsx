import React from 'react'
import Link from 'next/link'
import { FaChevronRight } from "react-icons/fa";
import Title from '../ui/title'
import { cn } from '@/src/lib/utils';

const PageTitle = ({ pageName, breadcrumbLink, breadcrumbCurrent, className }) => {
    return (
        <div className={cn(`lg:pt-[188px] pt-28 lg:mb-15 mb-9 bg-no-repeat bg-cover bg-[center_bottom] overflow-hidden relative z-[1] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[rgba(0,31,63,0.4)] after:backdrop-blur after:z-[-1] bg-[url('/images/banner/airplane2.png')]`, className )}>
            <div className='pb-[130px] pt-25 px-[15px]'>
                <div className='flex flex-col items-center'>
                    <Title size={"5xl"} className={"text-white"}>{pageName}</Title>
                    
                </div>
            </div>
        </div>
    )
}

export default PageTitle