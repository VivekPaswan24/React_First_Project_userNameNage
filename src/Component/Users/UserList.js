import React from "react";
import Card from "../UI/Card";
const UserList = (props) => {
  return (
    <Card className="container">
      <ul className="list-group">
        {props.users.map((user) => (
          <li  key={user.id}className="list-group-item">
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
