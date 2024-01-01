import React from "react";

const Hero = () => {
  return (
    <div className="grid place-items-center pt-20 pb-10 md:pt-28 md:pb-10 justify-center">
      <h1 className="flex flex-col gap-1 md:gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black lg:tracking-tight text-center">
        <div className="flex flex-wrap gap-2 md:gap-5 items-center justify-center">
          The{" "}
          <div className="relative">
            <span className="z-10 relative">price</span>
            <span
              className="absolute inset-0 z-20 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-1 from-fuchsia-600 to-purple-600"
              aria-hidden="true"
            >
              price
            </span>
          </div>
          <div className="relative">
            <span className="z-10 relative">comparison</span>
            <span
              className="absolute inset-0 z-20 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-2 from-indigo-500 to-blue-500"
              aria-hidden="true"
            >
              comparison
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-5 items-center justify-center">
          tool for{" "}
          <div className="relative">
            <span className="z-10 relative">Amazon</span>
            <span className="absolute inset-0 z-20 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-3 from-red-500 to-orange-500">
              Amazon
            </span>
          </div>
          sellers
        </div>
      </h1>
      <p className="text-xl md:text-2xl mt-6 md:mt-8 text-neutral-500 max-w-2xl mx-auto text-center overflow-hidden">
        Compare Amazon prices across multiple markets.
        <br />
        Track your items and instantly check the current profits.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-8">
        <a href="" className="text-center" title="" target="_blank">
          <svg viewBox="0 0 256 256" className="w-12 h-12 mx-auto" />
        </a>
        <a href="" className="text-center" title="" target="_blank">
          <svg viewBox="0 0 256 256" className="w-12 h-12 mx-auto" />
        </a>
        <a href="" className="text-center" title="" target="_blank">
          <svg viewBox="0 0 256 256" className="w-12 h-12 mx-auto" />
        </a>
        <a href="" className="text-center" title="" target="_blank">
          <svg viewBox="0 0 256 256" className="w-12 h-12 mx-auto" />
        </a>
        <a href="" className="text-center" title="" target="_blank">
          <svg viewBox="0 0 256 256" className="w-12 h-12 mx-auto" />
        </a>
      </div>
      <div className="flex flex-col mt-12 sm:flex-row gap-4 justify-center">
        <div className="flex flex-col items-center">
          <a
            href="#"
            className="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-neutral-200 px-5 py-2.5 bg-black hover:bg-neutral-800  border-2 border-transparent flex gap-2 items-center justify-center bg-primary-500 text-white border-2 border-transparent py-3 px-6 rounded-lg transition duration-250 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Register
          </a>
          <p className="text-xs text-gray-500 font-bold mt-2 text-center">
            Cancel everytime
          </p>
        </div>
        <div className="flex flex-col items-center"></div>
      </div>
    </div>
  );
};

export default Hero;
