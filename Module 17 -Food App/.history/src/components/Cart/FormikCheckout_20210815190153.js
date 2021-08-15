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
  const sendUserData=()=>{
      props.onConfirm(formik.values);
  }
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
        className={`${classes.control} ${
          formik.errors.username && classes.invalid
        }`}
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
        className={`${classes.control} ${
          formik.errors.street && classes.invalid
        }`}
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

      <FormInput
        className={`${classes.control} ${
          formik.errors.postalCode && classes.invalid
        }`}
        id="postalCode"
        content="Postal Code"
        name="postalCode"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.postalCode}
        touched={formik.touched.postalCode}
        error={formik.errors.postalCode}
        errorClass={classes.error}
        errorMessage={formik.errors.postalCode}
      />

      <FormInput
        className={`${classes.control} ${
          formik.errors.city && classes.invalid
        }`}
        id="city"
        content="City"
        name="city"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.city}
        touched={formik.touched.city}
        error={formik.errors.city}
        errorClass={classes.error}
        errorMessage={formik.errors.city}
      />

      <FormInput
        className={`${classes.control} ${
          formik.errors.contact && classes.invalid
        }`}
        id="contact"
        content="Contact No."
        name="contact"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.contact}
        touched={formik.touched.contact}
        error={formik.errors.contact}
        errorClass={classes.error}
        errorMessage={formik.errors.contact}
      />     

      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit" onClick={sendUserData}>Submit</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
