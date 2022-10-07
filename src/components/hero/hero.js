import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

import {
    hero,
    innerHero,
    leftHero,
    rightHero,
    heroImage,
    textSection,
    headline,
    subheadline,
    buttonContainer,
    quoteButton,
    showreelArea,
    showreelElement,
} from "./hero.module.css";
import { headlineContent, subHeadlineContent } from "../../resources/strings.js"

const Hero = () => {
  return (
    <div className={hero}>
      <div className={innerHero}>
        <div className={leftHero}>
          <div className={textSection}>
            <h1 className={headline}>{headlineContent}</h1>
            <p className={subheadline}>{subHeadlineContent}</p>
          </div>
          <div className={buttonContainer}>
            <button className={quoteButton}><strong>GET A QUOTE</strong></button>
            <div className={showreelArea}>
              <div className={showreelElement}><StaticImage alt="Play Button for showreel" src="../../images/Watchme.svg" /> </div>
              <div className={showreelElement}><b>Watch Me</b></div>
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