import React from "react";
import Navbar from "../components/Navbar";
import FlashSales from "../components/FlashSales";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <FlashSales />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
