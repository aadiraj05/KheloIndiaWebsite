import React from 'react';
import BookTicketForm from './BookTicketForm';
import BadmintonImage from '../assets/Badminton-amico.svg';
import ArcheryImage from '../assets/Archery-amico.svg';
import { FaCheckToSlot } from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";
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
    <div className="grid grid-cols-2 h-screen px-0 py-5 ">
    {/* Left Side with Khelo India info */}
    <div className="flex flex-col justify-center items-start px-10 mt-0 bg-white">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Khelo India – <span className='text-[#b86cc4]'>Bhagalpu</span></h2>
      <p className="text-md text-gray-700 mb-6 max-w-md">
        Khelo India is a flagship sports initiative by the Government of India aimed at promoting grassroots sports and building a strong sports culture in the country. Under this program, Bihar has been actively developing its infrastructure, encouraging local talent, and organizing state-level tournaments in various disciplines, including badminton.
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
      <div className="relative w-full h-full">
        {/* Now showing Image 2 in top-left */}
        <img
          src={BadmintonImage}
          alt="Image 2"
          className="absolute top-10 right-0 w-2/4 h-2/4 object-cover "
        />

        {/* Now showing Image 1 in bottom-right */}
        <img
          src={ArcheryImage}
          className="absolute bottom-30 left-0 w-2/4 h-2/4 object-cover "
        />
      </div>
      {isFormShowing && (
        <BookTicketForm onClick={handleCloseFrom} />
      )}
    </div>
  );
};

export default HeroSection;
