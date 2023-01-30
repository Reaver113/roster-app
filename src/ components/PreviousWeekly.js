import timetable from "./img/timetable.png"
import "./PreviousWeekly.css"


const PrevRosters = [
	{
		id: 1,
		name: "Previous week1"
	},
	{
		id: 2,
		name: "Previous week2"
	},
	{
		id: 3,
		name: "Previous week3"
	},
	{
		id: 4,
		name: "Previous week4"
	},
	{
		id: 5,
		name: "Previous week5"
	},
	{
		id: 6,
		name: "Previous week6"
	},
	{
		id: 7,
		name: "Previous week7"
	},
]

function PreviousWeekly() {
	return (
		PrevRosters.map((PrevRoster) => {
			return <div className="previousContainer" key={PrevRoster.id}><img src={timetable}></img><div>{PrevRoster.name}</div></div>
		})
	)
}


export default PreviousWeekly