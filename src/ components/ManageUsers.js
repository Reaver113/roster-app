import "./ManageUsers.css"
import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ManageUsers = ({users, postUsers, deleteUser}) => {
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

    postUsers(newUser).then(function (response){
      console.log(response.data)})

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDob("");
    setUnavailable([]);
  };

  const clickDelete = (id) => {
    deleteUser(id).then(function (response){
      console.log(response.data)})
  }


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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      className="userInputBox"
        label="Date of Birth"
        value={dob}
        onChange={(newValue) => {
          setDob(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      
    </LocalizationProvider>
			<br />
      <br />
      <Button className="createUserButton" variant="contained" type="submit">Create User</Button>
    </form>
		</div>
    <div className="manageUsers">
			{users.map((userItem)=> (
        <div key={userItem._id}className="userItem"><p className="userName">{userItem.firstName} {userItem.lastName}</p><div className="deleteUserContainer"><Button onClick={() => {clickDelete(userItem._id)}} className="deleteUserButton" endIcon={<DeleteIcon />} variant="contained" type="submit">Delete</Button></div><p className="userPhoneEmail">{userItem.phone} &nbsp; &nbsp; &nbsp;{userItem.email}</p></div>
      ))}
		</div>
		</>
  );
};

export default ManageUsers;