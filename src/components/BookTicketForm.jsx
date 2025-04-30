import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import { v4 as uuidv4 } from "uuid";
import SlotDropdownButton from "./SlotDropdownButton";
import TicketLogo from "../assets/Logo.png"; // Replace with your logo path

const generate8DigitId = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const BookTicketForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    slot:  "",
    address: "",
  });

  const ticketRef = useRef(null);
  

  const [ticketId, setTicketId] = useState("");
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormEmpty = !formData.name || !formData.email || !formData.phone || !formData.fatherName || !formData.slot || !formData.address;


  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generate8DigitId();
    setTicketId(id);
    setShowQR(true);
  };

  const downloadQR = () => {
    if (ticketRef.current === null) return;
  
    toPng(ticketRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${formData.name}_ticket.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error generating PNG from ticket:", err);
      });
  };
  

  

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur flex justify-center items-center">
      <div className="w-full max-w-3xl max-h-screen overflow-y-auto px-4 py-6   shadow-lg rounded-2xl border border-slate-100 bg-slate-50">
      <form onSubmit={handleSubmit} className="space-y-4">
  {[
    { name: "name", label: "Name" },
    { name: "email", label: "Email Address" },
    { name: "phone", label: "Phone" },
    { name: "fatherName", label: "Father's Name" },
    { name: "slot", label: "Slot" },
    { name: "address", label: "Address" },
  ].map(({ name, label }) => (
    <div key={name}>
      <label className="mb-2 flex items-center mt-3 text-sm font-medium text-gray-600">
        {label}
      </label>
      {name === "slot" ? (
        // Slot input as dropdown
        <select
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
          className="block h-11 w-full rounded-full border border-gray-300  bg-white px-5 py-2.5 text-base leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
        >
          <option value="">
            Select Slot
          </option>
          <option value="slot1">Morning</option>
          <option value="slot2">Evening</option>
          <option value="slot3">Afternoon</option>
        </select>
      ) : (
        // Other inputs
        <input
          type="text"
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required
          placeholder={`Enter your ${label.toLowerCase()}`}
          autoComplete="off"
          className="block h-11 w-full rounded-full border border-gray-300 bg-white px-5 py-2.5 text-base leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
        />
      )}
    </div>
  ))}

  <div className="grid grid-cols-2 gap-4 w-full">
    <button
      type="button"
      onClick={handleClose}
      className="h-12 w-full rounded-full border border-[#b86cc4] text-base leading-7 font-semibold text-[#b86cc4] hover:text-white shadow-sm transition-all duration-700 hover:bg-[#b86cc4]"
    >
      Cancel
    </button>

    <button
      onClick={handleSubmit}
      disabled={isFormEmpty}
      className={`h-12 w-full rounded-full text-base leading-7 font-semibold text-white shadow-sm transition-all duration-700 ${
        isFormEmpty
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[#b86cc4] hover:bg-[#a95bb5]"
      }`}
    >
      Book Now
    </button>
  </div>
</form>


{showQR && (
  <div className="flex flex-col items-center mt-10 space-y-4">
    {/* Ticket QR Code Section */}
    <div ref={ticketRef}>
      <div className="w-[700px] bg-white border-[3px] border-dashed border-gray-400 rounded-lg shadow-2xl flex overflow-hidden">
        
        {/* Left Side - Ticket Info */}
        <div className="w-2/3 p-6">
          <div className="text-center mb-4">
            <img src={TicketLogo} alt="Logo" className="mx-auto w-40 rounded-full h-20" />
            <h2 className="text-xl font-bold text-gray-700 mt-2 tracking-wider">BHAGALPUR</h2>
          </div>
          <div className="text-sm text-gray-800 space-y-2 font-medium">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email ID:</strong> {formData.email}</p>
            <p><strong>Mobile Number:</strong> {formData.phone}</p>
            <p><strong>Ticket Number:</strong> {ticketId}</p>
            <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
            <p><strong>Venue:</strong> Bhagalpur</p>
          </div>
        </div>


        <div className="w-px bg-gray-100 border-gray-400 border border-dashed mx-2"></div>


        <div className="w-1/3 p-6 flex flex-col items-center justify-center bg-gray-50">
        <p className="text-xs">{ticketId}</p>
          
          <p className="mb-3 font-semibold text-center text-gray-700">Your QR Code</p>
          <div
            ref={qrRef}
            className="inline-block p-2 bg-white border border-dashed rounded shadow"
          >
            <QRCode
              value={JSON.stringify({ ...formData, ticketId })}
              size={140}
              level="H"
            />
          </div>
        </div>
      </div>
    </div>

   
    <div className="flex justify-center space-x-4">
      <button
        onClick={downloadQR}
        className="border border-green-600 text-green-600 hover:text-white py-2 px-4 rounded hover:bg-green-700 transition text-sm"
      >
        Download Ticket
      </button>
    </div>
  </div>
)}


      </div>
    </div>
  );
};

export default BookTicketForm;
