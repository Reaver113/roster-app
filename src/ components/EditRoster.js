import { hoursToArray, colorHours, getHourNumber } from "../utils.js";
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "./EditRoster.css";


function EditRoster({ users, viewingRoster }) {

	

  const hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end);

  const [shiftStartHours, setShiftStartHours] = useState(
    viewingRoster.shifts.map((shift) => getHourNumber(shift.start))
  );
  const [shiftEndHours, setShiftEndHours] = useState(
    viewingRoster.shifts.map((shift) => getHourNumber(shift.end))
  );

  const handleStartHourChange = (event, index) => {
    const newShiftStartHours = [...shiftStartHours];
    newShiftStartHours[index] = event.target.value;
    setShiftStartHours(newShiftStartHours);
  };

  const handleEndHourChange = (event, index) => {
    const newShiftEndHours = [...shiftEndHours];
    newShiftEndHours[index] = event.target.value;
    setShiftEndHours(newShiftEndHours);
  };

  return (
    <>
      <div className="nameContainer">
        {viewingRoster.shifts.map((mappedShifts, index) => (
          <div key={mappedShifts._id} className="rosterLine">
            <div className="namePlate">{mappedShifts.employee}</div>
            <Select
						variant="filled"
              value={shiftStartHours[index]}
              onChange={(event) => handleStartHourChange(event, index)}
              className="hourSelector"
            >
              {hourIndex.map((hour) => (
                <MenuItem key={hour} value={hour}>
                  {hour}
                </MenuItem>
              ))}
            </Select>
            <Select
						variant="filled"
              value={shiftEndHours[index]}
              onChange={(event) => handleEndHourChange(event, index)}
              className="hourSelector"
            >
              {hourIndex.map((hour) => (
                <MenuItem key={hour} value={hour}>
                  {hour}
                </MenuItem>
              ))}
            </Select>
            {hourIndex.map((hourBlock) => (
              <div
                className={
                  hoursToArray(mappedShifts.start, mappedShifts.end).includes(
                    hourBlock
                  )
                    ? colorHours(
                        hoursToArray(mappedShifts.start, mappedShifts.end)[0]
                      )
                    : "hourBlock"
                }
                key={hourBlock}
              >
                <p className="hour">{hourBlock}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}



export default EditRoster;
