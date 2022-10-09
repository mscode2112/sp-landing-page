import React from "react";
import {
    container,
    innerContainer,
    titleSection,
    titlePart1,
    titlePart2,
    subtitleContainer,
    subtitle,
    processContainer,
    processSection,
    processSteps,
    processStep,
    rectangleOdd,
    rectangleOdd5,
    rectangleEven,
    rectangleEven6,
    processStep6,
    processStep7,
    stepImage,
    stepTitle,
    stepContent,
    contentBox,
    contentBox2,
} from "./process.module.css";
import { 
    processContent, 
    processStep1Content,
    processStep2Content,
    processStep3Content,
    processStep4Content,
    processStep5Content,
    processStep6Content,
    processStep7Content,
 } from "../../resources/strings.js"
import { StaticImage } from "gatsby-plugin-image";

const Process = () => {
  return (
    <div className={container}>
        <div className={innerContainer}>
            <div className={processContainer}>
                <div className={titleSection}>
                    <h2>
                        <span className={titlePart1}>Our Proven Design</span>
                        <span className={titlePart2}> Process</span>
                    </h2>
                    <div className={subtitleContainer}>
                        <p className={subtitle}>{processContent}</p>
                    </div>    
                </div>    
                <div className={processSection}>
                    <div className={processSteps}>
                        <div className={processStep}>
                            <div className={rectangleOdd}>
                                <div className={stepImage}><StaticImage alt="Design Process Step 1 - Brief" src="../../images/graphic 1.svg"/></div>
                                <div className={contentBox}>
                                    <h2 className={stepTitle}>The Brief</h2>
                                    <p className={stepContent}>{processStep1Content}</p>
                                </div>
                            </div>
                        </div>
                        <div className={processStep}>
                            <div className={rectangleEven}>
                                <div className={stepImage}><StaticImage alt="Design Process Step 2 - Script" src="../../images/graphic 2.svg"/></div>
                                <div className={contentBox2}>
                                    <h1 className={stepTitle}>Script</h1>
                                    <p className={stepContent}>{processStep2Content}</p>
                                </div>
                            </div>
                        </div>
                        <div className={processStep}>
                            <div className={rectangleOdd}>
                                <div className={stepImage}><StaticImage alt="Design Process Step 3 - Storyboard" src="../../images/graphic 3.svg"/></div>
                                <div className={contentBox}>
                                    <h1 className={stepTitle}>Storyboard</h1>
                                    <p className={stepContent}>{processStep3Content}</p>
                                </div>
                            </div>
                        </div>
                        <div className={processStep}>
                            <div className={rectangleEven}>
                                <div className={stepImage}><StaticImage alt="Design Process Step 4 - Illustration" src="../../images/graphic 4.svg"/></div>
                                <div className={contentBox}>
                                    <h1 className={stepTitle}>Illustration</h1>
                                    <p className={stepContent}>{processStep4Content}</p>
                                </div>
                            </div>
                        </div>
                        <div className={processStep}>
                            <div className={rectangleOdd5}>
                                <div className={stepImage}><StaticImage alt="Design Process Step 5 - Voice Over" src="../../images/graphic 5.svg"/></div>
                                <div className={contentBox}>
                                    <h1 className={stepTitle}>Voice Over</h1>
                                    <p className={stepContent}>{processStep5Content}</p>
                                </div>
                            </div>
                        </div>
                        <div className={processStep6}>
                            <div className={rectangleEven6}>
                                <div className={stepImage}><StaticImage alt="Design Process Step 6 - Animation" src="../../images/graphic 6.svg"/></div>
                                <div className={contentBox}>
                                    <h1 className={stepTitle}>Animation</h1>
                                    <p className={stepContent}>{processStep6Content}</p>
                                </div>
                            </div>
                        </div>
                        <div className={processStep7}>
                            <div className={rectangleOdd5}>
                                <div className={stepImage}><StaticImage alt="Design Process Step 7 - Delivery" src="../../images/graphic 7.svg"/></div>
                                <div className={contentBox}>
                                    <h1 className={stepTitle}>Delivery</h1>
                                    <p className={stepContent}>{processStep7Content}</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>    
    </div>
  )
}; 
export default Process; 