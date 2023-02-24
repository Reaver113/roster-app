import * as React from 'react';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import "./ChangeAvailability.css"
import Staff from "./logic/Staff.js"
import { todaysDate } from '../utils';

function ChangeAvailability() {
  const [value, setValue] = React.useState(dayjs(todaysDate()));

  return (
		<>
		<div className="Calendar">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
	<FormGroup className='clickbox'>
  <FormControlLabel className="once" control={<Checkbox />} label="One Time" />
  <FormControlLabel className="recurring" control={<Checkbox />} label="Recurring Weekly" />
	<Button className="submit" variant="contained" endIcon={<SendIcon />}>Submit</Button>
	</FormGroup>
		</div>
    <div className="unavailability">
    <div className="unavailabilityList">
    {Staff.map((staffList, index) => {
      return staffList.unavailable ? <div key={index} className="unavailabilityItem">{staffList.unavailable}</div> : <div key={index}></div>
})}
      
    </div>
    <Button className="remove" variant="contained" endIcon={<DeleteIcon />}>Remove</Button>
    </div>
    
	</>
  );
}

export default ChangeAvailability