import React from "react";
import {
    overlay,
    number,
    content,
    numberArea,
    gradientLine,
} from "./numbers.module.css";

import { firstNumberValue, firstNumberContent, secondNumberValue, secondNumberContent, thirdNumberValue, thirdNumberContent } from "../resources/strings.js"
const Numbers = () => {
  return (
    <div className={overlay}>
        <div className={numberArea}>
            <div className={number}>{firstNumberValue}</div>
            <p className={content}>{firstNumberContent}</p>
        </div>
        <div className={gradientLine}></div>
        <div className={numberArea}>
            <div className={number}>{secondNumberValue}</div>
            <p className={content}>{secondNumberContent}</p>
        </div>
        <div className={gradientLine}></div>
        <div className={numberArea}> 
            <div className={number}>{thirdNumberValue}</div>
            <p className={content}>{thirdNumberContent}</p>
        </div>
    </div>
  );
};
export default Numbers;