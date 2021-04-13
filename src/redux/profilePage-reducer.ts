import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, PostType, ProfilePageType,} from "./store";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";


export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
export type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: UserProfileType
}
export type deletePostType = {
    type: "DELETE-POST",
    postID: string

}


export const SET_USER_PROFILE = "SET_USER_PROFILE"
export const SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        {id: v1(), message: "My first post!", likesCount: 41},
        {id: v1(), message: "Second post", likesCount: 22},
        {id: v1(), message: 'I live React', likesCount: 31},
        {id: v1(), message: "Awesome!!!", likesCount: 421}],
    newPostText: "",
    profile: null,
    status: ""
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: v1(),
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case "DELETE-POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postID)}

        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case "SET_PHOTOS_SUCCESS": {
            //FIX TYPE
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
}
export const addPostAC = (newPostText: string): AddPostActionType =>
    ({
        type: 'ADD-POST',
        newPostText
    })
export const deletePostAC = (postID: string): deletePostType =>
    ({
        type: 'DELETE-POST',
        postID
    })
export const setUserProfileAC = (profile: UserProfileType): setUserProfileType =>
    ({
        type: SET_USER_PROFILE,
        profile
    })

export const setStatusAC = (status: string) =>
    ({
        type: SET_STATUS,
        status
    })
export const setPhotosSuccessAC = (photos: {
    small: string,
    large: string
}) =>
    ({
        type: "SET_PHOTOS_SUCCESS",
        photos
    })

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const response = await userAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotosSuccessAC(response.data.data.photos))
    }
}

// @ts-ignore
export const saveProfile = (profile:UserProfileType) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}