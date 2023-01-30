import React, { useState } from 'react';
import Preview from './Preview'
import "./Seperator.css"
import Options, {current, prev, change} from './logic/Options'

function Seperator() {
    const [clickedOption, setClickedOption] = useState(null);

	const handleClick = (option) => {
		setClickedOption(option);
	}

	return (
	<>
		{Object.values(Options).map((option, index) => {
			return(
				<>
				<div key={index} className="bar" onClick={() => handleClick(clickedOption === option ? null : option)}>{option} </div>
				{clickedOption === option && clickedOption !== null && <Preview clickedOption={clickedOption}/>}
				</>
			)
		}) }
	</>
	)
}

export default Seperator
