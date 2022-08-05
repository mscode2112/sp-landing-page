import React from "react";

import {
    headlinePart1,
    headlinePart2,
    videoBox,
} from "./testimonials.module.css";

const Testimonials = () => {
    return (
        <div>
            <text className={headlinePart1}>Reviews</text>
            <text className={headlinePart2}>from People Like You</text>
            <div className={videoBox}></div>
        </div>
    );
};

export default Testimonials;