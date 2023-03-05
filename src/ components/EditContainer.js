import BackButton from "./BackButton.js"
import "./RosterContainer.css"
import EditRoster from "./EditRoster"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material";
import { useState, useEffect, useContext } from "react"
import { dateConverter, getDayOfWeek } from "../utils"
import { getRosterById, putRoster } from "../State/Roster/Axios.js"
import { getUsers } from "../State/User/Axios.js"
import { stateContext } from "../State/stateReducer.js";
import Login from "./Login.js";


function EditContainer() {
  
  // This retrieves the token from local storage
  const token = localStorage.getItem('token');

  // This retrieves the "id" parameter from the URL.
    const { id } = useParams()

  // This sets up a state variable "viewingRoster" and its setter method "setViewingRoster"
    const [viewingRoster, setViewingRoster] = useState([])

  // This gets the users data from the global state using the useContext hook.
  const { users, dispatch } = useContext(stateContext)

  // This runs when the component mounts, it gets the roster data for the specified id and updates the state accordingly.
    useEffect(() => {
        getRosterById(id).then(function (response){
            setViewingRoster(response.data)
            console.log(response.data)
        })

    // If there are no users in the global state, get them and dispatch an action to update the global state with received data
    if (users.length === 0) {
      getUsers().then(function (response){
        dispatch({ type: "setUsers", users: response.data })
      })
    }
    },[])


  // This section returns JSX 
  return (
    // This portion loads either of two components depending on whether there's a token or not.
    token ? 
    <>
    {/* This shows a loading symbol until the roster data is available */}
    {viewingRoster.length === 0 ? 
    <div className="Loading">
      <CircularProgress />
      </div>
      :  
      <div>   
      {/* This displays the day and date using utility functions */}
      <h1 className="RosterHeader">{getDayOfWeek(viewingRoster.start)}, the {dateConverter(viewingRoster.start)}</h1>
      <BackButton />
      <div className="rosterContainer">
      {/* This component is responsible for editing the roster */}
      <EditRoster viewingRoster={viewingRoster} users={users} putRoster={putRoster}/>
      </div>
      </div>
        }
    </>

    // This component will be loaded if there's no valid user token
    :
    <Login />
  );
}

// This makes the component available outside of this file.
export default EditContainer