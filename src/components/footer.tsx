import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className="bg-black p-8 md:p-14 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column */}
          <div>
            <h1 className="text-lg font-medium text-white">FIND A STORE</h1>
            <ul className="mt-3 space-y-2 text-white">
              <li>Become a Member</li>
              <li>Sign Up For Email</li>
              <li>Send Us Feedback</li>
              <li>Students Discount</li>
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <h1 className="text-lg font-medium text-white">GET HELP</h1>
            <ul className="mt-3 space-y-2 text-white">
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact us on Nike.com Inquiries</li>
              <li>Contact us on all other Inquiries</li>
            </ul>
          </div>

          {/* Third Column */}
          <div>
            <h1 className="text-lg font-medium text-white">ABOUT NIKE</h1>
            <ul className="mt-3 space-y-2 text-white">
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 justify-center items-start mt-8">
            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={30}
              height={50}
            />
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={30}
              height={50}
            />
            <Image
              src="/images/youtube.png"
              alt="YouTube"
              width={30}
              height={50}
            />
            <Image
              src="/images/insta.png"
              alt="Instagram"
              width={30}
              height={50}
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14 text-white">
          <div className="text-center md:text-left text-sm md:text-base">
            2023 Nike, Inc. All Rights Reserved
          </div>
          <div className="flex justify-center md:justify-start mt-4 md:mt-0">
            <ul className="flex gap-5 text-xs md:text-sm">
              <li>Guides</li>
              <li>Terms of Sale</li>
              <li>Terms of Use</li>
              <li>Nike Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
