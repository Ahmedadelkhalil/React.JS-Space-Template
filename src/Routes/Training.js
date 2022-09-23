import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage from "../Components/HeroImage";
import TrainingCom from "../Components/Training";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage Heading="TRAINING." text="Pre Flight & In Flight Training." />
      <TrainingCom />
      <Footer />
    </div>
  );
};

export default Training;
