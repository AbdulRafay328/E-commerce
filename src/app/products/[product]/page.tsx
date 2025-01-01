"use client";
import React from "react";
import { useParams } from "next/navigation";
import cardData from "@/data/cardData";
import Image from "next/image";

const ProductDetails = () => {
  const { product } = useParams();
  const productDetails = cardData.find(
    (card) => card.id.toString() === product
  );

  if (!productDetails) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="p-8 flex flex-col sm:flex-row items-center w-full max-w-4xl gap-8 border border-gray-200 rounded-lg mx-auto mt-10">
      {/* Image Section */}
      <div className="flex justify-center sm:w-1/2">
        <Image
          src={productDetails.img}
          alt={productDetails.name}
          width={500}
          height={500}
        />
      </div>

      {/* Details Section */}
      <div className="w-full sm:w-1/2 max-w-md">
        <div className="text-2xl sm:text-3xl font-bold">
          {productDetails.name}
        </div>
        <div className="text-sm sm:text-base text-gray-600 mt-3">
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."}
        </div>
        <div className="mt-5 text-xl sm:text-2xl font-semibold">
          $ {productDetails.rate}
        </div>

        <button className="bg-black text-white w-60 h-10 rounded-full mt-5">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
