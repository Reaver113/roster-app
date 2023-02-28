import "./ManageUsers.css"
import React, { useEffect, useState } from "react";
import { TextField, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { dateConverter, formatPhoneNumber, dateToUTC } from "../utils.js"
import { aestToUTC } from "../utils.js"



const ManageUsers = ({users, postUsers, deleteUser}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState(null);
  const [unavailable, setUnavailable] = useState([]);

  const calendarChange = (newValue) => {
    setDob(newValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      phone,
      dob: aestToUTC(dob),
      unavailable,
    };


    console.log(newUser)

    postUsers(newUser).then(function (response){
      console.log(response.data)})

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setDob(null);
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
        variant="filled" 
        label="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      />
			<br />
      <br />
      <TextField
				className="userInputBox"
        variant="filled" 
        label="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      />
			<br />
      <br />
      <TextField
				className="userInputBox"
        variant="filled" 
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
        variant="filled" 
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
        openTo='year'
        value={dob}
        inputFormat="DD/MM/YYYY"
        required
        onChange={calendarChange}
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
        <div key={userItem._id}className="userItem"><p className="userName">{userItem.firstName} {userItem.lastName} &nbsp;  &nbsp; {dateConverter(userItem.dob)}</p>
        <div className="deleteUserContainer"><IconButton onClick={() => {clickDelete(userItem._id)}} className="deleteUserButton"  variant="contained" type="submit"><DeleteIcon /></IconButton></div>
        <p className="userPhoneEmail">{userItem.email} &nbsp;  &nbsp; {formatPhoneNumber(userItem.phone)}</p>
        </div>
      ))}
		</div>
		</>
  );
};

export default ManageUsers;