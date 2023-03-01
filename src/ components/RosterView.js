import "./RosterView.css";
import { hoursToArray, colorHours } from "../utils.js"

function RosterView({viewingRoster}) {
  let hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end)

  return (
    <>
      <div className="nameContainer">
        {viewingRoster.shifts.map((mappedShifts) => (
          <div key={mappedShifts._id} className="rosterLine"><div className="namePlate">{mappedShifts.employee}</div>
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
