import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
    container,
    innerContainer,
    thankYouText,
    thankYouSubText,
    image,
    contactBox,
    contactSection,
    contactText,
    icon,
    wrapperBottom
} from "./thankYou.module.css";

import {contactNumber, emailId, location} from "../resources/strings";

const ThankYou = () => {
  return (
    <div className={container}>
        <div className={innerContainer}>
            <h3 className={thankYouText}>Thank You for reaching out.</h3>
            <p><span className={thankYouSubText}>We have received your e-mail and will get back to you as soon as we can.</span></p>
            <div className={image}><StaticImage alt="Thank you" src="../images/thankyou.svg"/></div>
            <div className={wrapperBottom}>
                <div className={contactSection}>
                    <div className={contactBox}>
                        <StaticImage className={icon} alt="Call Icon" src="../../images/call 1.png"></StaticImage>
                        <p className={contactText}>{contactNumber}</p>
                    </div>
                    <div className={contactBox}>
                        <StaticImage className={icon} alt="Mail Icon" src="../../images/mail icon.svg"></StaticImage>
                        <p className={contactText}>{emailId}</p>
                    </div>
                    <div className={contactBox}>
                        <StaticImage className={icon} alt="Location Icon" src="../../images/location icon.svg"></StaticImage>
                        <p className={contactText}>{location}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
} 

export default ThankYou;
