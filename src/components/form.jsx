import React, { useState } from "react";

const Form = () => {
  const [enteredEmail, setEnteredEmail] = useState("");

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log(enteredEmail);
    setEnteredEmail("");
  };

  return (
    <section className="my-4">
      <form onSubmit={formSubmitHandler} className="flex flex-col">
        <div className="form-control flex flex-col">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="email@company.com"
            onChange={emailChangeHandler}
            value={enteredEmail}
            className="p-2 rounded"
          />
        </div>
        <div className="form-actions bg-darkgrey text-white text-center p-2 rounded mt-3">
          <button className="">Subscribe to monthly newsletter</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
