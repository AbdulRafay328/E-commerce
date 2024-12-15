import React from 'react';
import Image from 'next/image';

const Mainhero1 = () => {
  return (
    <>
      <div className="hero1 px-4 md:px-8 lg:px-12 mt-10">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            className="max-w-full h-auto"
            src="/images/big shoes.png"
            alt="Nike Air Max Pulse"
            width={1200}
            height={800}
          />
        </div>

        {/* Text Section */}
        <div className="text-center space-y-5 mt-8">
          {/* Subheading */}
          <div className="text-lg md:text-xl font-medium">First look</div>
          
          {/* Main Heading */}
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            NIKE AIR MAX PULSE
          </div>
          
          {/* Description */}
          <div className="text-sm md:text-base lg:text-lg text-gray-700 space-y-2">
            <div>Extreme comfort. Hyper durable Max volume. Introducing the Air Max Pulse.</div>
            <div>--Designed to push you past your limit and help you go to the max.</div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-3">
            <button className="bg-black py-2 px-6 rounded-full text-white text-sm md:text-base hover:bg-gray-800 transition">
              Notify me
            </button>
            <button className="bg-black py-2 px-6 rounded-full text-white text-sm md:text-base hover:bg-gray-800 transition">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainhero1;
