"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LandingBanner = () => {
  // Counter Animation for Marketplaces
  const [marketplaceCount, setMarketplaceCount] = useState(0);
  const marketplaceUpperLimit = 8;

  useEffect(() => {
    const marketplaceIntervalId = setInterval(() => {
      setMarketplaceCount((prevCount) => {
        return prevCount >= marketplaceUpperLimit ? prevCount : prevCount + 1;
      });
    }, 500);

    return () => clearInterval(marketplaceIntervalId);
  }, [marketplaceUpperLimit]);

  // Counter Animation for Checked Items
  const [checkedItemsCount, setCheckedItemsCount] = useState(0);
  const checkedItemsUpperLimit = 1000;

  useEffect(() => {
    const checkedItemsIntervalId = setInterval(() => {
      setCheckedItemsCount((prevCount) => {
        return prevCount >= checkedItemsUpperLimit ? prevCount : prevCount + 1;
      });
    });

    return () => clearInterval(checkedItemsIntervalId);
  }, [checkedItemsUpperLimit]);

  // Counter Animation for Users
  const [userCount, setUserCount] = useState(0);
  const userUpperLimit = 200;

  useEffect(() => {
    const userIntervalId = setInterval(() => {
      setUserCount((prevCount) => {
        return prevCount >= userUpperLimit ? prevCount : prevCount + 1;
      });
    }, 10);

    return () => clearInterval(userIntervalId);
  }, [userUpperLimit]);

  return (
    <div>
      <div className="bg-neutral-50 border-y border-neutral-200 py-8 mt-20">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:divide-x divide-neutral-200">
            <div className="flex flex-col items-center py-2">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl font-bold text-neutral-900 uppercase"
              >
                {marketplaceCount}
              </motion.h2>
              <div className="font-medium text-sm tracking-wider uppercase text-neutral-500 mt-2">
                Marketplaces
              </div>
            </div>
            <div className="flex flex-col items-center py-2">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl font-bold text-neutral-900 uppercase"
              >
                {checkedItemsCount}
              </motion.h2>
              <div className="font-medium text-sm tracking-wider uppercase text-neutral-500 mt-2">
                daily items checked
              </div>
            </div>
            <div className="flex flex-col items-center py-2">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl font-bold text-neutral-900 uppercase"
              >
                {userCount}
              </motion.h2>
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
