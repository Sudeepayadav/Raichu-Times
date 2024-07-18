import React from "react";
import Header from "./Repeatables/Header";
import Footer from "./Repeatables/Footer";
import TopNews from "./HomeComponents/TopNews";
import PeopleTalk from "./HomeComponents/PeopleTalk";
import Sport from "./HomeComponents/Sport";
import Banner from "./Banner/Banner";

function HomePage() {
  return (
    <div className="">
     
      {/* <div className="z-[9999]">
        <Header />
      </div> */}

      <div>
        <Banner />
      </div>
      <div className="">
        <TopNews />
      </div>
      <div>
        <PeopleTalk />
      </div>
      <div>
        <Sport />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
