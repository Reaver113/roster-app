import Dashboard from "./Dashboard"
import { getRoster } from "../State/Roster/Axios" 
import { getUnavailabilities } from "../State/User/Axios"

const DashboardContainer = () => (
	<Dashboard getRoster={getRoster} getUnavailabilities={getUnavailabilities}/>
)

export default DashboardContainer