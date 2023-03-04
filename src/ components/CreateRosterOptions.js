import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField, Button } from "@mui/material";
import { aestToUTC, combineDateTime, defaultMorningValue, defaultNightValue } from '../utils';
import { useNavigate } from "react-router-dom";
import React, { useState} from 'react';
import "./CreateRosterOptions.css"



function CreateRosterOptions({postRoster, users}) {

  // state variables for managing form data
  const [rosterDate, setRosterDate] = useState(new Date());
  const [startTime, setStartTime] = useState(defaultMorningValue());
  const [endTime, setEndTime] = useState(defaultNightValue());
  const [errorMessage, setErrorMessage] = useState(null);

  // To navigate the page using react-router-dom
  const navigate = useNavigate()

  const handleFormSubmit = (event) => {
    // prevent default form submit action
    event.preventDefault();

    // form validation: make sure roster data entered
    if (!rosterDate){
      setErrorMessage("Please enter a date")
    } else {
      setErrorMessage(null);
      // organize and post roster data by creating new Roster and Shift objects
      const newRoster = {
        rosterDate: aestToUTC(rosterDate),
        startTime: aestToUTC(startTime),
        endTime: aestToUTC(endTime),
      };
      const employees = users.map(user => ({
        employee: user._id,
      }));
      const publishingRoster = {
        start: combineDateTime(newRoster).start,
        end: combineDateTime(newRoster).end,
        shifts: employees
      }
      console.log(publishingRoster)
      
      // POST new roster using API call, go to the Edit Roster view if successful
      postRoster(publishingRoster).then(function (response){
        console.log(response.data._id);
        navigate(`/roster/edit/${response.data._id}`);
      })
    } 
  }

  // return JSX code with HTML form elements, using Material UI components
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
            {/* Submit button */}
            <Button className="createRosterButton" variant="contained" type="submit">Create Roster</Button>
          </div>
          {/* Show error message for invalid inputs */}
          <p className="errorMessage">{errorMessage}</p>
        </LocalizationProvider>
      </form>
    </div>
    </>
  )
}

export default CreateRosterOptions;
