import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
    container,
    innerContainer,
    wrapper,
    titleSection,
    titlePart1,
    titlePart2,
    videoSection,
    videoCard,
    videoImage,
    playButton,
} from "./testimonials.module.css";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className={videoCard}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

const Testimonials = () => {
    return (
        <div className={container}>
            <div className={innerContainer}>
                <div className={wrapper}>
                    <div className={titleSection}>
                        <h2>
                            <span className={titlePart1}>Reviews</span>
                            <span className={titlePart2}> from People Like You</span>
                        </h2>
                    </div>    
                    <div className={videoSection}>
                        <div className={videoCard}>
                            {/* <video className={videoImage} thumbnail= "../images/thumbnails/testimonial-RodBerger.png" controls>
                                <source src={clientSpeakVideo1} type="video/mp4"/>
                            </video> */}
                            <div className={videoImage}><StaticImage alt="Client testimonial 1" src="../images/thumbnails/testimonial-RodBerger.png"/></div>
                            <div className={playButton}></div>
                            <div>
                            <Video videoSrcURL="https://www.youtube.com/embed/Kxw2OjX0B10"
                                    videoTitle="Some Video"/>
                            </div>          
                        </div>
                        <div className={videoCard}>
                            <div className={videoImage}><StaticImage alt="Client testimonial 2" src="../images/thumbnails/testimonial-CJ.png"/></div>
                            <div className={playButton}></div>
                        </div>
                        <div className={videoCard}>
                            <div className={videoImage}><StaticImage alt="Client testimonial 3" src="../images/thumbnails/testimonial-GB.png"/></div>
                            <div className={playButton}></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Testimonials;