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
import { todaysDate } from '../utils';

function ChangeAvailability({unavailabilities}) {
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
	<Button className="submit" variant="contained" endIcon={<SendIcon />}>Submit</Button>
	</FormGroup>
		</div>
    <div className="unavailability">
    <div className="unavailabilityList">
    {unavailabilities.map((unavailableItem) => (
      <div key={unavailableItem._id} className="unavailabilityItem">{unavailableItem.firstName}</div>
))}
      
    </div>
    <Button className="remove" variant="contained" endIcon={<DeleteIcon />}>Remove</Button>
    </div>
    
	</>
  );
}

export default ChangeAvailability