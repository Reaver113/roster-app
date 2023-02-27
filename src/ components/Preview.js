import "./Preview.css"
import React from "react"
import AllRosters from "./AllRosters"
import Options from './logic/Options'
import ChangeAvailability from "./ChangeAvailability"
import CreateUser from "./CreateUser"
import CreateRosterOptions from "./CreateRosterOptions"


function Preview({clickedOption, roster, unavailabilities}) {

	const getCurrentRosters = (roster) => {
		const current = []
		roster.forEach(item => {
			const today = new Date();
			const startDate = new Date(item.start)
			if (startDate > today) {
				current.push(item)}
		});
		return current
	}

	const getPreviousRosters = (roster) => {
		const previous = []
		roster.forEach(item => {
			const today = new Date();
			const startDate = new Date(item.start)
			if (startDate < today) {
				previous.push(item)}
		});
		return previous
	}

	const renderPreview = () => {


		const { current, prev, change, createUser, createRoster } = Options

		switch (clickedOption) {
			case current:
				return (
					<AllRosters roster={getCurrentRosters(roster)} />
				)
			case prev:
				return (
					<AllRosters roster={getPreviousRosters(roster)}/>
				)
			case change:
				return (
					<ChangeAvailability unavailabilities={unavailabilities} />
				)
			case createUser:
				return (
					<CreateUser />
				)
			case createRoster:
				return (
					<CreateRosterOptions />
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