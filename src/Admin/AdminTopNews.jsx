import React from "react";
import AdminInform from "./AdminInform";

function AdminTopNews() {
  return (
    <>
      <div className="md:w-11/12 h-fit w-screen md:m-auto font-sans md:p-0 p-5">
        <h1 className="font-bold text-4xl my-7">The Top News</h1>
        <div className="md:flex  md:space-x-4 md:space-y-0 space-y-4 ">
          <div className="w-80 space-y-1">
            <img
              src="https://images.tv9kannada.com/wp-content/uploads/2024/07/cm-siddaramaiah.jpg?w=1280"
              alt=""
              className=""
            />
            <p className="text-sm text-gray-500 font-semibold">
              primary industries
            </p>
            <h1 className="md:text-xl text-base font-bold">
            ಸರ್ಕಾರಿ ನೌಕರರಿಗೆ ಗುಡ್​ನ್ಯೂಸ್: ಆ.1 ರಿಂದ 7ನೇ ವೇತನ ಆಯೋಗದ ಶಿಫಾರಸು ಜಾರಿಗೊಳಿಸುವ ತೀರ್ಮಾನ ಪ್ರಕಟಿಸಿದ ಸಿಎಂ
            </h1>
           
          </div>
          <hr className=" border-gray-800" /> 

          <div className="w-80 space-y-1">
            <img
              src="https://images.tv9kannada.com/wp-content/uploads/2024/07/youth.jpg?w=1280"
              alt=""
            />
            <p className="text-xs text-gray-500 font-semibold uppercase">
              primary industries
            </p>
            <h1 className="md:text-xl text-base font-bold">
            ವಿಶ್ವ ಯುವ ಕೌಶಲ್ಯ ದಿನವನ್ನು ಆಚರಿಸುವುದು ಏಕೆ? ಏನಿದರ ಮಹತ್ವ?
            </h1>
           
          </div>
          <div className="w-80 space-y-1">
            <img
              src="https://images.tv9kannada.com/wp-content/uploads/2024/07/digital-india-2.jpg?w=1280"
              alt=""
            />
            <p className="text-xs text-gray-500 font-semibold uppercase">
              primary industries
            </p>
            <h1 className="md:text-xl text-base font-bold">
              {" "}
              ಜಿ20 ಡಿಜಿಟಲ್ ಪಬ್ಲಿಕ್ ಇನ್​ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಟ್ಯಾಸ್ಕ್ ಫೋರ್ಸ್​ನ ಅಂತಿಮ ವರದಿ ಬಿಡುಗಡೆ;
            </h1>
           
          </div>
          <div className="w-80 space-y-1">
            <img
              src="https://images.tv9kannada.com/wp-content/uploads/2024/07/muharram.jpg?w=1280"
              alt=""
            />
            <p className="text-xs text-gray-500 font-semibold uppercase">
              primary industries
            </p>
            <h1 className="md:text-xl text-base font-bold">
              {" "}
              ಹಿಂದೂ ಹಾಗೂ ಮುಸ್ಲಿಮರ ಭಾವೈಕ್ಯತೆಯ ಹಬ್ಬವೇ ‘ಮೊಹರಂ’, ಏನಿದರ ಮಹತ್ವ?
            </h1>
           
          </div>
          <div className="w-80 space-y-1">
            <img
              src="https://vijaykarnataka.com/thumb/110455047/110455047.jpg?imgsize=98084&width=700&height=394&resizemode=75"
              alt=""
            />
            <p className="text-xs text-gray-500 font-semibold uppercase">
              primary industries
            </p>
            <h1 className="md:text-xl text-base font-bold">
              ರಾಯಚೂರು: ಓಡಾಟ ನಿಲ್ಲಿಸಿದ ರೈಲು; ದೂರದ ಊರುಗಳಿಗೆ ಬಸ್‌ನಲ್ಲಿ ಪ್ರಯಾಣ
            </h1>
           
          </div>
        </div>
      </div>
      <AdminInform/>
    </>
  );
}

export default AdminTopNews;
