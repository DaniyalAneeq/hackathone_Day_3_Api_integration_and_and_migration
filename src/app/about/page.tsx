import Image from "next/image";
import oldchair from "../../../public/oldChair.jpeg";
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CreditCard } from "lucide-react";
import { LuSprout } from "react-icons/lu";
import sofa3 from "../../../public/Sofa3.jpeg";
import parent from "../../../public/Parent.png";
import parent1 from "../../../public/Parent1.png";

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 mb-10 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="left-side w-full lg:w-[672px] h-auto lg:h-[478px] bg-[#007580] flex flex-col justify-between p-6 lg:px-12 lg:py-12">
          <div className="flex flex-col gap-2">
            <h1 className="font-inter font-bold text-2xl lg:text-[32px] leading-tight lg:leading-[38.73px] text-[#FFFFFF]">
              About Us - Comforty
            </h1>
            <p className="font-inter font-normal text-base lg:text-lg leading-normal lg:leading-[21.78px] text-[#FFFFFF]">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <div className="w-[179px] h-14 px-8 py-4 bg-[#0a96a3] hover:bg-[#388e96]">
            <Link
              href="/product"
              className="font-inter font-normal text-base leading-6 text-[#FFFFFF]"
            >
              View collection
            </Link>
          </div>
        </div>
        <Image
          src={oldchair}
          alt="oldchair"
          className="w-full lg:w-[672px] h-auto lg:h-[478px] object-cover"
          />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center mt-20 lg:mt-72 gap-8 lg:gap-16">
        <h1 className="font-inter font-semibold text-2xl lg:text-[32px] leading-tight lg:leading-[35.5px] text-[#272343] text-center px-4">
          What Makes Our Brand Different
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          <div className="w-full p-8 lg:p-12 bg-[#F9F9F9] flex flex-col gap-2 hover:scale-105 transition-transform">
            <TbTruckDelivery className="text-[#007580] text-2xl" />
            <h1 className="text-xl font-inter font-normal leading-7 text-[#007580]">
              Next day as standard
            </h1>
            <p className="font-inter font-normal text-base leading-6 text-[#007580]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className="w-full p-8 lg:p-12 bg-[#F9F9F9] flex flex-col gap-2 hover:scale-105 transition-transform">
            <IoIosCheckmarkCircleOutline className="text-[#007580] text-2xl" />
            <h1 className="text-xl font-inter font-normal leading-7 text-[#007580]">
              Made by true artisans
            </h1>
            <p className="font-inter font-normal text-base leading-6 text-[#007580]">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>

          <div className="w-full p-8 lg:p-12 bg-[#F9F9F9] flex flex-col gap-2 hover:scale-105 transition-transform">
            <CreditCard className="text-[#007580] text-2xl" />
            <h1 className="text-xl font-inter font-normal leading-7 text-[#007580]">
              Unbeatable prices
            </h1>
            <p className="font-inter font-normal text-base leading-6 text-[#007580]">
              For our materials and quality you won&apos;t find better prices
              anywhere
            </p>
          </div>

          <div className="w-full p-8 lg:p-12 bg-[#F9F9F9] flex flex-col gap-2 hover:scale-105 transition-transform">
            <LuSprout className="text-[#007580] text-2xl" />
            <h1 className="text-xl font-inter font-normal leading-7 text-[#007580]">
              Recycled packaging
            </h1>
            <p className="font-inter font-normal text-base leading-6 text-[#007580]">
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>

      <div className="our-product max-w-7xl mx-auto flex flex-col gap-6 mt-20 px-4">
        <h1 className="font-inter font-semibold text-2xl lg:text-[32px] leading-tight text-[#272343]">
          Our Popular Products
        </h1>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 overflow-hidden">
              <Image
                src={sofa3}
                alt="sofa3"
                className="max-w-[630px] max-h-[375px] object-cover"
              />
              <p className="font-inter text-xl font-normal leading-7 text-[#2A254B]">
                The Poplar suede sofa
              </p>
              <p className="font-inter text-lg font-normal leading-7 text-[#2A254B]">
                $99.00
              </p>
            </div>

            <div className="flex flex-col gap-4 pl-8">
              <Image
                src={parent}
                alt="parent"
                className="max-w-[305px] max-h-[375px] object-cover"
              />
              <p className="font-inter text-xl font-normal leading-7 text-[#2A254B]">
                The Dandy chair
              </p>
              <p className="font-inter text-lg font-normal leading-7 text-[#2A254B]">
                $99.00
              </p>
            </div>

            <div className="flex flex-col gap-4 ">
              <Image
                src={parent1}
                alt="parent1"
                className="max-w-[305px] max-h-[375px] object-cover"
              />
              <p className="font-inter text-xl font-normal leading-7 text-[#2A254B]">
                The Dandy chair
              </p>
              <p className="font-inter text-lg font-normal leading-7 text-[#2A254B]">
                $99.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
