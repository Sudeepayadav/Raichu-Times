import React from "react";

const Modal = ({ isOpen, closeModal, formData, handleInputChange, handleFileChange, handleSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[9999]">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <h2 className="text-lg font-bold mb-4">Edit News</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full border px-2 py-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full border px-2 h-40 py-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            className="w-full border px-2 py-1 mb-4"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border px-2 py-1"
          />
        </div>
        <div className="flex justify-between">
          <button onClick={closeModal} className="px-4 py-2 bg-gray-500 text-white rounded">
            Close
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
