import React from "react";

import {
    container,
    innerContainer,
    wrapper,
    titleSection,
    title,
    subtitleContainer,
    subtitle,
    logoSection,
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
                </div>
            </div>
        </div>
    </div>        
  );
  };
  
export default Clients;
