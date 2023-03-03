import "./Preview.css"
import React from "react"
import AllRosters from "./AllRosters"
import Options from './logic/Options'
import ChangeAvailability from "./ChangeAvailability"
import ManageUsers from "./ManageUsers"
import CreateRosterOptions from "./CreateRosterOptions"


function Preview({clickedOption, roster, unavailabilities, users, postUsers, deleteUser, postRoster}) {

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


		const { current, prev, change, manageUsers, createRoster } = Options

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
			case manageUsers:
				return (
					<ManageUsers users={users} postUsers={postUsers} deleteUser={deleteUser} />
				)
			case createRoster:
				return (
					<CreateRosterOptions postRoster={postRoster} users={users}/>
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