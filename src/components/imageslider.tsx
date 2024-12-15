'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa6';

const AirMaxSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); 

  const slides = [
      {
        image: '/images/cardshoe.png',
        title: 'Nike Air Max Pulse',
        price: '13900',
        category: "Women's Shoes",
      },
      {
        image: '/images/boot1.png',
        title: 'Nike Air Max 97',
        price: '14900',
        category: "Men's Shoes",
      },
      {
        image: '/images/skirt.png',
        title: 'Nike Air Max 97',
        price: '14900',
        category: "Men's Shoes",
      },
      {
        image: '/images/boot3.png',
        title: 'Nike Air Max 270',
        price: '15900',
        category: "Kids' Shoes",
      },
      {
        image: '/images/boot4.png',
        title: 'Nike Air Max Infinity',
        price: '13900',
        category: "Women's Shoes",
      },
      {
        image: '/images/boot1.png',
        title: 'Nike Air Max Supreme',
        price: '14900',
        category: "Men's Shoes",
      },
      {
        image: '/images/boot3.png',
        title: 'Nike Air Max Joyride',
        price: '15900',
        category: "Kids' Shoes",
      },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { 
        setVisibleSlides(1); // Show only one slide on mobile
      } else {
        setVisibleSlides(3); 
      }
    };

    handleResize(); // Initial check on load
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className=" mt-16 px-4 md:px-8">
      {/* Header */}
      <div className="flex items-center justify-between py-2">
        <div className="text-lg font-medium text-black">Best for Air Max</div>
        <div className="flex items-center gap-3">
          <div className="text-black">Shop</div>
          <div className="flex items-center gap-2">
            <button
              className="bg-gray-400 rounded-full px-3 py-2 hover:bg-gray-500"
              onClick={handlePrev}
            >
              <FaLessThan />
            </button>
            <button
              className="bg-gray-400 px-3 py-2 rounded-full hover:bg-gray-500"
              onClick={handleNext}
            >
              <FaGreaterThan />
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
            width: '100vw', 
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <div className=" text-black p-4 w-[74%] md:w-[100%] flex flex-col items-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={350}
                  height={150}
                  className="object-contain mb-4"
                />
                <div className="p-2">
                  <div className="flex justify-between text-sm">
                    <div>{slide.title}</div>
                    <div>{slide.price}</div>
                  </div>
                  <div className="text-xs text-black">{slide.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Configuration (Optional) */}
      <style jsx>{`
        @media (max-width: 768px) {
          :global(.relative > div > div) {
            width: 100% !important;
          }
          :global(.relative > div > div > div) {
            width: 74% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AirMaxSlider;