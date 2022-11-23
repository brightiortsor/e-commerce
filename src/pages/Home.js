import React from "react";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import FlashSales from "../components/FlashSales";

const Home = () => {
  return (
    <div>
      <Slider />
      <FlashSales />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
