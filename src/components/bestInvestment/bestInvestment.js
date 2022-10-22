import React from "react";
import {
    container,
    innerContainer,
    textSection,
    sectionTextHeadPart1,
    sectionTextHeadPart2,
    sectionTextSub,
    imageSection,
    sectionImage,
} from "./bestInvestment.module.css"

import { bestInvestmentTitlePart1, bestInvestmentTitlePart2, bestInvestmentContent } from "../../resources/strings";
import { StaticImage } from "gatsby-plugin-image";

const BestInvestment = () => {
  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={imageSection}>
            <div className={sectionImage}>
              <StaticImage alt="Image for Animated Explainer Videos are your Best Investment Section" src="../../images/section 2 graphic.png"/>
            </div>
        </div>
        <div className={textSection}>
          <h2>
            <span className={sectionTextHeadPart1}>{bestInvestmentTitlePart1}</span>
            <span className={sectionTextHeadPart2}>{bestInvestmentTitlePart2}</span>
          </h2>
          <p className={sectionTextSub}>{bestInvestmentContent}</p>
        </div>
      </div>  
    </div>
  );
  };
  
export default BestInvestment;
