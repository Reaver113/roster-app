import timetable from "./img/timetable.png"
import "./AllRosters.css"
import React from "react";
import { CircularProgress } from "@mui/material";
import { dateConverter, getDayOfWeek } from "../utils"; 


function AllRosters({roster}) {
	
	return (
		<>
		{roster.length === 0 && // check if roster is empty
			<div className="Loading"> 
			<CircularProgress />
			</div>
		}
		{roster.map((rosterItem) => ( // for each roster item in array, display link to roster details page with its contents
			<a href={`./roster/${rosterItem._id}`} className="currentContainer" key={rosterItem._id}><img src={timetable}></img><div>{getDayOfWeek(rosterItem.start)}<br />{dateConverter(rosterItem.start)}</div></a> // formatted day and date information for each roster item
		))}
		</>
	)
}


export default AllRosters