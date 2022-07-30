import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import {
    rectangle,
    innerContainer,
    icon1,
    icon2,
} from "./customizedvideosection.module.css";
// import { section2headtext, section2subtext } from "../../resources/strings.js"

const CustomizedVideoSection = () => {
  return (
    <div className={rectangle}>
        <div className={innerContainer}>
            <StaticImage className={icon1} alt="Icon for explainer videos" src="../../images/icon 1.svg" />
            <StaticImage className={icon2} alt="Icon for App demo" src="../../images/icon 2.svg" />
        </div>
    </div>
  );
};
export default CustomizedVideoSection;