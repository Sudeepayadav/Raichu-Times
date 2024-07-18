import React from "react";
import { FaRegEdit } from "react-icons/fa";

const SideNews = () => {
  const newsItems = [
    {
      title:
        "ನರೇಂದ್ರ ಮೋದಿ ಅವರು ಸೋಮವಾರ ಸಂಜೆ ರಷ್ಯಾ ಅಧ್ಯಕ್ಷ ವ್ಲಾಡಿಮಿರ್ ಪುಟಿನ್ (Vladimir Putin) ಆಯೋಜಿಸಿದ್ದ ಔತಣಕೂಟದಲ್ಲಿ ಭಾಗಿಯಾಗಿ, ರಷ್ಯಾ ಸೇನೆಯಲ್ಲಿ (Russian army)",
      description:
        "ನರೇಂದ್ರ ಮೋದಿ ಅವರು ಸೋಮವಾರ ಸಂಜೆ ರಷ್ಯಾ ಅಧ್ಯಕ್ಷ ವ್ಲಾಡಿಮಿರ್ ಪುಟಿನ್ (Vladimir Putin) ಆಯೋಜಿಸಿದ್ದ",
      imageUrl:
        "https://www.livemint.com/lm-img/img/2023/08/28/1600x900/Modi_putin_1688133233483_1693229990495.jpeg",
    },
    {
      title:
        "ಅಸ್ಸಾಂನಲ್ಲಿ ಭೀಕರ ಪ್ರವಾಹ: ಕಾಜಿರಂಗ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವನದಲ್ಲಿ 131 ವನ್ಯಜೀವಿಗಳ ಸಾವು.",
      description:
        "Guwahati: ಅಸ್ಸಾಂನ (Assam) ಪ್ರಸಿದ್ದ ಕಾಜಿರಂಗ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವನದಲ್ಲಿ ಭೀಕರ ಪ್ರವಾಹ ಉಂಟಾಗಿದ್ದು, 131 ...",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtsDd5EwOsqf_eJPLhIYnIpHDQVWt-HAMrA&s",
    },
    {
      title:
        "ಇನ್ಮುಂದೆ ಆಹಾರ ಉತ್ಪನ್ನ ಪ್ಯಾಕೆಟ್‌ನ ಮೇಲೆ ದಪ್ಪ ಅಕ್ಷರಗಳಲ್ಲಿ ಸಕ್ಕರೆ, ಉಪ್ಪಿನ ಅಂಶಗಳ ನಮೂದು ಕಡ್ಡಾಯ:FSSAI",
      description:
        "New delhi: ಆಹಾರ ಉತ್ಪನ್ನ ಮಾರಾಟ (Food product sales) ಮಾಡುವ ಪ್ಯಾಕ್ ಗಳ ಮೇಲೆ ಆಹಾರ ತಯಾರಿಸಲು ಬಳಸಲಾಗಿರುವ ...",
      imageUrl:
        "https://4.imimg.com/data4/UH/TS/MY-12818128/fssai-registration-consulting.jpg",
    },
  ];
  const handleEdit = () => {
  };
  return (
    <div className="w-2/5 z-[9999]">
      {newsItems.map((newsItem, index) => (
        <div className="grid grid-cols-3 border-b-2 relative">
          <div className="col-span-2 px-4">
            <h3 className="font-bold text-xs py-2">{newsItem.title}</h3>
            <p className="text-xs mb-2">{newsItem.description}</p>
          </div>
          <div className="flex items-center col-span-1">
            <img className="h-1/2" src={newsItem.imageUrl} alt="News" />
          </div>
          <button
            onClick={handleEdit}
            className="flex justify-center items-center gap-1 absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white rounded"
          >
            <FaRegEdit />
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideNews;
