import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.fName) errors.fName = "Required";
  else if (values.fName.length > 15)
    errors.fName = "Must be 15 characters or less";

  if (!values.lName) errors.lName = "Required";
  else if (values.lName.length > 15)
    errors.lName = "Must be 15 characters or less";

  if (!values.email) errors.email = "Required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = "Invalid email address";

  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      fName: "",
      lName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="fName">First Name</label>
      <input
        id="fName"
        type="text"
        name="fName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fName}
      ></input>
      {formik.fName.touched &&  formik.errors.fName && <div>{formik.errors.fName}</div>}

      <label htmlFor="lName">Last Name</label>
      <input
        id="lName"
        type="text"
        name="lName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lName}
      ></input>
     { formik.lName.touched &&formik.errors.lName && <div>{formik.errors.lName}</div>}


      <label htmlFor="email">Your email</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      ></input>
     {formik.email.touched &&formik.errors.email && <div>{formik.errors.email}</div>}

      <button type="submit">Submit</button>
    </form>
  );
};
