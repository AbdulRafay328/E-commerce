import React from 'react';
import Image from 'next/image';

const Mainhero5 = () => {
  return (
    <>
      <div className="Mainhero5 px-4 md:px-8 lg:px-12 mt-16">
        <div className="text-lg font-medium py-2">Don&apos;t Miss</div>
        
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            className="w-full h-auto object-cover max-w-screen-lg"
            src="/images/2pics.png"
            alt="Description of image"
            width={1200}
            height={800}
          />
        </div>
        
        {/* Text Section */}
        <div className="text-center mt-8 space-y-5">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            FLIGHT ESSENTIAL
          </div>
          <div className="text-sm sm:text-base lg:text-lg px-4 lg:px-0">
            Your built-to-last all-weeks wears but with style only Jordan brand can deliver.
          </div>
          
          {/* Button */}
          <button className="bg-black py-2 px-6 rounded-full text-white hover:bg-gray-800 transition">
            Shop
          </button>
        </div>
      </div>
    </>
  );
};

export default Mainhero5;
