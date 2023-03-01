import axios from "axios"

export const getRoster = () => {
	return  axios.get('http://localhost:5000/rosters')
}

export const getRosterById = (id) => {
	return axios.get(`http://localhost:5000/rosters/${id}`)
}

export const postRoster = (newRoster) => {
	return axios.post(`http://localhost:5000/rosters/`, {...newRoster})
}

export const putRoster = (id, updatedRoster) => {
	return axios.put(`http://localhost:5000/rosters/${id}`, {updatedRoster})
}