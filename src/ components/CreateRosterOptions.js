import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField, Button } from "@mui/material";
import { aestToUTC, combineDateTime, defaultMorningValue, defaultNightValue, removeQuotes } from '../utils';
import { useNavigate } from "react-router-dom";
import React, { useState} from 'react';
import "./CreateRosterOptions.css"



function CreateRosterOptions({postRoster}) {


	const [rosterDate, setRosterDate] = useState(null);
	const [startTime, setStartTime] = useState(defaultMorningValue());
	const [endTime, setEndTime] = useState(defaultNightValue());
	const navigate = useNavigate()

	const handleFormSubmit = (event) => {
    event.preventDefault();

    const newRoster = {
      rosterDate: aestToUTC(rosterDate),
			startTime: aestToUTC(startTime),
			endTime: aestToUTC(endTime),
    };
		
		const publishingRoster = {
			start: combineDateTime(newRoster).start,
			end: combineDateTime(newRoster).end,
			shifts: []
		}
		

		
		postRoster(publishingRoster).then(function (response){
		console.log(response.data._id);
		navigate(`/roster/edit/${response.data._id}`)
		})
	}

	
	return (
		<>
		<div className="newRosterForm">
    <form onSubmit={handleFormSubmit}>
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className="rosterDateContainer">
			<StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={rosterDate}
        onChange={(newValue) => {
          setRosterDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
			< br/>
			</div>
			<div className="rosterHoursContainer">
      <TimePicker
				className="timePicker"
				views={["hours"]}
        label="Start Time"
        value={startTime}
        onChange={(newValue) => {
          setStartTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
			<br />
			<br />
      <TimePicker
			className="timePicker"
        label="End Time"
				views={["hours"]}
        value={endTime}
        onChange={(newValue) => {
          setEndTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
			<br />
			<br />
					<Button className="createRosterButton" variant="contained" type="submit">Create Roster</Button>
			</div>
    </LocalizationProvider>
		</form>
		</div>
		</>
	)
}

export default CreateRosterOptions