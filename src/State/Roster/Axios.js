import axios from "axios"

const token = localStorage.getItem('token');

export const getRoster = () => {
	return  axios.get('http://localhost:5000/rosters')
}

export const getRosterById = (id) => {
	return axios.get(`http://localhost:5000/rosters/${id}`)
}

export const postRoster = (newRoster) => {
	const authToken = {
		headers: { 'Authorization': `Bearer ${token}`}
	}
	return axios.post(`http://localhost:5000/rosters/`, {...newRoster}, {...authToken})
}

export const putRoster = (id, roster) => {
	return axios.put(`http://localhost:5000/rosters/${id}`, {...roster})
}