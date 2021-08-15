import { useFormik } from "formik";
import classes from "./Checkout.module.css";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    console.log("username empty");
    errors.username = "Required";
  }

  if (!values.street) errors.street = "Required";

  if (!values.postalCode) errors.postalCode = "Required";

  if (values.postalCode.length < 5)
    errors.postalCode = "Please enter a valid postal code";

  if (!values.city) errors.city = "Required";

  if (!values.contact) errors.contact = "Required";
  if (values.contact.length < 10)
    errors.contact = "Please enter a valid contact no.";
  console.log(errors);
  return errors;
};

const DebugCheckout = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      street: "ccc",
      postalCode: "243001",
      city: "bly",
      contact: "8989898998",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={`${classes.control} ${
          formik.errors.username && classes.invalid
        }`}
      >
        <label htmlFor="username">Your Name</label>
        <input
          id="username"
          type="text"
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></input>
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
      </div>

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
          <div>{formik.errors.street}</div>
        ) : null}
      </div>

      
      <button type="submit">Submit</button>
    </form>
  );
};

export default DebugCheckout;
