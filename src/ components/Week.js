import "./Week.css"
import WeekList from "./WeekList.js"


function Week() {
  return (
    <div className="week">
			<h1 className="weekTitle">---Date Range Here---</h1>
			<div className="block"><WeekList /></div>
    </div>
  );
}

export default Week;
