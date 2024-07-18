import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Raichur from "/Raichur-Time-Kannada.png";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div>
        <hr />
        <div className="w-10/12 m-auto text-xs py-4">
          <div className="flex flex-col lg:flex-row lg:gap-16">
            <div className=" ml-8 lg:w-1/4 flex justify-center lg:justify-start mt-8 mb-4 lg:mb-0">
              <img src={Raichur} alt="" className="mx-auto lg:mx-0" />
            </div>
            <div className="flex flex-wrap justify-between w-full lg:w-3/4 gap-y-6 lg:gap-y-0 lg:gap-40">
              <div className="w-full sm:w-1/2 lg:w-auto text-center lg:text-left">
                <h1 className="text-base font-bold">Entertainment</h1>
                <div className="mt-2 space-y-1.5">
                  <a href="" className="block">
                    News
                  </a>
                  <a href="" className="block">
                    Movie Review
                  </a>
                  <a href="" className="block">
                    Special
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-auto text-center lg:text-left">
                <h1 className="text-base font-bold">Money</h1>
                <div className="mt-2 space-y-1.5">
                  <a href="" className="block">
                    Business
                  </a>
                  <a href="" className="block">
                    Economy
                  </a>
                  <a href="" className="block">
                    Market
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-auto text-center lg:text-left">
                <h1 className="text-base font-bold">Sports</h1>
                <div className="mt-2 space-y-1.5">
                  <a href="" className="block">
                    Cricket
                  </a>
                  <a href="" className="block">
                    Football
                  </a>
                  <a href="" className="block">
                    Special
                  </a>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-auto text-center lg:text-left">
                <h1 className="text-base font-bold">Follow Us On</h1>
                <div className="flex justify-center lg:justify-start space-x-5 mt-2">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="h-7 w-7" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-2 mt-5">
          <a>
            <span>About Us </span>| <span>Terms and Conditions</span> |{" "}
            <span>Privacy policy</span>
          </a>
        </div>

        <p className="text-center mt-5 mb-5 flex justify-center items-center gap-3">
          <FaRegCopyright />
          <span>Copyright - 2024 Raichur Times. All rights reserved.</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
