import timetable from "./img/timetable.png"
import "./AllRosters.css"
import React from "react";
import { CircularProgress } from "@mui/material";
import { dateConverter, getDayOfWeek } from "../utils"; 

// THIS WILL DISPLAY CURRENT WEEK AND ALL FUTURE WEEKS ROSTERS

function AllRosters({roster}) {
	
	return (
		<>
		{roster.length === 0 &&
			<div className="Loading">
			<CircularProgress />
			</div>
		}
		{roster.map((rosterItem) => (
			<a href={`./roster/${rosterItem._id}`} className="currentContainer" key={rosterItem._id}><img src={timetable}></img><div>{getDayOfWeek(rosterItem.start)}<br />{dateConverter(rosterItem.start)}</div></a>
		))}
		</>
	)
}


export default AllRosters