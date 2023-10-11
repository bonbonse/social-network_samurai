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
export const authAPI = {
    me() {
        debugger
        return instance.get(`auth/me`)
            .then(response => {
                return response
            })
    }
}
