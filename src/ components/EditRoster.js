import { hoursToArray, colorHours, getHourNumber } from "../utils.js";
import { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "./EditRoster.css";


function EditRoster({ users, viewingRoster }) {

	

  const hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end);

  const [workingArray, setWorkingArray] = useState(
    viewingRoster.shifts.map((shift) => hoursToArray(shift.start, shift.end))
  );

  console.log(...workingArray)

  function passPosition(employee, hour) {
    const hourNumber = getHourNumber(hour);
    const newWorkingArray = [...workingArray];
  
    // Find the index of the employee in the viewingRoster.shifts array
    const employeeIndex = viewingRoster.shifts.findIndex((shift) => shift.employee === employee);
  
    // Check if the hour already exists in the workingArray for the employee
    const hourExists = newWorkingArray[employeeIndex].includes(hour);
  
    if (hourExists) {
      // Remove the hour from the workingArray
      newWorkingArray[employeeIndex] = newWorkingArray[employeeIndex].filter((h) => h !== hour);
    } else {
      // Add the hour to the workingArray
      newWorkingArray[employeeIndex] = newWorkingArray[employeeIndex].concat(hour);
    }
  
    setWorkingArray(newWorkingArray);
  }

  return (
    <>
      <div className="nameContainer">
        {viewingRoster.shifts.map((mappedShifts, index) => (
          <div key={mappedShifts._id} className="rosterLine">
            <div className="namePlate">{mappedShifts.employee}</div>
            {hourIndex.map((hourBlock) => (
              <div onClick={() => passPosition(mappedShifts.employee, hourBlock)} className={hoursToArray(mappedShifts.start, mappedShifts.end).includes(hourBlock) ? colorHours(getHourNumber(mappedShifts.start)) : "hourBlock"}key={hourBlock}>
                <p className="hour">{hourBlock}:00</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}



export default EditRoster;
