"use client";

import React, { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillDatabaseFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  // Animation for "Price"
  const [priceHighlight, setPriceHighlight] = useState(false);
  const priceAnimationControls = useAnimation();

  const startPriceAnimation = async () => {
    await priceAnimationControls.start({
      color: ["#000000", "#ff0000"], // von Schwarz nach Rot
      transition: { duration: 2 },
    });

    priceAnimationControls.start({ color: "#000000" });

    setPriceHighlight(false);
  };

  useEffect(() => {
    const priceIntervalId = setInterval(() => {
      setPriceHighlight(true);
      startPriceAnimation();
    }, 6000);

    const priceTimeoutId = setTimeout(() => {
      setPriceHighlight(true);
      startPriceAnimation();
    }, 2000);

    return () => {
      clearInterval(priceIntervalId);
      clearTimeout(priceTimeoutId);
    };
  }, []);

  // Animation for "Comparison"
  const [comparisonHighlight, setComparisonHighlight] = useState(false);
  const comparisonAnimationControls = useAnimation();

  const startComparisonAnimation = async () => {
    await comparisonAnimationControls.start({
      color: ["#000000", "#ff0000"], // von Schwarz nach Rot
      transition: { duration: 2 },
    });

    setComparisonHighlight(false);
  };

  useEffect(() => {
    const comparisonIntervalId = setInterval(() => {
      setComparisonHighlight(true);
      startComparisonAnimation();
    }, 6000);

    const comparisonTimeoutId = setTimeout(() => {
      setComparisonHighlight(true);
      startComparisonAnimation();
    }, 2000);

    return () => {
      clearInterval(comparisonIntervalId);
      clearTimeout(comparisonTimeoutId);
    };
  }, []);

  // Animation for "Amazon"
  const [amazonHighlight, setAmazonHighlight] = useState(false);
  const amazonAnimationControls = useAnimation();

  const startAmazonAnimation = async () => {
    await amazonAnimationControls.start({
      color: ["#000000", "#ff0000"], // von Schwarz nach Rot
      transition: { duration: 2 },
    });

    setAmazonHighlight(false);
  };

  useEffect(() => {
    const amazonIntervalId = setInterval(() => {
      setAmazonHighlight(true);
      startAmazonAnimation();
    }, 6000);

    const amazonTimeoutId = setTimeout(() => {
      setAmazonHighlight(true);
      startAmazonAnimation();
    }, 2000);

    return () => {
      clearInterval(amazonIntervalId);
      clearTimeout(amazonTimeoutId);
    };
  }, []);

  // Animation for "sellers"
  const [sellerHighlight, setSellerHighlight] = useState(false);
  const comparisonSellerControls = useAnimation();

  const startSellerAnimation = async () => {
    await comparisonSellerControls.start({
      color: ["#000000", "#ff0000"], // von Schwarz nach Rot
      transition: { duration: 2 },
    });

    setSellerHighlight(false);
  };

  useEffect(() => {
    const sellerIntervalId = setInterval(() => {
      setSellerHighlight(true);
      startSellerAnimation();
    }, 6000);

    const sellerTimeoutId = setTimeout(() => {
      setSellerHighlight(true);
      startSellerAnimation();
    }, 2000);

    return () => {
      clearInterval(sellerIntervalId);
      clearTimeout(sellerTimeoutId);
    };
  }, []);

  return (
    <>
      <div className="grid max-w-screen-xl m-auto place-items-center pt-20 pb-10 md:pt-28 md:pb-10 justify-center">
        <h1 className="flex flex-col gap-1 md:gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black lg:tracking-tight text-center">
          <div className="flex flex-wrap gap-2 md:gap-5 items-center justify-center">
            The{" "}
            <motion.div className="relative" animate={priceAnimationControls}>
              <span className="z-10 relative">price</span>
              <span
                className={`absolute inset-0 z-20 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-3 ${
                  priceHighlight ? "visible" : "invisible"
                }`}
                aria-hidden="true"
              >
                price
              </span>
            </motion.div>
            <motion.div
              className="relative"
              animate={comparisonAnimationControls}
            >
              <span className="z-10 relative">comparison</span>
              <span
                className={`absolute inset-0 z-20 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-3 ${
                  comparisonHighlight ? "visible" : "invisible"
                }`}
              >
                comparison
              </span>
            </motion.div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-5 items-center justify-center">
            tool for{" "}
            <motion.div className="relative" animate={amazonAnimationControls}>
              <span className="z-10 relative">Amazon</span>
              <span
                className={`absolute inset-0 z-20 bg-gradient-to-r bg-clip-text text-transparent animate-gradient-3 ${
                  amazonHighlight ? "visible" : "invisible"
                }`}
                aria-hidden="true"
              >
                Amazon
              </span>
            </motion.div>
            sellers
          </div>
        </h1>
        <p className="text-xl md:text-2xl mt-6 md:mt-8 text-neutral-500 max-w-2xl mx-auto text-center overflow-hidden">
          Compare Amazon prices across multiple markets.
          <br />
          Track your items and instantly check the current profits.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-10 mt-8 lg:gap-32">
          <div className="flex flex-col items-center">
            <FaMagnifyingGlass size={36} />
            <p className="mt-3">Analyze</p>
          </div>
          <div className="flex flex-col items-center">
            <BsFillDatabaseFill size={36} />
            <p className="mt-3">Track</p>
          </div>
          <div className="flex flex-col items-center">
            <MdAttachMoney size={36} />
            <p className="mt-3">Buy</p>
          </div>
        </div>
        <div className="flex flex-col mt-12 sm:flex-row gap-4 justify-center">
          <div className="flex flex-col items-center">
            <a
              href="#"
              className=" text-center  focus-visible:ring-2 ring-offset-2 ring-neutral-200  bg-black hover:bg-neutral-800   flex gap-2 items-center justify-center bg-primary-500 text-white border-2 border-transparent py-3 px-6 rounded-lg transition duration-250 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Register
            </a>
            <p className="text-xs text-gray-500 font-bold mt-2 text-center">
              Cancel anytime!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="#"
              className=" text-center  focus-visible:ring-2 ring-offset-2 ring-neutral-200   hover:bg-neutral-100   flex gap-2 items-center justify-center bg-white text-black border-2 border-black py-3 px-6 rounded-lg transition duration-250 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Check it out!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
