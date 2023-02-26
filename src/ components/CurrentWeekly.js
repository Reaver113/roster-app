import timetable from "./img/timetable.png"
import "./CurrentWeekly.css"
import React from "react";
import { CircularProgress } from "@mui/material";
import { dateConverter } from "../utils"; 

// THIS WILL DISPLAY CURRENT WEEK AND ALL FUTURE WEEKS ROSTERS

function CurrentWeekly({roster}) {
	
	return (
		<>
		{roster.length === 0 &&
			<div className="Loading">
			<CircularProgress />
			</div>
		}
		{roster.map((rosterItem) => (
			<a href={`./roster/${rosterItem._id}`} className="currentContainer" key={rosterItem._id}><img src={timetable}></img><div>{dateConverter(rosterItem.start)}</div></a>
		))}
		</>
	)
}


export default CurrentWeekly