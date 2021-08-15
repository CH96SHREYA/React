import classes from "./Checkout.module.css";

const FormInput =(props)=>{
    return (
        <div className={`${classes.control} ${formik.errors.username && classes.invalid}`}>
        <label htmlFor="username">Your Name</label>
        <input
         id="username"
         name="username"
         type="text"
         onChange={props.handleChange}
         onBlur={props.handleBlur}
         value={props.value}
       />
       </div>
    );

}

export default FormInput;