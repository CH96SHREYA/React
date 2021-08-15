import { useState } from "react";

const useBasicState=(validateInput)=>{
    const [enteredValue, setEnteredValue]=useState("");
    const [isInputTouched, setInputIsTouched]= useState(false);
  
    const isValid=validateInput(enteredValue);
    const isInputInvalid =isInputTouched && !isValid;

    const inputChangeHandler=(event)=>{
        setEnteredValue(event.target.value);
    };
  
    const inputBlurHandler =()=>{
      setInputIsTouched(true);
    }
    const resetInput =()=>{
        setEnteredValue("");
        setInputIsTouched(false);
    }
    return{
        value:enteredValue,
        isValid,
        isInputTouched,
        isInputInvalid,
        inputChangeHandler,
        inputBlurHandler,
        resetInput
    }


}

export default useBasicState;