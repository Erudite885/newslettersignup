import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ThankYouPage from "./components/thankyoupage";
import Newsletter from "./components/newsletter";

const App = () => {
  const [inputtedEmail, setInputtedEmail] = useState([]);

  const addEmailHandler = (name) => {
    setInputtedEmail(name);
    // console.log("in app.js");
  };

  // console.log(inputtedEmail);

  return (
    <section className="flex items-center justify-center w-full h-[100vh] ">
      <Routes>
        <Route
          path="/"
          element={<Newsletter onAddEmail={addEmailHandler} />}
        ></Route>
        <Route
          path="/thankyoupage"
          element={<ThankYouPage enteredEmail={inputtedEmail} />}
        ></Route>
      </Routes>
    </section>
  );
};

export default App;
