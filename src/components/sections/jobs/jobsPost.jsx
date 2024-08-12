import React from 'react'
import Title from '../../ui/title'
import { jobsData } from '@/src/lib/fackData/jobsData'
import { Button } from '../../ui/button'
import Link from 'next/link'
import SlideUp from '@/src/components/animations/slideUp'

const JobsPost = () => {
  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Jobs</Button>
            <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">졸업 직후 국내항공사 취업</Title>
          </div>
        </SlideUp>

        <SlideUp>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
            <table className="text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className=" text-xl text-gray-700 uppercase bg-[rgba(46,77,254,0.05)]">
                <tr>
                  <th scope="col" className="px-6 py-3 w-1/3">
                    ESSENTIAL COURSE
                  </th>
                  <th scope="col" className="px-6 py-3 "></th>
                  <th scope="col" className="px-6 py-3 "></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    ATSC 110
                  </th>
                  <td className="px-6 py-4 w-full">Meteorology I</td>
                  <td className="px-6 py-4 w-full">3</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    ATSC 110L
                  </th>
                  <td className="px-6 py-4 w-full">Meteorology I Laboratory</td>
                  <td className="px-6 py-4 w-full">1</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    COMM 110
                  </th>
                  <td className="px-6 py-4 w-full">
                    Fundamentals of Public Speaking
                  </td>
                  <td className="px-6 py-4 w-full">3</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    ENGL 110
                  </th>
                  <td className="px-6 py-4 w-full">College Composition I</td>
                  <td className="px-6 py-4 w-full">3</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    ENGL 130
                  </th>
                  <td className="px-6 py-4 w-full">
                    Composition II:Writing for Public Audiences
                  </td>
                  <td className="px-6 py-4 w-full">3</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Fine Arts and Humanities Electives
                  </th>
                  <td className="px-6 py-4 w-full"></td>
                  <td className="px-6 py-4 w-full">9</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    MATH 103
                  </th>
                  <td className="px-6 py-4 w-full">
                    College Algebra(Or any higher level math class.)
                  </td>
                  <td className="px-6 py-4 w-full">3</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Social Science Electives
                  </th>
                  <td className="px-6 py-4 w-full"></td>
                  <td className="px-6 py-4 w-full">9</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Math, Science, and Technology Elective
                  </th>
                  <td className="px-6 py-4 w-full"></td>
                  <td className="px-6 py-4 w-full">2</td>
                </tr>
              </tbody>
            </table>
          </div>

        </SlideUp>
        {/* <div className='pt-[70px]'>
          <div className='flex flex-col gap-12.5'>
            {
              jobsData.map(({ id, job_nature, location, position }) => {
                return (
                  <SlideUp id={id} key={id}>
                    <div className='bg-[rgba(46,77,254,0.05)] border border-accent rounded-[30px] xl:p-10 p-5 grid grid-cols-4 items-center gap-4 lg:gap-0 transition-all duration-500 hover:shadow-[0px_0px_20px_0px_rgba(0,31,63,0.1)]'>
                      <Card className='col-span-1' icon={position.icon} name={position.position_name} title={"포지션"} />
                      <Card className='col-span-1' icon={job_nature.icon} name={job_nature.nature} title={"모집분야"}/>
                      <Card className='col-span-2' icon={location.icon} name={location.location} title={"자격요건"} />
                    </div>
                  </SlideUp>
                )
              })
            }
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default JobsPost


const Card = ({ icon, title, name }) => {
  return (
    <div className='flex items-center gap-6 w-full'>
      <div className='w-15 h-15 flex items-center justify-center bg-white p-[15px] rounded-lg border-2 border-accent'>
        {icon}
      </div>
      <div>
        <h5 className='font-extrabold text-muted-foreground'>{title}</h5>
        <p>{name}</p>
      </div>
    </div>
  )
}