"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillDatabaseFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

const Hero = () => {
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      color: ["#fuchsia-600", "transparent"],
      transition: { duration: 1.5, ease: "linear", loop: Infinity },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <>
      <div className="grid max-w-screen-xl m-auto place-items-center pt-20 pb-10 md:pt-28 md:pb-10 justify-center">
        <h1 className="flex flex-col gap-1 md:gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black lg:tracking-tight text-center">
          <div className="flex flex-wrap gap-2 md:gap-5 items-center justify-center">
            The{" "}
            <div className="relative">
              <span className="z-10 relative">price</span>
              <motion.span
                className="absolute inset-0 z-20 bg-clip-text text-transparent"
                aria-hidden="true"
                animate={controls}
              >
                price
              </motion.span>
            </div>
            <div className="relative">
              <span className="z-10 relative">comparison</span>
              <motion.span
                className="absolute inset-0 z-20 bg-clip-text text-transparent"
                aria-hidden="true"
                animate={controls}
              >
                comparison
              </motion.span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-5 items-center justify-center">
            tool for{" "}
            <div className="relative">
              <span className="z-10 relative">Amazon</span>
              <motion.span
                className="absolute inset-0 z-20 bg-clip-text text-transparent"
                aria-hidden="true"
                animate={controls}
              >
                Amazon
              </motion.span>
            </div>
            sellers
          </div>
        </h1>
        {/* Rest deines Codes bleibt unverändert */}
      </div>
    </>
  );
};

export default Hero;
