import React from "react";
import Layout from "./InnerPage/Layout";
import Bottom from "./InnerPage/Bottom";
import Article from "./InnerPage/Article";
import Header from "../Repeatables/Header";
import Insidebanner from "./InnerPage/InsideBanner";
import Subpage from "./InnerPage/SubPage";
import Footer from "../Repeatables/Footer";

function InnerPage() {
  return (
    <div>
      <Header />
      <Layout />
      <Subpage />
      <Bottom />
      <Article />
      <Footer />
    </div>
  );
}

export default InnerPage;
