import React from "react";
import SideNews from "./SideNews";
import { Link } from "react-router-dom";

const MainNews = () => {
  return (
    <div className="flex p-2">
      <Link to="/inner" className="w-3/5 border-b-2 border-r-2 pr-4">
        <div>
          <img
            src="https://th-i.thgim.com/public/incoming/5sacsq/article67743122.ece/alternates/LANDSCAPE_1200/IMG_MODI_PUTIN_DELHI_2_1_BO9HJSP5.jpg"
            alt="Foreign Affairs"
            title="Foreign Affairs"
            className="w-full"
          />
          <span className="text-xs text-[#777777]">Foreign Affairs</span>
          <h3 className="text-lg py-2 font-bold leading-6">
            ಪುಟಿನ್ – ಮೋದಿ ಭೇಟಿ – ರಷ್ಯಾ ಸೇನೆಯಲ್ಲಿದ್ದ ಭಾರತೀಯರ ಬಿಡುಗಡೆಗೆ ಅಸ್ತು
          </h3>
          <p className="text-xs leading-3">
            Moscow: 3ನೇಯ ಅವಧಿಗೆ (3rd period) ಪ್ರಧಾನಿಯಾಗಿ ಆಯ್ಕೆಯಾದ ಬಳಿಕೆ ಮೊದಲ ವಿದೇಶ
            ಪ್ರವಾಸ ಕೈಗೊಂಡಿರುವ ಪ್ರಧಾನಿ ನರೇಂದ್ರ (Prime Minister Narendra) ಮೋದಿ ಅವರು
            ಎರಡು ದಿನಗಳ ರಷ್ಯಾ ಪ್ರವಾಸ (Russia tour) ವೇಳೆ ರಷ್ಯಾ...
          </p>
          <span className="text-xs block mt-2">12 July | 08:00 PM</span>
        </div>
      </Link>
      <SideNews />
    </div>
  );
};

export default MainNews;
