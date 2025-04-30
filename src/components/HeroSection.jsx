import React from 'react';
import BookTicketForm from './BookTicketForm';
import BadmintonImage from '../assets/Badminton-amico.svg';
import ArcheryImage from '../assets/Archery-amico.svg';
import { FaCheckToSlot } from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";
import { TfiLayoutLineSolid } from "react-icons/tfi";

// import SlotDropdownButton from './SlotDropdownButton';

const HeroSection = () => {
    const [isFormShowing, setIsFormShowing] = React.useState(false);

    const handleBookTicket = () => {
       
        setIsFormShowing(true);
    }

    const handleCloseFrom = () => {
      
        setIsFormShowing(false);
    }
  return (
    <div className="grid grid-cols-2  px-5 py-25 ">
    {/* Left Side with Khelo India info */}
    <div className="flex flex-col justify-center items-start px-10 mt-0 bg-white">
    <h2 className="text-5xl font-bold mb- text-gray-800">
      KHELO INDIA
      <span className="text-red-600 text-5xl font-semibold inline-block align-middle ml-2">
       <TfiLayoutLineSolid />
      </span>
    </h2>
    <h2 className="text-4xl font-semibold text-[#b86cc4] ml-[110px]"><span className="text-red-600 text-5xl font-semibold       inline-block align-middle ml-2">
       <TfiLayoutLineSolid />
      </span> Bhagalpur</h2>

      <p className="text-md text-[#dadada]  font-semibold mb-6 mt-10 max-w-md">
        Khelo India is a government initiative to promote grassroots sports and foster a strong sporting culture. Bihar actively supports this by developing infrastructure and organizing state-level events like badminton.
      </p>
      <p className="text-xl font-semibold text-[#b86cc4]">
        Two Sports. One Passion. Reserve Your Spot <br/>for  Archery & Badminton!
      </p>

      <div className="flex space-x-5  py-10">
      {/* <SlotDropdownButton /> */}
          <button onClick={handleBookTicket} className=" flex items-center gap-x-2 bg-[#b86cc4] text-white px-6 py-2 rounded-lg transition transform duration-300 ease-in-out hover:bg-[#a36bc5] hover:scale-110 ">
          <HiTicket />

          Book Ticket
          </button>
        </div>
    </div>

      {/* Right Side with swapped images */}
      <div className="relative flex   w-full h-full">
        {/* Now showing Image 2 in top-left */}
        <img
          src={ArcheryImage}
          alt="Image 2"
          className=" w-90 h-90 object-cover transform translate-y-26 "
        />

        {/* Now showing Image 1 in bottom-right */}
        <img
          src={BadmintonImage}
          className=" w-90 h-90 object-cover transform -translate-y-12 "
        />
      </div>
      {isFormShowing && (
        <BookTicketForm handleClose={handleCloseFrom} />
      )}
    </div>
  );
};

export default HeroSection;
