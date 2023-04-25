import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  container,
  innerContainer,
  textSection,
  sectionTextHeadPart1,
  sectionTextHeadPart2,
  sectionTextSub,
  imageSection,
  sectionImage,
  heroVideoMobile,
} from "./about.module.css";

const About = ({
  titlePart1,
  titlePart2,
  sectionContent,
  aboutImage,
  aboutVideo,
}) => {
  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={imageSection}>
          <GatsbyImage
            className={sectionImage}
            alt="Custom Animated Video"
            image={
              aboutImage != null
                ? getImage(aboutImage.childImageSharp.gatsbyImageData)
                : ""
            }
          ></GatsbyImage>
          <video
            className={heroVideoMobile}
            loop
            autoPlay
            muted
            src={aboutVideo}
          ></video>
        </div>
        <div className={textSection}>
          <h2>
            <span className={sectionTextHeadPart1}>{titlePart1}</span>
            <span className={sectionTextHeadPart2}>{titlePart2}</span>
          </h2>
          <p className={sectionTextSub}>{sectionContent}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
