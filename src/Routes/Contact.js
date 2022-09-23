import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage from "../Components/HeroImage";
import Form from "../Components/Form";

const Content = () => {
  return (
    <div>
      <Navbar />
      <HeroImage Heading="CONTACT." text="Contact GLX Travel." />
      <Form />
      <Footer />
    </div>
  );
};

export default Content;
