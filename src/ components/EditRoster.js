import { arrayToTimeStart, arrayToTimeEnd, hoursToArray, colorHours, getHourNumber, matchNames } from "../utils.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router";
import "./EditRoster.css";
import { Button } from "@mui/material";


function EditRoster({ users, viewingRoster, putRoster}) {

  const navigate = useNavigate();
  const { id } = useParams()

  const hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end);
  const [roster, setRoster] = useState([])

  const [workingArray, setWorkingArray] = useState(
    viewingRoster.shifts.map((shift) => hoursToArray(shift.start, shift.end))
  );

  useEffect(() => {
    setRoster(matchNames(viewingRoster, users))
	},[])

  console.log(...workingArray)

  function passPosition(employee, hour) {
    const hourNumber = getHourNumber(hour);
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

    console.log(updatedRoster)
    
    putRoster(id, updatedRoster).then(function (response){
			console.log(response.data)
      navigate(-1)
    });
  }

  return (
    <>
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
      <div className="publishContainer">
      <Button variant="contained" onClick={() => PublishRoster()} className="publish">Publish Roster</Button>
      </div>
    </>
  );
}



export default EditRoster;
