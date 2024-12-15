import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

const Cart = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row justify-center mt-10 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-2/3">
          {/* Free Delivery Banner */}
          <div className="bg-[#F5F5F5] p-4 sm:p-6 rounded-md">
            <div className="text-lg font-medium">Free Delivery</div>
            <div className="flex justify-between items-center">
              <div className="text-sm sm:text-base">
                Applies to orders of Rs 14 000.00 or more.{" "}
                <b>
                  <u>View Details</u>
                </b>
              </div>
            </div>
          </div>

          {/* Cart Title */}
          <div className="text-2xl font-semibold mt-5">Bag</div>

          {/* Cart Items */}
          <div className="mt-5 space-y-5">
            {/* Cart Item */}
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center w-full border-b border-gray-300 pb-5"
              >
                <div className="flex items-center sm:items-start flex-col sm:flex-row w-full gap-4">
                  {/* Image Section */}
                  <div className="w-1/3 sm:w-1/6 flex-shrink-0">
                    <Image
                      src={`/images/skirt.png`}
                      alt="Product"
                      width={150}
                      height={100}
                      className="w-full h-auto rounded-md"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 space-y-2 sm:space-y-4">
                    <div className="text-sm sm:text-lg font-medium">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Men&apos;s Short-Sleeve Running Top
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Ashen Slate/Cobalt Bliss
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-2">
                      <div>Size: L</div>
                      <div>Quantity: 1</div>
                    </div>
                    <div className="flex gap-5 mt-3 items-center">
                      <CiHeart size={20} className="cursor-pointer" />
                      <RiDeleteBin6Line size={20} className="cursor-pointer" />
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="w-full sm:w-1/6 text-center text-sm sm:text-base font-semibold text-black py-2 sm:py-0">
                    Rs 3,895.00
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Favourite Section */}
          <div className="mt-5">
            <div className="text-2xl font-medium">Favourite</div>
            <div className="text-sm sm:text-base">
              There are no items saved to your favourite
            </div>
          </div>

          {/* Recommended Products */}
          <div className="mt-8">
            <div className="text-lg font-medium">You Might Also Like</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-5">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="card space-y-2">
                  <div>
                    <Image
                      src={`/images/boot${index + 2}.png`}
                      alt="Product"
                      width={200}
                      height={100}
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <div className="text-sm">Nike Air Max</div>
                    <div className="text-gray-400 text-xs">Nike Soft Shoe</div>
                    <div className="text-sm">PKR: 500</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-1/3 p-4 sm:p-6">
          <div className="text-2xl font-medium">Summary</div>
          <div className="space-y-2 mt-8 text-sm sm:text-base">
            <div className="flex justify-between items-center">
              <div>Subtotal</div>
              <div>2800</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Estimated Delivery and Handling</div>
              <div>Free</div>
            </div>
          </div>

          <div className="border-t border-b border-gray-400 mt-5 flex justify-between items-center py-5 text-sm sm:text-base">
            <div>Total</div>
            <div>8000</div>
          </div>

          <div className="flex justify-center items-center mt-5">
            <button className="bg-black py-3 w-full sm:w-96 rounded-full text-white text-sm sm:text-base">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
