import { useFormik } from "formik";
import classes from "./Checkout.module.css";
import FormInput from "../UI/FormInput";

const validate = (values) => {
  const errors = {};
  if (!values.username) errors.username = "Required";
  if (!values.street) errors.street = "Required";
  if (!values.postalCode) errors.postalCode = "Required";
  else if (values.postalCode.trim().length !== 5)
    errors.postalCode = "Please enter a valid postal code";

  if (!values.city) errors.city = "Required";

  if (!values.contact) errors.contact = "Required";
  else if (values.contact.trim().length !== 10)
    errors.contact = "Please enter a valid contact no.";

  return errors;
};
const CheckoutForm = (props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      street: "",
      postalCode: "",
      city: "",
      contact: "",
    },
    validate,
    onSubmit: (values) => {},
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <FormInput 
       className={`${classes.control} ${formik.errors.username && classes.invalid}`}
        id="username"
        content="Your Name"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        touched={formik.touched.username}
        error={formik.errors.username}
        errorClass={classes.error}
        errorMessage={formik.errors.username}
      />

<FormInput 
       className={`${classes.control} ${formik.errors.street && classes.invalid}`}
        id="street"
        content="Street"
        name="street"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.street}
        touched={formik.touched.street}
        error={formik.errors.street}
        errorClass={classes.error}
        errorMessage={formik.errors.street}
      />

      {/* <div
        className={`${classes.control} ${
          formik.errors.username && classes.invalid
        }`}
      >
        <label htmlFor="username">Your Name</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />

        {formik.touched.username && formik.errors.username ? (
          <div className={classes.error}>{formik.errors.username}</div>
        ) : null}
      </div> */}

      <div
        className={`${classes.control} ${
          formik.errors.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          type="text"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.street && formik.errors.street ? (
          <div className={classes.error}>{formik.errors.street}</div>
        ) : null}
      </div>

      <div
        className={`${classes.control} ${
          formik.errors.postalCode && classes.invalid
        }`}
      >
        <label htmlFor="postalCode">Postal Code</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.postalCode && formik.errors.postalCode ? (
          <div className={classes.error}>{formik.errors.postalCode}</div>
        ) : null}
      </div>

      <div
        className={`${classes.control} ${
          formik.errors.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city ? (
          <div className={classes.error}>{formik.errors.city}</div>
        ) : null}
      </div>

      <div
        className={`${classes.control} ${
          formik.errors.contact && classes.invalid
        }`}
      >
        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          name="contact"
          type="text"
          value={formik.values.contact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.contact && formik.errors.contact ? (
          <div className={classes.error}>{formik.errors.contact}</div>
        ) : null}
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
