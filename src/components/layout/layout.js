import React from "react";
import Navbar from "../navigation/navbar";

import {
  layout,
  heading
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={layout}>
      <Navbar/>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children} </main>
    </div>
  );
};
export default Layout;