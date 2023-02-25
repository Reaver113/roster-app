import timetable from "./img/timetable.png"
import "./PreviousWeekly.css"
import { dateConverter } from "../utils";
import { CircularProgress } from "@mui/material"; 

//THIS WILL DISPLAY ALL SHIFTS THAT HAVE ALL READY OCCURED TO TODAYS DATE


function PreviousWeekly({roster}) {
	return (
		<>
		{roster.length === 0 &&
			<div className="Loading">
			<CircularProgress />
			</div>
		}
		{roster.map((rosterItem) => (
			<a href="./Week" className="currentContainer" key={rosterItem._id}><img src={timetable}></img><div>{dateConverter(rosterItem.start)}</div></a>
		))}
		</>
	)
}


export default PreviousWeekly