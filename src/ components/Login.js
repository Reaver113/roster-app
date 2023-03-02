import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "./img/logo.png"

function Login() {

	const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

	const handleFormSubmit = (event) => {
    event.preventDefault();
	}
	
	return (
		<>
		<div>
		<img className="logo" src={logo}></img>
		<form onSubmit={handleFormSubmit}>
      <TextField
				className="userInputBox"
				variant="filled" 
        label="Email"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
			<br />
      <br />
      <TextField
				className="userInputBox"
				variant="filled" 
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
			<br />
      <br />
			<Button className="createUserButton" variant="contained" type="submit">Login</Button>
			</form>
		</div>
		</>
	)
}


export default Login