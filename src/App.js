import React from "react";
import AddUser from "./Component/Users/AddUser";
import "./App.css";
import UserList from "./Component/Users/UserList";
import { useState } from "react";
function App() {
  const [userNameAndAge, setUserNameAndAge] = useState([]);

  const userDetailsHandler = (uName, uAge,uCollgeName) => {
    setUserNameAndAge((prevUsers) => {
      return [...prevUsers, { name: uName, age: uAge, college:uCollgeName, id:Math.random()}];
    });
  };
  return (
    <React.Fragment>
      <AddUser userDetails={userDetailsHandler}></AddUser>
      {userNameAndAge.length !== 0 && <UserList users={userNameAndAge} />}
    </React.Fragment>
  );
}

export default App;
