import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "./img/logo.png"
import { loginUser } from "../State/Auth/Axios";
import "./Login.css"
import { useNavigate } from "react-router";
import { removeQuotes } from "../utils";
import jwt from 'jwt-decode'


function Login() {

	const navigate = useNavigate();


	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	// Function to handle login form submit event
	const handleFormSubmit = (event) => {
	event.preventDefault();

			// Creating a user object with email and password properties
			const user = {
					email,
					password
			}

			// Post data to API
			loginUser(user).then(function (response){
					// If there is an error in response, update the errorMessage state and reset the password state
					if (response.data.error) {
							setErrorMessage(response.data.error)
							setPassword("")
					} 
					else {
							// If no error, extract the token from the response and set it in the local storage
							const token = removeQuotes(JSON.stringify(response.data));
							localStorage.setItem('token', token);
							let userToken = token.replace('Bearer','')
							
							// Extract the currentUser information from the JWT
							let currentUser = (jwt(userToken))
							console.log(currentUser)
							// Set the currentUser in the local storage
							localStorage.setItem('currentUser', JSON.stringify(currentUser))
							// Navigate to the home page and reload the window
							navigate(`/`)
							window.location.reload(true)
			}
			})
	}
	
	// login form
	return (
			<>
			<div>
			<img className="logo" alt="logo" src={logo}></img>
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
