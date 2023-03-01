import React, { useState, useEffect } from "react";
import "./RosterView.css";
import { hoursToArray, colorHours, matchNames } from "../utils.js"

function RosterView({viewingRoster, users}) {
  let hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end)
  const [roster, setRoster] = useState([])

  useEffect(() => {
    setRoster(matchNames(viewingRoster, users));
  },[])

  return (
    <>
    
      <div className="nameContainer">
        {roster.map((mappedShifts) => (
          <div key={mappedShifts._id} className="rosterLine"><div className="namePlate">{mappedShifts.name}</div>
            {hourIndex.map((hourBlock) => (
              <div className={hoursToArray(mappedShifts.start, mappedShifts.end).includes(hourBlock) ? colorHours(hoursToArray(mappedShifts.start, mappedShifts.end)[0]) : "hourBlock"} key={hourBlock}><p className="hour">{hourBlock}:00</p></div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default RosterView;
