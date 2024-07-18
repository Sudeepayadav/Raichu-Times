import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminSidebar from "./Repeatables/AdminSideBar";
import AdminBanner from "./AdminBanner/AdminBanner";
import AdminTopNews from "./AdminTopNews";
import AdminInform from "./AdminInform";
import AdminPeopleTalk from "./AdminPeopleTalk";
import AdminShortNews from "./AdminShortNews";
import AdminBusiness from "./AdminBusiness";
import AdminMoney from "./AdminMoney";
import AdminTravel from "./AdminTravel";
import AdminHomed from "./AdminHomed";
import AdminLifeAndStyle from "./AdminLifeAndStyle";
import AdminSport from "./AdminSport";

function Admin() {
  return (
    <>
      <div className="flex">
        <AdminSidebar />
        <div className="w-full max-w-[1300px]  m-2 p-3">
          <Routes>
            <Route path="/" element={<AdminBanner />} />
            <Route path="/topnews" element={<AdminTopNews />} />
            <Route path="/inform" element={<AdminInform />} />
            <Route path="/peopletalk" element={<AdminPeopleTalk />} />
            <Route path="/shortnews" element={<AdminShortNews />} />
            <Route path="/business" element={<AdminBusiness />} />
            <Route path="/money" element={<AdminMoney />} />
            <Route path="/travel" element={<AdminTravel />} />
            <Route path="/home" element={<AdminHomed />} />
            <Route path="/lifestyle" element={<AdminLifeAndStyle />} />
            <Route path="/sports" element={<AdminSport />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Admin;