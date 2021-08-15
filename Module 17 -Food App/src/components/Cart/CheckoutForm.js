import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim().length !== 0;
const isPostalValid = (value) => value.trim().length === 6;
const isContactValid = (value) => value.trim().length === 10;

const CheckoutForm = (props) => {
  const [formInputState, setFormInputState] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
    contact: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();
  const contactRef = useRef();

  const onConfirmEventHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostalCode = postalRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredcontact = contactRef.current.value;

    setFormInputState({
      name: isNotEmpty(enteredName),
      street: isNotEmpty(enteredStreet),
      postalCode: isPostalValid(enteredPostalCode),
      city: isNotEmpty(enteredCity),
      contact: isContactValid(enteredcontact),
    });

  const  isFormValid =
      isNotEmpty(enteredName) &&
      isNotEmpty(enteredStreet) &&
      isPostalValid(enteredPostalCode) &&
      isNotEmpty(enteredCity) &&
      isContactValid(enteredcontact);

  };


  return (
    <form className={classes.form} onSubmit={onConfirmEventHandler}>
      <div className={`${classes.control} ${!formInputState.name && classes.invalid}`}>
        <label htmlFor="name">Your name</label>
        <input id="name" type="text" ref={nameRef}></input>
        {!formInputState.name && <p className ={classes.error}>Please enter name</p>}
      </div>

      <div className={`${classes.control} ${!formInputState.street && classes.invalid}`}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetRef}></input>
        {!formInputState.street && <p className ={classes.error}>Please enter city</p>}
      </div>

      <div className={`${classes.control} ${!formInputState.postalCode && classes.invalid}`}>
        <label htmlFor="postalCode">Postal code</label>
        <input id="postalCode" type="text" ref={postalRef}></input>
        {!formInputState.postalCode && <p className ={classes.error}>Please enter valid postal code</p>}
      </div>

      <div className={`${classes.control} ${!formInputState.city && classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityRef}></input>
        {!formInputState.city && <p className ={classes.error}>Please enter city</p>}
      </div>

      <div className={`${classes.control} ${!formInputState.contact && classes.invalid}`}>
        <label htmlFor="contact">Your contact no.</label>
        <input id="contact" type="text" ref={contactRef}></input>
        {!formInputState.contact && <p className ={classes.error}>Please enter a valid contact no.</p>}

      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
