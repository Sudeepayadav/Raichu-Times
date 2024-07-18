import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./User/HomePage";
import InnerPage from "./User/InnerPage";
import Admin from "./Admin/Admin";
import AdminRoute from "./Routes/AdminRoute";
import AdminLogin from "./Admin/Adminlogin";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/inner" element={<InnerPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />

          <Route
            path="/admin/*"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
