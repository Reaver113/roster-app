import BackButton from "./BackButton.js"
import "./RosterContainer.css"
import EditRoster from "./EditRoster"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react"
import { dateConverter, getDayOfWeek } from "../utils"
import { getRosterById } from "../State/Roster/Axios.js"
import { getUsers } from "../State/User/Axios.js"


function EditContainer() {

	const { id } = useParams()
	const [viewingRoster, setViewingRoster] = useState([])
	const [users , setUsers] = useState([])

	useEffect(() => {
		getRosterById(id).then(function (response){
			setViewingRoster(response.data)
			console.log(response.data)
		})
		getUsers().then(function (response){
			setUsers(response.data)
			console.log(response.data)
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
      <EditRoster viewingRoster={viewingRoster} users={users}/>
      </div>
      </div>
		}

    </>
  );
}

export default EditContainer
