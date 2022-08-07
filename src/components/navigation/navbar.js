import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import Nav from "./nav"
import {
  navigation,
  leftNavigation,
  centerNavigation,
  rightNavigation,
  logo,
  callButton,
} from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={navigation}>
      <div className={leftNavigation}>
        <StaticImage className= {logo} alt="SocioPixels Logo" src="../../images/Logo-2020-Full.png" />
      </div>
      <div className={centerNavigation}><Nav/></div>
      <div className={rightNavigation}>
        <button className= {callButton}>CALL +61 4 2233 6496</button>
      </div>  
    </div>
  );
};
export default Navbar;