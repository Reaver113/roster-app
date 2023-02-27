import Dashboard from "./Dashboard"
import { getRoster } from "../State/Roster/Axios" 
import { getUsers, getUnavailabilities } from "../State/User/Axios"

const DashboardContainer = () => (
	<Dashboard getRoster={getRoster} getUnavailabilities={getUnavailabilities} getUsers={getUsers}/>
)

export default DashboardContainer