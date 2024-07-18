import React, { useState } from "react";
import SideNews from "./SideNews";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";

const MainNews = () => {
  const navigate = useNavigate();
  const [previewData, setPreviewData] = useState({
    title: "ಪುಟಿನ್ – ಮೋದಿ ಭೇಟಿ – ರಷ್ಯಾ ಸೇನೆಯಲ್ಲಿದ್ದ ಭಾರತೀಯರ ಬಿಡುಗಡೆಗೆ ಅಸ್ತು",
    description:
      "Moscow: 3ನೇಯ ಅವಧಿಗೆ (3rd period) प्रधानमಿಯಾಗಿ ಆಯ್ಕೆಯಾದ ಬಳಿಕೆ ಮೊದಲ ವಿದೇಶ ಪ್ರವಾಸ ಕೈಗೊಂಡಿರುವ प्रधानमೇ (Prime Minister Narendra) ಮೋದೀ ಅವರು ಎರಡು ದಿನಗಳ ರಷ್ಯಾ ಪ್ರವಾಸ (Russia tour) ವೇಳೆ ರಷ್ಯಾ...",
    imageUrl:
      "https://th-i.thgim.com/public/incoming/5sacsq/article67743122.ece/alternates/LANDSCAPE_1200/IMG_MODI_PUTIN_DELHI_2_1_BO9HJSP5.jpg",
  });

  const handleEdit = () => {
    navigate("/admin/edit-news", { state: { previewData } });
  };

  return (
    <div className="flex p-2">
      <div className="w-3/5 border-b-2 border-r-2 pr-4 relative">
        <Link to="/inner">
          <div>
            <img
              src={previewData.imageUrl}
              alt="Foreign Affairs"
              title="Foreign Affairs"
              className="w-[480px] h-[255px]"
            />
            <span className="text-xs text-[#777777]">Foreign Affairs</span>
            <h3 className="text-lg py-2 font-bold leading-6">
              {previewData.title}
            </h3>
            <p className="text-xs leading-3">{previewData.description}</p>
          </div>
        </Link>
        <button
          onClick={handleEdit}
          className="flex justify-center items-center gap-1 absolute top-2 right-5 px-2 py-1 bg-blue-500 text-white rounded"
        >
          <FaRegEdit />
          Edit
        </button>
      </div>
      <SideNews />
    </div>
  );
};

export default MainNews;
