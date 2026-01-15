import React from "react";
import asset1 from "../assets/asset1.webp";
import asset2 from "../assets/asset2.webp";
import asset3 from "../assets/asset3.webp";
import asset4 from "../assets/asset4.webp";
import asset5 from "../assets/asset5.webp";
import asset6 from "../assets/asset6.webp";

const Home = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-white flex items-center justify-center overflow-hidden px-10">
      {/* Left Illustration */}
      <img
        src={asset2}
        alt="left art"
        className="absolute left-10 top-32 w-72 -rotate-6"
      />

      {/* Right Illustration */}
      <img
        src={asset3}
        alt="right art"
        className="absolute right-10 bottom-24 w-80 rotate-6"
      />

      {/* Center Content */}
      <div className="z-10 max-w-4xl text-center flex flex-col items-center gap-6 tracking-wider">
        {/* Tagline */}
        <p className="text-lg text-gray-500 tracking-wide">
          Igniting the Spark of Inspiration
        </p>
        <h1 className="text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-medium leading-[1.1]">
          Unleash Your <br />
          {/* Brand + icon + with Our in same line */}
          <span className="inline-flex items-center gap-3 whitespace-nowrap">
            Brand
            <img src={asset1} alt="brand icon" className="h-16 inline-block" />
            <span>with Our</span>
          </span>
          <br />
          {/* Magico + Design */}
          <span className="relative inline-block mr-3">
            <span className="absolute inset-0 bg-[#FFF293] rotate-2 rounded-lg"></span>
            <span className="relative px-4 text-purple-700">Mágico</span>
          </span>
          Design
        </h1>

        {/* CTA + Side Image */}
        <div className="absolute bottom-8 left-20 flex items-center gap-1 -rotate-6">
          <button className="px-6 py-4 border border-[#F7793B] rounded-full hover:bg-gray-100 transition">
            Create Magic
          </button>

          {/* Button Side Icon */}
          <img src={asset6} alt="magic icon" className="w-16 cursor-pointer" />
        </div>
      </div>

      {/* Address Pills */}
      <div className="absolute top-20 right-10 flex flex-col gap-2 items-end">
        <span className="px-4 py-2 text-sm rounded-full bg-purple-600 text-white">
          Via della Creatività, 23
        </span>
        <span className="px-4 py-2 text-sm rounded-full bg-purple-600 text-white">
          20121 Milano
        </span>
      </div>

      {/* Zig-Zag Decorative Assets */}
      <img
        src={asset5}
        alt="zigzag"
        className="absolute bottom-50 left-24 w-55 -rotate-12"
      />

      <img
        src={asset4}
        alt="zigzag"
        className="absolute bottom-12 right-150 w-130 rotate-8"
      />
    </section>
  );
};

export default Home;
