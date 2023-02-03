import "./Week.css"


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
		day: "Weednesday",
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

function Week() {
  return (
    <div className="week">
			<h1 className="weekTitle">---Date Range Here---</h1>
			<div className="block"></div>
    </div>
  );
}

export default Week;
