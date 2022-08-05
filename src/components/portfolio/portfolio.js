import React from "react";
import {
    headlinePart1,
    headlinePart2,
    headlinePart3,
    headlinePart4,
    subheadline,
    playButton,
    videoBox1,
    videoBox2,
    videoBox3,
    videoBox4,
    videoBox5,
    videoBox6,
    videoBox7,
    videoBox8,
    videoBox9,
    videoBox10,
    videoBox11,
    videoBox12,
    videoImage1,
    videoImage2,
    videoImage3,
    videoImage4,
    videoImage5,
    videoImage6,
    videoImage7,
    videoImage8,
    videoImage9,
    videoImage10,
    videoImage11,
    videoImage12,
    moreWorkButton,
} from "./portfolio.module.css";
import { portfolioContent } from "../../resources/strings.js"

const Portfolio = () => {
  return (
    <div>
        <text className={headlinePart1}>Our Work</text>
        <text className={headlinePart2}>Speaks</text>
        <text className={headlinePart3}>'Animates'</text>
        <text className={headlinePart4}>For Us</text>
        <text className={subheadline}>{portfolioContent}</text>
        <div className={videoBox1}>
            <div className={videoImage1}></div>
            <div className={playButton}></div>
        </div>
        <div className={videoBox2}>
            <div className={videoImage2}></div>
            <div className={playButton}></div>
        </div>  
        <div className={videoBox3}>
            <div className={videoImage3}></div>
            <div className={playButton}></div>
        </div> 
        <div className={videoBox4}>
            <div className={videoImage4}></div>
            <div className={playButton}></div>
        </div>   
        <div className={videoBox5}>
            <div className={videoImage5}></div>
            <div className={playButton}></div>
        </div> 
        <div className={videoBox6}>
            <div className={videoImage6}></div>
            <div className={playButton}></div>
        </div>  
        <div className={videoBox7}>
            <div className={videoImage7}></div>
            <div className={playButton}></div>
        </div>  
        <div className={videoBox8}>
            <div className={videoImage8}></div>
            <div className={playButton}></div>
        </div>  
        <div className={videoBox9}>
            <div className={videoImage9}></div>
            <div className={playButton}></div>
        </div> 
        <div className={videoBox10}>
            <div className={videoImage10}></div>
            <div className={playButton}></div>
        </div>     
        <div className={videoBox11}>
            <div className={videoImage11}></div>
            <div className={playButton}></div>
        </div> 
        <div className={videoBox12}>
            <div className={videoImage12}></div>
            <div className={playButton}></div>
        </div> 
        <div>
            <button className={moreWorkButton}>MORE WORK</button>
        </div>
    </div>
  );
};
export default Portfolio;