import React from "react";
import { navigate } from "gatsby";
import { useBetween } from "use-between";

import {
  hero,
  innerHero,
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
} from "./hero.module.css";
import {
  headlineContent,
  subHeadlineContent,
  subHeadlineContentMobile,
} from "../../resources/strings.js";
import HeroVideo from "../../images/videos/Hero3.mp4";
import WatchMeVideo from "../../images/videos/WatchMe.mp4";
import ShowreelVideo from "../../images/videos/SocioPixels Showreel 2022.mp4";
import VideoModal from "../videoModal/videoModal";

export const useShareableState = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);

  return {
    modalOpen,
    setModalOpen,
    modalData,
    setModalData,
  };
};
export const useSharedModalState = () => useBetween(useShareableState);

const Hero = () => {
  const { setModalOpen, modalData, setModalData } = useSharedModalState();

  return (
    <div className={hero}>
      <div className={innerHero}>
        <div className={leftHero}>
          <div className={textSection}>
            <h1 className={headline}>{headlineContent}</h1>
            <p className={subheadline}>{subHeadlineContent}</p>
            <p className={subheadlineMobile}>{subHeadlineContentMobile}</p>
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
                  setModalData("https://player.vimeo.com/video/763654563");
                  setModalOpen(true);
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
            <video
              className={heroVideo}
              loop
              autoPlay
              muted
              src={HeroVideo}
            ></video>
            <video
              className={heroVideoMobile}
              loop
              autoPlay
              muted
              src={ShowreelVideo}
              onClick={() => {
                setModalData("https://player.vimeo.com/video/763654563");
                setModalOpen(true);
              }}
            ></video>
          </div>
        </div>
        <VideoModal />
      </div>
    </div>
  );
};
export default Hero;
