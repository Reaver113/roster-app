import timetable from "./img/timetable.png"
import "./CurrentWeekly.css"


const CurrentRosters = [
	{
		id: 1,
		name: "current week1"
	},
	{
		id: 2,
		name: "current week2"
	},
	{
		id: 3,
		name: "current week3"
	},
	{
		id: 4,
		name: "current week4"
	},
	{
		id: 5,
		name: "current week5"
	},
	{
		id: 6,
		name: "current week6"
	},
	{
		id: 7,
		name: " current week7"
	},
]

function CurrentWeekly() {
	return (
		CurrentRosters.map((CurrentRoster) => {
			return <a href="./Week" className="currentContainer" key={CurrentRoster.id}><img src={timetable}></img><div>{CurrentRoster.name}</div></a>
		})
	)
}


export default CurrentWeekly