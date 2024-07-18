import React, {useState} from "react";

const SideNews = () => {
  const [newsData, setNewsData] = useState([
    {
      heading: `"ನರೇಂದ್ರ ಮೋದಿ ಅವರು ಸೋಮವಾರ ಸಂಜೆ ರಷ್ಯಾ ಅಧ್ಯಕ್ಷ ವ್ಲಾಡಿಮಿರ್ ಪುಟಿನ್
        (Vladimir Putin) ಆಯೋಜಿಸಿದ್ದ"`,
      para: `"            ನರೇಂದ್ರ ಮೋದಿ ಅವರು ಸೋಮವಾರ ಸಂಜೆ ರಷ್ಯಾ ಅಧ್ಯಕ್ಷ ವ್ಲಾಡಿಮಿರ್ ಪುಟಿನ್
        (Vladimir Putin) ಆಯೋಜಿಸಿದ್ದ"`,
      imgSrc: "https://www.livemint.com/lm-img/img/2023/08/28/1600x900/Modi_putin_1688133233483_1693229990495.jpeg",
    },

    {
      heading: `" ಅಸ್ಸಾಂನಲ್ಲಿ ಭೀಕರ ಪ್ರವಾಹ: ಕಾಜಿರಂಗ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವನದಲ್ಲಿ 131
            ವನ್ಯಜೀವಿಗಳ ಸಾವು."`,
      para: `"Guwahati: ಅಸ್ಸಾಂನ (Assam) ಪ್ರಸಿದ್ದ ಕಾಜಿರಂಗ ರಾಷ್ಟ್ರೀಯ ಉದ್ಯಾನವನದಲ್ಲಿ
            ಭೀಕರ ಪ್ರವಾಹ ಉಂಟಾಗಿದ್ದು, 131 ವನ್ಯ ಜೀವಿಗಳು ಸಾವನ್ನಪ್ಪಿದ್ದು, 96 ಕಾಡು
            ಪ್ರಾಣಿಗಳನ್ನು ರಕ್ಷಿಸಲಾಗಿದೆ ಎಂದು ಅರಣ್ಯ ಇಲಾಖೆಯ ಅಧಿಕಾರಿಯೊಬ್ಬರು
            ತಿಳಿಸಿದ್ದಾರೆ."`,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtsDd5EwOsqf_eJPLhIYnIpHDQVWt-HAMrA&s",
    },
    {
      heading: `"ಇನ್ಮುಂದೆ ಆಹಾರ ಉತ್ಪನ್ನ ಪ್ಯಾಕೆಟ್‌ನ ಮೇಲೆ ದಪ್ಪ ಅಕ್ಷರಗಳಲ್ಲಿ ಸಕ್ಕರೆ,
            ಉಪ್ಪಿನ ಅಂಶಗಳ ನಮೂದು ಕಡ್ಡಾಯ:FSSAI"`,
      para: `"New delhi: ಆಹಾರ ಉತ್ಪನ್ನ ಮಾರಾಟ (Food product sales) ಮಾಡುವ ಪ್ಯಾಕ್ ಗಳ
            ಮೇಲೆ ಆಹಾರ ತಯಾರಿಸಲು ಬಳಸಲಾಗಿರುವ ಪದಾರ್ಥಗಳು ಹಾಗೂ ಅವುಗಳಲ್ಲಿರುವ ಪೋಷಕಾಂಶಗಳು
            (Nutrients)..."`,
      imgSrc: "https://4.imimg.com/data4/UH/TS/MY-12818128/fssai-registration-consulting.jpg",
    },
  ]);

  console.log("data ", newsData.heading);

  return (
    <div className=" md:w-2/5 mt-4">
      {/* Side News */}

      {newsData.map((data) => (
        <div className=" grid grid-cols-3 py-4 md:border-b-2 text-left ">
          <div className=" col-span-2 px-4 ">
            <h3 className=" font-bold text-sm py-2">{data.heading}</h3>
            <p className="hidden md:flex text-xs ">{data.para}</p>
          </div>
          <div className=" relative  items-center h-full md:full col-span-1 ">
            <img className="  object-cover h-full md:h-full rounded-2xl " src={data.imgSrc}></img>
          </div>
        </div>
      ))}

    </div>
  );
};

export default SideNews;