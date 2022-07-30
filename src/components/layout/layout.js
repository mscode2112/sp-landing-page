import React from "react";
import Navbar from "../navigation/navbar";
import Header from "../header/header";
import CustomizedVideoSection from "../customizedVideoSection/customizedVideoSection";

import {
  layout,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layout}>
      <Navbar/>
      <main>
       <Header/>
       <CustomizedVideoSection/>
      </main>
    </div>
  );
};
export default Layout;