import React from "react";
import { navigate } from "gatsby";
import * as lity from 'lity';
import '../../lity-2.4.1/assets/style.css';
import '../../lity-2.4.1/dist/lity.css';
import HeroVideo from "../../images/videos/Hero.mp4";

import {
    hero,
    innerHero,
    leftHero,
    rightHero,
    heroVideo,
    watchVideo,
    textSection,
    headline,
    subheadline,
    buttonContainer,
    quoteButton,
    showreelArea,
    showreelButton,
    showreelText,
} from "./hero.module.css";
import { headlineContent, subHeadlineContent } from "../../resources/strings.js"
import WatchMeVideo from "../../images/videos/WatchMe.mp4";

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
            <button className={quoteButton}
              onClick={() => { navigate("#footer")}}>
                <strong>GET A QUOTE</strong>
            </button>
            <div className={showreelArea}>
              <div className={showreelButton} 
                    onClick={() => { lity('https://vimeo.com/763654563');}}
                    >
                      <video className={watchVideo} loop autoPlay muted src={WatchMeVideo}>
                      </video>
              </div>
              <div className={showreelText}><b>WATCH ME</b></div>
            </div>
          </div>
        </div>
        <div className={rightHero}>
          <div>
            <video className={heroVideo} loop autoPlay muted src={HeroVideo}>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;