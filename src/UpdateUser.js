import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "./Actions/actions";

const UpdateUser = (props) => {
  const [username, setUserName] = useState(props.users.userName);
  const [age, setAge] = useState(props.users.age);
  console.log(props);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      userName: username,
      age: age,
      id: props.users.id,
    };
    // props.addUser(newUser);
    dispatch(updateUser(newUser));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <input
          placeholder="age"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateUser;
