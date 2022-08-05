import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import {
    rectangle,
    innerContainer,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon1Caption,
    icon2Caption,
    icon3Caption,
    icon4Caption,
    icon5Caption,
    icon6Caption,
    section2TextHead,
    section2TextSub,
} from "./customizedvideosection.module.css";
import { section2HeadContent, section2SubContent } from "../../resources/strings.js"

const CustomizedVideoSection = () => {
  return (
    <div className={rectangle}>
        <div className={innerContainer}>
            <StaticImage className={icon1} alt="Icon for explainer videos" src="../../images/icon 1.svg" />
            <StaticImage className={icon2} alt="Icon for App demos" src="../../images/icon 2.svg" />
            <StaticImage className={icon3} alt="Icon for Product demos" src="../../images/icon 3.svg" />
            <StaticImage className={icon4} alt="Icon for Social media Videos" src="../../images/icon 4.svg" />
            <StaticImage className={icon5} alt="Icon for Educational videos" src="../../images/icon 5.svg" />
            <StaticImage className={icon6} alt="Icon for Whiteboard Videos" src="../../images/icon 6.svg" />
            <text className={icon1Caption}>Explainer Videos</text>
            <text className={icon2Caption}>App Demos</text>
            <text className={icon3Caption}>Product Demos</text>
            <text className={icon4Caption}>SocialMediaVideos</text>
            <text className={icon5Caption}>Educational Videos</text>
            <text className={icon6Caption}>Whiteboard Videos</text>
        </div>
        <div>
            <text className={section2TextHead}>{section2HeadContent}</text>
            <text className={section2TextSub}>{section2SubContent}</text>
        </div>
    </div>
  );
};
export default CustomizedVideoSection;