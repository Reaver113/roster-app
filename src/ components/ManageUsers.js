import "./ManageUsers.css"
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'

const ManageUsers = ({users}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [unavailable, setUnavailable] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      dob,
      unavailable,
    };

    console.log(newUser); // for debugging purposes only, remove in production

    // TODO: send newUser data to API via POST request

    // clear form inputs after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDob("");
    setUnavailable([]);
  };

  return (
		<>
		<div className="newUserForm">
    <form onSubmit={handleFormSubmit}>
      <TextField
				className="userInputBox"
        label="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      />
			<br />
      <br />
      <TextField
				className="userInputBox"
        label="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      />
			<br />
      <br />
      <TextField
				className="userInputBox"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
			<br />
      <br />
      <TextField
				className="userInputBox"
        label="Phone Number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />
			<br />
      <br />
      <Button className="createUserButton" variant="contained" type="submit">Create User</Button>
    </form>
		</div>
    <div className="manageUsers">
			{users.map((userItem)=> (
        <div className="userItem"><p className="userName">{userItem.firstName} {userItem.lastName}<div className="deleteUserContainer"><Button className="deleteUserButton"  endIcon={<DeleteIcon />} variant="contained" type="submit">Delete</Button></div></p><p className="userPhoneEmail">{userItem.phone} &nbsp; &nbsp; &nbsp;{userItem.email}</p></div>
      ))}
		</div>
		</>
  );
};

export default ManageUsers;