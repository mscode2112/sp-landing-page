import React from "react";

import {
    rectangle,
    sectionTextHead,
} from "./faqs.module.css"

const Faqs = () => {
  return (
    <div className={rectangle}>
        <div>
            <text className={sectionTextHead}>Frequently Asked Questions</text>
        </div>
    </div>
  );
};

export default Faqs;