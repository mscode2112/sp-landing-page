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
                            <div className={videoImage}><StaticImage alt="Client testimonial 1" src="../images/thumbnails/testimonial-RodBerger.png"/></div>
                            <div className={playButton}></div>
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