import React, { useEffect, useState, useContext } from "react";
import { stateContext } from "../State/stateReducer";
import { getRosterById } from "../State/Roster/Axios.js"
import BackButton from "./BackButton.js"
import "./RosterContainer.css"
import RosterView from "./RosterView.js"
import { useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material";
import { dateConverter, getDayOfWeek } from "../utils"
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import SettingsIcon from '@mui/icons-material/Settings';
import { getUsers } from "../State/User/Axios"
import Login from "./Login";

function RosterContainer() {

  // Fetch token from local storage
  const token = localStorage.getItem('token');
  
  // Navigation hook to move between pages
  const navigate = useNavigate();

  // useParams returns object of key/value pairs
  const { id } = useParams()

  // Get users state and dispatch function from context
  const { users, dispatch } = useContext(stateContext)

  // Set initial state for selected roster
  const [viewingRoster, setViewingRoster] = useState([])

  // Function to navigate user to edit page
  const Edit = () => {
    navigate(`/roster/edit/${id}`)
  }

  // Use effect hook to fetch data for viewing Roster by Id
  useEffect(() => {
    getRosterById(id).then(function (response){
      setViewingRoster(response.data)
    })

    // Check if users list is empty and then fetch it
    if (users.length === 0) {
      getUsers().then(function (response){
        dispatch({ type: "setUsers", users: response.data })
      })
    }
  },[])
  
  return (
    token ? 
    <>
    {/*If the `viewingRoster` hasn't loaded yet, display a loading spinner*/}
    {viewingRoster.length === 0 ? 
    <div className="Loading">
      <CircularProgress />
      </div>
      :  
      <div>   
      {/*Show the day and date of the selected roster*/}
      <h1 className="RosterHeader">{getDayOfWeek(viewingRoster.start)}, the {dateConverter(viewingRoster.start)}</h1>
      <BackButton />
      {/*The "Edit" Button when clicked triggers the `Edit mode`*/}
      <Button variant="contained" className="EditButton" startIcon={<SettingsIcon />} onClick={Edit}>Edit</Button>
      {/*Display RosterView component with parsed down data received from APIs*/}
      <div className="rosterContainer">
      <RosterView users={users} viewingRoster={viewingRoster}/>
      </div>
      </div>
        }
    </>
    :
    <Login /> // Display the Login component if the token does not exist.
  );
}

export default RosterContainer;
