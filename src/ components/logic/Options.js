function renderOptions() {
	const user = JSON.parse(localStorage.getItem('currentUser'))
	if (user === null) {
		return
	} 
	else if (user.is_admin) {
		const Options = {
			current: "Current Roster",
			prev: "Previous Rosters",
			change: "Change Availability",
			manageUsers: "Manage Users",
			createRoster: "Create New Roster"
		}
		return Options
	}
	else {
		const Options = {
			current: "Current Roster",
			prev: "Previous Rosters",
			change: "Change Availability",
		}
		return Options
	}
}


export default renderOptions