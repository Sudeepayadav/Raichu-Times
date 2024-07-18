import React from "react";
import SideNews from "./SideNews";
import { Link } from "react-router-dom";
import AdPage from "./AdPage";

const MainNews = () => {
  return (
    <div className="  md:flex p-2">
      <Link to="/inner" className="w-3/5 border-b-2 md:border-r-2 pr-0 md:pr-4">
        <div className=" relative text-left">
          <img
            src="https://th-i.thgim.com/public/incoming/5sacsq/article67743122.ece/alternates/LANDSCAPE_1200/IMG_MODI_PUTIN_DELHI_2_1_BO9HJSP5.jpg"
            alt="Political"
            title="Political"
            className="w-full"
          />
          <span className="text-xs text-white m-2 md:text-[#777777] md:relative absolute top-0 md:top-full 
             md:rounded-none rounded-full bg-gray-700 md:bg-inherit p-2 md:p-0 opacity-80 md:opacity-100">Political</span>

          <div className=" absolute md:relative text-white md:text-black p-4 md:p-0 w-full bottom-0 md:bottom-0">
          <h3 className="text-lg py-0 md:py-2 font-bold leading-6">
            ಪುಟಿನ್ – ಮೋದಿ ಭೇಟಿ – ರಷ್ಯಾ ಸೇನೆಯಲ್ಲಿದ್ದ ಭಾರತೀಯರ ಬಿಡುಗಡೆಗೆ ಅಸ್ತು
          </h3>
          <span className="text-xs block mt-2">12 July | 08:00 PM</span>
          </div>

        </div>
        <p className="text-xs leading-3 md:flex hidden ">
            Moscow: 3ನೇಯ ಅವಧಿಗೆ (3rd period) ಪ್ರಧಾನಿಯಾಗಿ ಆಯ್ಕೆಯಾದ ಬಳಿಕೆ ಮೊದಲ ವಿದೇಶ
            ಪ್ರವಾಸ ಕೈಗೊಂಡಿರುವ ಪ್ರಧಾನಿ ನರೇಂದ್ರ (Prime Minister Narendra) ಮೋದಿ ಅವರು
            ಎರಡು ದಿನಗಳ ರಷ್ಯಾ ಪ್ರವಾಸ (Russia tour) ವೇಳೆ ರಷ್ಯಾ...
          </p>
      </Link>

      <div className=" md:hidden ">
        <AdPage
          imgSrc="https://i.pinimg.com/564x/e8/54/24/e85424f102476ff57188536247a1a073.jpg"
          linkToAd="https://www.samsung.com/levant/smartphones/galaxy-z-fold2/design/"
        />
      </div>

      <SideNews />
    </div>
  );
};

export default MainNews;