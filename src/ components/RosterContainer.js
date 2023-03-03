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

  const token = localStorage.getItem('token');
  
  const navigate = useNavigate();

  const { id } = useParams()

  const { users, dispatch } = useContext(stateContext)

  const [viewingRoster, setViewingRoster] = useState([])

  const Edit = () => {
    navigate(`/roster/edit/${id}`)
  }

  useEffect(() => {
    getRosterById(id).then(function (response){
      setViewingRoster(response.data)
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
      <Button variant="contained" className="EditButton" startIcon={<SettingsIcon />} onClick={Edit}>Edit</Button>
      <div className="rosterContainer">
      <RosterView users={users} viewingRoster={viewingRoster}/>
      </div>
      </div>
		}
    </>
    :
    <Login />
  );
}

export default RosterContainer;
