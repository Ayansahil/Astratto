import React from "react";
import { X, Linkedin, Instagram } from "lucide-react";
import asset17 from "../assets/asset17.png"; // sparkle / star
import asset18 from "../assets/asset18.png"; // circular get started badge

const Footer = () => {
  return (
    <footer className="mx-10 my-16 rounded-[48px] border border-gray-200 bg-white px-16 py-20">
      {/* Top Small Text */}
      <p className="text-center text-md text-purple-500 mb-6">
        Open the door to forging your brand's story
      </p>

      {/* Main Heading */}
      <div className="relative text-center max-w-4xl mx-auto">
        {/* Sparkle */}
        <img
          src={asset17}
          alt="sparkle"
          className="absolute left-16 -top-8 w-12"
        />

        <h2 className="text-[40px] font-light leading-tight text-black">
          Embark on a Transformative Journey <br />
          Shaping{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-yellow-300 rounded-full -z-10"></span>
            <span className="relative px-4 py-2 rounded-2xl rotate-x-20  bg-[#FFC204] text-white">
              Your Brand's Destiny
            </span>
          </span>{" "}
          Through Our <br />
          Dedicated Partnership
        </h2>

        {/* Circular Badge */}
        <img
          src={asset18}
          alt="Get Started"
          className="absolute right-0 top-24 w-24"
        />
      </div>

      {/* Sub Text */}
      <p className="text-center text-gray-400 max-w-140 mx-auto mt-8 text-md leading-relaxed">
        Join us on a transformative journey to shape your brand's destiny
        through our dedicated partnership, crafting a narrative that resonates
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-14"></div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center text-sm text-gray-400">
        {/* Left */}
        <span>Via della Creatività, 23, 20121 Milano</span>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-gray-500">
          <X className="w-4 h-4 cursor-pointer hover:text-black" />
          <Linkedin className="w-4 h-4 cursor-pointer hover:text-black" />
          <Instagram className="w-4 h-4 cursor-pointer hover:text-black" />
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <span className="cursor-pointer hover:text-black">
            Privacy & Cookie Policy
          </span>
          <span>Astratto © 2026</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
