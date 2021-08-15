
const FormInput =(props)=>{
    return (
        <div >
        <label htmlFor={props.id}>{props.content}</label>
        <input
         id={props.id}
         name={props.name}
         type={props.type}
         onChange={props.onChange}
         onBlur={props.onBlur}
         value={props.value}
       />
       </div>
    );

}

export default FormInput;