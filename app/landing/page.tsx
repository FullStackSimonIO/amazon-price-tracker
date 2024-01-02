import Hero from "@/components/Hero";
import LandingDescription from "@/components/LandingDescription";
import ProductCard from "@/components/ProductCard";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <ProductCard />
      <LandingDescription />
    </div>
  );
};

export default page;
