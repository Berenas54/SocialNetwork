import {Dispatch} from "redux";
import {authAPI} from "../api/api";


export const SET_USER_DATA = 'SET_USER_DATA'
export const UNFOLLOW = 'UNFOLLOW'

type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: { id: number, email: string, login: string }
}

export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: SetUserDataType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}
export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA, data: {id, email, login}
})
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}

