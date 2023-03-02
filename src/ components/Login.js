import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "./img/logo.png"
import { loginUser } from "../State/Auth/Axios";

function Login() {

	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

	const handleFormSubmit = (event) => {
    event.preventDefault();

		const user = {
			email,
			password
		}

		loginUser(user).then(function (response){
			console.log(response.data)
		})
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
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
			<br />
      <br />
      <TextField
				className="userInputBox"
				variant="filled" 
				type="password"
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