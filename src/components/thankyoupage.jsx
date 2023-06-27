import React from "react";
import { useNavigate } from "react-router-dom";
import { iconlist } from "../assets/images";

const ThankYouPage = ({ enteredEmail }) => {
  const navigate = useNavigate();

  console.log(enteredEmail.enteredEmail);

  return (
    <section className="max-w-[375px] h-[100vh] p-6 bg-white rounded-xl ">
      <img
        src={iconlist}
        alt="image"
        className="w-[70px] h-[70px] object-fit mb-6"
      />
      <h2 className="font-bold font-roboto text-5xl text-darkgrey mb-6">
        Thanks for <br />
        subscribing!
      </h2>
      <p className="text-grey font-sans  text-sm mb-6">
        A confirmation email has been sent to <br />{" "}
        <span className="font-bold text-darkgrey ">
          {enteredEmail.enteredEmail}
        </span>
        . Please open it and click
        <br className="hidden " /> the button inside to confirm your
        subscription
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-darkgrey text-white text-sm font-roboto rounded text-center py-2 w-full"
      >
        Dismiss message
      </button>
    </section>
  );
};

export default ThankYouPage;
