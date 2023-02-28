import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField, Button } from "@mui/material";
import { aestToUTC, combineDateTime } from '../utils';
import { useNavigate } from "react-router-dom";
import React from 'react';
import "./CreateRosterOptions.css"



function CreateRosterOptions({postRoster}) {

	const [rosterDate, setRosterDate] = React.useState(null);
	const [startTime, setStartTime] = React.useState(null);
	const [endTime, setEndTime] = React.useState(null);
	const navigate = useNavigate()

	const handleFormSubmit = (event) => {
    event.preventDefault();

    const newRoster = {
      rosterDate: aestToUTC(rosterDate),
			startTime: aestToUTC(startTime),
			endTime: aestToUTC(endTime),
    };
		

		
		postRoster(combineDateTime(newRoster)).then(function (response){
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