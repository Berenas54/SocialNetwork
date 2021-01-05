import {v1} from "uuid";
import {
    ActionsTypes,
    AddPostActionType,
    PostType,
    ProfilePageType,
    UpdateNewPostTextType,

} from "./store";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";


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
export type setUserProfile = {
    type: typeof SET_USER_PROFILE
    profile: UserProfileType
}


export const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        {id: v1(), message: "My first post!", likesCount: 41},
        {id: v1(), message: "Second post", likesCount: 22},
        {id: v1(), message: 'I live React', likesCount: 31},
        {id: v1(), message: "Awesome!!!", likesCount: 421}],
    newPostText: "",
    profile: null
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export const addPostActionCreator = (): AddPostActionType =>
    ({
        type: 'ADD-POST'
    })
export const setUserProfile = (profile: UserProfileType): setUserProfile =>
    ({
        type: SET_USER_PROFILE,
        profile
    })

export const updateNewPostActionCreator = (text: string): UpdateNewPostTextType =>
    ({
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    })
export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}