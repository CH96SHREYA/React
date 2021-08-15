
const FormInput =(props)=>{
    return (
        <div className={props.className}>
        <label htmlFor={props.id}>{props.content}</label>
        <input
         id={props.id}
         name={props.name}
         type={props.type}
         onChange={props.onChange}
         onBlur={props.onBlur}
         value={props.value}
       />
       {props.touched && props.error ? (
          <div className={props.className}>{props.errorMessage}</div>
        ) : null}
       </div>
    );

}

export default FormInput;