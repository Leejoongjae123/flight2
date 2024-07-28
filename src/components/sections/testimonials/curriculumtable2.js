import React from "react";

export default function CurriculumTable2() {
  return (
    <>
      
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
        <table className="text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-xl text-gray-700 uppercase bg-[rgba(46,77,254,0.05)]">
            <tr>
              <th scope="col" className="px-6 py-3 w-1/3">
                Aviation Core Courses
              </th>
              <th scope="col" className="px-6 py-3 "></th>
              <th scope="col" className="px-6 py-3 "></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 100
              </th>
              <td className="px-6 py-4 w-full">Aviation Orientation</td>
              <td className="px-6 py-4 w-full">1</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 103
              </th>
              <td className="px-6 py-4 w-full">
                Introduction to Air Traffic Control
              </td>
              <td className="px-6 py-4 w-full">2</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 208
              </th>
              <td className="px-6 py-4 w-full">Aviation Safety</td>
              <td className="px-6 py-4 w-full">3</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 250
              </th>
              <td className="px-6 py-4 w-full">Human Factors</td>
              <td className="px-6 py-4 w-full">2</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 309
              </th>
              <td className="px-6 py-4 w-full">Flight Physiology</td>
              <td className="px-6 py-4 w-full">3</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 327
              </th>
              <td className="px-6 py-4 w-full">Gas Turbine Engines</td>
              <td className="px-6 py-4 w-full">2</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 403
              </th>
              <td className="px-6 py-4 w-full">Aerospace law</td>
              <td className="px-6 py-4 w-full">3</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 411
              </th>
              <td className="px-6 py-4 w-full">
                International and Long Range Navigation
              </td>
              <td className="px-6 py-4 w-full">3</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 430
              </th>
              <td className="px-6 py-4 w-full">Crew Resource Management</td>
              <td className="px-6 py-4 w-full">3</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 485
              </th>
              <td className="px-6 py-4 w-full">Aviation Senior Capstone</td>
              <td className="px-6 py-4 w-full">3</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Select two of folowing:
              </th>
              <td className="px-6 py-4 w-full"></td>
              <td className="px-6 py-4 w-full">6</td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 402
              </th>
              <td className="px-6 py-4 w-full">
                Airport Planning and Administration
              </td>
              <td className="px-6 py-4 w-full"></td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 405
              </th>
              <td className="px-6 py-4 w-full">
                Airline Operations and Management
              </td>
              <td className="px-6 py-4 w-full"></td>
            </tr>
            <tr className="bg-white ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AVIT 407
              </th>
              <td className="px-6 py-4 w-full">
                General Aviation Operations and Management
              </td>
              <td className="px-6 py-4 w-full"></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </>
  );
}
