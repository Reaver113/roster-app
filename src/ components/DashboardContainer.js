import Dashboard from "./Dashboard"
import { getRoster } from "../State/Roster/Fetch" 
import { getUnavailabilities } from "../State/User/Fetch"

const DashboardContainer = () => (
	<Dashboard getRoster={getRoster} getUnavailabilities={getUnavailabilities}/>
)

export default DashboardContainer