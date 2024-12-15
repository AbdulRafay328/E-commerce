import React from "react";
import Image from "next/image";
import Card from "@/components/card";
import { FaChevronDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const Productpage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-4 md:px-8 gap-4">
        <div className="text-lg md:text-xl font-medium">New (500)</div>
        <div className="flex flex-wrap justify-between items-center gap-4 md:gap-10">
          <div className="flex justify-center items-center gap-3">
            <div className="text-sm md:text-base">Hide filters</div>
            <Image
              src="/images/filters.png"
              alt="Filters Icon"
              width={20}
              height={10}
            />
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="text-sm md:text-base">Sort by</div>
            <FaChevronDown />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row gap-10 px-4 md:px-8 mt-5 w-full">
        {/* Sidebar Section */}
        <div className="lg:w-[20%] h-[80vw] sm:h-[40vw] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent scrollbar-rounded">
          <div className="leading-8 text-base md:text-lg font-medium">
            <div>Shoes</div>
            <div>Sport Bras</div>
            <div>Tops and T-shirts</div>
            <div>Hoodies</div>
            <div>Jackets</div>
            <div>Trousers</div>
            <div>Shorts</div>
            <div>Tracksuits</div>
            <div>Rompers</div>
            <div>Skirts</div>
            <div>Socks</div>
            <div>Accessories</div>
          </div>

          <div className="bg-gray-400 h-0.5 mt-4 w-[90%] mx-auto"></div>

          {/* Filter Section */}
          {["Gender", "Brand", "Price"].map((filter, index) => (
            <div key={index} className="mt-4">
              <div className="text-lg flex justify-between pr-4 items-center font-medium">
                <div>{filter}</div>
                <IoIosArrowUp />
              </div>
              <div className="mt-2 space-y-2">
                <div>
                  <input type="checkbox" />
                  <span className="ml-2">Men</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span className="ml-2">Women</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span className="ml-2">Unisex</span>
                </div>
              </div>
              <div className="bg-gray-400 h-0.5 mt-4 w-[90%] mx-auto"></div>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 w-full">
          <Card
            id={1}
            img="/images/boot1.png"
            rate={1500}
            des="Mens versatile shorts"
            name="Nike Outdoor Play"
          />
          <Card
            id={2}
            img="/images/boot2.png"
            rate={800}
            des="Men Shorts"
            name="Jordan Series"
          />
          <Card
            id={3}
            img="/images/boot3.png"
            rate={1600}
            des="Women Shorts"
            name="Nike1"
          />
          <Card
            id={4}
            img="/images/boot4.png"
            rate={400}
            des="High-quality hoodie"
            name="Nike2"
          />
          <Card
            id={5}
            img="/images/skirt.png"
            rate={400}
            des="Comfortable skirt"
            name="Nike2"
          />
          <Card
            id={6}
            img="/images/west.png"
            rate={1100}
            des="Versatile vest"
            name="Nike3"
          />
          <Card
            id={7}
            img="/images/boot2.png"
            rate={1500}
            des="Classic sneakers"
            name="Nike4"
          />
          <Card
            id={8}
            img="/images/jackets.png"
            rate={1500}
            des="Durable jacket"
            name="Nike4"
          />
        </div>
      </div>
    </>
  );
};

export default Productpage;