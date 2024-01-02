import React from "react";

const LandingDescription = () => {
  return (
    <div>
      <section className="mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-0.5 bg-gradient-to-t -translate-x-1/2 from-indigo-500 "></div>
          <div className="grid place-items-center text-white font-semibold w-10 h-10 bg-gradient-to-b rounded-full from-indigo-500 to-blue-500">
            1
          </div>
          <div className="text-transparent text-xl md:text-3xl font-bold bg-clip-text mt-5 bg-gradient-to-r from-indigo-500 to-blue-500">
            <span>Analyze</span>
          </div>
          <h2 className="font-bold text-3xl md:text-5xl mt-5 tracking-tight">
            Find profitable Products
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl mt-3">
            Check out the prices incl. current profits & monthly sales over
            multiple markets.
          </p>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="h-24 w-0.5 bg-gradient-to-t -translate-x-1/2 from-red-500"></div>
          <div className="grid place-items-center text-white font-semibold w-10 h-10 bg-gradient-to-b rounded-full from-red-500 to-orange-500">
            2
          </div>
          <div className="text-transparent text-xl md:text-3xl font-bold bg-clip-text mt-5 bg-gradient-to-r from-red-500 to-orange-500">
            <span>Track</span>
          </div>
          <h2 className="font-bold text-3xl md:text-5xl mt-5 tracking-tight">
            Everything on one page
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl mt-3">
            Track your items with all important data on one page & buy stock
            when prices match and profits are good.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingDescription;
