import timetable from "./img/timetable.png"
import "./PreviousWeekly.css"


const PrevRosters = [
	{
		id: 1,
		name: "week1"
	},
	{
		id: 2,
		name: "week2"
	},
	{
		id: 3,
		name: "week3"
	},
	{
		id: 4,
		name: "week4"
	},
	{
		id: 5,
		name: "week5"
	},
	{
		id: 6,
		name: "week6"
	},
	{
		id: 7,
		name: "week7"
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