import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg from "../Components/HeroImage";
import PricingCom from "../Components/Pricing";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Heroimg Heading="PRICING." text="Choose your trip." />
      <PricingCom />
      <Footer />
    </div>
  );
};

export default Pricing;
