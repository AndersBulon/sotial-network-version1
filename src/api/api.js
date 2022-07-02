import axios from "axios"


const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: { "API-KEY": "7c280ff0-da28-44c2-814f-6d7952212b4e" }
});

export const usersAPI = {

	setFollow(id) {
		return (
			instance.post(`follow/${id}`,
				{})
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
	setUsersPageParams(numpage, pagesize) {
		return (
			instance.get(`users?page=${numpage}&count=${pagesize}`,
			)
				.then(response => response.data)
		);
	},
}

export const authAPI = {
	getAuthorisation() {
		return (
			instance.get(`auth/me`)
		);
	},
	setLogin(email, password, rememberMe = false, captcha = '') {
		return (
			instance.post(`auth/login`, { email: email, password: password, rememberMe: rememberMe, captcha: captcha })
		);
	},
	unLogin() {
		return (
			instance.delete(`auth/login`)
		);
	},
	getCaptchaURL() {
		return (
			instance.get(`security/get-captcha-url`)
		);
	},
}

export const profileAPI = {
	getProfile(id) {
		return instance.get(`profile/${id}`)
	},
	getStatus(usrId) {
		return (
			instance.get(`profile/status/${usrId}`)
				.then(response => response.data)
		);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status });
	},

}
