import useInput from "../hooks/use-reducer-input";
const BasicForm = (props) => {
  // FirstName
  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    isInputInvalid: isFnameInvalid,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    resetInput: fNameReset,
  } = useInput((value) => value.trim() !== "");

  // LastName
  const {
    value: enteredLname,
    isValid: enteredLnameisValid,
    isInputInvalid: isLnameInvalid,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    resetInput: lNameReset,
  } = useInput((value) => value.trim() !== "");

  // email
  const {
    value: enteredEmail,
    isValid: enteredEmailisValid,
    isInputInvalid: isEmailInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: emailReset,
  } = useInput((value) => value.includes("@"));

  let isFormValid = false;
  isFormValid = enteredFnameIsValid && enteredLnameisValid && enteredEmailisValid;

  const onFormSubmission = (event) => {
    if (isFnameInvalid || isLnameInvalid || isEmailInvalid) return;
    fNameReset();
    lNameReset();
    emailReset();
  };

  const fnameClasses = isFnameInvalid ? "form-control invalid" : "form-control";
  const lnameClasses = isLnameInvalid ? "form-control invalid" : "form-control";
  const emailClasses = isEmailInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onFormSubmission}>
      <div className="control-group">
        <div className={fnameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            onBlur={fnameBlurHandler}
            onChange={fnameChangeHandler}
            value={enteredFname}
          />
          {isFnameInvalid && (
            <p className="error-text">Please enter non-empty value</p>
          )}
        </div>

        <div className={lnameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onBlur={lnameBlurHandler}
            onChange={lnameChangeHandler}
            value={enteredLname}
          />
          {isLnameInvalid && (
            <p className="error-text">Please enter non-empty value</p>
          )}
        </div>
      </div>

      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
            type="email"
            id="email"
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
          {isEmailInvalid && (
            <p className="error-text">Please enter non-empty value</p>
          )}
      </div>

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
