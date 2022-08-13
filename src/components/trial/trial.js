import React from "react";
import {
    overlay,
    number,
    content,
    numberArea,
    gradientLine,
} from "./trial.module.css";

import { firstNumberValue, firstNumberContent, secondNumberValue, secondNumberContent, thirdNumberValue, thirdNumberContent } from "../../resources/strings.js"
const Trial = () => {
  return (
    <div className={overlay}>
        <div className={numberArea}>
            <div className={number}>{firstNumberValue}</div>
            <div className={content}>{firstNumberContent}</div>
        </div>
        <div className={gradientLine}></div>
        <div className={numberArea}>
            <div className={number}>{secondNumberValue}</div>
            <div className={content}>{secondNumberContent}</div>
        </div>
        <div className={gradientLine}></div>
        <div className={numberArea}> 
            <div className={number}>{thirdNumberValue}</div>
            <div className={content}>{thirdNumberContent}</div>
        </div>
    </div>
  );
};
export default Trial;