import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputHasErrors,    
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput:resetNameInput
  } = useInput(value=> value.trim() !== "");

  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hasError: emailInputHasErrors,    
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput:resetEmailInput
  } = useInput(value=> value.includes("@"));

  let isFormValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) isFormValid = true;



  const formsubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
   resetNameInput();
   resetEmailInput();
  };

  const nameInputClasses = nameInputHasErrors
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasErrors
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formsubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasErrors && (
          <p className="error-text">Please enter a valid input name</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasErrors && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
