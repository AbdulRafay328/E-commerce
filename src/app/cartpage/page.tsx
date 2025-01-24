/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { addItem, removeItem } from "@/redux/createslice";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items); // Get cart items from Redux store

  // Load cart data from localStorage into Redux store
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      parsedCart.forEach((item:any) => dispatch(addItem(item)));
    }
  }, [dispatch]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row justify-center mt-10 space-y-8 lg:space-y-0">
      <div className="w-full lg:w-2/3">
        <div className="bg-[#F5F5F5] p-4 sm:p-6 rounded-md">
          <div className="text-lg font-medium">Free Delivery</div>
          <div className="text-sm sm:text-base">
            Applies to orders of Rs 14,000.00 or more.{" "}
            <b>
              <u>View Details</u>
            </b>
          </div>
        </div>

        <div className="text-2xl font-semibold mt-5">Bag</div>

        <div className="mt-5 space-y-5">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center w-full border-b border-gray-300 pb-5"
              >
                <div className="flex items-center sm:items-start flex-col sm:flex-row w-full gap-4">
                  <div className="w-1/3 sm:w-1/6 flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={150}
                      height={100}
                      className="w-full h-auto rounded-md"
                    />
                  </div>

                  <div className="flex-1 space-y-2 sm:space-y-4">
                    <div className="text-sm sm:text-lg font-medium">
                      {item.name}
                    </div>
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Quantity: {item.quantity}
                    </div>
                    <div className="flex gap-5 mt-3 items-center">
                      <CiHeart size={20} className="cursor-pointer" />
                      <RiDeleteBin6Line
                        size={20}
                        className="cursor-pointer"
                        onClick={() => {
                          dispatch(removeItem(item.id));

                          const updatedCart = cartItems.filter(
                            (cartItem) => cartItem.id !== item.id
                          );
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(updatedCart)
                          );
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/6 text-center text-sm sm:text-base font-semibold text-black py-2 sm:py-0">
                    Rs {item.price * item.quantity}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500">Your cart is empty!</div>
          )}
        </div>
      </div>

      <div className="w-full lg:w-1/3 p-4 sm:p-6">
        <div className="text-2xl font-medium">Summary</div>
        <div className="space-y-2 mt-8 text-sm sm:text-base">
          <div className="flex justify-between items-center">
            <div>Subtotal</div>
            <div>Rs {totalPrice}</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Estimated Delivery and Handling</div>
            <div>Free</div>
          </div>
        </div>

        <div className="border-t border-b border-gray-400 mt-5 flex justify-between items-center py-5 text-sm sm:text-base">
          <div>Total</div>
          <div>Rs {totalPrice}</div>
        </div>

        <div className="flex justify-center items-center mt-5">
          <Link href="/checkoutpage">
            <button className="bg-black py-3 w-full sm:w-96 rounded-full text-white text-sm sm:text-base">
              Member Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
