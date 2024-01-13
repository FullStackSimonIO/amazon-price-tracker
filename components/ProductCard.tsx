import React from "react";
import { GoCheckCircleFill } from "react-icons/go";

const ProductCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="flex flex-col items-center mt-16">
        <h2 className="font-bold text-3xl md:text-5xl mt-5 tracking-tight text-center">
          Plans & Pricing
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl mt-3">
          You can cancel or upgrade your plan at any time!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 mx-auto max-w-screen-lg mt-12">
        <div>
          <div className="flex flex-col w-full order-first lg:order-none border py-5 px-6 relative rounded-lg transition duration-250 ease-in-out transform hover:scale-105 hover:shadow-lg border-neutral-200 ">
            <div>
              <h3 className="font-semibold text-lg sm:text-xl hover:text-neutral-500 transition duration-300 ease-in-out text-neutral-800">
                Beginner
              </h3>
              <p className="mt-2 text-black">
                <span className="flex items-baseline">
                  <span>€</span>
                  <span className="font-bold text-2xl md:text-4xl">49,99</span>
                  <span className="ml-1 text-neutral-600">/month</span>
                </span>
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Perfect for smaller sellers with less than 100 monthly sales
              </p>
            </div>
            <ul className="grid mt-8 text-left gap-y-4">
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">1000 product searches per month</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">100 items in inventory</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">Discord or email notification</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">free access to Discord server</span>
              </li>
            </ul>
            <div className="flex mt-8">
              <a
                href="#"
                className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-neutral-200 w-full px-5 py-2.5 bg-white border-2 border-black hover:bg-neutral-100 text-black "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-full order-first lg:order-none border py-5 px-6 relative rounded-lg transition duration-250 ease-in-out transform hover:scale-105 hover:shadow-lg  border-blue-700 hover:shadow-blue-200 ">
            <span className="inline-flex absolute px-3 py-1 text-xs -top-3 left-1/2 -translate-x-1/2 font-medium rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white ">
              Most popular
            </span>
            <div>
              <h3 className="font-semibold text-lg sm:text-xl hover:text-neutral-500 transition duration-300 ease-in-out text-neutral-800">
                Advanced
              </h3>
              <p className="mt-2 text-black">
                <span className="flex items-baseline">
                  <span>€</span>
                  <span className="font-bold text-2xl md:text-4xl">99,99€</span>
                  <span className="ml-1 text-neutral-600">/month</span>
                </span>
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Perfect for sellers with more than 100 monthly sales
              </p>
            </div>
            <ul className="grid mt-8 text-left gap-y-4">
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">2500 product searches per month</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">200 items in inventory</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">Discord or email notification</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">free access to Discord server</span>
              </li>
            </ul>
            <div className="flex mt-8">
              <a
                href="#"
                className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-neutral-200 w-full px-5 py-2.5 bg-white border-2 border-black hover:bg-neutral-100 text-black "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-full order-first lg:order-none border py-5 px-6 relative rounded-lg transition duration-250 ease-in-out transform hover:scale-105 hover:shadow-lg border-neutral-200 ">
            <div>
              <h3 className="font-semibold text-lg sm:text-xl hover:text-neutral-500 transition duration-300 ease-in-out text-neutral-800">
                Professional
              </h3>
              <p className="mt-2 text-black">
                <span className="flex items-baseline">
                  <span>€</span>
                  <span className="font-bold text-2xl md:text-4xl">
                    199,99€
                  </span>
                  <span className="ml-1 text-neutral-600">/month</span>
                </span>
              </p>
              <p className="mt-3 text-sm text-neutral-500">
                Perfect for sellers with more than 500 monthly sales
              </p>
            </div>
            <ul className="grid mt-8 text-left gap-y-4">
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">5000 product searches per month</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">500 items in inventory</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">Discord or email notification</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-800">
                <GoCheckCircleFill />
                <span className="text-sm">free access to Discord server</span>
              </li>
            </ul>
            <div className="flex mt-8">
              <a
                href="#"
                className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-neutral-200 w-full px-5 py-2.5 bg-white border-2 border-black hover:bg-neutral-100 text-black "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
