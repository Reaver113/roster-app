import axios from "axios"

export const getUsers = () => {
	return axios.get('http://localhost:5000/users')
}

export const getUnavailabilities = () => {
	return  axios.get('http://localhost:5000/users/unavailabilities')
}

export const postUsers = (newUser) => {
	return axios.post('http://localhost:5000/users', {...newUser})
}

export const deleteUser = (id) => {
	return axios.delete(`http://localhost:5000/users/${id}`)
}