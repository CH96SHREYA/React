import { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

/*
Lecture 105: Refs
Use case:1- If you want to read value of an element then its a better option than state
         2- states log every key pressed in the element, instead refs can be used to get the value 
            when the form is finally submitted
        3- There are other  use cases also, to be seen next in the course
Hence, the code is smaller and cleaner than states. With one edge case to reset value without using react 
that is, ref.value =""

How to use 
  1- import
  2- returns a holder or a value which is to be used with the element of choice


*/
const AddUser = (props) => {
  const enteredNameRef = useRef();
  const enteredUserAgeRef =useRef();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [errorMessage, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=enteredNameRef.current.value;
    const enteredUserAge =enteredUserAgeRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid  age (age >0)",
      });

      return;
    }
    props.onUserAdd(enteredName, enteredUserAge);
    enteredNameRef.current.value="";
    enteredUserAgeRef.current.value="";

    
  };
  const errorHandler =()=>{
    setError(null);
  }
  
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  return (
    <>
      {errorMessage && (
        <ErrorModal heading={errorMessage.title} content={errorMessage.message}  onConfirm ={errorHandler}/>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name here"
            ref = {enteredNameRef}
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Enter age here"
            ref ={enteredUserAgeRef}
            // value={enteredAge}
            // onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
