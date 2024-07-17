import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav className="flex-grow">
        <a href="#" className="block py-2.5 px-4 hover:bg-gray-700">Dashboard</a>
        <a href="#" className="block py-2.5 px-4 hover:bg-gray-700">Articles</a>
        <a href="#" className="block py-2.5 px-4 hover:bg-gray-700">Categories</a>
        <a href="#" className="block py-2.5 px-4 hover:bg-gray-700">Users</a>
        <a href="#" className="block py-2.5 px-4 hover:bg-gray-700">Settings</a>
      </nav>
    </div>
  );
};

export default Sidebar;