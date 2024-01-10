"use client";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import NewHero from "@/components/NewHero";
import LandingBanner from "@/components/LandingBanner";
import LandingDescription from "@/components/LandingDescription";
import ProductCard from "@/components/ProductCard";

import React from "react";

const page = () => {
  return (
    <div>
      <NewHero />
      <LandingBanner />
      <LandingDescription />
      <ProductCard />
      <FAQ />
    </div>
  );
};

export default page;
