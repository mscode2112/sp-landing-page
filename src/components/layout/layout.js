import React from "react";
import Navbar from "../navigation/navbar";
import Header from "../header/header";
import CustomizedVideoSection from "../customizedVideoSection/customizedVideoSection";
import Numbers from "../numbers/numbers"
import Portfolio from "../portfolio/portfolio";
import Process from "../process/process";

import {
  layout,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layout}>
      <Navbar/>
      <main>
       <Header/>
       <Numbers/>
       <CustomizedVideoSection/>
       <Portfolio/>
       <Process/>
      </main>
    </div>
  );
};
export default Layout;