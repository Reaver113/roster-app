import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "./img/logo.png"
import { loginUser, loginAdmin } from "../State/Auth/Axios";
import "./Login.css"
import { useNavigate } from "react-router";
import { removeQuotes } from "../utils";
import jwt from 'jwt-decode'

function Login() {

	const navigate = useNavigate();

	const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleFormSubmit = (event) => {
    event.preventDefault();

		const user = {
			email,
			password
		}


		loginUser(user).then(function (response){
			if (response.data.error) {
				setErrorMessage(response.data.error)
				setPassword("")
			} 
			else {
				setErrorMessage("")
				const token = removeQuotes(JSON.stringify(response.data));
				localStorage.setItem('token', token);
				let userToken = token.replace('Bearer','')
				let currentUser = (jwt(userToken))
				console.log(currentUser)
				localStorage.setItem('currentUser', JSON.stringify(currentUser))
				navigate(`/`)
				window.location.reload(true)
		}
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
			<p className="errorMessage">{errorMessage}</p>
      <br />
			<Button className="createUserButton" variant="contained" type="submit">Login</Button>
			</form>
		</div>
		</>
	)
}


export default Login