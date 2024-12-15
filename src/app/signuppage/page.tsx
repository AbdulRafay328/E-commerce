import React from "react";
import Image from "next/image";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full sm:w-[60%] lg:w-[40%] mt-10 px-4 sm:px-12 mx-auto">
        <div className="mb-4">
          <Image
            src="/images/sign.png"
            alt="Description of image"
            width={60}
            height={30}
          />
        </div>
        <div className="text-2xl font-semibold text-center">BECOME A NIKE MEMBER</div>

        <div className="text-center text-gray-600 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat
          saepe eligendi modi tenetur ratione voluptas aliquid nesciunt volupets
          raptica
        </div>

        <div className="flex justify-center items-center space-y-4 mt-10 flex-col w-full sm:w-[80%]">
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            type="password"
            placeholder="Password"
          />
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            type="date"
            placeholder="Date of Birth"
          />
          <div className="text-gray-600 text-center">
            Get a Nike Member reward every year on your birthday
          </div>

          <select className="w-full border-2 border-gray-300 p-2 rounded-md">
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
          </select>

          <div className="flex gap-4 w-full justify-center">
            <input
              className="w-1/2 border-2 border-gray-300 p-2 rounded-md"
              type="text"
              placeholder="Male"
            />
            <input
              className="w-1/2 border-2 border-gray-300 p-2 rounded-md"
              type="text"
              placeholder="Female"
            />
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-2 items-center w-full sm:w-[80%]">
          <div>
            <input type="checkbox" />
            <span className="text-gray-600 ml-2">Keep me signed in</span>
          </div>
          <div className="text-gray-600 text-sm sm:text-base">Forgotten your password?</div>
        </div>

        <div className="flex items-start gap-3 mt-5 w-full sm:w-[80%]">
          <input type="checkbox" />
          <span className="text-gray-600">
            Sign up for email to get updates from Nike
          </span>
        </div>

        <div className="text-center mt-5 text-sm sm:text-base text-gray-600">
          <div>By logging in, you agree to Nike&apos;s privacy policy</div>
          <div>and terms of use</div>
        </div>

        <button className="bg-black p-3 w-full sm:w-[80%] text-white mt-5 rounded-md">
          Join Us
        </button>

        <div className="mt-5 text-center">
          Already a member? <span className="text-blue-500 cursor-pointer">Sign In</span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
