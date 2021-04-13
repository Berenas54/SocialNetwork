import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";


export const SET_USER_DATA = 'SET_USER_DATA'
export const UNFOLLOW = 'UNFOLLOW'

type ActionAuthReducerType =
    SetUserDataType | getCaptchaUrlSuccessType


type getCaptchaUrlSuccessType = {
    type: 'GET_CAPTCHA_SUCCESS'
    payload: { captchaUrl: string }
}

type SetUserDataType = {
    type: typeof SET_USER_DATA
    payload: { id: number | null, email: string, login: string }
}

export type AuthType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state: AuthType = initialState, action: ActionAuthReducerType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA :
        case "GET_CAPTCHA_SUCCESS" :
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {id, email, login, isAuth}
})

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: 'GET_CAPTCHA_SUCCESS', payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}


/// пофиксить Dispatch any
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Dispatch<any>) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl())
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
