import React from "react";
import { navigate } from "gatsby";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import "@reach/dialog/styles.css";

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
    dialogContainer,
    videoContainer,
    responsiveIframe,
    modalCloseButton,
} from "./hero.module.css";
import { headlineContent, subHeadlineContent } from "../../resources/strings.js";
import HeroVideo from "../../images/videos/Hero3.mp4";
import WatchMeVideo from "../../images/videos/WatchMe.mp4";

const Hero = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
                    onClick={handleOpen}
                    >
                      <DialogOverlay className={dialogContainer} isOpen={open} onDismiss={handleClose} style={{ background: "hsla(0, 100%, 100%, 0.5)"}}>
                          <DialogContent style={{position: "relative", background: "none" }}>
                              <button className={modalCloseButton} onClick={handleClose}>                 
                                  <span aria-hidden>×</span>        
                              </button>
                              <div className={videoContainer}>
                                <iframe className={responsiveIframe} src="https://player.vimeo.com/video/763654563?color=0c88dd&title=0&byline=0&portrait=0&badge=0" 
                                    frameBorder="0"
                                    title="video"
                                    width="1020"
                                    height="840"
                                    allowFullScreen>
                                </iframe>
                              </div>
                          </DialogContent>
                      </DialogOverlay>
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