import { hoursToArray, colorHours } from "../utils.js"
import { useState } from "react"
import "./EditRoster.css"

function EditRoster({viewingRoster, users}) {

  let hourIndex = hoursToArray(viewingRoster.start, viewingRoster.end)

  const [blockClasses, setBlockClasses] = useState("hourBlock")

  function checkRosteredHour(userId, hour) {
		console.log(userId, hour)
    setBlockClasses(prevBlockClasses => ({
      ...prevBlockClasses,
      [`${userId}-${hour}`]: prevBlockClasses[`${userId}-${hour}`] === "hourBlock" ? "rosteredHour" : "hourBlock"
    }))
  }

  return (
    <>
      <div className="nameContainer">
        {users.map((mappedUsers) => (
          <div key={mappedUsers._id} className="rosterLine">
            <div className="namePlate">{mappedUsers.firstName}<br/> {mappedUsers.lastName}</div>
            {hourIndex.map((hourBlock) => (
              <div
                className={blockClasses[`${mappedUsers._id}-${hourBlock}`] || "hourBlock"}
                onClick={() => checkRosteredHour(mappedUsers._id, hourBlock)}
                key={hourBlock}
              >
                <p className="hour">{hourBlock}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default EditRoster
