import BackButton from "./BackButton.js"
import "./WeekView.css"
import WeekList from "./WeekList.js"


function WeekView() {

  return (
    <div className="week">
      <BackButton />
			<h1 className="weekTitle">---Date Range Here---</h1>
			<div className="block"><WeekList /></div>
    </div>
  );
}

export default WeekView;
