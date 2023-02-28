import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField, Button } from "@mui/material";
import React from 'react';
import "./CreateRosterOptions.css"

function CreateRosterOptions() {

	const [rosterDate, setRosterDate] = React.useState(null);
	const [startTime, setStartTime] = React.useState(null);
	const [endTime, setEndTime] = React.useState(null);

	const handleFormSubmit = (event) => {
    event.preventDefault();
    const newRoster = {
      rosterDate,
      startTime,
      endTime,
    };
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