import React, { useState } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
// import "./Header.css";
import { Link } from "react-router-dom";
import Raichur from "/Raichur-Time-Kannada.png";
import { FaCloudSunRain } from "react-icons/fa";
const menuItems = [
  {
    title: "ಸಂಕ್ಷಿಪ್ತ",
    links: [
      "ಮನರಂಜನೆ",
      "ವಾಣಿಜ್ಯ",
      "ಜೋತಿಷ",
      "ಕ್ರೀಡೆ",
      "ಲೈಫ್‌ಸ್ಟೈಲ್",
      "ಶಿಕ್ಷಣ-ಉದ್ಯೋಗ",
      "ಟೆಕ್ನಾಲಜಿ",
      "ಪಯಣ",
    ],
  },
  { title: "ಸುದ್ದಿ", links: ["ದೇಶ", "ಕನ್ನಡ", "ಕ್ರೀಡೆ"] },
  {
    title: "ನಿಮ್ಮ ಜಿಲ್ಲೆ",
    links: [
      "ಬೆಂಗಳೂರು ನಗರ",
      "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
      "ಬಾಗಲಕೋಟ",
      "ಬೆಳಗಾವಿ",
      "ಬಳ್ಳಾರಿ",
      "ಬೀದರ್",
      "ವಿಜಯಪುರ",
      "ಚಾಮರಾಜನಗರ",
      "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
      "ಚಿಕ್ಕಮಗಳೂರು",
      "ಚಿತ್ರದುರ್ಗ",
      "ದಕ್ಷಿಣ ಕನ್ನಡ",
      "ದಾವಣಗೆರೆ",
      "ಧಾರವಾಡ",
      "ಗದಗ",
      "ಕಲಬುರ್ಗಿ",
      "ಹಾಸನ",
      "ಹಾವೇರಿ",
      "ಕೊಡಗು",
      "ಕೋಲಾರ",
      "ಕೊಪ್ಪಳ",
      "ಮಂಡ್ಯ",
      "ಮೈಸೂರು",
      "ರಾಯಚೂರು",
      "ರಾಮನಗರ",
      "ಶಿವಮೊಗ್ಗ",
      "ತುಮಕೂರು",
      "ಉಡುಪಿ",
      "ಉತ್ತರ ಕನ್ನಡ",
      "ವಿಜಯನಗರ",
      "ಯಾದಗಿರಿ",
    ],
  },
  {
    title: "ವಾಣಿಜ್ಯ",
    links: [
      "ಅನಂತ್-ರಾಧಿಕಾ ವೆಡ್ಡಿಂಗ್",
      "ಚಿನ್ನ & ಬೆಳ್ಳಿ ಬೆಲೆ",
      "ವಾಣಿಜ್ಯ ಸುದ್ದಿ",
      "ಬಜೆಟ್ 2024",
      "ಕ್ರಿಪ್ಟೋ ಕರೆನ್ಸಿ",
      "ಷೇರು ಮಾರುಕಟ್ಟೆ",
      "ಪೆಟ್ರೋಲ್‌ & ಡೀಸೆಲ್‌ ಬೆಲೆ",
    ],
  },
  {
    title: "ಸಿನಿಮಾ",
    links: ["ಸಿನಿಮಾ ಸುದ್ದಿ", "ಸಿನಿಮಾ ವಿಮರ್ಶೆ", "ರಂಗಭೂಮಿ", "ಡಿಜಿಟಲ್ ಒಟಿಟಿ"],
  },
  {
    title: "ಜೀವನಶೈಲಿ",
    links: [
      "ಸಂಬಂಧ",
      "ಆರೋಗ್ಯ",
      "ಸೌಂದರ್ಯ",
      "ಫಿಟ್‌ನೆಸ್‌",
      "ಯೋಗ",
      "ಫ್ಯಾಶನ್",
      "ಮನೆ-ಅಲಂಕಾರ",
    ],
  },
  {
    title: "ಜ್ಯೋತಿಷ್ಯ",
    links: [
      "ದಿನ ಭವಿಷ್ಯ",
      "ವಾರ ಭವಿಷ್ಯ",
      "ರಾಶಿ ಹೊಂದಾಣಿಕೆ",
      "ಪರಿಹಾರಗಳು",
      "ಮಾಸಿಕ ಭವಿಷ್ಯ",
    ],
  },
  {
    title: "ಟೆಕ್ನಾಲಜಿ",
    links: ["ಟೆಕ್ ಸುದ್ದಿ", "ಟಿಪ್ಸ್‌ - ಟ್ರಿಕ್ಸ್‌", "ಗ್ಯಾಜೆಟ್ಸ್", "ರಿವ್ಯೂ"],
  },
  {
    title: "ಶಿಕ್ಷಣ",
    links: [
      "ಸುದ್ದಿ",
      "ಎಕ್ಸಾಮ್‌ ಟಿಪ್ಸ್‌",
      "ಪ್ರವೇಶ ಪರೀಕ್ಷೆಗಳು",
      "ಪ್ರವೇಶಾತಿಗಳು",
      "ಫಲಿತಾಂಶ",
      "ಶಿಕ್ಷಣ ಟಿಪ್ಸ್",
    ],
  },
  { title: "ಕ್ರೀಡೆ", links: ["ಕ್ರಿಕೆಟ್", "ಫುಟ್‌ಬಾಲ್"] },
];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className=" border-b border-gray-200  relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
        <span className="text-2xl font-semibold whitespace-nowrap ">Flowbite</span>
      </a> */}
        <div className="w-full">
          <Link to="/">
            <div className="flex justify-center">
              <img
                src="https://s0.2mdn.net/simgad/12785257458376499487"
                alt="ads"
              />
            </div>
          </Link>
        </div>
        <hr className="w-full md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] h-px mx-auto bg-white border-0 rounded mt-2" />
        <div className=" items-center justify-center w-full">
          <div className={` bg-white w-full}`}>
            <div className=" text-center my-5">
              <div className="flex sm:justify-center justify-around items-center h-full">
                <img
                  src={Raichur}
                  alt="img"
                  className="sm:w-[220px] w-[200px]"
                />
                <span className="flex sm:hidden text-base font-bold">
                  <FaCloudSunRain className="w-6 h-6 mr-2" />
                  Rainy 24°C
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="  w-full md:hidden justify-end flex">
          <button
            className="inline-flex items-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden
           hover:bg-gray-100 "
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="w-5 h-5" />
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`absolute left-0 w-full mx-2 rounded-lg   border-gray-200 bg-gray-800   ${
            mobileMenuOpen ? "block" : "hidden"
          } md:hidden`}
          style={{ top: "calc(100% + 0.5rem)", zIndex: 20 }}
        >
          <ul className="flex flex-col p-4">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                {item.links ? (
                  <>
                    <button
                      className="flex items-center whitespace-nowrap  w-full py-2 px-3 rounded-lg text-white hover:bg-blue-500 "
                      onClick={() => handleDropdownClick(index)}
                    >
                      {item.title}
                      <div className=" flex justify-end w-full">
                      <FaChevronDown
                        className={`w-5 h-5 ml-2 transition-transform  ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                      </div>
                    </button>
                    {openDropdown === index && (
                      <div
                        className="absolute right-10 top-full mt-2 w-64  
                       bg-gray-700 border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg  z-20"
                      >
                        <ul>
                          {item.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                href="#"
                                className="block px-4 py-2 text-white hover:bg-blue-500 "
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div
          id="desktop-menu"
          className="hidden md:flex md:items-center md:space-x-8 md:mt-0 md:w-auto md: md:border-0 md:divide-y-0"
        >
          <ul className="flex  flex-col md:flex-row md:space-x-4">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                {item.links ? (
                  <>
                    <button
                      className="flex items-center py-2 px-3 text-sm text-gray-900 hover:bg-gray-100 "
                      onClick={() => handleDropdownClick(index)}
                    >
                      {item.title}
                      <FaChevronDown
                        className={`w-5 h-5 ml-2 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="absolute left-0 top-full mt-2 w-64   bg-gray-800 text-white divide-y divide-gray-100 rounded-lg shadow-lg  z-20">
                        <ul>
                          {item.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                href="#"
                                className="block px-4 py-2  hover:bg-blue-500 "
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-500 "
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;