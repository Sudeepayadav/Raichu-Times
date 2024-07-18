import React, { useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Raichur from "/Raichur-Time-Kannada.png";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate successful login by setting token and role in localStorage
    localStorage.setItem("token", "your-token");
    localStorage.setItem("role", "admin");

    // Navigate to the admin page
    navigate("/admin");
  };

  return (
    <>
      <div className="font-playfair-display-sc text-center my-10">
        <div className="flex justify-center items-center h-full">
          <img src={Raichur} alt="img" className="w-[250px]" />
        </div>
      </div>
      <div className="md:flex md:w-4/5 w-full container justify-between mx-auto px-6">
        <div className="md:w-1/2 w-9/12 md:mt-0 mt-10 mx-auto md:h-full">
          <img
            src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?size=626&ext=jpg&ga=GA1.2.1341278248.1705148826&semt=sph"
            alt=""
            className="md:w-9/11 md:h-[500px]"
          />
        </div>
        <div className="md:w-1/2 w-full md:mt-0 mt-10">
          <div className="md:space-y-8 space-y-4 md:mt-10">
            <h1 className="font-bold md:text-3xl text-lg flex">
              <RiAdminFill className="mr-3" /> Admin Login
            </h1>

            <input
              type="number"
              placeholder="Phone Number"
              className="p-3 md:w-4/5 w-full rounded-full border-2 border-gray-500"
              autoComplete="off"
            />

            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter Password"
                className="p-3 md:w-4/5 w-full rounded-full border-2 border-gray-500"
              />
              <div
                className="absolute inset-y-0 lg:right-32 right-4 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <button
              type="submit"
              onClick={handleLogin}
              className="bg-gray-700 text-white p-3 md:w-4/5 w-full rounded-full mb-10 mt-4"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
