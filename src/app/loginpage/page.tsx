import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full sm:w-[40%] mt-10 mx-auto px-4">
        <div className="mb-4">
          <Image
            src="/images/sign.png"
            alt="Description of image"
            width={60}
            height={30}
          />
        </div>
        <div className="text-2xl font-semibold text-center">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </div>

        <div className="flex justify-center items-center space-y-4 mt-10 flex-col w-full sm:w-[80%]">
          <input
            className="w-full sm:w-96 border-2 border-gray-300 p-2"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="w-full sm:w-96 border-2 border-gray-300 p-2"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-center gap-4 sm:gap-[4.5rem] mt-2 items-center w-full sm:w-[80%]">
          <div className="flex gap-1 justify-center items-center">
            <input type="checkbox" />
            <span>Keep signed in</span>
          </div>
          <div className="text-gray-600 text-sm sm:text-base">Forgotten your password?</div>
        </div>

        <div className="text-center mt-10 text-sm sm:text-base text-gray-600">
          <div>By logging in, you agree to Nike&apos;s privacy policy</div>
          <div>and terms of use</div>
        </div>

        <button className="bg-black p-3 w-full sm:w-96 text-white mt-10">Sign in</button>

        <div className="mt-10 text-center">
          Not a member? <span className="text-blue-500 cursor-pointer">Join Us</span>
        </div>
      </div>
    </>
  );
};

export default Login;
