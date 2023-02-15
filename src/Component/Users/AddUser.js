import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameInputRef =useRef();
  const ageInputRef =useRef();
  const collegeNameInputRef =useRef();

  const [error, setError] = useState();


  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value
    const enteredUserAge=ageInputRef.current.value
    const enteredCollegeName=collegeNameInputRef.current.value
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredCollegeName.trim().length===0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name,age and college name (non-empty values)",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
    }
    props.userDetails(enteredName, enteredUserAge,enteredCollegeName);
    nameInputRef.current.value=''
    ageInputRef.current.value=''
    collegeNameInputRef.current.value=''
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="container">
        <form onSubmit={submitHandler}>
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            ref={nameInputRef}
          />
          <label htmlFor="age" className="form-label">
            Age (Years)
          </label>
          <input
            type="number"
            id="age"
            className="form-control"
            ref={ageInputRef}
          />
          <label htmlFor="collegeName" className="form-label">
            College Name
          </label>
          <input
            type="text"
            id="collegeName"
            className="form-control"
            ref={collegeNameInputRef}
          />
          <Button type="submit" className="addbtn">
            Add User
          </Button>
        </form>
      </Card>
      </Wrapper>
  );
};

export default AddUser;

