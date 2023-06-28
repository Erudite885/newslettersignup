import React from "react";
import { useNavigate } from "react-router-dom";
import { iconlist } from "../assets/images";
import Button from "./UI/button";

const ThankYouPage = ({ enteredEmail }) => {
  const navigate = useNavigate();

  console.log(enteredEmail.enteredEmail);

  return (
    <section className="flex flex-col justify-between max-w-[375px] h-[100vh]  sm:h-[460px] p-6 md:p-8 bg-white md:rounded-xl ">
      <div className="flex flex-col justify-center mt-[60px]">
        <img
          src={iconlist}
          alt="image"
          className="w-[40px] h-[40px] object-fit mb-6"
        />
        <h2 className="font-bold font-roboto text-3xl text-darkgrey mb-6">
          Thanks for <br />
          subscribing!
        </h2>
        <p className="text-grey font-sans text-sm mb-6">
          A confirmation email has been sent to <br />{" "}
          <span className="font-bold text-darkgrey ">
            {enteredEmail.enteredEmail}
          </span>
          . Please open it and click
          <br className="hidden " /> the button inside to confirm your
          subscription
        </p>
      </div>
      <div className="">
        <Button onClick={() => navigate("/")}>Dismiss message</Button>
      </div>
    </section>
  );
};

export default ThankYouPage;
