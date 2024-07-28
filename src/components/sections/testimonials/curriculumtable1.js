import React from "react";

export default function CurriculumTable1() {
  return (
    <>
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
      
    </>
  );
}
