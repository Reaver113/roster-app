import axios from "axios"

export const loginUser = (user) => {
	return axios.post('https://roster-app-production-b6ad.up.railway.app/users/login', user)
}

