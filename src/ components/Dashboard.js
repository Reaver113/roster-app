import React, { useState, useEffect, useContext } from 'react';
import Preview from './Preview'
import "./Dashboard.css"
import logo from "./img/logo.png"
import renderOptions from './logic/Options'
import { stateContext } from "../State/stateReducer.js"
import { Button } from '@mui/material';
import { useNavigate } from "react-router";

function Dashboard({getRoster, getCurrentUser, getUsers, postUsers, deleteUser, postRoster}) {

		const navigate = useNavigate();
    const [clickedOption, setClickedOption] = useState(null);

		const [roster, setRoster] = useState([])
		const [loggedInUser, setLoggedInUser] = useState()

		const { dispatch, users } = useContext(stateContext)

		const logout = () => {
			window.localStorage.clear()
			navigate("/login")
		}


		useEffect(() => {
			getCurrentUser().then(function (response){
				setLoggedInUser(response.data)
			})
			getRoster().then(function (response){
				setRoster(response.data)
			})
			getUsers().then(function (response){
				dispatch({ type: "setUsers", users: response.data })
			})
		},[dispatch, getCurrentUser, getRoster, getUsers])
	
	const handleClick = (option) => {
		setClickedOption(option);
	}
	return (
	<>
		{clickedOption === null && (<img alt="logo" className="logo" src={logo}></img>)}
		{Object.values(renderOptions()).map((option, index) => (
			<div key={index}>
				<div className="bar" onClick={() => handleClick(clickedOption === option ? null : option)}>{option} </div>
				{clickedOption === option && clickedOption !== null && <Preview clickedOption={clickedOption} roster={roster} loggedInUser={loggedInUser} users={users} postUsers={postUsers} deleteUser={deleteUser} postRoster={postRoster}/>}
			</div>
			)
		) }
		<Button variant="contained" className="logoutButton" onClick={logout} >Logout</Button>
	</>
	)
}

export default Dashboard
