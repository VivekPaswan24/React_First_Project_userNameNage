import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
    }
    props.userDetails(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
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
            value={enteredUsername}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age" className="form-label">
            Age (Years)
          </label>
          <input
            type="number"
            id="age"
            className="form-control"
            value={enteredAge}
            onChange={ageChangeHandler}
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

