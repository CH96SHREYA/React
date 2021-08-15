import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = isTouched && !valueIsValid;

  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const resetInput =()=>{
      setEnteredValue("");
      setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid:valueIsValid,
    isTouched,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput
  };
};

export default useInput;
