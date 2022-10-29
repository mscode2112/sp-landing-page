import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
    container,
    innerContainer,
    wrapper,
    titleSection,
    title,
    subtitleContainer,
    subtitle,
    logoSection,
    logoImage,
} from "./clients.module.css"

import { clientsHeadContent, clientsSubContent } from "../../resources/strings.js";

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
                    <div className={logoImage}><StaticImage alt="Client Logos 1" src="../../images/clientlogos/Logo1.png"/></div>
                    <div className={logoImage}><StaticImage alt="Client Logos 2" src="../../images/clientlogos/Logo2.png"/></div>
                </div>
            </div>
        </div>
    </div>        
  );
  };
  
export default Clients;
