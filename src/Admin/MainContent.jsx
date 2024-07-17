import React from 'react';

const MainContent = () => {
  return (
    <div className="flex-grow p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded shadow">Articles</div>
        <div className="p-4 bg-white rounded shadow">Categories</div>
        <div className="p-4 bg-white rounded shadow">Users</div>
        <div className="p-4 bg-white rounded shadow">Settings</div>
      </div>
    </div>
  );
};

export default MainContent;