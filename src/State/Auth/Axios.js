import axios from "axios"

export const loginUser = (user) => {
	return axios.post('http://localhost:5000/users/login', {...user})
}