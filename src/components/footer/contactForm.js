import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import {
  container,
  innerContainer,
  inputBox,
  submitButton,
  requestQuoteLabel,
  inputForm,
  form,
  buttonContainer,
  errorBelow,
  errorMessage,
  fieldWrapper,
  grecaptchaBadge,
} from "./contactForm.module.css";
import ThankYou from "./thankYou";
import apiKey from "../../resources/emailkey";

function useForm(initialState = {}, validations = [], onSubmit = () => {}) {
  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialState
  );
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setValid] = useState(initialIsValid);
  const [touched, setTouched] = useState({});
  const changeHandler = (event) => {
    const newValues = { ...values, [event.target.name]: event.target.value };
    const { isValid, errors } = validate(validations, newValues);
    setValues(newValues);
    setValid(isValid);
    setErrors(errors);
    setTouched({ ...touched, [event.target.name]: true });
  };
  return { values, changeHandler, isValid, errors, touched };
}

function isRequired(value) {
  return value != null && value.trim().length > 0;
}

function validate(validations, values) {
  const errors = validations
    .map((validation) => validation(values))
    .filter((validation) => typeof validation === "object");
  return {
    isValid: errors.length === 0,
    errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
  };
}

export const ContactForm = () => {
  const [showThankyou, setShowThankyou] = useState(false);
  const recaptchaRef = React.createRef();
  const initialState = { name: "", email: "", message: "" };
  const validations = [
    ({ name }) => isRequired(name) || { name: "Name is required" },
    ({ email }) => isRequired(email) || { email: "E-mail is required" },
    ({ message }) => isRequired(message) || { message: "Message is required" },
  ];
  const { values, isValid, errors, changeHandler, touched } = useForm(
    initialState,
    validations
  );
  const formData = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    if (token) {
      emailjs
        .sendForm(
          apiKey.SERVICE_ID,
          apiKey.TEMPLATE_ID,
          formData.current,
          apiKey.USER_ID
        )
        .then(
          (result) => {
            setShowThankyou(true);
          },
          (error) => {
            alert("An error occurred, Please try again", error.text);
          }
        );
    }
  };

  <script src="https://www.google.com/recaptcha/api.js" async defer></script>;

  return (
    <div className={container}>
      {!showThankyou && (
        <div className={innerContainer}>
          <div>
            <h3 className={requestQuoteLabel}>Request a Quote</h3>
            <div className={inputForm}>
              <form ref={formData} onSubmit={submitHandler} className={form}>
                <div className={fieldWrapper}>
                  <input
                    className={inputBox}
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={values.name}
                    placeholder="Your Name*"
                    onChange={changeHandler}
                  />
                  {touched.name && errors.name && (
                    <div className={errorBelow}>
                      <div className={errorMessage}>{errors.name}</div>
                    </div>
                  )}
                </div>
                <div className={fieldWrapper}>
                  <input
                    className={inputBox}
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={values.email}
                    placeholder="Your Email*"
                    onChange={changeHandler}
                  />
                  {touched.email && errors.email && (
                    <div className={errorBelow}>
                      <div className={errorMessage}>{errors.email}</div>
                    </div>
                  )}
                </div>
                <input
                  className={inputBox}
                  type="text"
                  name="website"
                  id="website"
                  placeholder="Your Website"
                />
                <input
                  className={inputBox}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                />
                <div className={fieldWrapper}>
                  <textarea
                    className={inputBox}
                    name="message"
                    id="message"
                    rows="5"
                    required
                    value={values.message}
                    placeholder="How can we help you?*"
                    onChange={changeHandler}
                  />
                  {touched.message && errors.message && (
                    <div className={errorBelow}>
                      <div className={errorMessage}>{errors.message}</div>
                    </div>
                  )}
                </div>
                <div className={grecaptchaBadge}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6LflQzUjAAAAAJVaFHPo00q1KllPhHXYdxSmeUY6"
                  />
                </div>
                <div className={buttonContainer}>
                  <button className={submitButton}>
                    <strong>SUBMIT</strong>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* {showThankyou && (
                <Redirect to={'/thank-you'}/>
            )} */}
    </div>
  );
};

export default ContactForm;
