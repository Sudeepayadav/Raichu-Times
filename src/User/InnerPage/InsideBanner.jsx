import React from "react";
import { IoShareSocial } from "react-icons/io5";
import Bottom from "./Bottom";

const Insidebanner = () => {
  return (
    <div className=" my-8 mt-40">
      {/* Headline */}
      <div className=" m-8 p-4 md:flex flex-col mb-4 mr-7 ">
        <h1 className=" text-3xl font-bold ml-10">
          ಪುಟಿನ್ – ಮೋದಿ ಭೇಟಿ – ರಷ್ಯಾ ಸೇನೆಯಲ್ಲಿದ್ದ ಭಾರತೀಯರ ಬಿಡುಗಡೆಗೆ ಅಸ್ತು
        </h1>
        <span className=" text-gray-500 text-sm ml-12">2 hours ago</span>

        <div className="flex items-center justify-between ml-12 ">
          <span>LBS Nagar, Raichur</span>
          <button className="text-medium mr-16 -mt-1" >Share <IoShareSocial  className="ml-16 -mt-5"/></button>
        </div>
        
      </div>
      

      <div className=" md:flex items-center justify-center sm:block w-full ">
        <img
          src="https://foreignpolicy.com/wp-content/uploads/2021/12/modi-putin-meeting-2021-GettyImages-1237050361.jpg?w=1000"
          className=" h-500 w-fit ml-20 "
        />
      </div>
      
    </div>
  );
};

export default Insidebanner;