import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredvalue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredvalue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredvalue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
