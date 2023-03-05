import { createContext } from "react";

// Reducer function to change state based on actions
export default function stateReducer(state, action) {
    switch (action.type) {

    // Set all users in the state
        case "setUsers": {
            return { ...state, users: [...action.users]} 
        }

    // Add a new user to the state
        case "addUser": {
            return { ...state, users: [...state.users, action.user]}
        }

    // Delete a user from the state
        case "deleteUser": {
            const updatedUsers = state.users.filter(user => {
                return user._id !== action.user._id
            })
            return {...state, users: updatedUsers}
        }
    // Return current state as default
        default : return state 
    }
}

// Create a React Context object for the state
export const stateContext = createContext()