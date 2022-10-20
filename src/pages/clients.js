import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

import {
    container,
    innerContainer,
    wrapper,
    titleSection,
    title,
    subtitleContainer,
    subtitle,
    logoSection,
    logo,
} from "./clients.module.css"

import { clientsHeadContent, clientsSubContent } from "../resources/strings.js";

const Clients = () => {
  return (
    <div className={container}>
        <div className={innerContainer}>
            <div className={wrapper}>
                <div className={titleSection}>
                    <h2>
                        <span className={title}>{clientsHeadContent}</span>
                    </h2>
                </div>    
                 <div className={subtitleContainer}>
                        <p className={subtitle}>{clientsSubContent}</p>
                  </div>  
                <div className={logoSection}>
                    <div className={logo}><StaticImage alt="Client Logo 1" src="../images/clientlogos/casio.png" /></div>
                    <div className={logo}><StaticImage alt="Client Logo 2" src="../images/clientlogos/ibm.png" /></div>
                    <div className={logo}><StaticImage alt="Client Logo 3" src="../images/clientlogos/apollo.png" /></div>
                    <div className={logo}><StaticImage alt="Client Logo 4" src="../images/clientlogos/maxbupa.jpg" /></div>
                </div>
            </div>
        </div>
    </div>        
  );
  };
  
export default Clients;
