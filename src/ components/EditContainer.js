import BackButton from "./BackButton.js"
import "./RosterContainer.css"
import EditRoster from "./EditRoster"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material";
import { useState, useEffect, useContext } from "react"
import { dateConverter, getDayOfWeek, matchNames } from "../utils"
import { getRosterById, putRoster } from "../State/Roster/Axios.js"
import { getUsers } from "../State/User/Axios.js"
import { stateContext } from "../State/stateReducer.js";
import Login from "./Login.js";


function EditContainer() {

  const token = localStorage.getItem('token');
	const { id } = useParams()
	const [viewingRoster, setViewingRoster] = useState([])
	const { users, dispatch } = useContext(stateContext)


	useEffect(() => {
		getRosterById(id).then(function (response){
			setViewingRoster(response.data)
			console.log(response.data)
		})
    if (users.length === 0) {
      getUsers().then(function (response){
        dispatch({ type: "setUsers", users: response.data })
      })
    }
	},[])

  return (
    token ? 
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
      <EditRoster viewingRoster={viewingRoster} users={users} putRoster={putRoster}/>
      </div>
      </div>
		}
    </>
    :
    <Login />
  );
}

export default EditContainer
