import "./Preview.css"
import React from "react"
import AllRosters from "./AllRosters"
import Options from './logic/Options'
import ChangeAvailability from "./ChangeAvailability"
import ManageUsers from "./ManageUsers"
import CreateRosterOptions from "./CreateRosterOptions"

function Preview({clickedOption, roster, loggedInUser, users, postUsers, deleteUser, postRoster}) {
  // A function to get all current rosters based on the start date
  const getCurrentRosters = (roster) => {
    const current = []
    roster.forEach(item => {
      const today = new Date();
      const startDate = new Date(item.start)
      if (startDate > today) {
        current.push(item)} // If the start time of the roster is greater than the present day then push it 
    });
    return current //return an array of all the current rosters
  }

  // A function to get all previous rosters based on the start date
  const getPreviousRosters = (roster) => {
    const previous = []
    roster.forEach(item => {
      const today = new Date();
      const startDate = new Date(item.start)
      if (startDate < today) { //If the start time of the roster is less than the present day then push into an array.
        previous.push(item)}
    });
    return previous //returns an array of all previous rosters
  }

// A function to render the preview based on what user clicked on which option - current Roster, Previous Rosters, availability change, manage users or create a new roster 
const renderPreview = () => {

        switch (clickedOption) {
            case "Current Roster":
                return (
                    <AllRosters roster={getCurrentRosters(roster)} /> // Displays all the current rosters using AllRosters component 
                )
            case "Previous Rosters":
                return (
                    <AllRosters roster={getPreviousRosters(roster)}/>  //Displays all the previous rosters using AllRosters component 
                )
            case "Change Availability":
                return (
                    <ChangeAvailability loggedInUser={loggedInUser} /> //Display for changing the availability details using ChangeAvailability component
                )
            case "Manage Users":
                return (
                    <ManageUsers users={users} postUsers={postUsers} deleteUser={deleteUser} /> //Displays management options for users such as edit and delete using ManageUsers  
                )
            case "Create New Roster":
                return (
                    <CreateRosterOptions postRoster={postRoster} users={users}/> //A form to create a new roster using CreateRosterOptions component 
                )
            default: 
                return null
        }
    }

    return (
			//Returns the preview dependent on the prior switch statement
        <div className="preview">
            {renderPreview()} 
        </div>
				
    )
}

export default Preview
