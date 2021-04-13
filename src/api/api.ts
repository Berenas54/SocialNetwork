import axios from "axios";
import {UsersType} from "../components/Users/UsersContainer";
import {UserProfileType} from "../redux/profilePage-reducer";

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
    unfollowUsers(id: number) {
        return instance.delete<UsersResponseType>(`follow/${id}`)
    },
    followUsers(id: number) {
        return instance.post<UsersResponseType>(`follow/${id}`)
    },
    getProfile(id: number) {
        return profileAPI.getProfile(id)
    }
}

export const profileAPI = {
    getProfile(id: number) {
        return instance.get<any>(`profile/${id}`)
    },
    getStatus(id: number) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile(profile: UserProfileType) {
        return instance.put(`profile`, profile)
    }
}
export const authAPI = {
    me() {
        return instance.get<HeaderResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false, captcha:string|null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}