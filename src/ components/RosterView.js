import Roster from "./logic/Roster.js"
import "./RosterView.css"

function RosterView() {
return (
	Roster.map((mappedRoster) => {
		return (
			mappedRoster.staff.map((Staff) => {
				return (
					<>
					<div className="NamePlate">{Staff.name}</div>
					{mappedRoster.hours.map((hour) => {
						return (
							<div className="HourBlock" key={hour}>{hour}</div>
						)
					})}
					</>
				)
			})
		)
	})
)}

export default RosterView