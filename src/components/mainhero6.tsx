import React from 'react';
import Image from 'next/image';

const Mainhero6 = () => {
  return (
    <>
      <div className="Mainhero6 px-4 mt-16">
        <div className="text-lg font-medium py-2">Essentials</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Image
            className="w-full h-auto object-cover"
            src="/images/mens.png"
            alt="mens clothes"
            width={390}
            height={100}
          />
          <Image
            className="w-full h-auto object-cover"
            src="/images/womens.png"
            alt="womens clothes"
            width={390}
            height={100}
          />
          <Image
            className="w-full h-auto object-cover"
            src="/images/child.png"
            alt="child clothes"
            width={390}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Mainhero6;
