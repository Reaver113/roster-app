import axios from "axios"

export const getUsers = () => {
	return axios.get('http://localhost:5000/users')
}
export const getUnavailabilities = () => {
	return  axios.get('http://localhost:5000/users/unavailabilities')
}