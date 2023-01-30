import React, { useState } from 'react';
import Preview from './Preview'
import "./Seperator.css"

function Seperator() {
    const [clickedOption, setClickedOption] = useState(null);

	const options = ["CurrentRoster", "PreviousRoster", "ChangeAvailability"]

	const handleClick = (option) => {
		setClickedOption(option);
		
	}

	return (
	<>
		{options.map((option, index) => {
			return(
				<>
				<div key={index} className={option} onClick={() => handleClick(clickedOption === option ? null : option)}>{option.replace(/([A-Z])/g, ' $1').trim()} </div>
				{clickedOption === option && clickedOption !== null && <Preview />}
				</>
			)
		}) }
	</>
	)
}

export default Seperator
