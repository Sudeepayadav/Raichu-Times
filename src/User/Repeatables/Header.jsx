import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Raichur from "/Raichur-Time-Kannada.png";

const Header = () => {
  return (
    <div className="fixed bg-white w-screen z-1000">
      <div className="font-playfair-display-sc text-center my-5">
        {/* <h1 className="text-4xl font-bold text-black">RAICHUR TIMES</h1> */}
        <div className="flex justify-center items-center h-full">
          <img src={Raichur} alt="img" className="w-[220px]" />
        </div>
      </div>

      <div className="flex flex-row px-8 border-b-2 border-t-2 py-2 text-black font-sans justify-center">
        <div className="w-4/5 font-bold text-xs">
          <div className="relative inline-flex ">
            <div className="relative group">
              <button
                type="button"
                className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg  bg-white text-gray-800 hover:text-red-500"
              >
                ಸಂಕ್ಷಿಪ್ತ{" "}
              </button>
              <div className="absolute mt-1 w-48 bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಮನರಂಜನೆ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ವಾಣಿಜ್ಯ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಜೋತಿಷ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕ್ರೀಡೆ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಲೈಫ್‌ಸ್ಟೈಲ್{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಶಿಕ್ಷಣ-ಉದ್ಯೋಗ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಟೆಕ್ನಾಲಜಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಪಯಣ{" "}
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg  bg-white text-gray-800 hover:text-red-500"
              >
                ಸುದ್ದಿ{" "}
              </button>
              <div className="absolute mt-1 w-48 bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ದೇಶ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕರ್ನಾಟಕ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕ್ರೀಡೆ{" "}
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg  bg-white text-gray-800 hover:text-red-500"
              >
                ನಿಮ್ಮ ಜಿಲ್ಲೆ
              </button>
              <div className="absolute mt-1 w-48 bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬೆಂಗಳೂರು ನಗರ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬೆಂಗಳೂರು ನಗರ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬಾಗಲಕೋಟ{" "}
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-white text-gray-800 hover:text-red-500"
              >
                ನಿಮ್ಮ ಜಿಲ್ಲೆ
              </button>
              <div className="absolute mt-1 w-96 bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto grid grid-cols-2 gap-2">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬೆಂಗಳೂರು ನಗರ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬಾಗಲಕೋಟ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬೆಳಗಾವಿ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬಳ್ಳಾರಿ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬೀದರ್
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ವಿಜಯಪುರ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಚಾಮರಾಜನಗರ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಚಿಕ್ಕಬಳ್ಳಾಪುರ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಚಿಕ್ಕಮಗಳೂರು
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಚಿತ್ರದುರ್ಗ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ದಕ್ಷಿಣ ಕನ್ನಡ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ದಾವಣಗೆರೆ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಧಾರವಾಡ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಗದಗ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕಲಬುರ್ಗಿ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಹಾಸನ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಹಾವೇರಿ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕೊಡಗು
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕೋಲಾರ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕೊಪ್ಪಳ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಮಂಡ್ಯ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಮೈಸೂರು
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ರಾಯಚೂರು
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ರಾಮನಗರ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಶಿವಮೊಗ್ಗ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ತುಮಕೂರು
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಉಡುಪಿ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಉತ್ತರ ಕನ್ನಡ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ವಿಜಯನಗರ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಯಾದಗಿರಿ
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg  bg-white text-gray-800 hover:text-red-500"
              >
                ವಾಣಿಜ್ಯ
              </button>
              <div className="absolute mt-1 w-48 bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಅನಂತ್-ರಾಧಿಕಾ ವೆಡ್ಡಿಂಗ್{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಚಿನ್ನ & ಬೆಳ್ಳಿ ಬೆಲೆ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ವಾಣಿಜ್ಯ ಸುದ್ದಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಬಜೆಟ್ 2024{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕ್ರಿಪ್ಟೋ ಕರೆನ್ಸಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಷೇರು ಮಾರುಕಟ್ಟೆ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಪೆಟ್ರೋಲ್‌ & ಡೀಸೆಲ್‌ ಬೆಲೆ{" "}
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg  bg-white text-gray-800 hover:text-red-500"
              >
                ಸಿನಿಮಾ
              </button>
              <div className="absolute mt-1 w-48 bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಸಿನಿಮಾ ಸುದ್ದಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಸಿನಿಮಾ ವಿಮರ್ಶೆ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ರಂಗಭೂಮಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಡಿಜಿಟಲ್ ಒಟಿಟಿ{" "}
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg  bg-white text-gray-800 hover:text-red-500"
              >
                ಜೀವನಶೈಲಿ
              </button>
              <div className="absolute mt-1 w-48 bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಸಂಬಂಧ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಆರೋಗ್ಯ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಸೌಂದರ್ಯ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಫಿಟ್‌ನೆಸ್‌{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಯೋಗ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಫ್ಯಾಶನ್{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಮನೆ-ಅಲಂಕಾರ{" "}
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-white text-gray-800 hover:text-red-500"
              >
                ಜ್ಯೋತಿಷ್ಯ
              </button>
              <div className="absolute mt-1 w-max bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ದಿನ ಭವಿಷ್ಯ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ವಾರ ಭವಿಷ್ಯ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ರಾಶಿ ಹೊಂದಾಣಿಕೆ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಪರಿಹಾರಗಳು
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಮಾಸಿಕ ಭವಿಷ್ಯ
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-white text-gray-800 hover:text-red-500"
              >
                ಟೆಕ್ನಾಲಜಿ
              </button>
              <div className="absolute mt-1 w-max bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಟೆಕ್ ಸುದ್ದಿ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಟಿಪ್ಸ್‌ - ಟ್ರಿಕ್ಸ್‌
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಗ್ಯಾಜೆಟ್ಸ್
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ರಿವ್ಯೂ
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-white text-gray-800 hover:text-red-500"
              >
                ಶಿಕ್ಷಣ
              </button>
              <div className="absolute mt-1 w-max bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಸುದ್ದಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಎಕ್ಸಾಮ್‌ ಟಿಪ್ಸ್‌{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಪ್ರವೇಶಾತಿಗಳು{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಫಲಿತಾಂಶ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಶಿಕ್ಷಣ ಟಿಪ್ಸ್{" "}
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-white text-gray-800 hover:text-red-500"
              >
                ಕ್ರೀಡೆ
                {/*<svg
                  className="transform transition-transform duration-200 group-hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>  */}
              </button>
              <div className="absolute mt-1 w-max bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕ್ರಿಕೆಟ್{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಫುಟ್‌ಬಾಲ್{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ವಿಶ್ವಕಪ್{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಟೆನ್ನಿಸ್{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಇತರ ಕ್ರೀಡೆಗಳು{" "}
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-white text-gray-800 hover:text-red-500"
              >
                ಶಿಕ್ಷಣ
              </button>
              <div className="absolute mt-1 w-max bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಸುದ್ದಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಎಕ್ಸಾಮ್‌ ಟಿಪ್ಸ್‌{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಪ್ರವೇಶಾತಿಗಳು{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಫಲಿತಾಂಶ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಶಿಕ್ಷಣ ಟಿಪ್ಸ್{" "}
                </a>
              </div>
            </div>
            <div className="relative group">
              <button
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-white text-gray-800 hover:text-red-500"
              >
                More ⋮
              </button>
              <div className="absolute mt-1 w-max bg-white shadow-md rounded-lg py-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಅಟೋಮೊಬೈಲ್‌{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ವೆಬ್‌ ಸ್ಟೋರಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕೊರೊನಾ
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ವೈರಲ್‌ ಅಡ್ಡ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಗ್ಯಾಲರಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ವಿಡಿಯೋ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಟಿವಿ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಕ್ರೀಡೆ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಚುನಾವಣೆ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಧರ್ಮ{" "}
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  href="#"
                >
                  ಸುದ್ದಿ ಸತ್ಯಾಂಶ{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
