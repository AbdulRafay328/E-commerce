import React from 'react';
import Image from 'next/image';
import { PiTrolleySuitcaseDuotone } from 'react-icons/pi';

const Details = () => {
  return (
    <div className="p-8 flex flex-wrap justify-center items-center gap-8 mt-10">
      {/* Image Section */}
      <div className="flex justify-center w-full sm:w-1/2">
        <Image
          src="/images/boot4.png"
          alt="product"
          width={500}
          height={100}
          className="w-full max-w-md h-auto"
        />
      </div>

      {/* Details Section */}
      <div className="w-full sm:w-1/2 max-w-md">
        <div className="text-2xl sm:text-3xl font-bold">Nike Air Force 1</div>
        <div className="text-sm sm:text-base text-gray-600 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur officia
          repellendus aliquid culpa delectus quidem corrupti fugit dolorem, tempora minima maxime? Ipsum!
        </div>
        <div className="mt-5 text-xl sm:text-2xl font-semibold">₹ 15,000</div>
        <button className="bg-black py-2 px-5 rounded-full flex justify-center items-center gap-3 text-white mt-5">
          <div>Add to Cart</div>
          <PiTrolleySuitcaseDuotone size={20} />
        </button>
      </div>
    </div>
  );
};

export default Details;
