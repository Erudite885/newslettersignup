import React, { useState } from "react";
import useInput from "../hooks/use-input";

const Form = (props) => {
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

    resetEmailInput();

    console.log(enteredEmail);
  };

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <section className="my-4">
      <form onSubmit={formSubmitHandler} className="flex flex-col">
        <div className={`${emailInputClasses} flex flex-col`}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="email@company.com"
            onChange={emailChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
            className="p-2 rounded"
          />
          {emailInputHasError && (
            <p className="text-tomato">Please enter valid email address</p>
          )}
        </div>
        <div className="form-actions bg-darkgrey text-white text-center p-2 rounded mt-3">
          <button disabled={!formIsValid} className="cursor-pointer">
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
