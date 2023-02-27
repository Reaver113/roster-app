import axios from "axios"

export const getRoster = () => {
	return  axios.get('http://localhost:5000/rosters')
}

export const getRosterById = (id) => {
	return axios.get(`http://localhost:5000/rosters/${id}`)
}