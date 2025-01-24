"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  // State to track if the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="max-h-[96%]">
        {/* Top bar */}
        <div className="bg-[#F5F5F5] h-[36px] px-4 md:px-10 flex justify-between items-center text-sm md:text-base">
          {/* Logo Section */}
          <div>
            <Image src="/images/athle.png" alt="logo" width={30} height={20} />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex">
            <ul className="flex gap-2 md:gap-5">
              <Link href="./products">
                <li className="hover:underline cursor-pointer">Products</li>
              </Link>
              <Link href="./signuppage">
                <li className="hover:underline cursor-pointer">Join us</li>
              </Link>
              <Link href="./loginpage">
                <li className="hover:underline cursor-pointer">Sign in</li>
              </Link>
              <Link href="./contactpage">
                <li className="hover:underline cursor-pointer">Contact us</li>
              </Link>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-600 focus:outline-none"
              onClick={toggleMenu} // Toggling the state instead of direct DOM manipulation
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            id="mobile-menu"
            className={`absolute top-[36px] right-0 bg-[#F5F5F5] w-full p-4 ${
              isMenuOpen ? "flex" : "hidden"
            } flex-col text-sm`}
          >
            <ul className="flex flex-col gap-2">
              <Link href="./products">
                <li
                  className="hover:underline cursor-pointer"
                  onClick={toggleMenu} // Close menu after click
                >
                  Products
                </li>
              </Link>
              <Link href="./signuppage">
                <li
                  className="hover:underline cursor-pointer"
                  onClick={toggleMenu} // Close menu after click
                >
                  Join us
                </li>
              </Link>
              <Link href="./loginpage">
                <li
                  className="hover:underline cursor-pointer"
                  onClick={toggleMenu} // Close menu after click
                >
                  Sign in
                </li>
              </Link>
              <Link href="./contactpage">
                <li
                  className="hover:underline cursor-pointer"
                  onClick={toggleMenu} // Close menu after click
                >
                  Contact us
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Main navbar */}
        <div className="py-3 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10">
          <div className="flex justify-center md:justify-start">
            <Link href="./">
              <Image src="/images/sign.png" alt="logo" width={80} height={50} />
            </Link>
          </div>

          {/* Links */}
          <div className="mt-3 md:mt-0 md:ml-40 flex flex-col md:flex-row items-center gap-2 md:gap-5 text-sm md:text-lg font-medium">
            <ul className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-5">
              <li>New and featured</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Sale</li>
              <li>Snkrs</li>
            </ul>
          </div>

          {/* Icons and search bar */}
          <div className="mt-3 md:mt-0 flex items-center gap-2 md:gap-3">
            <div className="flex justify-center items-center flex-row-reverse border pl-4 pr-4 py-2 gap-2 rounded-full max-w-full">
              <input
                type="text"
                placeholder="Search"
                className="text-xs md:text-base w-20 md:w-48 focus:outline-none"
              />
              <FaSearch />
            </div>
            <div>
              <CiHeart size={24} />
            </div>
            <div>
              <Link href="../cartpage">
                <IoBagOutline size={24} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
