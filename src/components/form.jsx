import React from "react";
import useInput from "../hooks/use-input";
import { useNavigate } from "react-router-dom";
import Button from "./UI/button";

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
      name: enteredEmail,
    };
    // console.log(enteredInputEmail.name)
    props.onAddEmailData(enteredInputEmail.name);

    navigate("/thankyoupage");
    resetEmailInput();
  };

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <section className="my-5">
      <form onSubmit={formSubmitHandler} className="flex flex-col">
        <div className={`${emailInputClasses} relative flex flex-col `}>
          <label htmlFor="email" className="mb-2 mx-2 font-medium">
            Email address
          </label>
          {emailInputHasError && (
            <p className="text-tomato absolute right-[3%] mx-2 my-1 text-[14px]">
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
            className="p-2 w-[95%] rounded"
          />
        </div>
        <div className={`p-1 mt-3`}>
          <Button type="submit">Subscribe to monthly newsletter</Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
