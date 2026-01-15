import React from "react";
import asset0 from "../assets/asset0.webp";
import asset22 from "../assets/asset22.svg";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center border-b border-gray-200 px-10">
      {/* Left Links */}
      <div className="flex items-center gap-8 text-lg font-medium text-gray-700">
        <a href="#" className="hover:text-black">
          Services
        </a>
        <a href="#" className="hover:text-black">
          Work
        </a>
        <a href="#" className="hover:text-black">
          About
        </a>
      </div>

      {/* Center Logo */}
      <div className="flex-1 flex justify-center items-center gap-2">
        <img
          src={asset0}
          alt="Astratto Logo"
          className="w-6 h-6 rounded-full object-cover"
        />
        <h2 className="text-3xl font-semibold">Astratto</h2>
      </div>

      {/* Right Links */}
      <div className="flex items-center gap-6 text-lg font-medium">
        <a href="#" className="hover:text-black">
          Careers
        </a>

        <button className="flex items-center gap-1 px-3 py-2 border border-[#F7793B] rounded-full hover:bg-gray-100 transition">
          Contact Us
          <img src={asset22} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
