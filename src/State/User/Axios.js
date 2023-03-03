import axios from "axios"


const token = localStorage.getItem('token');

const authToken = {
	headers: { 'Authorization': `Bearer ${token}`}
}

export const getUsers = () => {
	return axios.get('http://localhost:5000/users', authToken)
}

export const getUnavailabilities = () => {
	return  axios.get('http://localhost:5000/users/unavailabilities', authToken)
}

export const postUsers = (newUser) => {
	return axios.post('http://localhost:5000/users', newUser, authToken)
}

export const deleteUser = (id) => {
	return axios.delete(`http://localhost:5000/users/${id}`, authToken)
}