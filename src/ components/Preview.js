import "./Preview.css"
import { todaysDate } from "../utils"
import React, { useState } from "react"
import CurrentWeekly from "./CurrentWeekly"
import PreviousWeekly from "./PreviousWeekly"
import Options from './logic/Options'
import ChangeAvailability from "./ChangeAvailability"
import { PrecisionManufacturingSharp } from "@mui/icons-material"


function Preview({clickedOption, roster}) {

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


		const { current, prev, change } = Options

		switch (clickedOption) {
			case current:
				return (
					<CurrentWeekly roster={getCurrentRosters(roster)} />
				)
			case prev:
				return (
					<PreviousWeekly roster={getPreviousRosters(roster)}/>
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