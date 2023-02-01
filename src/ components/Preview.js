import "./Preview.css"
import CurrentWeekly from "./CurrentWeekly"
import PreviousWeekly from "./PreviousWeekly"
import Options from './logic/Options'
import ChangeAvailability from "./ChangeAvailability"

function Preview({clickedOption}) {

	const renderPreview = () => {
		
		const { current, prev, change } = Options

		switch (clickedOption) {
			case current:
				return (
					<CurrentWeekly />
				)
			case prev:
				return (
					<PreviousWeekly />
				)
			case change:
				return (
					<ChangeAvailability />
				)
			default: 
				return null
		}
	}
	return (
		<div className="preview">
		{renderPreview()}
		</div>
	)
}

export default Preview