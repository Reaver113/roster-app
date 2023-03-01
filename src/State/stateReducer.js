import { createContext } from "react";

export default function stateReducer(state, action) {
	switch (action.type) {
		case "setUsers": {
			return { ...state, users: [...action.users]} 
		}
		case "addUser": {
			return { ...state, users: [...state.users, action.user]}
		}
		case "deleteUser": {
			// const userIndex = state.users.findIndex(user => user._id === action._id)
			const updatedUsers = state.users.filter(user => {
				return user._id !== action.user._id
			})
			return {...state, users: updatedUsers}
		}
		default : return state 

}
}

export const stateContext = createContext()