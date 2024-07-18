import React from "react";
import EditSideNews from "./EditSideNews";

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

  return (
    <div className="w-2/5 z-[9999]">
      {newsItems.map((newsItem, index) => (
        <EditSideNews key={index} newsItem={newsItem} />
      ))}
    </div>
  );
};

export default SideNews;
