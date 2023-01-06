import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
    container,
    innerContainer,
    thankYouText,
    thankYouSubText,
    image,
} from "./thankYou.module.css";

const ThankYou = () => {
  return (
    <div className={container}>
        <div className={innerContainer}>
            <h3 className={thankYouText}>Thank You for reaching out.</h3>
            <p><span className={thankYouSubText}>We have received your e-mail and will get back to you as soon as we can.</span></p>
            <div className={image}><StaticImage alt="Thank you" src="../../images/thankyou.svg"/></div>
        </div>

    </div>
  )
} 

export default ThankYou;
