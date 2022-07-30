import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import {
    header,
    leftHeader,
    rightHeader,
    headline,
    subheadline,
    quoteButton,
    playButton,
    headerImage,
    watchme,
} from "./header.module.css";
import { headlineContent, subHeadlineContent } from "../../resources/strings.js"

const Navbar = () => {
  return (
    <div className={header}>
      <div className={leftHeader}>
        <text className={headline}>{headlineContent}</text>
        <text className={subheadline}>{subHeadlineContent}</text>
        <button className={quoteButton}>GET A QUOTE</button>
        <StaticImage className={playButton} alt="Play Button for showreel" src="../../images/Watchme.svg" /> 
        <text className={watchme}>Watch Me</text>
      </div>
      <div className={rightHeader}>
        <StaticImage className={headerImage} alt="Header banner image" src="../../images/Header Graphic.svg" />
      </div>
    </div>
  );
};
export default Navbar;