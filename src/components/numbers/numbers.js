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
        <text className={firstNumber}>{firstNumberValue}</text>
        <text className={firstText}>{firstNumberContent}</text>
        <div className={gradientLine1}/>
        <text className={secondNumber}>{secondNumberValue}</text>
        <text className={secondText}>{secondNumberContent}</text>
        <div className={gradientLine2}/>
        <text className={thirdNumber}>{thirdNumberValue}</text>
        <text className={thirdText}>{thirdNumberContent}</text>
    </div>
  );
};
export default Numbers;