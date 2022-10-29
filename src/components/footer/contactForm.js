import React from "react";
import {
    container,
    innerContainer,
    inputBox,
    submitButton,
    requestQuoteLabel,
    inputForm,
    form,
    buttonContainer,
} from "./contactForm.module.css";

export const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Sending email");
    }
    return (
        <div className={container}>
            <div className={innerContainer}>
                <div>
                    <h3 className={requestQuoteLabel}>Request a Quote</h3>
                    <div className={inputForm}>
                        <div className={form} method="post" action="#">
                            <input className={inputBox} type="text" name="name" id="name" placeholder="Your Name"/>
                            <input className={inputBox} type="email" name="email" id="email" placeholder="Your Email"/>
                            <input className={inputBox} type="text" name="website" id="website" placeholder="Your Website"/>
                            <input className={inputBox} type="text" name="phone" id="phone" placeholder="Your Phone"/>
                            <textarea className={inputBox} name="message" id="message" rows="5" placeholder="How can we help you?"/>
                            <div className={buttonContainer}>
                                <button className={submitButton} onClick={handleSubmit}><strong>SUBMIT</strong></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
