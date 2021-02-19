import axios from "axios";
import {UsersType} from "../components/Users/UsersContainer";

type ResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: null
}
type UsersResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {}
}
type HeaderResponseType = {
    resultCode: number
    messages: [],
    data: {
        id: number,
        email: string,
        login: string
    }
}

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "ab5b5c28-df0c-45dc-8c95-5b7984c4931d"
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 20) {
        return instance.get<ResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    unfollowUsers(id: string) {
        return instance.delete<UsersResponseType>(`follow/${id}`)
    },
    followUsers(id: string) {
        return instance.post<UsersResponseType>(`follow/${id}`)
    },
    getProfile(id: string) {
        return profileAPI.getProfile(id)
    }
}

export const profileAPI = {
    getProfile(id: string) {
        return instance.get<any>(`profile/${id}`)
    },
    getStatus(id: string) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}
export const authAPI = {
    me() {
        return instance.get<HeaderResponseType>(`auth/me`)
    },
    login(email:string, password:string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}