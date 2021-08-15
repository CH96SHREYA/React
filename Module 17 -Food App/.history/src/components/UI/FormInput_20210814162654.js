
const FormInput =(props)=>{
    return (
        <div >
        <label htmlFor={props.id}>{props.content}</label>
        <input
         id={props.id}
         name={props.username}
         type={props.type}
         onChange={props.handleChange}
         onBlur={props.handleBlur}
         value={props.value}
       />
       </div>
    );

}

export default FormInput;