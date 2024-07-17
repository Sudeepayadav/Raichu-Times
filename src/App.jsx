import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./User/HomePage";
import InnerPage from "./User/InnerPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
   
        <Route path="/inner" element={<InnerPage />} />
      </Routes>
      </>
  );
}

export default App;
