import React from 'react';
import Image from 'next/image';

const Mainhero4 = () => {
  return (
    <>
      <div className="Mainhero4 px-4 md:px-8 lg:px-12 mt-16">
        {/* Heading */}
        <div className="text-lg font-medium mb-8">Gear</div>

        {/* Main Content */}
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Column 1 */}
          <div className="w-full md:w-[48%] space-y-6">
            <div className="text-right">Shop</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <Image
                  className="w-full h-auto"
                  src="/images/shirt.png"
                  alt="Shirt"
                  width={600}
                  height={200}
                />
                <div className="p-4">
                  <div className="flex justify-between text-sm">
                    <div>Nike Air Max Pulse</div>
                    <div>13900</div>
                  </div>
                  <div className="text-gray-600 text-xs">Women&apos;s Shoes</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <Image
                  className="w-full h-auto"
                  src="/images/half trouser.png"
                  alt="Half Trouser"
                  width={600}
                  height={200}
                />
                <div className="p-4">
                  <div className="flex justify-between text-sm">
                    <div>Nike Air Max Pulse</div>
                    <div>13900</div>
                  </div>
                  <div className="text-gray-600 text-xs">Women&apos;s Shoes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-[48%] space-y-6">
            <div className="text-right">Shop</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 3 */}
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <Image
                  className="w-full h-auto"
                  src="/images/women.png"
                  alt="Women"
                  width={600}
                  height={200}
                />
                <div className="p-4">
                  <div className="flex justify-between text-sm">
                    <div>Nike Air Max Pulse</div>
                    <div>13900</div>
                  </div>
                  <div className="text-gray-600 text-xs">Women&apos;s Shoes</div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                <Image
                  className="w-full h-auto"
                  src="/images/trousar.png"
                  alt="Trouser"
                  width={600}
                  height={200}
                />
                <div className="p-4">
                  <div className="flex justify-between text-sm">
                    <div>Nike Air Max Pulse</div>
                    <div>13900</div>
                  </div>
                  <div className="text-gray-600 text-xs">Women&apos;s Shoes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainhero4;
