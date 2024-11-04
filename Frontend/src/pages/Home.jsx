import React from 'react';
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Services />
      <Workflow />
      <Pricing />
      <Testimonials />
    </div>
  </>
  )
}

export default Home;