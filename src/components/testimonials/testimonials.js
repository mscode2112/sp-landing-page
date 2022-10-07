import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as lity from 'lity';
import '../../src/lity-2.4.1/assets/style.css';
import '../../src/lity-2.4.1/dist/lity.css';

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
        <>
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
                            <div className={videoImage} 
                                role="button" 
                                tabIndex={0} 
                                onClick={() => { lity('https://fast.wistia.net/embed/iframe/n1vtaxsjzd');}}
                                onKeyDown={() => { lity('https://fast.wistia.net/embed/iframe/n1vtaxsjzd');}}
                            >
                                <StaticImage alt="Client testimonial 1" src="../../images/thumbnails/testimonial-RodBerger.png"/>
                                <div className={playButton}></div>
                            </div>     
                        </div>      
                        <div className={videoCard}>    
                            <div className={videoImage} 
                                role="button" 
                                tabIndex={0} 
                                onClick={() => { lity('https://fast.wistia.net/embed/iframe/yqhrdt02ks');}}
                                onKeyDown={() => { lity('https://fast.wistia.net/embed/iframe/yqhrdt02ks');}}
                            >
                                <StaticImage alt="Client testimonial 2" src="../../images/thumbnails/testimonial-CJ.png"/>
                                <div className={playButton}></div>
                            </div>     
                        </div>      
                        <div className={videoCard}>    
                            <div className={videoImage} 
                                role="button" 
                                tabIndex={0} 
                                onClick={() => { lity('https://fast.wistia.net/embed/iframe/7ra4b38ux6');}}
                                onKeyDown={() => { lity('https://fast.wistia.net/embed/iframe/7ra4b38ux6');}}
                            >
                                <StaticImage alt="Client testimonial 3" src="../../images/thumbnails/testimonial-GB.png"/>
                                <div className={playButton}></div>
                            </div>     
                        </div>      
                    </div>
                </div>
            </div>
        </div>  
        </>  
    );
};

export default Testimonials;