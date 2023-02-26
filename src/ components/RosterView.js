import "./RosterView.css";
import { hoursToArray } from "../utils.js"

function RosterView({ viewingRoster }) {
  let hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end);

  return (
    <>
      {hourIndex.map((mappedHours, index) => (
        <div className="hourIndex" key={index}>
          {mappedHours}
        </div>
      ))}
      <div className="nameContainer">
        {viewingRoster.shifts.map((mappedShifts) => (
          <div key={mappedShifts._id} className="NamePlate">
            {mappedShifts.employee}
            {hourIndex.map((hourBlock, index) => (
              <div className="hourBlock" key={index}>
                {hourBlock}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default RosterView;
