import React from "react";
import asset0 from "../assets/asset0.png";
import asset7 from "../assets/asset7.png";
import asset8 from "../assets/asset8.png";
import asset9 from "../assets/asset9.png";
import asset10 from "../assets/asset10.png";
import asset12 from "../assets/asset12.png";
import asset11 from "../assets/asset11.png";
import asset20 from "../assets/asset20.svg";
import asset22 from "../assets/asset22.svg";

const Services = () => {
  return (
    <section className="my-12 mx-10 rounded-[48px] border border-gray-200 bg-white px-16 py-20">
      {/* Header */}
      <div className="flex justify-between items-start mb-20">
        <h2 className="text-[36px] font-medium">Our Services</h2>
        <p className="text-2xl text-gray-400 max-w-lg leading-relaxed text-left">
          Discover a wide range of opportunities through a comprehensive range
          of qualified services
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-3 gap-10 mb-20">
        {/* Card 1 */}
        <div className="border-3 border-purple-400 rounded-[28px] p-8">
          <div className="flex justify-between items-start mb-4 pb-4 border-b-3 border-purple-400">
            <h3 className="text-4xl font-light leading-tight">
              Motion <br /> Graphics
            </h3>

            {/* top arrow */}
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
              <img src={asset20} alt="arrow" className="w-8 " />
            </div>
          </div>

          <p className="text-[20px] text-gray-500 mb-6 leading-relaxed">
            Bring your ideas to life through dynamic visuals and engaging
            animations.
          </p>

          <img src={asset7} alt="service" className="rounded-2xl w-full" />
        </div>

        {/* Card 2 (Center Highlight) */}
        <div className="bg-purple-600 text-white rounded-bl-[360px] rounded-r-[28px] rounded-2xl p-8 relative translate-y-4">
          <h3 className="text-4xl font-light leading-tight pb-4 mb-4 border-b border-purple-100">
            2D/3D <br /> Animation
          </h3>

          <p className="text-[20px] text-purple-100 mb-6 leading-relaxed">
            Turn imagination into reality with our stunning 2D/3D animations.
          </p>

          <img
            src={asset8}
            alt="service"
            className="rounded-2xl w-full rounded-bl-full overflow-hidden"
          />

          {/* BIG floating arrow */}
          <div className="absolute bottom-6 left-20 w-30 h-30 border-4 bg-white border-purple-500 rounded-full flex items-center justify-center  ">
            <img src={asset22} alt="arrow" className="w-16 " />
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-3 border-purple-400 rounded-[28px] p-8">
          <div className="flex justify-between items-start mb-4 pb-4 border-b-3 border-purple-400">
            <h3 className="text-4xl font-light leading-tight">
              Visual <br /> Identity
            </h3>

            {/* top arrow */}
            <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
              <img src={asset20} alt="arrow" className="w-8" />
            </div>
          </div>

          <p className="text-[20px] text-gray-500 mb-6 leading-relaxed">
            Shape a unique brand persona through our comprehensive Visual
            Identity solutions.
          </p>

          <img src={asset9} alt="service" className="rounded-2xl w-full" />
        </div>
      </div>

      {/* Bottom arrows under cards */}
      <div className="flex justify-center items-center gap-10 mb-24 opacity-50">
        <img src={asset20} alt="left" className="w-6 rotate-180" />
        <img src={asset20} alt="right" className="w-6" />
      </div>

      {/* Bottom About Text */}
      <div className="text-center relative max-w-3xl mx-auto leading-10">
        <span className="text-md text-gray-400 uppercase tracking-widest">
          About Astratto
        </span>

        <p className="text-[40px] font-light leading-snug mt-8">
          <img
            src={asset10}
            alt="icon"
            className="inline w-16 align-middle mr-2"
          />
          <span className="text-black-400">Our</span>{" "}
          <span className="text-gray-400">visionary</span>{" "}
          <span className="text-orange-500"> artisans</span> collaborate{" "}
          <span className="text-purple-600">seamlessly</span> to craft{" "}
          <img
            src={asset0}
            alt="star"
            className="inline w-12 align-middle mx-1"
          />
          <span className="text-black-400">inspiring</span>{" "}
          <span className="text-gray-400"> experiences,</span>{" "}
          <span className="text-orange-500">leaving</span> lasting
          <span className="text-gray-400"> imprints</span> on
          <span className="text-purple-600"> brands</span> <br /> and spaces.
          <img
            src={asset12}
            alt="icon"
            className="inline w-12 align-middle ml-2"
          />
        </p>

        {/* Wave */}
        <img
          src={asset11}
          alt="wave"
          className="absolute left-30 -translate-x-1/2 -bottom-12 w-106 rotate-10"
        />
      </div>
    </section>
  );
};

export default Services;
