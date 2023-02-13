import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  container,
  innerContainer,
  wrapperTop,
  wrapperBottom,
  contactSection,
  textSection,
  titleBox,
  textBox,
  ctaBox,
  footerText,
  textSeparator,
  formContainer,
  formSection,
  socialMediaSection,
  socialMediaBox,
  icon,
  contactText,
  contactBox,
  copyrightSection,
  copyrightLine,
  copyrightText,
} from "./footer.module.css";
import { ContactForm } from "./contactForm";
import {
  contactNumber,
  whatsappNumber,
  emailId,
  location,
  footerHeading,
  footerContent,
  ctaContent,
  copyright,
} from "../../resources/strings";

const Footer = () => {
  return (
    <div id="footer" className={container}>
      <div className={innerContainer}>
        <div className={wrapperTop}>
          <div className={textSection}>
            <div className={titleBox}>
              <h3 className={footerText}>{footerHeading}</h3>
              <div className={textSeparator} />
            </div>
            <div className={textBox}>
              <h3 className={footerText}>{footerContent}</h3>
            </div>
            <div className={ctaBox}>
              <h3 className={footerText}>{ctaContent}</h3>
            </div>
          </div>
          <div className={formContainer}>
            <div className={formSection}>
              <ContactForm />
            </div>
            <div className={socialMediaSection}>
              <div className={socialMediaBox}>
                <a href="https://www.facebook.com/sociopixels/">
                  <StaticImage
                    className={icon}
                    alt="Facebook Icon"
                    src="../../images/facebook icon.svg"
                  ></StaticImage>
                </a>
                <a href="https://www.instagram.com/sociopixels/">
                  <StaticImage
                    className={icon}
                    alt="Instagram Icon"
                    src="../../images/instagram icon.svg"
                  ></StaticImage>
                </a>
                <a href="https://www.linkedin.com/company/sociopixels/">
                  <StaticImage
                    className={icon}
                    alt="Linkedin Icon"
                    src="../../images/linkedin icon.svg"
                  ></StaticImage>
                </a>
                <a href="https://www.youtube.com/channel/UCBos1ikwA3mBdZPMoqACLHg/videos">
                  <StaticImage
                    className={icon}
                    alt="Youtube Icon"
                    src="../../images/youtube icon.svg"
                  ></StaticImage>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={wrapperBottom}>
          <div className={contactSection}>
            <div className={contactBox}>
              <StaticImage
                className={icon}
                alt="Whatsapp Icon"
                src="../../images/whatsapp icon.svg"
              ></StaticImage>
              <p className={contactText}>{whatsappNumber}</p>
            </div>
            <div className={contactBox}>
              <StaticImage
                className={icon}
                alt="Call Icon"
                src="../../images/call 1.png"
              ></StaticImage>
              <p className={contactText}>{contactNumber}</p>
            </div>
            <div className={contactBox}>
              <StaticImage
                className={icon}
                alt="Mail Icon"
                src="../../images/mail icon.svg"
              ></StaticImage>
              <p className={contactText}>{emailId}</p>
            </div>
            <div className={contactBox}>
              <StaticImage
                className={icon}
                alt="Location Icon"
                src="../../images/location icon.svg"
              ></StaticImage>
              <p className={contactText}>{location}</p>
            </div>
          </div>
          <div className={copyrightSection}>
            <div className={copyrightLine}></div>
            <p className={copyrightText}>{copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
