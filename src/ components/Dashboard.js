import React, { useState, useEffect, useContext } from 'react';
import Preview from './Preview'
import "./Dashboard.css"
import logo from "./img/logo.png"
import Options from './logic/Options'
import stateReducer, { stateContext } from "../State/stateReducer.js"

function Dashboard({getRoster, getUnavailabilities, getUsers, postUsers, deleteUser, postRoster}) {
    const [clickedOption, setClickedOption] = useState(null);

		const [roster, setRoster] = useState([])
		const [unavailabilities, setUnavailabilities] = useState([])

		const { dispatch, users } = useContext(stateContext)


		useEffect(() => {
			getUnavailabilities().then(function (response){
				setUnavailabilities(response.data)
			})
			getRoster().then(function (response){
				setRoster(response.data)
			})
			getUsers().then(function (response){
				dispatch({ type: "setUsers", users: response.data })
			})
		},[])
	
	const handleClick = (option) => {
		setClickedOption(option);
	}
	return (
	<>
		{clickedOption === null && (<img className="logo" src={logo}></img>)}
		{Object.values(Options).map((option, index) => (
			<div key={index}>
				<div className="bar" onClick={() => handleClick(clickedOption === option ? null : option)}>{option} </div>
				{clickedOption === option && clickedOption !== null && <Preview clickedOption={clickedOption} roster={roster} unavailabilities={unavailabilities} users={users} postUsers={postUsers} deleteUser={deleteUser} postRoster={postRoster}/>}
			</div>
			)
		) }
	</>
	)
}

export default Dashboard
