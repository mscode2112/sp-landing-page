import React from "react";
import {
    rectangle,
    sectionTextHeadPart1,
    sectionTextHeadPart2,
    sectionTextSub,
    sectionImage,
} from "./bestInvestment.module.css"

import { bestInvestmentContent } from "../../resources/strings";
import { StaticImage } from "gatsby-plugin-image";

const BestInvestment = () => {
  return (
    <div className={rectangle}>
        <div>
            <text className={sectionTextHeadPart1}>Why Animated Explainer Videos Are</text>
            <text className={sectionTextHeadPart2}>Your Best Investment</text>
            <text className={sectionTextSub}>{bestInvestmentContent}</text>
        </div>
        <div className={sectionImage}>
            <StaticImage alt="Image for Animated Explainer Videos are your Best Investment Section" src="../../images/section 2 graphic.svg"/>
        </div>
    </div>
  );
  };
  
export default BestInvestment;
