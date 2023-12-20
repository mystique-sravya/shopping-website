// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import "../src/styles/styles.css";
import Carousel from "./components/Carousel";
import BestSeller from "./components/BestSeller";
import ShopByDegree from "./components/ShopByDegree";
import GiftCard from "./components/GiftCard";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <Carousel />
      <BestSeller />
      <ShopByDegree />
      <GiftCard />
      <ContactUs />
    </div>
  );
}

export default App;
