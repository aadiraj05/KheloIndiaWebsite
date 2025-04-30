import React from "react";
import kheloLogo from "/src/assets/Logo.png";
import indiaFlag from "/src/assets/india-flag-icon.svg";
import nepalFlag from "/src/assets/nepal-flag-icon.svg";
import bhutanFlag from "/src/assets/bhutan-flag-icon.svg";

const MatchScheduleModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const matches = {
    badminton: [
      {
        team1: { name: "India", flag: indiaFlag },
        team2: { name: "Nepal", flag: nepalFlag },
        time: "10:00 AM",
        date: "2nd May 2025",
      },
      {
        team1: { name: "Bhutan", flag: bhutanFlag },
        team2: { name: "India", flag: indiaFlag },
        time: "1:00 PM",
        date: "2nd May 2025",
      },
    ],
    archery: [
      {
        team1: { name: "Nepal", flag: nepalFlag },
        team2: { name: "Bhutan", flag: bhutanFlag },
        time: "3:00 PM",
        date: "2nd May 2025",
      },
    ],
  };

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="flex justify-center mb-6">
          <img src={kheloLogo} alt="Khelo India Bihar" className="h-20" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-4">Match Schedule</h2>

        <div className="space-y-8">
          {Object.entries(matches).map(([sport, events]) => (
            <div key={sport}>
              <h3 className="text-xl font-semibold text-[#A36BC5] capitalize border-b pb-2 mb-4">
                {sport}
              </h3>
              <div className="space-y-4">
                {events.map((match, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center space-x-4">
                      <img src={match.team1.flag} alt={match.team1.name} className="h-6 w-8 rounded-sm" />
                      <span className="font-medium">{match.team1.name}</span>
                      <span className="text-gray-500">vs</span>
                      <span className="font-medium">{match.team2.name}</span>
                      <img src={match.team2.flag} alt={match.team2.name} className="h-6 w-8 rounded-sm" />
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>{match.date}</p>
                      <p>{match.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchScheduleModal;
