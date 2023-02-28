import { hoursToArray, colorHours } from "../utils.js"
import "./EditRoster.css"

function EditRoster({viewingRoster, users}) {

	let hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end)

  return (
    <>
		<div className="nameContainer">
        {users.map((mappedShifts) => (
          <div key={mappedShifts._id} className="rosterLine"><div className="namePlate">{mappedShifts.firstName}<br/> {mappedShifts.lastName}</div>
            {hourIndex.map((hourBlock) => (
              <div className={hoursToArray(mappedShifts.start, mappedShifts.end).includes(hourBlock) ? colorHours(hoursToArray(mappedShifts.start, mappedShifts.end)[0]) : "hourBlock"} key={hourBlock}><p className="hour">{hourBlock}</p></div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default EditRoster
