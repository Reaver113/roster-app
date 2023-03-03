import axios from "axios"

const token = localStorage.getItem('token');

const authToken = {
	headers: { 'Authorization': `Bearer ${token}`}
}

export const getRoster = () => {
	return  axios.get('http://localhost:5000/rosters', authToken)
}

export const getRosterById = (id) => {
	return axios.get(`http://localhost:5000/rosters/${id}`, authToken)
}

export const postRoster = (newRoster) => {
	return axios.post(`http://localhost:5000/rosters/`, newRoster, authToken)
}

export const putRoster = (id, roster) => {
	return axios.put(`http://localhost:5000/rosters/${id}`, roster, authToken)
}