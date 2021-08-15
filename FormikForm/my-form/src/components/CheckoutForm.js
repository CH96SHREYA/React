import { useFormik } from "formik";
import classes from "./Checkout.module.css";

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
      username:"shreya",
      street: "ccc",
      postalCode: "243001",
      city: "bly",
      contact: "8989898998"
    }, 
    validate,
    onSubmit: values => {
    },
  }); 
  console.log("values",formik.values.username);


  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <div className={`${classes.control} ${formik.errors.username && classes.invalid}`}>
        <label htmlFor="username">Your Name</label>
        <input  id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.username}
       />
          
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
      </div>

      <div className={`${classes.control} ${formik.errors.street && classes.invalid}`}>
        <label htmlFor="street">Street</label>
        < input
          id="street"
          name="street"
          type="text"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.street && formik.errors.street ? (
          <div>{formik.errors.street}</div>
        ) : null}
      </div>

      <div className={`${classes.control} ${formik.errors.postalCode && classes.invalid}`}>
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
          <div>{formik.errors.postalCode}</div>
        ) : null}
      </div>

      <div className={`${classes.control} ${formik.errors.city && classes.invalid}`}>
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
          <div>{formik.errors.city}</div>
        ) : null}
      </div>

      <div className={`${classes.control} ${formik.errors.contact && classes.invalid}`}>
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
          <div>{formik.errors.contact}</div>
        ) : null}
      </div>

      <div className={classes.actions}>
        <button type="button">
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
