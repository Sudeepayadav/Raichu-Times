import React from "react";
import { MdSunny } from "react-icons/md";

const TopBar = () => {
  return (
    <div className=" hidden md:flex md:p-2 gap-4 mt-10  md:bg-white ">
      {/* Date, weather and movie */}

      {/* Date  */}

      <div className=" p-4 h-auto flex items-center  lg:w-1/4 bg-[#3B3B3B] w-max rounded-2xl">
        <div className=" ">
          <p className=" text-[#EE5C51] font-bold text-lg">ಸೋಮವಾರ</p>
          <div className="flex gap-2">
            <span className="text-white text-5xl">22&nbsp;</span>
            <span className=" p-2 border-l-2 text-white text-xs">
              ಹಳೆಯ ಸುದ್ದಿಯನ್ನು ವೀಕ್ಷಿಸಲು ದಿನಾಂಕವನ್ನು ಬದಲಾಯಿಸಿ
            </span>
          </div>
        </div>
      </div>

      {/* Weather */}
      <div className=" h-auto bg-[#3B3B3B] w-max rounded-2xl p-2 px-4">
        <div className=" flex justify-between ">
          <div>
            <p className=" text-white text-xs">ರಾಯಚೂರು</p>
            <p className=" text-3xl font-bold text-white">29&deg;</p>
          </div>

          <div className=" text-white flex gap-4 text-right ">
            <div className=" leading-3">
              <p className=" text-xs">Sunny</p>
              <span className=" text-xs">H:30&deg; L:13&deg;</span>
            </div>
            <div className="">
              <span>
                <MdSunny
                  varaint="filled"
                  className=" text-yellow-500 text-4xl"
                />
              </span>
            </div>
          </div>
        </div>

        {/* Weather Forecast */}

        <div className=" flex gap-4 justify-between">
          <div className=" p-1 space-y-2 text-center text-xs text-white leading-3">
            <span className=" ">1 PM</span>
            <p>
              <MdSunny varaint="filled" className=" text-yellow-500 text-xl" />
            </p>
            <p>29&deg;</p>
          </div>
          <div className=" p-1 space-y-2 gap-2 text-xs text-center text-white leading-3">
            <span className=" ">2 PM</span>
            <p>
              <MdSunny varaint="filled" className=" text-yellow-500 text-xl" />
            </p>
            <p>28&deg;</p>
          </div>
          <div className=" p-1 gap-2 space-y-2 text-xs text-center text-white leading-3">
            <span className=" ">3 PM</span>
            <p>
              <MdSunny varaint="filled" className=" text-yellow-500 text-xl" />
            </p>
            <p>27&deg;</p>
          </div>
          <div className=" p-1 space-y-2 gap-2 text-xs text-center text-white leading-3">
            <span className=" ">4 PM</span>
            <p>
              <MdSunny varaint="filled" className=" text-yellow-500 text-xl" />
            </p>
            <p>24&deg;</p>
          </div>
          <div className=" p-1 space-y-2 gap-2 text-xs text-center text-white leading-3">
            <span className=" ">5 PM</span>
            <p>
              <MdSunny varaint="filled" className=" text-yellow-500 text-xl" />
            </p>
            <p>22&deg;</p>
          </div>
          <div className=" p-1 space-y-2 gap-2 text-xs text-center text-white leading-3">
            <span className=" ">6 PM</span>
            <p>
              <MdSunny varaint="filled" className=" text-yellow-500 text-xl" />
            </p>
            <p>19&deg;</p>
          </div>
        </div>
      </div>

      {/* Theatre timing */}

      <div className=" h-auto flex justify-evenly bg-[#3B3B3B] text-white rounded-2xl items-center p-2  ">
        <div className=" flex text-center p-1 items-center">
          <span className=" font-bold">ರಾಯಚೂರು ಥಿಯೇಟರ್</span>
        </div>

        <div className="flex justify-between gap-3">
          <div>
            <img
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202407/6684b53d8067b-kalki-2898-ad-makes-big-numbers--inches-closer-to-rs-400-crore-in-india-031939873-16x9.jpg?size=948:533"
              className="w-24 lg:w-32 lg:h-16  rounded-xl"
            ></img>
            <span className=" text-xs">ಕಲ್ಕಿ</span>
            <span className="  block leading-3 text-xs text-gray-300">
              Sci-fi
            </span>
          </div>
          <div className="  ">
            <img
              src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/Jawan.png"
              className="w-24 lg:w-32 lg:h-16  rounded-xl"
            ></img>
            <span className=" text-xs ">Mission Impossible7</span>
            <span className=" block leading-3 text-xs text-gray-300 ">
              Action
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;