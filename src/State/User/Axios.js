import axios from "axios"


const token = localStorage.getItem('token');

const authToken = {
	headers: { 'Authorization': `Bearer ${token}`}
}

export const getUsers = () => {
	return axios.get('https://roster-app-production-b6ad.up.railway.app/users', authToken)
}

export const getCurrentUser = () => {
	const currentId = JSON.parse(localStorage.getItem('currentUser')).id;
	return axios.get(`https://roster-app-production-b6ad.up.railway.app/users/${currentId}`, authToken)
}


export const getUnavailabilities = () => {
	return  axios.get(`https://roster-app-production-b6ad.up.railway.app/unavailabilities/`, authToken)
}

export const postUsers = (newUser) => {
	return axios.post('https://roster-app-production-b6ad.up.railway.app/users', newUser, authToken)
}

export const deleteUser = (id) => {
	return axios.delete(`https://roster-app-production-b6ad.up.railway.app/users/${id}`, authToken)
}

export const patchUnavailable = (id, unavailability) => {
	return axios.patch(`https://roster-app-production-b6ad.up.railway.app/users/unavailability/${id}`, unavailability, authToken)
}

export const deleteUnavailable = (userId, unavailabilityId) => {
	return axios.delete(`https://roster-app-production-b6ad.up.railway.app/users/unavailability/${userId}/${unavailabilityId}`, authToken)
}