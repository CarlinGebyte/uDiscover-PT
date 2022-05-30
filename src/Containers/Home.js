import React from "react";
import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Brands from "../Components/Brands";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Methodology from "../Components/Methodology";
import Plans from "../Components/Plans";
import Testimonial from "../Components/Testimonial";
import Why from "../Components/Why";

function Home() {
  return (
    <div>
      <Methodology />
      <Banner />
      <Why />
      <Plans />
      <Contact />
      <Testimonial />
      <Brands />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
