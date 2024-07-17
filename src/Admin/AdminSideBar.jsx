import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { MdAddCircleOutline } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

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
      <div className="space-y-4">
        <Link
          to="/"
          className="flex items-center py-2 px-3 rounded hover:bg-gray-500 hover:text-white transition duration-200"
        >
          <MdAddCircleOutline className="mr-2" />
          Home Page
        </Link>
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
                  to="/topnews"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  Top News{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/inform"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  Inform{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/peopletalk"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  People Talk About{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/shortnews"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  Short News{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  Business{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/money"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  Money{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/travel"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  Travel{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/home"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  Homed{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/lifestyle"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  Life And Style{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/sports"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-500 hover:text-white dark:text-white dark:hover:bg-gray-700"
                >
                  Sport{" "}
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link
          to="/"
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
