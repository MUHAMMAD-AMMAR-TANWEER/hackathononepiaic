import Image from "next/image";
import React from "react";
import promote1 from "/public/promote1.webp";
import promote2 from "/public/promote2.webp";

const Promotions = () => {
  return (
    <div className="px-6">
      <h1 className="flex text-blue-500 mt-20 font-bold text-base justify-center">
        PROMOTIONS
      </h1>
      <h1 className="flex  mt-1 font-bold text-3xl justify-center">
        OUR PROMOTIONS EVENTS
      </h1>
      <div className="flex flex-1 mt-8">
        {/* Left */}
        <div className="">
          <div className="flex items-center justify-between bg-[#d6d6d8] px-8  text-[#212121] tracking-wider flex-1  ">
            <div className="flex flex-col flex-1 items-start justify-start ">
              <h3 className="font-bold text-xl sm:text-2xl leading-9 text-[#212121]">
                GET UP TO 60%
              </h3>
              <h1 className="font-medium text-sm">FOR THE SUMMER SEASON</h1>
            </div>
            <div className="flex-1">
              <Image
                src={promote1}
                alt="promote1"
                className="h-48 aspect-square"
              />
            </div>
          </div>
          <div className="flex mt-4 flex-col justify-center items-center gap-0 text-[#fff] bg-[#212121] flex-1 py-6 overflow-hidden">
            <h3 className="font-[800] text-4xl leading-[45px]">GET 30% OFF</h3>
            <p className="font-normal text-lg leading-6 tracking-wide mb-1 mt-4">
              USE PROMO CODE
            </p>
            <button className="font-bold text-lg leading-5 tracking-[0.25em] bg-[#474747] px-10 py-2 rounded-xl">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="ml-6 flex gap-4 items-center justify-center flex-1 flex-col sm:flex-row">
          <div className="pt-6 bg-[#efe1c7] flex flex-col justify-between flex-1 w-full sm:w-auto">
            <div>
              <div className="ml-4">
                <p className=" font-normal text-base leading-6 -tracking-tight">
                  Flex SweetShirt
                </p>
                <div className="flex">
                  <span className="line-through">$100.00</span>
                  <span className="font-semibold text-lg leading-6 ml-[10px]">
                    {" "}
                    $75.00
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[240px] h-[310px]">
              <Image
                src={promote2}
                alt="promote2"
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="bg-[#919181] flex flex-col justify-between flex-1 w-full sm:w-auto">
            <div className="pt-6 bg-[#efe1c7] flex flex-col justify-between flex-1 w-full sm:w-auto">
              <div>
                <div className="ml-4">
                  <p className=" font-normal text-base leading-6 -tracking-tight">
                    Flex SweetShirt
                  </p>
                  <div className="flex">
                    <span className="line-through">$100.00</span>
                    <span className="font-semibold text-lg leading-6 ml-[10px]">
                      {" "}
                      $75.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[240px] h-[310px]">
                <Image
                  src={promote2}
                  alt="promote2"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
