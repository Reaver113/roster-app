import "./RosterView.css";
import { hoursToArray } from "../utils.js"

function RosterView({viewingRoster}) {
  let hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end)

  return (
    <>
      <div className="nameContainer">
        {viewingRoster.shifts.map((mappedShifts) => (
          <div key={mappedShifts._id} className="rosterLine"><div className="namePlate">{mappedShifts.employee}</div>
            {hourIndex.map((hourBlock) => (
              <div className="hourBlock" key={hourBlock}><p className="hour">{hourBlock}</p></div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default RosterView;
