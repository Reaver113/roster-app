import "./ManageUsers.css"
import { stateContext } from "../State/stateReducer";
import React, { useState, useContext } from "react";
import { TextField, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { dateConverter, formatPhoneNumber, dateToUTC } from "../utils.js"
import { aestToUTC } from "../utils.js"




const ManageUsers = ({postUsers, deleteUser}) => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [dob, setDob] = useState(null);
const [unavailable, setUnavailable] = useState([]);
  
// Getting the state context of current users to manage them
const { users, dispatch } = useContext(stateContext)

// Function that handle date field inputs from Calendar picker
const calendarChange = (newValue) => {
  setDob(newValue);
};
  
  // Handle form data to create a new user and calling API to post it in the database after validation 
  // with required field validation then clear input fields to add a new user
const handleFormSubmit = (event) => {
  event.preventDefault();

  const newUser = {
    firstName,
    lastName,
    email,
    phone,
    dob: aestToUTC(dob),
    unavailable,
    password: "Password123"
  };

  postUsers(newUser).then(function (response){
    dispatch( { type: "addUser", user: response.data })})

  setFirstName("");
  setLastName("");
  setEmail("");
  setPhone("");
  setDob(null);
  setUnavailable([]);
};
  
  // clicking delete button for particular user deletes user data from database using the api and removing the same user info from current state
const clickDelete = (id) => {
  deleteUser(id).then(function (response){
    console.log(response.data)
    dispatch({ type: "deleteUser", user: response.data })})
}
  
// inputs and table for managing all existing users.
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
        <p className="hint">New user password: Password123</p>
        <Button className="createUserButton" variant="contained" type="submit">Create User</Button>
      </form>
          </div>
          
      <div className="manageUsers">
              {users.map((userItem)=> (
          <div key={userItem._id}className="userItem">
            <p className="userName">{userItem.firstName} {userItem.lastName} &nbsp;  &nbsp; {dateConverter(userItem.dob)}</p>
          <div className="deleteUserContainer">
              <IconButton onClick={() => {clickDelete(userItem._id)}} className="deleteUserButton"  variant="contained" type="submit"><DeleteIcon /></IconButton>
          </div>
          <p className="userPhoneEmail">{userItem.email} &nbsp;  &nbsp; {formatPhoneNumber(userItem.phone)}</p>
        </div>
        ))}
          </div>
      </>
);
};

export default ManageUsers;
