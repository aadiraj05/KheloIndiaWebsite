import React from 'react'
import BadmintonIcon from '../assets/BadmintonIcon.svg'
import { FaLocationDot } from "react-icons/fa6";

const EventCard = () => {
  return (
    <div className='flex flex-wrap gap-1'>
       <div className="w-80 max-w-md bg-white  border border-gray-200  mx-1 shadow-xl  overflow-hidden   rounded-md ">
     
            <div className="flex items-center space-x-4 py-2 px-2 ">
        
             <div className="w-12 h-12 flex items-center justify-center rounded-md border border-gray-300">
                 <img src={BadmintonIcon} alt="badmintonicon" className="w-6 h-6 object-contain" />
             </div>


             <div className="flex flex-col">
                <span className="text-xl font-semibold text-gray-800">Badminton</span>
                <span className="text-sm text-gray-800">05/10/2025 - 05/13/2025</span>
                </div>
            </div>

            

            <div className="flex items-center p-2 ">
            <button className="flex w-full items-center text-white text-md bg-gradient-to-r from-teal-200 to-blue-500 font-medium px-3 py-1 rounded-md">
  <FaLocationDot className="mr-2 text-white" />
  Sandy's Compound Complex
</button>

            </div>

      </div>


      <div className="w-80 max-w-md bg-white  mx-3 overflow-hidden border shadow-xl border-gray-200 rounded-md ">
     
            <div className="flex items-center space-x-4 py-2 px-2 ">
        
             <div className="w-12 h-12 flex items-center justify-center rounded-md border border-gray-300">
                 <img src={BadmintonIcon} alt="badmintonicon" className="w-6 h-6 object-contain" />
             </div>


             <div className="flex flex-col">
                <span className="text-xl font-semibold text-gray-800">Archery</span>
                <span className="text-sm text-gray-800">05/04/2025 - 05/07/2025</span>
                </div>
            </div>

            

            <div className="flex items-center p-2 ">
                <button className="flex  w-full items-center bg-gradient-to-r from-teal-200 to-blue-500 text-white text-md font-medium  px-3 py-1 rounded-md">
                     <FaLocationDot className="mr-2 text-white" />
                     Sandy's Compound Complex
                </button>
            </div>

      </div>
    </div>
  )
}

export default EventCard