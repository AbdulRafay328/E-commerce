import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="text-3xl font-semibold">GET HELP</div>
        <div className="w-full sm:w-96 border-2 rounded-lg border-gray-300 p-2 mt-5 flex items-center">
          <input
            className="w-full sm:w-96 p-2"
            type="text"
            placeholder="What can we help you with?"
          />
          <FaSearch />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full px-5 sm:px-16 mt-10">
        <div className="w-full sm:w-4/5 px-5 text-start">
          <div className="text-2xl font-medium">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </div>
          <div className="mt-10">
            We want to make buying your favourite nike shoes and gear online fast and easy and we accept the following payment options:
          </div>
          <div className="px-8 mt-5 space-y-2">
            <div>Visa, MasterCard, DinnersClub, AmericanExpress, VisaElectron, Mastreo</div>
            <div>
              If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.
            </div>
            <div>Apple pay</div>
          </div>
          <div className="mt-5">
            <b>
              <u>Nike Members</u>
            </b>{" "}
            can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.
          </div>

          <div className="flex items-center gap-3 mt-5">
            <button className="bg-black py-1 px-5 rounded-full text-white">
              JOIN US
            </button>
            <button className="bg-black py-1 px-5 rounded-full text-white">
              SHOP NIKE
            </button>
          </div>

          <div className="text-2xl font-medium mt-7">FAQ&apos;s</div>
          <div>
            <div className="text-xl font-medium mt-5">
              Does my card need international purchases enabled?
            </div>
            <div>
              Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
            </div>
            <div className="text-xl font-medium mt-5">Can I pay for my order with multiple methods? </div>
            <div>No, payment for Nike orders can&apos;t be split between multiple payment methods.</div>
            <div className="text-xl font-medium mt-5">
              What payment method is accepted for SNKRS orders?
            </div>
            <div>
              You can use any accepted credit card to pay for your SNKRS order.
            </div>
            <div className="text-xl font-medium mt-5">
              Why don&apos;t I see Apple Pay as an option?
            </div>
            <div>
              To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.
            </div>
          </div>

          <div className="mt-7">
            <div>Was this answer helpful?</div>
            <div className="flex items-center">
              <div>
                <Image src="/images/like.png" alt="Description of image" width={30} height={30} />
              </div>
              <div>
                <Image src="/images/dislike.png" alt="Description of image" width={30} height={30} />
              </div>
            </div>
            <div className="text-lg text-gray-500 font-medium">RELATED</div>
            <div className="px-8 leading-8">
              <div>
                <b>
                  <u>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</u>
                </b>
              </div>
              <div>
                <b>
                  <u>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</u>
                </b>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[2px] h-auto sm:h-[60rem] bg-gray-400 my-10 sm:my-0 sm:mx-10"></div>

        <div className="w-full sm:w-1/5 px-5 text-center">
          <div className="text-center text-2xl font-medium">CONTACT US</div>
          <div className="mt-8">
            <div className="flex justify-center items-center">
              <Image src="/images/mobile.png" alt="Description of image" width={50} height={30} />
            </div>
            <div className="text-lg mt-4 font-medium">000 800 919 0566</div>
            <div>
              Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-center items-center">
              <Image src="/images/message.png" alt="Description of image" width={50} height={30} />
            </div>
            <div className="text-lg mt-4 font-medium">24 Hours a day</div>
            <div>7 days a week</div>
          </div>
          <div className="mt-8">
            <div className="flex justify-center items-center">
              <Image src="/images/envelop.png" alt="Description of image" width={50} height={30} />
            </div>
            <div className="text-lg mt-4 font-medium">We&apos;ll reply within</div>
            <div>5 business days</div>
          </div>
          <div className="mt-8">
            <div className="flex justify-center items-center">
              <Image src="/images/locator.png" alt="Description of image" width={50} height={30} />
            </div>
            <div className="text-lg mt-4 font-medium">STORE LOCATOR</div>
            <div>Find nike retail stores near you</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
