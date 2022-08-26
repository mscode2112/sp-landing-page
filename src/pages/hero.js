import React from "react";
import { StaticImage } from 'gatsby-plugin-image'
import {
    hero,
    innerHero,
    leftHero,
    rightHero,
    heroImage,
    headline,
    subheadline,
    buttonContainer,
    quoteButton,
    showreelArea,
    showreelElement,
} from "./hero.module.css";
import { headlineContent, subHeadlineContent } from "../resources/strings.js"

const Hero = () => {
  return (
    <div className={hero}>
      <div className={innerHero}>
        <div className={leftHero}>
          <div className={headline}>{headlineContent}</div>
          <div className={subheadline}>{subHeadlineContent}</div>
          <div className={buttonContainer}>
            <button className={quoteButton}>GET A QUOTE</button>
            <div className={showreelArea}>
              <div className={showreelElement}><StaticImage alt="Play Button for showreel" src="../../images/Watchme.svg" /> </div>
              <div className={showreelElement}>Watch Me</div>
            </div>
          </div>
        </div>
        <div className={rightHero}>
          <div className={heroImage}><StaticImage alt="Hero image" src="../../images/Header Graphic.svg" /></div>
        </div>
      </div>
    </div>
  );
};
export default Hero;