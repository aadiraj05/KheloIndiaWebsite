import React, { useState } from 'react';
import Logo from "/src/assets/Logo.png";
import MatchScheduleModal from './MatchScheduleModal';
import PlayerDetailsModal from './PlayerDetailsModal';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [showPlayers, setShowPlayers] = useState(false);

  // const handleMatchScheduleClick = () => {
  //   setIsModalOpen(true);
  // }
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // }

  return (
    <div className="bg-white shadow-md py-0 px-6 h-25">
      <div className="flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-30 w-50" />
        </div>

        {/* Hamburger icon (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl focus:outline-none">
            ☰
          </button>
        </div>

        {/* Navigation Links (desktop only) */}
        <div className="hidden md:block">
          <ul className="flex space-x-10 text-small font-medium pr-15">
            <button onClick={() => setShowSchedule(true)} className="hover:text-[#b86cc4] cursor-pointer">Match Schedule</button>
            <button onClick={() => setShowPlayers(true)} className="hover:text-[#b86cc4] cursor-pointer">Players</button>
            <li className="hover:text-[#b86cc4] cursor-pointer ">
           
<button
  class="group flex cursor-pointer items-center justify-start w-11 h-11 bg-[#b86cc4] rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
>
  <div
    class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
  >
    <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
      <path
        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
      ></path>
    </svg>
  </div>
  <div
    class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
  >
    Login
  </div>
</button>

            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-1 text-small font-medium pr-15">
            <li className="hover:text-blue-600 cursor-pointer">Match Schedule</li>
            <li className="hover:text-blue-600 cursor-pointer">Players</li>
            <li className="hover:text-blue-600 cursor-pointer">Book Ticket</li>
          </ul>
        </div>
      )}

      {/* Match Schedule Modal */}
      {/* {isModalOpen && (
        <MatchScheduleModal onClose={handleCloseModal} />
      )} */}

<MatchScheduleModal isOpen={showSchedule} onClose={() => setShowSchedule(false)} />
<PlayerDetailsModal isOpen={showPlayers} onClose={() => setShowPlayers(false)} />
    </div>
  );
};

export default Navbar;
