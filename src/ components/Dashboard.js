import React, { useState, useEffect } from 'react';
import Preview from './Preview'
import "./Dashboard.css"
import logo from "./img/logo.png"
import Options from './logic/Options'

function Dashboard({getRoster, getUnavailabilities}) {
    const [clickedOption, setClickedOption] = useState(null);

		const [roster, setRoster] = useState([])
		const [unavailabilities, setUnavailabilities] = useState([])

		useEffect(() => {
			getUnavailabilities().then(function (response){
				setUnavailabilities(response.data)
			})
			getRoster().then(function (response){
				setRoster(response.data)
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
				{clickedOption === option && clickedOption !== null && <Preview clickedOption={clickedOption} roster={roster} unavailabilities={unavailabilities}/>}
			</div>
			)
		) }
	</>
	)
}

export default Dashboard
