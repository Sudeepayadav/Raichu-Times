import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Modal from "./Modal";

const EditSideNews = ({ newsItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(newsItem);
  const [previewData, setPreviewData] = useState(newsItem);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, imageUrl: reader.result, imageFile: file });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setPreviewData(formData);
    closeModal();
    // Implement save to database logic here
  };

  return (
    <div className="grid grid-cols-3 border-b-2 relative">
      <div className="col-span-2 px-4">
        <h3 className="font-bold text-xs py-2">{previewData.title}</h3>
        <p className="text-xs mb-2">{previewData.description}</p>
      </div>
      <div className="flex items-center col-span-1">
        <img className="h-1/2" src={previewData.imageUrl} alt="News" />
      </div>
      <button
        onClick={openModal}
        className="flex justify-center items-center gap-1 absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white rounded"
      >
        <FaRegEdit />
        Edit
      </button>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
        handleSave={handleSave}
      />
    </div>
  );
};

export default EditSideNews;
