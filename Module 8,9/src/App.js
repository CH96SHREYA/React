import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
/*
React cool stuff -

1) props - to transfer data related to a component within the React tree
2) state - to re -render componenets as per the flow change
3) fragment - to avoid div soup (cause JSX returns only single element)
4) portals- to render component in html dom other than its normal flow, so target to render is changed
5) ref - to read a value of component, sometimes a cleaner alternative to states

*/
function App() {
  const [userList, setUserList] = useState([]);

  const handleUserAdd = (uName,uAge)=>{
    setUserList((prevUserList) =>{
      return [...prevUserList,{name:uName, age:uAge, id:Math.random().toString()}];
    });
  }
  // <> or <React.fragment> to return multiple elements in JSX w/o using covering div which causes div soup
  return (
    <>
      <AddUser onUserAdd={handleUserAdd} />
      <UserList users={userList} />
    </>
  );
}

export default App;
