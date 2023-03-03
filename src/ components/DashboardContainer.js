import Dashboard from "./Dashboard"
import { getRoster, postRoster  } from "../State/Roster/Axios" 
import { getUsers, getUnavailabilities, postUsers, deleteUser } from "../State/User/Axios"
import Login from "./Login";

const token = localStorage.getItem('token');

const DashboardContainer = () => {
	return (
		token ? 
	<Dashboard getRoster={getRoster} getUnavailabilities={getUnavailabilities} getUsers={getUsers} postUsers={postUsers} deleteUser={deleteUser} postRoster={postRoster}/>
	:
	<Login />
	)
}

export default DashboardContainer