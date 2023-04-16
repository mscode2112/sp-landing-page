import React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
  container,
  innerContainer,
  iconSection,
  textSection,
  icon,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  caption,
  headText,
  subText,
} from "./customvideo.module.css";

import {
  customVideoHeadContent,
  customVideoSubContent,
} from "../../resources/strings.js";

const CustomVideo = () => {
  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={iconSection}>
          <div className={icon1}>
            <div
              className={icon}
              onClick={() => navigate("customvideotypes/explainerVideos")}
            >
              <StaticImage
                alt="Icon for explainer videos"
                src="../../images/icon 1.svg"
                placeholder="BLURRED"
              />
            </div>
            <h3>
              <strong className={caption}>Explainer Videos</strong>
            </h3>
          </div>
          <div className={icon2}>
            <div
              className={icon}
              onClick={() => navigate("customvideotypes/appDemos")}
            >
              <StaticImage
                alt="Icon for App demos"
                src="../../images/icon 2.svg"
                placeholder="BLURRED"
              />
            </div>
            <h3>
              <strong className={caption}>App Demos</strong>
            </h3>
          </div>
          <div className={icon3}>
            <div
              className={icon}
              onClick={() => navigate("customvideotypes/productVideos")}
            >
              <StaticImage
                alt="Icon for Product demos"
                src="../../images/icon 3.svg"
                placeholder="BLURRED"
              />
            </div>
            <h3>
              <strong className={caption}>Product Videos</strong>
            </h3>
          </div>
          <div className={icon4}>
            <div
              className={icon}
              onClick={() => navigate("customvideotypes/videoSeries")}
            >
              <StaticImage
                alt="Icon for Video Series"
                src="../../images/icon 4.svg"
                placeholder="BLURRED"
              />
            </div>
            <h3>
              <strong className={caption}>Video Series</strong>
            </h3>
          </div>
          <div className={icon5}>
            <div
              className={icon}
              onClick={() => navigate("customvideotypes/educationalVideos")}
            >
              <StaticImage
                alt="Icon for Educational videos"
                src="../../images/icon 5.svg"
                placeholder="BLURRED"
              />
            </div>
            <h3>
              <strong className={caption}>Educational Videos</strong>
            </h3>
          </div>
          <div className={icon6}>
            <div
              className={icon}
              onClick={() => navigate("customvideotypes/whiteboardVideos")}
            >
              <StaticImage
                alt="Icon for whiteboard videos"
                src="../../images/icon 6.svg"
                placeholder="BLURRED"
              />
            </div>
            <h3>
              <strong className={caption}>Whiteboard Videos</strong>
            </h3>
          </div>
        </div>
        <div className={textSection}>
          <h2 className={headText}>{customVideoHeadContent}</h2>
          <p className={subText}>{customVideoSubContent}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomVideo;
