import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Params {
  img: string;
  price: number;
  des: string;
  name: string;
  id: number;
  status: string
}

const Card = ({ img, price, des, name, id, status }: Params) => {
  
  return (
    <>
      <Link href={`products/${id}`}>
        <div className="card flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="w-full">
            <Image
              src={img}
              alt="product"
              width={300}
              height={200}
              className="object-cover w-full"
            />
          </div>
          <div className="p-4 text-left w-full">
            <div className="text-red-600 font-bold text-sm md:text-base">{status}</div>
            <div className="font-medium text-lg md:text-xl mt-1">{name}</div>
            <div className="text-gray-500 text-sm md:text-base mt-1">{des}</div>
            <div className="text-gray-500 text-xs md:text-sm mt-1">1 Colour</div>
            <div className="font-bold text-base md:text-lg mt-2">PKR: {price}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
