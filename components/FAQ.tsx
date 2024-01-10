import React from "react";

const FAQ = () => {
  const open = false;
  return (
    <div className="max-w-screen-xl mx-auto px-5 mb-10">
      <div className="flex flex-col items-center mt-16">
        <h2 className="font-bold text-3xl md:text-5xl mt-5 tracking-tight text-center">
          FAQ
        </h2>
        <p className="text-neutral-500 text-lg md:text-xl mt-8">
          Frequently asked questions
        </p>
      </div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>
                Why should I choose this service <br /> as an Amazon seller
              </span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  width="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              If you do Amazon selling as online arbitrage, you probably get a
              lot of your stock from differen Amazon marketplaces. I always had
              the problem to track over all de price changing between multiple
              markets in europa. Here you have the solution the problem.
              Boosting your Amazon business to a whole new level.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>What is "Online Arbitrage"?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  width="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              You can do different business models on Amazon as a seller. If you
              want to build a personal brand, this App is probably useless to
              you. The problem is, if you do want to build a brand, you need to
              have a massive marketing capital and a good supplier. Online
              Arbitrage means buying items from big brands, sending stock to
              Amazon & sell the over already existing listings without doing any
              marketing. Of course you need to find these articles. This is
              where we join the game.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>Which stores do you support?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  width="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              We are focused on Amazon to Amazon selling only. I as a seller get
              around 80% of my stock from different Amazon marketplaces. In the
              case of a extremely high specific niche, quality is over quantity.
              If you know what you are doing, you can go insanely huge with only
              selling between different EU regions.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>How can I pay?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  width="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              We are using a Stripe Checkout integration on our webservice. This
              means 100% security with your private data and monthly invoices
              for your business.
            </p>
          </details>
        </div>
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span>Can I cancel anytime?</span>
              <span className="transition group-open:rotate-180">
                <svg
                  fill="none"
                  height="24"
                  width="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Of course you can cancel anytime. If you cancel, you can use the
              services for the remaining month. The following month you wont be
              charged anymore. As the head and developer behind this project, I
              would be glad, if you would tell me why you did cancel your
              membership. I am very happy for any feedback I get.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
