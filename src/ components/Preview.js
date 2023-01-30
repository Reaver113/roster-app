import "./Preview.css"
import CurrentWeekly from "./CurrentWeekly"
import PreviousWeekly from "./PreviousWeekly"

function Preview() {
	return(
		<div className="Preview">
			<PreviousWeekly />
			<CurrentWeekly />
		</div>
	)
}

export default Preview