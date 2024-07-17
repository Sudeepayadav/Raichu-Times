import React from "react";
import AdminShortNews from "./AdminShortNews";
import AdminBusiness from "./AdminBusiness";
import AdminMoney from "./AdminMoney";
import AdminTravel from "./AdminTravel";
import AdminHomed from "./AdminHomed";
import AdminLifeAndStyle from "./AdminLifeAndStyle";

function AdminPeopleTalk() {
  return (
    <>
      <div className=" w-11/12 m-auto mt-5">
        <h1 className="text-sm ml-4 font-bold uppercase">
          people talking about
        </h1>
      </div>
      <div className="md:flex w-11/12 m-auto">
        <div className="md:flex md:w-2/5">
          <div className="md:w-8/12">
            <img
              src="https://images.tv9kannada.com/wp-content/uploads/2024/07/donald-trump-rally-shooting_-fbi-confirms-20-year-old-thomas-matthew-crooks-as-the-shooter.jpg?w=1280"
              alt=""
              className="w-full  rounded-lg p-4"
            />
          </div>
          <div className="md:w-4/12 space-y-4 border-r p-2">
            <p class="text-xs font-semibold">INFRASTRUCTURE</p>
            <p className="md:text-xl text-base font-bold ">
              ಡೊನಾಲ್ಡ್ ಟ್ರಂಪ್ ಮೇಲೆ ಗುಂಡು ಹಾರಿಸಿದ್ದ ಯುವಕನಿಗೆ ಬರೀ 20 ವರ್ಷ: ಎಫ್‌ಬಿಐ
            </p>
            <p className="font-medium text-xs">
              ಡೊನಾಲ್ಡ್ ಟ್ರಂಪ್ ಮೇಲೆ ಗುಂಡು ಹಾರಿಸಿದ್ದ ವ್ಯಕ್ತಿಯನ್ನು ಫೆಡರಲ್ ಬ್ಯೂರೋ
              ಆಫ್ ಇನ್ವೆಸ್ಟಿಗೇಶನ್ (ಎಫ್‌ಬಿಐ) ಪತ್ತೆ ಹಚ್ಚಿದ್ದು, ಆತನಿಗೆ ಕೇವಲ 20 ವರ್ಷ
              ಎಂದು ಬಹಿರಂಗ ಪಡಿಸಿದೆ.
            </p>
          </div>
        </div>
        <div className="md:w-4/12 ml-8 space-y-6 border-r p-3">
          <div className="space-y-3">
            <p class="text-xs font-semibold mb-4">HEALTH & SCIENCE</p>
            <p href="" className="md:text-xl text-base font-bold">
              ಕೊಡಗಿನಲ್ಲಿ ಪುನರ್ವಸು ಮಳೆಯ ಬಿರುಸು: ಮೈದುಂಬಿದ ಅಬ್ಬಿ ಜಲಪಾತ, ಹಾರಂಗಿಯಿಂದ
              ನದಿಗೆ ಧುಮ್ಮಿಕ್ಕುತ್ತಿದೆ
            </p>
            <p className="font-medium text-xs">
              ಕೊಡಗು ಜಿಲ್ಲೆಯಲ್ಲಿ ಪುನರ್ವಸು ಮಳೆಯ ಆರ್ಭಟ ಜೋರಾಗಿದ್ದು, ಕಳೆದೆರಡು
              ದಿನಗಳಿಂದ ಸುರಿಯುತ್ತಿರುವ ಭಾರಿ ಗಾಳಿ ಮಳೆಗೆ ಹಲವಡೆ ಮರ ...
            </p>
          </div>
          <hr />
          <div className="space-y-3">
            {" "}
            <p class="text-xs font-semibold mb-4">FOREIGN AFFAIRS</p>
            <a href="" className="md:text-xl text-base font-bold">
              ಚಿಕ್ಕಮಗಳೂರಿನಲ್ಲಿ ಪ್ರವಾಸಿಗರ ಹುಚ್ಚಾಟ: ಮದ್ಯ ಸೇವಿಸಿ ಸಮುದ್ರಕ್ಕಿಳಿದ ಜನ,
              ವ್ಹೀಲಿಂಗ್ ಮಾಡಿದ ಐವರ ಬಂಧನ
            </a>
            <p className="font-medium text-xs">
              ಇದೀಗ ಎಲ್ಲೆಡೆ ಮಳೆ ಆಗುತ್ತಿದೆ. ಹೀಗಾಗಿ ನಿಸರ್ಗ ದೇವತೆ ಹಸಿರಿನಿಂದ
              ಕಂಗೊಳಿಸುತ್ತಿದ್ದಾಳೆ. ಪ್ರವಾಸಿಗರು ನಿಸರ್ಗ ಸೌಂದರ್ಯ ಸವಿಯಲು
              ಬರುತ್ತಿದ್ದಾರೆ. ಆದರೆ ಮತ್ತೆ ಕೆಲ ಜನರು ಮಾತ್ರ ಮೋಜುಮಸ್ತಿ ಹೆಸರಲ್ಲಿ
              ಹುಚ್ಚಾಟ ಮೆರೆದಿದ್ದಾರೆ.
            </p>
          </div>
        </div>
        <div className="md:w-4/12 ml-8 space-y-6 p-3">
          <div className="space-y-3">
            <p class="text-xs font-semibold mb-4">HEALTH & SCIENCE</p>
            <a href="" className="md:text-xl text-base font-bold">
              12 ಎಸೆತಗಳಲ್ಲಿ 61 ರನ್ ಬೇಕು; ಇನ್ನೊಂದು ಎಸೆತ ಬಾಕಿ ಇರುವಂತೆಯೇ ಗೆದ್ದ
              ಆಸ್ಟ್ರೀಯಾ; ವಿಡಿಯೋ ನೋಡಿ
            </a>
            <p className="font-medium text-xs">
              ಕೊನೆಯ 2 ಓವರ್‌ಗಳಲ್ಲಿ ಆಸ್ಟ್ರೀಯಾ ಗೆಲುವಿಗೆ 61 ರನ್‌ಗಳ ಅಗತ್ಯವಿತ್ತು.
              ಎಂಟನೇ ಓವರ್​ವರೆಗೆ ಆಸ್ಟ್ರಿಯಾ ತಂಡ ಕೇವಲ 107 ರನ್ ಗಳಿಸಲಷ್ಟೇ ...
            </p>
          </div>
          <hr />
          <div className="space-y-3">
            {" "}
            <p class="text-xs font-semibold mb-4">FOREIGN AFFAIRS</p>
            <a href="" className="md:text-xl text-base font-bold">
              ಸಾರ್ಕೋಮಾ: ಬಹಳ ಅಪಾಯಕಾರಿ ಕ್ಯಾನ್ಸರ್ ಇದು! ನಿರ್ಲಕ್ಷಿಸಿದರೆ ತಿಂಗಳೊಳಗೆ
              ಮನುಷ್ಯನನ್ನು ಮುಗಿಸಿಬಿಡುತ್ತವೆ!!
            </a>
            <p className="font-medium text-xs">
              ಈ ಕ್ಯಾನ್ಸರ್ ಗಳು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತವೆ, ವಾರಗಳು ಅಥವಾ ತಿಂಗಳುಗಳಲ್ಲಿ
              ಮಾರಣಾಂತಿಕವಾಗಿ ಹರಡುತ್ತವೆ. ಈ ಕ್ಯಾನ್ಸರ್ಗಳ ಉಲ್ಭಣಕ್ಕೆ ನಿಖರವಾದ ಕಾರಣಗಳು
              ಅಥವಾ ಅವುಗಳನ್ನು ತಡೆಯಲು ಮುಂಜಾಗ್ರತಾ ತಪಾಸಣೆ (ಸ್ಕ್ರೀನಿಂಗ್)
              ಲಭ್ಯವಿಲ್ಲದಿರುವುದು,
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <img
          src="https://tpc.googlesyndication.com/simgad/8924069116659826988"
          alt="img"
        />
      </div>
      <hr className="w-[1400px] h-px mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <AdminShortNews />
      <hr className="w-[1400px] h-px mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <AdminBusiness />
      <hr className="w-[1400px] h-px mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <AdminMoney />
      <hr className="w-[1400px] h-px mx-auto my-8 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      <AdminTravel />
      <hr className="w-[1400px] h-px mx-auto my-8 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      <AdminHomed />
      <hr className="w-[1400px] h-px mx-auto my-8 bg-gray-100 border-0 rounded dark:bg-gray-700" />
      <AdminLifeAndStyle />
    </>
  );
}

export default AdminPeopleTalk;
