import React from 'react';
import Image from 'next/image';

const Mainhero3 = () => {
  return (
    <>
      <div className="Mainhero3 mt-16 px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <h1 className="text-lg font-medium py-2">Featured</h1>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            className="max-w-full h-auto"
            src="/images/runner.png"
            alt="Running Shoes"
            width={1200}
            height={800}
          />
        </div>

        {/* Text Section */}
        <div className="text-center mt-8 space-y-5">
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            STEPS INTO WHAT FEELS GOOD
          </div>
          <div className="text-sm md:text-base text-gray-700">
            Cause everyone should know the feeling of running in that perfect pair
          </div>
          <button className="bg-black py-2 px-6 rounded-full text-white text-sm md:text-base hover:bg-gray-800 transition">
            Find your store
          </button>
        </div>
      </div>
    </>
  );
};

export default Mainhero3;
