import React from "react";
import Header from "../Repeatables/Header";
import Footer from "../Repeatables/Footer";
import TopNews from "./HomeComponents/TopNews";
import PeopleTalk from "./HomeComponents/PeopleTalk";
import Sport from "./HomeComponents/Sport";
import Banner from "./Banner/Banner";


function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <TopNews />
      <PeopleTalk />
      <Sport />
      <Footer />
    </div>
  );
}

export default HomePage;
