import React, { useState } from "react";

const Form = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredEmailTouched(true);

    if (enteredEmail.trim === "" || !enteredEmail.includes("@")) {
      setEnteredEmailIsValid(false);
      console.log("invalid email");
      return;
    }

    setEnteredEmailIsValid(true);
    console.log(enteredEmail);
    setEnteredEmail("");
  };

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <section className="my-4">
      <form onSubmit={formSubmitHandler} className="flex flex-col">
        <div className={`${emailInputClasses} flex flex-col`}>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            placeholder="email@company.com"
            onChange={emailChangeHandler}
            value={enteredEmail}
            className="p-2 rounded"
          />
          {emailInputIsInvalid && (
            <p className="text-tomato">Please input correct email address</p>
          )}
        </div>
        <div className="form-actions bg-darkgrey text-white text-center p-2 rounded mt-3">
          <button className="">Subscribe to monthly newsletter</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
