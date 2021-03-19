import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, PostType, ProfilePageType,} from "./store";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";


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
    userId: string,
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
        default:
            return state
    }
}
export const addPostActionCreator = (newPostText: string): AddPostActionType =>
    ({
        type: 'ADD-POST',
        newPostText
    })
export const deletePostAC = (postID: string): deletePostType =>
    ({
        type: 'DELETE-POST',
        postID
    })
export const setUserProfile = (profile: UserProfileType): setUserProfileType =>
    ({
        type: SET_USER_PROFILE,
        profile
    })

export const setStatusActionCreator = (status: string) =>
    ({
        type: SET_STATUS,
        status: status
    })
export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusActionCreator(response.data))
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusActionCreator(status))
            }
        })
    }
}