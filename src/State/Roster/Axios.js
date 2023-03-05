import axios from "axios"

const token = localStorage.getItem('token');

const authToken = {
	headers: { 'Authorization': `Bearer ${token}`}
}

export const getRoster = () => {
	return  axios.get('https://roster-app-production-b6ad.up.railway.app/rosters', authToken)
}

export const getRosterById = (id) => {
	return axios.get(`https://roster-app-production-b6ad.up.railway.app/rosters/${id}`, authToken)
}

export const postRoster = (newRoster) => {
	return axios.post(`https://roster-app-production-b6ad.up.railway.app/rosters/`, newRoster, authToken)
}

export const putRoster = (id, roster) => {
	return axios.put(`https://roster-app-production-b6ad.up.railway.app/rosters/${id}`, roster, authToken)
}