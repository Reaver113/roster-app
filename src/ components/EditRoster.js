import { arrayToTimeStart, arrayToTimeEnd, hoursToArray, colorHours, matchNames } from "../utils.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router";
import "./EditRoster.css";
import { Button } from "@mui/material";


function EditRoster({ users, viewingRoster, putRoster}) {

  // Get navigate and useParams from react-router-dom
  const navigate = useNavigate();
  const { id } = useParams()

  // Convert viewingRoster.start and viewingRoster.end into an array of hours
  const hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end);

  // Set roster as an empty array initially and update it in the useEffect hook 
  const [roster, setRoster] = useState([])

  // workingArray contains a list of hours each employee (shift) is working
  const [workingArray, setWorkingArray] = useState(
    viewingRoster.shifts.map((shift) => hoursToArray(shift.start, shift.end))
  );

  // useEffect to update the roster using matchNames function
  useEffect(() => {
    setRoster(matchNames(viewingRoster, users))
    },[users, viewingRoster])

  // passPosition handles adding and removing hours from the workingArray for an employee
  function passPosition(employee, hour) {
    // Get the correct hour index number
    
    // Create a copy of the workingArray
    const newWorkingArray = [...workingArray];
  
    // Find the index of the employee in the viewingRoster.shifts array
    const employeeIndex = viewingRoster.shifts.findIndex(
      (shift) => shift.employee === employee
    );
  
    // Check if the hour already exists in the workingArray for the employee
    const hourExists = newWorkingArray[employeeIndex].includes(hour);
  
    if (hourExists) {
      // Remove the hour from the workingArray
      newWorkingArray[employeeIndex] = newWorkingArray[employeeIndex].filter(
        (h) => h !== hour
      );
    } else {
      // Add the hour to the workingArray
      newWorkingArray[employeeIndex] = newWorkingArray[employeeIndex].concat(hour);
    }
  
    // Sort the array in ascending order
    newWorkingArray[employeeIndex].sort((a, b) => a - b);
  
    setWorkingArray(newWorkingArray);
  }
  
  // PublishRoster handles submitting the updated shifts to the backend through putRoster
  function PublishRoster() {
    const shifts = viewingRoster.shifts.map((shift, i) => ({
      employee: shift.employee,
      start: arrayToTimeStart(workingArray[i]),
      end: arrayToTimeEnd(workingArray[i])
    }));
    

    const updatedRoster = {
      start: viewingRoster.start,
      end: viewingRoster.end,
      shifts: shifts 
    };

    // Call putRoster with updatedRoster and navigate back to previous page on success
    putRoster(id, updatedRoster).then(function (response){
      navigate(-1)
    });
  }

  return (
    <>
      {/* Display the roster */}
      <div className="nameContainer">
        {roster.map((mappedShifts, index) => (
          <div key={mappedShifts._id} className="rosterLine">
            <div className="namePlate">{mappedShifts.name}</div>
            {hourIndex.map((hourBlock) => (
              <div onClick={() => passPosition(mappedShifts.employee, hourBlock)} className={workingArray[index].includes(hourBlock) ? colorHours(workingArray[index][0]) : "hourBlock"}key={hourBlock}>
                <p className="hour">{hourBlock}:00</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <br />

      {/* Button to publish the updated roster */}
      <div className="publishContainer">
      <Button variant="contained" onClick={() => PublishRoster()} className="publish">Publish Roster</Button>
      </div>
    </>
  );
}

export default EditRoster;
