import React from "react";
import "./Layout.scss";
import Contents from "./Contents";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="Layout">
      <Sidebar />
      <div className="LayoutContainer">
        <Navbar />
        <Contents />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
