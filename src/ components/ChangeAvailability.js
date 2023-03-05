import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { getDayOfWeek } from '../utils.js'
import "./ChangeAvailability.css"
import { patchUnavailable, deleteUnavailable } from "../State/User/Axios.js"

function ChangeAvailability({loggedInUser}) {
  const [newUnavailableDate, setNewUnavailableDate] = useState(new Date());
  const [unavailabilityItem, setUnavailabilityItem] = useState("")



  function stageItem(id) {
    if (unavailabilityItem === id) {
      setUnavailabilityItem(null)
    }
    else {
      setUnavailabilityItem(id)
    }
  }

  function addUnavailableItem() {
    const stageUnavailable = {
      unavailable: [
        {
          day: getDayOfWeek(newUnavailableDate),
        }]
    }
    patchUnavailable(loggedInUser._id, stageUnavailable)
    window.location.reload(true) //not enought time in production to useContext
  }

    function deleteUnavailableItem() {
      deleteUnavailable(loggedInUser._id, unavailabilityItem)
      window.location.reload(true) //not enought time in production to useContext
    }
  
  return (
		<>
		<div className="Calendar">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={newUnavailableDate}
        onChange={(newValue) => {
          setNewUnavailableDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
	<FormGroup className='clickbox'>
	<Button className="submit" variant="contained" onClick={() => addUnavailableItem()} endIcon={<SendIcon />}>Submit</Button>
	</FormGroup>
		</div>
    <div className="unavailability">
    <div className="unavailabilityList">
    <p className="unavailableTitle">Days unavailable</p>
    {loggedInUser.unavailable.map((unavailableItem) => (
      <div key={unavailableItem._id} onClick={() => stageItem(unavailableItem._id)} className={unavailabilityItem === unavailableItem._id ? "selectedItem" : "unavailabilityItem"}>{unavailableItem.day}</div>
))}
      
    </div>
    <Button className="remove" variant="contained" onClick={() => deleteUnavailableItem()} endIcon={<DeleteIcon />}>Remove</Button>
    </div>
    
	</>
  );
}

export default ChangeAvailability