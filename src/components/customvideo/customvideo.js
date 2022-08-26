import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

import {
  container,
  innerContainer,
  iconSection,
  textSection,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  caption,
  headText,
  subText,
} from "./customvideo.module.css"

import { customVideoHeadContent, customVideoSubContent } from "../../resources/strings.js"

const CustomVideo = () => {
  return (
        <div className={container}>
          <div className={innerContainer}>
            <div className={iconSection}>
              <div className={icon1}>
                <div><StaticImage alt="Icon for explainer videos" src="../../images/icon 1.svg" /></div>
                <div className={caption}>Explainer Videos</div>
              </div>
              <div className={icon2}>
                <StaticImage alt="Icon for App demos" src="../../images/icon 2.svg" />
                <div className={caption}>App Demos</div>
              </div>
              <div className={icon3}>
                <StaticImage alt="Icon for Product demos" src="../../images/icon 3.svg" />
                <div className={caption}>Product Demos</div>
              </div>
              <div className={icon4}>
                <StaticImage alt="Icon for Social media videos" src="../../images/icon 4.svg" />
                <div className={caption}>Social Media Videos</div>
              </div>
              <div className={icon5}>
                <StaticImage alt="Icon for Educational videos" src="../../images/icon 5.svg" />
                <div className={caption}>Educational Videos</div>
              </div>
              <div className={icon6}>
                <StaticImage alt="Icon for whiteboard videos" src="../../images/icon 6.svg" />
                <div className={caption}>Whiteboard Videos</div>
              </div>
            </div>
            <div className={textSection}>
              <div className={headText}>{customVideoHeadContent}</div>
              <div className={subText}>{customVideoSubContent}</div>
            </div>  
          </div>
        </div>
  );
};

export default CustomVideo;
