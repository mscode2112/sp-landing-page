import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";
import { useBetween } from "use-between";

import {
  hero,
  innerHeader,
  leftHero,
  rightHero,
  heroVideo,
  heroVideoMobile,
  watchVideo,
  textSection,
  headline,
  subheadline,
  subheadlineMobile,
  buttonContainer,
  quoteButton,
  showreelArea,
  showreelButton,
  showreelText,
} from "./header.module.css";
import { subHeadlineContentMobile } from "../../resources/strings.js";
import HeroVideo from "../../images/videos/Hero3.mp4";
import WatchMeVideo from "../../images/videos/WatchMe.mp4";
import ShowreelVideo from "../../images/videos/SocioPixels Showreel 2022.mp4";
import VideoModal from "../../components/videoModal/videoModal";

const useShareableState = () => {
  const [videoModal5Open, setVideoModal5Open] = React.useState(false);
  const [videoModal5Data, setVideoModal5Data] = React.useState(null);
  return {
    videoModal5Open,
    setVideoModal5Open,
    videoModal5Data,
    setVideoModal5Data,
  };
};
export const useSharedVideoModal5State = () => useBetween(useShareableState);

const Header = ({
  headlineContent,
  subHeadlineContent,
  videoUrl,
  headerImage,
}) => {
  const { setVideoModal5Open, setVideoModal5Data } =
    useSharedVideoModal5State();
  return (
    <div className={hero}>
      <div className={innerHeader}>
        <div className={leftHero}>
          <div className={textSection}>
            <h1 className={headline}>{headlineContent}</h1>
            <p className={subheadline}>{subHeadlineContent}</p>
            <p className={subheadlineMobile}>{subHeadlineContent}</p>
          </div>
          <div className={buttonContainer}>
            <button
              className={quoteButton}
              onClick={() => {
                navigate("#footer");
              }}
            >
              <strong>GET A QUOTE</strong>
            </button>
            <div className={showreelArea}>
              <div
                className={showreelButton}
                onClick={() => {
                  setVideoModal5Data(videoUrl);
                  setVideoModal5Open(true);
                }}
              >
                <video
                  className={watchVideo}
                  loop
                  autoPlay
                  muted
                  src={WatchMeVideo}
                ></video>
              </div>
              <div className={showreelText}>WATCH ME</div>
            </div>
          </div>
        </div>
        <div className={rightHero}>
          <div>
            <GatsbyImage
              className={heroVideo}
              alt="Custom Animated Video Header Graphic"
              image={headerImage!=null?getImage(headerImage.childImageSharp.gatsbyImageData):""}
            ></GatsbyImage>
            {/* <video
              className={heroVideo}
              loop
              autoPlay
              muted
              src={HeroVideo}
            ></video> */}
            {/* <video
              className={heroVideoMobile}
              loop
              autoPlay
              muted
              src={ShowreelVideo}
              onClick={() => {
                // setModalData("https://player.vimeo.com/video/763654563");
                // setModalOpen(true);
              }}
            ></video> */}
          </div>
        </div>
        <VideoModal />
      </div>
    </div>
  );
};
export default Header;
