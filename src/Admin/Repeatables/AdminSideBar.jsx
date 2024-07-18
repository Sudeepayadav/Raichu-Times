import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { MdAddCircleOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const AdminSidebar = () => {
  const [isEcommerceOpen, setIsEcommerceOpen] = useState(false);

  const toggleEcommerce = () => {
    setIsEcommerceOpen(!isEcommerceOpen);
  };

  return (
    <div className="lg:block text-white w-64 border bg-gray-800 p-4 shadow-2xl">
      <div className="flex flex-col mb-4">
        <h2 className="text-2xl font-bold mb-1 capitalize">Admin Panel</h2>
      </div>
      <Link
        to="/admin/"
        className="flex gap-2 pl-3 items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
      >
        <IoHomeOutline />

        <span>Home</span>
      </Link>
      <div className="space-y-4">
        <div>
          <button
            type="button"
            className="flex items-center w-full py-2 px-3 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
            onClick={toggleEcommerce}
          >
            <BiCategory />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">
              Category 1{" "}
            </span>
            <svg
              className={`w-3 h-3 transition-transform duration-200 transform ${
                isEcommerceOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isEcommerceOpen && (
            <ul className="py-2 space-y-2">
              <li>
                <Link
                  to="/admin/topnews"
                  className="flex gap-2 items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span>Top News </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/inform"
                  className="flex gap-2 items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span> Inform</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/peopletalk"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span> People Talk About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/shortnews"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span> Short News</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/business"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span> Business</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/money"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span> Money</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/travel"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span> Travel</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/home"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span> Homed</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/lifestyle"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span> Life And Style</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/sports"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  <span> Sport</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link
          to="/adminlogin"
          className="flex items-center py-2 px-3 rounded hover:bg-gray-500 hover:text-white transition duration-200"
        >
          <TbLogout className="mr-2" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
