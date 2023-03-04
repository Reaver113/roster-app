import Dashboard from "./Dashboard"
import { getRoster, postRoster  } from "../State/Roster/Axios" 
import { getUsers, getCurrentUser, postUsers, deleteUser } from "../State/User/Axios"
import Login from "./Login";

// get the token from local storage
const token = localStorage.getItem('token');

// render either the Dashboard component or the Login component depending on whether a token is available
const DashboardContainer = () => {
    return (
        token ? 
        // if there is a token, show the Dashboard
        <Dashboard getRoster={getRoster} getCurrentUser={getCurrentUser} getUsers={getUsers} postUsers={postUsers} deleteUser={deleteUser} postRoster={postRoster}/>
        :
        // if not, show the Login
        <Login />
    )
}

export default DashboardContainer
