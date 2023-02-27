import { getRosterById } from "../State/Roster/Axios.js"
import BackButton from "./BackButton.js"
import "./RosterContainer.css"
import RosterView from "./RosterView.js"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react"
import { dateConverter, getDayOfWeek } from "../utils"

function RosterContainer() {

  const { id } = useParams()

  const [viewingRoster, setViewingRoster] = useState([])

  useEffect(() => {
    getRosterById(id).then(function (response){
      setViewingRoster(response.data)
    })
  },[])
  
  return (
    <>
    {viewingRoster.length === 0 ? 
    <div className="Loading">
      <CircularProgress />
      </div>
      :  
      <div>   
      <h1 className="RosterHeader">{getDayOfWeek(viewingRoster.start)}, the {dateConverter(viewingRoster.start)}</h1>
      <BackButton />
      <div className="rosterContainer">
      <RosterView viewingRoster={viewingRoster}/>
      </div>
      </div>
		}

    </>
  );
}

export default RosterContainer;
