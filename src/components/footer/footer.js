import React from "react";
import {
    mainFooter,
    bottomBox,
    requestForm,
    line,
    copyrightText,
    footerHeadText,
    footerSubText,
    textSeparator,
    phoneIcon,
    mailIcon,
    locationIcon,
    phoneText,
    mailText,
    locationText,
    facebookIcon,
    instagramIcon,
    linkedinIcon,
    youtubeIcon,
} from "./footer.module.css"

import { footerHeading, footerContent } from "../../resources/strings"

const Footer = () => {
  return (
    <div className={mainFooter}>
      <div className={bottomBox}></div>
      <div className={requestForm}></div>
      <div className={line}></div>
      <text className={footerHeadText}>{footerHeading}</text>
      <text className={footerSubText}>{footerContent}</text>
      <div className={textSeparator}></div>
      <text className={copyrightText}>Copyright © 2022 | SocioPixels</text>
      <div className={phoneIcon}></div>
      <div className={mailIcon}></div>
      <div className={locationIcon}></div>
      <text className={phoneText}>+61 4 2236 496</text>
      <text className={mailText}>info@sociopixels.com</text>
      <text className={locationText}>Melbourne, Australia</text>
      <div className={facebookIcon}></div>
      <div className={instagramIcon}></div>
      <div className={linkedinIcon}></div>
      <div className={youtubeIcon}></div>
    </div>
  );
};

export default Footer;
