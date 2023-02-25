import axios from "axios"

export const getUnavailabilities = () => {
	return  axios.get('http://localhost:5000/users/unavailabilities')
}