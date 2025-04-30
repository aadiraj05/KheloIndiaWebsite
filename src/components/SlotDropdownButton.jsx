import React, { useState, useEffect } from "react";
import { FaCheckToSlot } from "react-icons/fa6";

const SlotDropdownButton = ({ onSlotSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(localStorage.getItem("userSlot") || "");
  const slotOptions = ["Morning", "Afternoon", "Evening"];

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleOptionClick = (option) => {
    setSelectedSlot(option);
    localStorage.setItem("userSlot", option); // store in localStorage
    onSlotSelect(option); // pass back to parent form
    setShowDropdown(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="border flex items-center gap-x-2 border-[#b86cc4] text-[#b86cc4] hover:text-white px-6 py-2 rounded-lg transition transform duration-300 ease-in-out hover:bg-[#a36bc5] hover:scale-110"
      >
        <FaCheckToSlot />
        <span>{selectedSlot || "Slot"}</span>
      </button>

      {showDropdown && (
        <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <ul className="py-1 text-sm text-gray-700">
            {slotOptions.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 hover:bg-[#f3e8fb] cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SlotDropdownButton;
