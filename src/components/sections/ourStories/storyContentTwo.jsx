import SlideRight from '@/components/animations/slideRight'
import SlideUp from '@/components/animations/slideUp'
import { Button } from '@/components/ui/button'
import PlayIcon from '@/components/ui/playIcon'
import Title from '@/components/ui/title'
import Link from 'next/link'
import React from 'react'

const StoryContentOne = () => {
  return (
    <div className='h-full'>
      <SlideUp>
        <Title size={"5xl"} className={"xl:leading-[140%] lg:max-w-[645px]"}>
        Welcome Message from the President

        </Title>

        <div className='lg:max-w-[645px]'>
          <p className='font-semibold text-muted-foreground mt-6'>
          Dear Students, Faculty, and Staff<br></br><br></br>
Welcome to the University of North Dakota (UND)! It is my great pleasure to extend a warm greeting to all of you as we embark on another exciting academic year together. At UND, we pride ourselves on fostering a vibrant community where innovation, scholarship, and personal growth thrive.
<br></br><br></br>
As a leading institution in the region, UND offers a diverse array of programs, world-class faculty, and state-of-the-art facilities. Our commitment to excellence in education empowers students to pursue their passions and achieve their goals. Whether you are studying engineering, health sciences, or the arts, you will find a wealth of resources and support designed to enhance your academic journey.
<br></br><br></br>
One of the unique advantages of being part of UND is our strong emphasis on research and collaboration. Students have the opportunity to engage in groundbreaking research projects alongside experienced faculty, equipping them with valuable skills and knowledge that extend beyond the classroom.

          </p>

          <p className='mt-7.5 font-medium'>
          Moreover, our campus is a place where community matters. We encourage you to participate in various student organizations, events, and initiatives that promote inclusion, leadership, and social responsibility. Each of you plays a vital role in creating a welcoming environment that enriches the lives of everyone on campus.
          <br></br><br></br>
As you navigate your journey at UND, remember that you are not alone. Our dedicated faculty and staff are here to support you every step of the way. Together, we can achieve remarkable things.
Once again, welcome to the University of North Dakota. I am excited to see all that you will accomplish during your time here!
<br></br><br></br>
Warm regards,
<br></br><br></br>
Robert J. Kraus, Ph.D., PfMP Dean President, University of North Dakota

          </p>
        </div>

        {/* <div className='flex items-center sm:gap-[32px] gap-6 md:pt-[55px] pt-7 pb-[22px]'>
                    <div>
                        <Button asChild>
                            <Link href="/about-us">  Get Started</Link>
                        </Button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <PlayIcon playOne={false} />
                        <p className='font-semibold sm:block hidden'>How It works?</p>
                    </div>
                </div> */}
      </SlideUp>
    </div>
  )
}

export default StoryContentOne