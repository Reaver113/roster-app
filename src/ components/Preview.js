import "./Preview.css"
import CurrentWeekly from "./CurrentWeekly"
import PreviousWeekly from "./PreviousWeekly"
import Options from './logic/Options'

function Preview(clickedOption) {

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
			default: 
				return null
		}
	}
	return (
		<div className="Preview">
		{renderPreview()}
		</div>
	)
}

export default Preview