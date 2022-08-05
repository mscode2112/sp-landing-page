import React from "react";
import {
    submitButton,
    contactFormBox,
    contactForm,
    requestQuoteLabel,
    nameInputBox,
    emailInputBox,
    websiteInputBox,
    phoneInputBox,
    messageBox,
} from "./contactForm.module.css";

export const ContactForm = () => {
    return (
        <div className={contactFormBox}>
            <div className={contactForm}>
                <text className={requestQuoteLabel}>Request a Quote</text>
                <form method="post" action="#">
                    <input className={nameInputBox} type="text" name="name" id="name" placeholder="Your Name"/>
                    <input className={emailInputBox} type="email" name="email" id="email" placeholder="Your Email"/>
                    <input className={websiteInputBox} type="text" name="website" id="website" placeholder="Your Website"/>
                    <input className={phoneInputBox} type="text" name="phone" id="phone" placeholder="Your Phone"/>
                    <textarea className={messageBox} name="message" id="message" rows="5" placeholder="How can we help you?"/>
                    <button className={submitButton}>SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
