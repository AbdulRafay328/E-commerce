import React from "react";
import Image from "next/image";
import Card from "@/components/card";

const Checkout = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center mt-10 px-4 lg:px-60">
        {/* Left Column */}
        <div className="w-full md:w-3/5 px-4 lg:px-16">
          <div>
            <div className="text-lg font-medium">
              How would you like to get your order?
            </div>
            <div className="text-gray-400 text-justify text-sm md:text-base">
              Customs regulation for India require a copy of the recipient&apos;s
              KYC. The address on the KYC needs to match the shipping address.
              Our courier will contact you via SMS/email to obtain a copy of
              your KYC. The KYC will be stored securely and used solely for the
              purpose of clearing customs including sharing it with customs
              officials for all orders and returns. If your KYC does not match
              your shipping address, please click the link for more information.
              Learn More
            </div>
            <div className="flex items-center border-2 border-black w-full gap-3 mt-3 p-3 h-12 rounded">
              <div>
                <Image
                  src="/images/delivery box.png"
                  alt="Description of image"
                  width={20}
                  height={10}
                />
              </div>
              <div>Deliver it</div>
            </div>
          </div>
          <div className="mt-5">
            <div className="text-lg font-medium">Enter your Name and Address:</div>
            <input
              type="text"
              className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
              placeholder="Address Line 1"
            />
            <input
              type="text"
              className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
              placeholder="Address Line 2"
            />
            <input
              type="text"
              className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
              placeholder="Address Line 3"
            />
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
              <option>Pakistan</option>
              <option>India</option>
              <option>Germany</option>
              <option>Australia</option>
              <option>USA</option>
            </select>
          </div>
          <div className="flex gap-3 mt-5 items-center">
            <input type="checkbox" />
            <div>Save this Address to my profile</div>
          </div>
          <div className="flex gap-3 mt-5 items-center">
            <input type="checkbox" />
            <span>Save this Address to my profile</span>
          </div>
          <div className="mt-5">
            <div className="text-lg font-medium">
              What&apos;s your contact information?
            </div>
            <input
              type="text"
              className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
              placeholder="Phone Number"
            />
          </div>
          <div className="mt-5">
            <div className="text-lg font-medium">What&apos;s your PAN?</div>
            <input
              type="text"
              className="w-full border-2 mt-5 border-black p-3 rounded text-sm"
              placeholder="PAN"
            />
            <div className="text-gray-400 mt-1 text-sm">
              Enter your PAN to enable payment with UPI, Net Banking or local
              card methods
            </div>
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <div>Save PAN details to NIKE profile</div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" />
                <div>
                  I have read and consent to eShopWorld processing my
                  information in accordance with the Privacy Statement and
                  Cookie Policy. eShopWorld is a trusted Nike partner.
                </div>
              </div>
            </div>
            <button className="bg-black p-3 w-full mt-5 rounded-full text-white text-sm">
              Continue
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/5 mt-10 md:mt-0">
          <div>
            <div className="text-xl font-medium">Order Summary</div>
            <div className="flex justify-between items-center mt-3 text-gray-400 text-sm md:text-base">
              <div>Subtotal</div>
              <div>13000</div>
            </div>
            <div className="flex justify-between items-center mt-3 text-gray-400 text-sm md:text-base">
              <div>Delivery/Shipping</div>
              <div>Free</div>
            </div>
            <div className="h-[1px] w-full mt-3 bg-gray-400"></div>
            <div className="flex justify-between mt-3 items-center font-medium">
              <div>Total</div>
              <div>20000</div>
            </div>
            <div className="h-[1px] w-full mt-3 bg-gray-400"></div>
            <div className="text-xs mt-3">
              (The total reflects the price of your order, including all duties
              and taxes)
            </div>
          </div>

          <div className="mt-7">
            <div className="text-lg font-medium">
              Arrives Mon, 27 Mar - Wed, 12 Apr
            </div>
            <div className="flex flex-col justify-center mt-5 items-center">
              <Card
                img="/images/short1.png"
                rate={200}
                des="Men's soft shoes"
                name="Nike Air Max"
                id={8}
              />
              <Card
                img="/images/skirt.png"
                rate={200}
                des="Men's soft shoes"
                name="Nike Air Max"
                id={8}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
