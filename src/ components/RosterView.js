import Roster from "./logic/Roster.js";
import "./RosterView.css";

function RosterView() {
  return Roster.map((mappedRoster) => {
    return mappedRoster.staff.map((Staff) => (
      <>
        <div key={Staff.id} className="NamePlate">
          {Staff.name}
        </div>
        {mappedRoster.hours.map((hour, index) => (
          <div className="HourBlock" key={index}>
            {hour}
          </div>
        ))}
      </>
    ));
  });
}

export default RosterView;
