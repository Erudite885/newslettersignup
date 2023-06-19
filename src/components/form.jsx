import React, { useState } from "react";

const Form = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredEmailTouched(true);

    if (!enteredEmailIsValid || !enteredEmail.includes("@")) {
      console.log("invalid email");
      return;
    }

    console.log(enteredEmail);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const emailInputClasses = emailInputIsInvalid
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
          {emailInputIsInvalid && (
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
