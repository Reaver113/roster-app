import BackButton from "./BackButton.js"
import "./DayView.css"
import RosterView from "./RosterView.js"

function DayView() {


  return (
    <>
    <div className="RosterHeader">hello!</div>
    <BackButton />
    <div className="rosterContainer">
    <RosterView />
    </div>
    </>
  );
}

export default DayView;
