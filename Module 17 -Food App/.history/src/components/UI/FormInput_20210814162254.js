
const FormInput =(props)=>{
    return (
        <div className={props.className}>
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