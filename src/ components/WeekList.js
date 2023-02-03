import timetable from "./img/timetable.png"
import "./WeekList.css"

const WeekRoster = [
	{
		id: 1,
		day: "Monday",
	},
	{
		id: 2,
		day: "Tuesday",
	},
	{
		id: 3,
		day: "Wednesday",
	},
	{
		id: 4,
		day: "Thursday",
	},
	{
		id: 5,
		day: "Friday",
	}
]

function WeekList() {
	return (
			WeekRoster.map((Days) => {
				return <a href="./Day" className="dailyItems" key={Days.id}><img className="dayimg" src={timetable} />{Days.day}</a>
			})
		)
}

export default WeekList