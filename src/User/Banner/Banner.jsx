import React from "react";
import AdPage from "./AdPage";
import TopBar from "./TopBar";
import MainNews from "./MainNews";


const Banner = () => {
  return (
    <div className=" flex w-full h-auto ">
      <div className="hidden md:w-1/6 md:flex ">
        <AdPage
          imgSrc="https://i.pinimg.com/564x/e8/54/24/e85424f102476ff57188536247a1a073.jpg"
          linkToAd="https://www.samsung.com/levant/smartphones/galaxy-z-fold2/design/"
        />
      </div>
      <div className=" md:w-2/3 p-2 ">
        <TopBar />
        <MainNews />
      </div>
      <div className=" md:w-1/6 hidden md:flex  ">
        <div className=" w-full hidden md:flex flex-col gap-4">
          <AdPage
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIphezAEPijVZnUp_Uhw-S3AyUnmMe7VvQsQ&s"
            linkToAd="https://redtape.com/"
          />
          <AdPage
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMi_6x6LNjXBfEybJsiIf85rmVaLUZ3OmSA&s"
            linkToAd="https://www.maxlifeinsurance.com/term-insurance-plans/2-crore-term-insurance"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;