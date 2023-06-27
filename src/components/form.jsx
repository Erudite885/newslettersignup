import React, { useState } from "react";
import useInput from "../hooks/use-input";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredEmailIsValid || !enteredEmail.includes("@")) {
      console.log("invalid email");
      return;
    }

    const enteredInputEmail = {
      name: enteredEmail
    }
// console.log(enteredInputEmail.name)
    props.onAddEmailData(enteredInputEmail.name);

    navigate('/thankyoupage')
    resetEmailInput();

  };

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";


  return (
    <section className="my-5">
      <form onSubmit={formSubmitHandler} className="flex flex-col">
        <div className={`${emailInputClasses} relative flex flex-col `}>
          <label htmlFor="email" className="mb-2 mx-4 font-medium">
            Email address
          </label>
          {emailInputHasError && (
            <p className="text-tomato absolute right-[3%] mx-4 my-1 text-[14px]">
              Valid email required
            </p>
          )}
          <input
            type="email"
            id="email"
            placeholder={
              emailInputHasError ? "ash#loremcompany.com" : "email@company.com"
            }
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
            className="p-2 mx-4 w-[90%] rounded"
          />
        </div>
        <div
          className={` form-actions bg-darkgrey text-white text-center p-2 mx-4 rounded mt-3`}
        >
          <button className="cursor-pointer">
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
