"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/createslice";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const ProductDetails = () => {
  const { product } = useParams();
  const dispatch = useDispatch(); // Redux dispatch
  const [productDetails, setProductDetails] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "product" && _id == $productId][0]{
          _id,
          productName,
          category,
          status,
          price,
          inventory,
          description,
          image
        }`,
        { productId: product }
      );
      setProductDetails(data);
    };

    fetchData();
  }, [product]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const newItem = {
      id: productDetails._id,
      name: productDetails.productName,
      img: urlFor(productDetails.image).url(),
      price: productDetails.price,
      quantity: 1, // Initial quantity
    };

    // Redux dispatch
    dispatch(addItem(newItem));

    // Save to localStorage
    const existingCart = localStorage.getItem("cart");
    const cartItems = existingCart ? JSON.parse(existingCart) : []; // Parse existing cart or use empty array
    cartItems.push(newItem); // Add new item
    localStorage.setItem("cart", JSON.stringify(cartItems)); // Save updated cart to localStorage
  };

  return (
    <div className="p-8 flex flex-col sm:flex-row items-center w-full max-w-4xl gap-8 border border-gray-200 rounded-lg mx-auto mt-10">
      {/* Image Section */}
      <div className="flex justify-center sm:w-1/2">
        <Image
          src={urlFor(productDetails.image).url()}
          alt={productDetails.productName}
          width={500}
          height={500}
        />
      </div>

      {/* Details Section */}
      <div className="w-full sm:w-1/2 max-w-md">
        <div className="text-2xl sm:text-3xl font-bold">
          {productDetails.productName}
        </div>
        <div className="text-sm sm:text-base text-gray-600 mt-3">
          {productDetails.description}
        </div>
        <div className="mt-5 text-xl sm:text-2xl font-semibold">
          $ {productDetails.price}
        </div>

        <button
          onClick={handleAddToCart} // Add to Cart Handler
          className="bg-black text-white w-60 h-10 rounded-full mt-5"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
