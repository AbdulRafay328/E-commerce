"use client"

import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import  {clearCart}  from "@/redux/createslice";
import { useRouter } from "next/navigation";
import Card from "@/components/card";

const Checkout = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add some items!");
      return;
    }
    alert("Order placed successfully!");
    dispatch(clearCart()); // Clear cart after placing order
    router.push("/"); // Redirect to homepage or a success page
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-center mt-10 px-4 lg:px-60">
      {/* Left Column */}
      <div className="w-full md:w-3/5 px-4 lg:px-16">
        <div>
          <div className="text-lg font-medium">How would you like to get your order?</div>
          <div className="text-gray-400 text-justify text-sm md:text-base">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC.
          </div>
          <div className="flex items-center border-2 border-black w-full gap-3 mt-3 p-3 h-12 rounded">
            <Image src="/images/delivery box.png" alt="Delivery Box" width={20} height={10} />
            <span>Deliver it</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-lg font-medium">Enter your Name and Address:</div>
          {["First Name", "Last Name", "Address Line 1", "Address Line 2", "Address Line 3"].map((placeholder, index) => (
            <input
              key={index}
              type="text"
              className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
              placeholder={placeholder}
            />
          ))}
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-5">
            <input
              type="text"
              className="w-full md:w-[47%] border-2 border-black p-3 rounded text-sm"
              placeholder="Postal Code"
            />
            <input
              type="text"
              className="w-full md:w-[47%] border-2 border-black p-3 rounded text-sm"
              placeholder="Locality"
            />
          </div>
          <select className="w-full border-2 mt-5 border-black p-3 rounded text-sm">
            {["Pakistan", "India", "Germany", "Australia", "USA"].map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5">
          <div className="text-lg font-medium">What&apos;s your contact information?</div>
          <input
            type="email"
            className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
            placeholder="Email"
          />
          <input
            type="tel"
            className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
            placeholder="Phone Number"
          />
        </div>

        <div className="mt-5">
          <button
            className="bg-black text-white p-3 w-full rounded-full text-sm"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-2/5 mt-10 md:mt-0">
        <div>
          <div className="text-xl font-medium">Order Summary</div>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mt-3 text-gray-400 text-sm md:text-base"
                >
                  <div>{item.name}</div>
                  <div>${item.price} x {item.quantity}</div>
                </div>
              ))}
              <div className="h-[1px] w-full mt-3 bg-gray-400"></div>
              <div className="flex justify-between mt-3 items-center font-medium">
                <div>Total</div>
                <div>
                  ${cartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)}
                </div>
              </div>
            </>
          ) : (
            <div className="mt-3 text-sm text-gray-400">Your cart is empty!</div>
          )}
          <div className="h-[1px] w-full mt-3 bg-gray-400"></div>
        </div>

        <div className="mt-7">
          <div className="text-lg font-medium">Arrives Mon, 27 Mar - Wed, 12 Apr</div>
          <div className="flex flex-col justify-center mt-5 items-center">
            {cartItems.map((item: any) => (
              <Card
                key={item.id}
                img={item.img}
                price={item.price}
                des={item.des}
                name={item.name}
                id={item.id}
                status=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
