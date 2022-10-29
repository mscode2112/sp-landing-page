import React from "react";
import {
    container,
    innerContainer,
    textSection,
    sectionTextHeadPart1,
    sectionTextHeadPart2,
    sectionTextSub,
    imageSection,
    sectionVideo,
} from "./bestInvestment.module.css"

import { bestInvestmentTitlePart1, bestInvestmentTitlePart2, bestInvestmentContent } from "../../resources/strings";
import SectionVideo from "../../images/videos/BestInvestment.mp4";

const BestInvestment = () => {
  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={imageSection}>
            <video className={sectionVideo} loop autoPlay muted src={SectionVideo} type="video/mp4">
            </video>
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
