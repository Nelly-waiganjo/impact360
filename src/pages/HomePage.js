import React from "react";
import Footer from "../component/Footer";
import WhatWeOffer from "../component/WhatWeDo";
import HeroSection from "../component/Hero";
import FeatureCards from "../component/FeatureData";

export default function HomePage() {
  return (
    <div className="font-sans">
      <HeroSection/>

      {/* What We Offer Section */}
      <WhatWeOffer />

      <div className="mb-20">
        <FeatureCards/>
      </div>

      <Footer />
    </div>
  );
}
