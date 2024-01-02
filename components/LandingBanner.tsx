import React from "react";

const LandingBanner = () => {
  return (
    <div>
      {" "}
      <div className="bg-neutral-50 border-y border-neutral-200 py-8 mt-20">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:divide-x divide-neutral-200">
            <div className="flex flex-col items-center py-2">
              <h2 className="text-5xl font-bold text-neutral-900 uppercase">
                8
              </h2>
              <div className="font-medium text-sm tracking-wider uppercase text-neutral-500 mt-2">
                Marketplaces
              </div>
            </div>
            <div className="flex flex-col items-center py-2">
              <h2 className="text-5xl font-bold text-neutral-900 uppercase">
                100,000+
              </h2>
              <div className="font-medium text-sm tracking-wider uppercase text-neutral-500 mt-2">
                total items checked
              </div>
            </div>
            <div className="flex flex-col items-center py-2">
              <h2 className="text-5xl font-bold text-neutral-900 uppercase">
                200+
              </h2>
              <div className="font-medium text-sm tracking-wider uppercase text-neutral-500 mt-2">
                Users worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
