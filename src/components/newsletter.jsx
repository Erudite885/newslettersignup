import React, { useEffect, useState } from "react";
import { iconlist, signupDesktop, signupMobile } from "../assets/images";
import Form from "./form";

const Newsletter = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1200;
  const isMobile = width < breakpoint;

  useEffect(() => {
    const windowResizeHandler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", windowResizeHandler);

    return () => window.removeEventListener("resize", windowResizeHandler);
  }, []);

  const saveEmailHandler = (enteredEmail) => {
    const enteredInputEmail = {
      enteredEmail,
    };
    props.onAddEmail(enteredInputEmail)
    // console.log(enteredInputEmail);
  };

  return (
    <section className="bg-white flex flex-col-reverse lg:flex-row justify-between items-center lg:rounded-2xl">
      <div className="p-1 lg:p-10">
        <h1 className="text-charcoal text-[30px] sm:text-3xl font-bold m-2">
          Stay updated!
        </h1>
        <p className="text-grey text-xs lg:text-normal max-w-[225px] lg:max-w-[280px] m-2">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className="flex flex-col max-w-[270px] lg:max-w-[460px]">
          <div className="flex row text-xs mx-2 mb-2">
            <img
              src={iconlist}
              alt="list image"
              className="w-[16px] h-[16px] mr-4"
            />
            <p>Product discovery and building what matters</p>
          </div>
          <div className="flex row text-xs mx-2 mb-2">
            <img
              src={iconlist}
              alt="list image"
              className="w-[16px] h-[16px] mr-4"
            />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="flex row text-xs mx-2 mb-2">
            <img
              src={iconlist}
              alt="list image"
              className="w-[16px] h-[16px] mr-4"
            />
            <p> And much more!</p>
          </div>
        </div>
        <Form onAddEmailData={saveEmailHandler} />
      </div>
      <div className="text-grey">
        <img
          src={isMobile ? signupMobile : signupDesktop}
          alt="desktop image"
          className="w-full h-full lg:p-2"
        />
      </div>
    </section>
  );
};

export default Newsletter;
