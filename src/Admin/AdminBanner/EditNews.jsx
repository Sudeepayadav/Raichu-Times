import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { CKEditor } from "ckeditor4-react";
import Editor from "./Editor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const EditNews = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const { previewData } = location.state;

  const [formData, setFormData] = useState(previewData);

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

  const handleDescriptionChange = (event) => {
    setFormData({ ...formData, description: event.editor.getData() });
  };

  const handleSave = () => {
    // Implement save to database logic here
    // After saving, navigate back to the main page or any other page
    navigate("/");
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-center text-xl font-semibold">Edit News</h2>
      <form>
        {formData.imageUrl && (
          <img src={formData.imageUrl} alt="Preview" className="my-2" />
        )}
        <div>
          <label className="font-semibold">Thumbnail</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-5">
          <label className="font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-5">
          <label className="font-semibold">Description</label>
          <CKEditor
            initData={formData.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="px-4 py-2 mt-5 bg-blue-500 text-white rounded"
        >
          Save
        </button>
      </form>
      <div className="App">
        <h1>ckEditor 5</h1>
        <Editor
          name="description"
          onChange={(data) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        />

        {JSON.stringify(data)}
      </div>
    </div>
  );
};

export default EditNews;
