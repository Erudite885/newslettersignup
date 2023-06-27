import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const newsletterform = (props) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    
    const enteredEmail = {
      name: email
    }

    props.onAddEmail(enteredEmail);

    navigate('/thankyoupage')
    setEmail("");

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="email">Email Address:</label>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <button className="bg-sky-300">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default newsletterform;
