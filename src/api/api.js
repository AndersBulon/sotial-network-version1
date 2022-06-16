import axios from "axios"


const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers:{"API-KEY": "7c280ff0-da28-44c2-814f-6d7952212b4e"}
});

const usersAPI = {
	getAuthorisation() {
		return (
			instance.get(`auth/me`)
				.then(response => response.data)
		);
	},
	getUser(id) {
		return (
			instance.get(`profile/${id}`)
				.then(response => response.data)
		);
	},
	setFollow(id) {
		return (
			instance.post(`follow/${id}`,
				{}, )
				.then(response => response.data)
		);
	},
	delFollow(id) {
		return (
			instance.delete(`follow/${id}`,
			)
				.then(response => response.data)
		);
	},
	setUsersPageParams(numpage,pagesize) {
		return (
			instance.get(`users?page=${numpage}&count=${pagesize}`,
			)
				.then(response => response.data)
		);
	},

}



export { usersAPI }