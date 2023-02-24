import Dashboard from "./Dashboard"
import { getRoster } from "../State/Roster/Fetch" 

const DashboardContainer = () => (
	<Dashboard getRoster={getRoster}/>
)

export default DashboardContainer