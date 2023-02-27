import Dashboard from "./Dashboard"
import { getRoster } from "../State/Roster/Axios" 
import { getUsers, getUnavailabilities, postUsers, deleteUser } from "../State/User/Axios"

const DashboardContainer = () => (
	<Dashboard getRoster={getRoster} getUnavailabilities={getUnavailabilities} getUsers={getUsers} postUsers={postUsers} deleteUser={deleteUser}/>
)

export default DashboardContainer