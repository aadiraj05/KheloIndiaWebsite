import React from "react";
import kheloLogo from "/src/assets/Logo.png";
import player1 from "/src/assets/smiling-young-man-illustration_1308-174669.avif"; // add 10 such images

const players = [
  { name: "Ravi Kumar", sport: "Badminton", bio: "National level champion from Patna", img: player1 },
  { name: "Priya Verma", sport: "Archery", bio: "State gold medalist from Gaya", img: player1 },
  { name: "Amit Singh", sport: "Badminton", bio: "Junior category finalist", img: player1 },
  { name: "Nisha Kumari", sport: "Archery", bio: "National participant 2024", img: player1 },
  { name: "Sandeep Yadav", sport: "Badminton", bio: "Top 5 ranker in East Zone", img: player1 },
  { name: "Pooja Sinha", sport: "Archery", bio: "Bronze at Youth Archery Meet", img: player1 },
  { name: "Manoj Das", sport: "Badminton", bio: "Coach's Choice award 2023", img: player1 },
  { name: "Kajal Kumari", sport: "Archery", bio: "Best Archer (Bihar Zone)", img: player1 },
  { name: "Rajeev Ranjan", sport: "Badminton", bio: "Youngest participant from Nalanda", img: player1 },
  { name: "Sunita Kumari", sport: "Archery", bio: "Precision Queen of Bihar", img: player1 },
];

const PlayerDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-40 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-5xl relative">
        <button
          className="absolute top-5 right-6 text-gray-400 hover:text-red-500 text-xl font-bold"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="flex justify-center mb-6">
          <img src={kheloLogo} alt="Khelo India Bihar" className="h-20" />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Bihar Players Spotlight
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          {players.map((player, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center text-center"
            >
              <img
                src={player.img}
                alt={player.name}
                className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{player.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{player.sport}</p>
              <p className="text-sm text-gray-500 mt-2">{player.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsModal;
