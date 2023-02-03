import timetable from "./img/timetable.png"
import "./PreviousWeekly.css"


const PrevRosters = [
	{
		id: 1,
		name: "Previous week 1"
	},
	{
		id: 2,
		name: "Previous week 2"
	},
	{
		id: 3,
		name: "Previous week 3"
	},
	{
		id: 4,
		name: "Previous week 4"
	},
	{
		id: 5,
		name: "Previous week 5"
	},
	{
		id: 6,
		name: "Previous week 6"
	},
	{
		id: 7,
		name: "Previous week 7"
	},
	{
		id: 8,
		name: "Previous week 8"
	},
	{
		id: 9,
		name: "Previous week 9"
	},
	{
		id: 10,
		name: "Previous week 10"
	},
	{
		id: 11,
		name: "Previous week 11"
	},
	{
		id: 12,
		name: "Previous week 12"
	},
	{
		id: 13,
		name: "Previous week 13"
	},
	{
		id: 14,
		name: "Previous week 14"
	},
	{
		id: 15,
		name: "Previous week 15"
	},
	{
		id: 16,
		name: "Previous week 16"
	},
	{
		id: 17,
		name: "Previous week 17"
	},
	{
		id: 18,
		name: "Previous week 18"
	},
	{
		id: 19,
		name: "Previous week 19"
	},
	{
		id: 20,
		name: "Previous week 20"
	},
	{
		id: 21,
		name: "Previous week 21"
	},
	{
		id: 22,
		name: "Previous week 22"
	},
	{
		id: 23,
		name: "Previous week 23"
	},
	{
		id: 24,
		name: "Previous week 24"
	},
	{
		id: 25,
		name: "Previous week 25"
	},
	{
		id: 26,
		name: "Previous week 26"
	},
	{
		id: 27,
		name: "Previous week 27"
	},
	{
		id: 28,
		name: "Previous week 28"
	},
	{
		id: 29,
		name: "Previous week 29"
	},{
		id: 30,
		name: "Previous week 30"
	},
	{
		id: 31,
		name: "Previous week 31"
	},
	{
		id: 32,
		name: "Previous week 32"
	},
	{
		id: 33,
		name: "Previous week 33"
	},
	{
		id: 34,
		name: "Previous week 34"
	},
	{
		id: 35,
		name: "Previous week 35"
	},
	{
		id: 36,
		name: "Previous week 36"
	},
	{
		id: 37,
		name: "Previous week 37"
	},
	{
		id: 3,
		name: "Previous week 38"
	},
	{
		id: 39,
		name: "Previous week 39"
	},
]

function PreviousWeekly() {
	return (
		PrevRosters.map((PrevRoster) => {
			return <a href="./Week" className="previousContainer" key={PrevRoster.id}><img src={timetable}></img><div>{PrevRoster.name}</div></a>
		})
	)
}


export default PreviousWeekly