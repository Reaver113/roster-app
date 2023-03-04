// Importing necessary modules and functions
import React, { useState, useEffect } from "react";
import "./RosterView.css";
import { hoursToArray, colorHours, matchNames } from "../utils.js"

// Defining RosterView Component and passing two props: viewingRoster & users
function RosterView({ viewingRoster, users }) {

  // Creating an array of hours between start and end time of the roster
  let hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end)

  // Using useState to maintain state of the roster and updating it using useEffect when viewingRoster and users changes 
  const [roster, setRoster] = useState([])
  useEffect(() => {
    setRoster(matchNames(viewingRoster, users));
  },[])

  return (
    <>
      {/* Container for displaying all shifts */}
      <div className="nameContainer">
        {/* Iterating over each shift in the roster */}
        {roster.map((mappedShifts) => (
          // Displaying name and corresponding shift hours in one line
          <div key={mappedShifts._id} className="rosterLine">
            <div className="namePlate">{mappedShifts.name}</div>
            {hourIndex.map((hourBlock) => (
              // Displaying single hour block and apply a color if it matches any shift
              <div
                className={hoursToArray(mappedShifts.start, mappedShifts.end).includes(hourBlock) ? colorHours(hoursToArray(mappedShifts.start, mappedShifts.end)[0]) : "hourBlock"}
                key={hourBlock}>
                  <p className="hour">{hourBlock}:00</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

// Exporting RosterView component as default export
export default RosterView;
