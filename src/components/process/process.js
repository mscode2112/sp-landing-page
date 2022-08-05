import React from "react";
import {
    headlinePart1,
    headlinePart2,
    subheadline,
    processBox,
    processSteps,
    processStep1,
    processStep2,
    processStep3,
    processStep4,
    processStep5,
    processStep6,
    processStep7,
    rectangle1,
    rectangle2,
    rectangle3,
    rectangle4,
    rectangle5,
    rectangle6,
    rectangle7,
    step1Heading,
    step1Content,
    step2Heading,
    step2Content,
    step3Heading,
    step3Content,
    step4Heading,
    step4Content,
    step5Heading,
    step5Content,
    step6Heading,
    step6Content,
    step7Heading,
    step7Content,
} from "./process.module.css";
import { 
    processContent, 
    processStep1Content, 
    processStep2Content, 
    processStep4Content, 
    processStep5Content,
    processStep6Content,
    processStep7Content
 } from "../../resources/strings.js"
import { StaticImage } from "gatsby-plugin-image";

const Process = () => {
  return (
    <div>
        <text className={headlinePart1}>Our Proven Design</text>
        <text className={headlinePart2}>Process</text>
        <text className={subheadline}>{processContent}</text>
        <div className={processBox}>
            <div className={processSteps}>
                <div className={rectangle1}/>
                <div className={rectangle2}/>
                <div className={rectangle3}/>
                <div className={rectangle4}/>
                <div className={rectangle5}/>
                <div className={rectangle6}/>
                <div className={rectangle7}/>
                <div className={processStep1}/>
                <StaticImage alt="Design Process Step 1 - Brief" src="../../images/graphic 1.svg"/>
                <div className={processStep2}>
                    <StaticImage alt="Design Process Step 2 - Script" src="../../images/graphic 2.svg"/>
                </div>
                <div className={processStep3}>
                    <StaticImage alt="Design Process Step 3 - Storyboard" src="../../images/graphic 3.svg"/>
                </div>    
                <div className={processStep4}>
                    <StaticImage alt="Design Process Step 4 - Illustration" src="../../images/graphic 4.svg"/>
                </div>    
                <div className={processStep5}>
                    <StaticImage alt="Design Process Step 5 - Voice-over" src="../../images/graphic 5.svg"/>
                </div>    
                <div className={processStep6}>
                    <StaticImage alt="Design Process Step 6 - Animation" src="../../images/graphic 6.svg"/>
                </div>    
                <div className={processStep7}>
                    <StaticImage alt="Design Process Step 7 - Graphics" src="../../images/graphic 7.svg"/>
                </div>   
                <text className={step1Heading}>The Brief</text> 
                <text className={step1Content}>{processStep1Content}</text> 
                <text className={step2Heading}>Script</text> 
                <text className={step2Content}>{processStep2Content}</text> 
                <text className={step3Heading}>Storyboard</text> 
                <text className={step3Content}>{processStep2Content}</text> 
                <text className={step4Heading}>Illustration</text> 
                <text className={step4Content}>{processStep2Content}</text> 
                <text className={step5Heading}>Voice Over</text> 
                <text className={step5Content}>{processStep2Content}</text> 
                <text className={step6Heading}>Animation</text> 
                <text className={step6Content}>{processStep2Content}</text> 
                <text className={step7Heading}>Delivery</text> 
                <text className={step7Content}>{processStep2Content}</text> 
            </div>
        </div>
    </div>
  )
}; 
export default Process; 