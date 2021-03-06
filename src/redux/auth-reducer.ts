import {authAPI} from "../api/api";
import {Dispatch} from "redux";


export const SET_USER_DATA = 'SET_USER_DATA'
export const UNFOLLOW = 'UNFOLLOW'

type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: { id: number | null, email: string, login: string }
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
                ...action.data
            }

        default:
            return state
    }
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, data: {id, email, login, isAuth}
})
export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}
/// пофиксить Dispatch any
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })

}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })

}

