import React, { useRef }  from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha"

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

import apiKey from "../../resources/emailkey";

export const ContactForm = () => {
    const formData = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, formData.current, apiKey.USER_ID)
            .then((result) => {
                alert("Message Sent, We will get back to you shortly", result.text);
            },
            (error) => {
            alert("An error occurred, Please try again", error.text);
        });
    }
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    return (
        <div className={container}>
            <div className={innerContainer}>
                <div>
                    <h3 className={requestQuoteLabel}>Request a Quote</h3>
                    <div className={inputForm}>
                        <form ref={formData} className={form} method="post" action="#" >
                            <input className={inputBox} type="text" name="name" id="name" placeholder="Your Name"/>
                            <input className={inputBox} type="email" name="email" id="email" placeholder="Your Email"/>
                            <input className={inputBox} type="text" name="website" id="website" placeholder="Your Website"/>
                            <input className={inputBox} type="text" name="phone" id="phone" placeholder="Your Phone"/>
                            <textarea className={inputBox} name="message" id="message" rows="5" placeholder="How can we help you?"/>
                            {/* <div><ReCAPTCHA sitekey="6LdzG9AiAAAAAPW7E0hhf0VCqK1QcWKOOrc3X5Sn"/></div> */}
                            <div className={buttonContainer}>
                                <button className={submitButton} onClick={handleSubmit}><strong>SUBMIT</strong></button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
