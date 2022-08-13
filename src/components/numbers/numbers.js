import React from "react";
import {
    overlay,
    firstNumber,
    firstText,
    secondNumber,
    secondText,
    thirdNumber,
    thirdText,
    gradientLine1,
    gradientLine2,
} from "./numbers.module.css";
import { firstNumberValue, firstNumberContent, secondNumberValue, secondNumberContent, thirdNumberValue, thirdNumberContent } from "../../resources/strings.js"

const Numbers = () => {
  return (
    <div className={overlay}>
        <div className={firstNumber}>{firstNumberValue}</div>
        <div className={secondNumber}>{secondNumberValue}</div>
        <div className={thirdNumber}>{thirdNumberValue}</div>
        {/* <div className={firstText}>{firstNumberContent}</div>
      </div>  
      <div className={gradientLine1}/>
      <div>
        <div className={secondNumber}>{secondNumberValue}</div>
        <div className={secondText}>{secondNumberContent}</div>
      </div>  
      <div className={gradientLine2}/>
      <div>
        <div className={thirdNumber}>{thirdNumberValue}</div>
        <div className={thirdText}>{thirdNumberContent}</div>
      </div>   */}
    </div>
  );
};
export default Numbers;