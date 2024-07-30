import React from "react";
import AdPage from "../Banner/AdPage";
import Insidebanner from "./InsideBanner";

const Layout = () => {
  return (
    <div className="flex">
      <div className="h-full w-52 md:flex flex-col gap-4 md: hidden md:p-3">
        <AdPage
          imgSrc="https://7esl.com/wp-content/uploads/2020/12/electronic-devices.jpg"
          linkToAd="https://www.amazon.in/primeday/&ref_=IN_Prime_ACQ_GWHero_PD%2724_LUP2_All_desktop_Hero_Deals_Reveal_English_unrec/?encoding=UTF8&pd_rd_w=xYfM5&content-id=amzn1.sym.25d2d30c-5a2e-4273-b96e-ca3c6e32e5f7&pf_rd_p=25d2d30c-5a2e-4273-b96e-ca3c6e32e5f7&pf_rd_r=9BKR9Y19HHWH4M96YK55&pd_rd_wg=Wv2mk&pd_rd_r=1f205ffc-13d4-4f1a-8f13-c89f5d4793b3&ref=pd_hp_d_hero_unk"/>
         
      </div>

      <div className="w-2/3 p-2 ">
      {/* <Banner /> */}
      <Insidebanner />

      </div>

      <div className=" w-52 ml-12 md:flex sm: hidden ">
        <div className=" flex flex-col">
          <AdPage
            imgSrc="https://m.media-amazon.com/images/I/71657TiFeHL.AC_UY327_FMwebp_QL65.jpg"
            linkToAd="https://redtape.com/"
          />
          <AdPage
            imgSrc="https://m.media-amazon.com/images/I/71GLMJ7TQiL.AC_UY327_FMwebp_QL65.jpg"
            linkToAd="https://www.maxlifeinsurance.com/term-insurance-plans/2-crore-term-insurance"
          />
        </div>
      </div>

    </div>
  );
};

export default Layout;