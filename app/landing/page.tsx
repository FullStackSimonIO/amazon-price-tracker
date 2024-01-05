"use client";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LandingBanner from "@/components/LandingBanner";
import LandingDescription from "@/components/LandingDescription";
import ProductCard from "@/components/ProductCard";
import NewHero from "@/components/newHero";
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
