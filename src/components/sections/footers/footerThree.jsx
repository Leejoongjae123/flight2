import React from 'react'
import SocialIcons from '@/src/components/ui/socialIcons'
import ImportanceLinks from './importanceLinks'
import CopyRight from './copyRight'
import FooterContact from './footerContact'
import { cn } from '@/src/lib/utils'

const FooterThree = ({ className }) => {
    return (
        <footer className={cn(`lg:pt-15 pt-9`)}>
            <div className='container '>
                <div className={cn(`bg-[rgba(46,77,254,0.05)] rounded-tr-[30px] rounded-tl-[30px] pt-12.5 pb-[54px]  ${className}`)}>
                    <div className='max-w-[1350px] mx-auto px-[15px]'>
                        <FooterContact />
                        <span className='inline-block bg-[#7C848C] h-[1px] w-full mb-12.5 mt-[45px]'></span>
                        <div className='grid xl:grid-cols-[auto_65%] lg:grid-cols-[auto_60%] grid-cols-1 gap-x-7 justify-between'>
                            {/* <div>
                                <h3 className='text-1xl font-semibold text-muted-foreground lg:pb-7.5 pb-3'>About</h3>
                                <p className='pb-[38px]'>글로벌 항공 인재를 양성하는 UND 글로벌 항공대학교 패스웨이는 철저한 맞춤형 교육과 진로 상담을 통해, 여러분이 원하는 하늘길을 열어드립니다. 지금 바로 문의하셔서, 더 넓은 세상으로의 도약을 준비하세요.</p>
                                <SocialIcons prantBorder={"text-2xl text-muted-foreground"} />
                            </div> */}
                            {/* <div>
                                <ImportanceLinks />
                            </div> */}
                        </div>
                    </div>
                </div>
                <CopyRight className={`max-w-[1350px] mx-auto px-[15px]`} />
            </div>
        </footer>
    )
}

export default FooterThree