import React from "react";

import {
    rectangle,
    sectionTextHead,
    sectionTextSub,
    logosBox,
} from "./clients.module.css"

import { clientsHeadContent, clientsSubContent } from "../../resources/strings.js";

const Clients = () => {
  return (
    <div className={rectangle}>
        <div>
            <text className={sectionTextHead}>{clientsHeadContent}</text>
            <text className={sectionTextSub}>{clientsSubContent}</text>
            <div className={logosBox}></div>
        </div>
    </div>
  );
  };
  
export default Clients;
