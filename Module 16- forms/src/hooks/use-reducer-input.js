import { useReducer } from "react";

const intialInputState = {
  value: "",
  isTouched: "",
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT")
    return {
      value: action.value
    };
  else if (action.type === "BLUR")
    return {
      isTouched: true,
      value:state.value
    };
  else if (action.type === "RESET")
    return {
      value: "",
      isTouched: false,
    };
  return intialInputState;
};

const useInput = (validateInput) => {
  const [inputState, inputStateDispatcher] = useReducer(
    inputStateReducer,
    intialInputState
  );

  const isValid = validateInput(inputState.value);
  const isInputInvalid = inputState.isTouched && !isValid;

  const inputChangeHandler = (event) => {
    inputStateDispatcher({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    inputStateDispatcher({ type: "BLUR" });
  };
  const resetInput = () => {
    inputStateDispatcher({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid,
    isInputTouched: inputState.isTouched,
    isInputInvalid,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
