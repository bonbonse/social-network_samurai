import axios from "axios";


let instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "2df09a13-a315-417f-be96-ee140bd6d1af"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pagesSize = 5) {
        return instance
            .get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => {
                return response.data
            })
    },
    deleteUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    postUser(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {return response.data}
            )
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {return response.data}
            )
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response => {return response.data})
    },
    putStatus(newStatusBody){
        return instance.put(`profile/status/`,{status: newStatusBody})
            .then(response => {return response})
    }
}



export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response
            })
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(response => {return response})
    },
    login(email, password, rememberMe, captcha){
        return instance.post(`auth/login`,
            {email: email, password: password, rememberMe: rememberMe,captcha: captcha})
            .then(response => {return response})
    }

}
