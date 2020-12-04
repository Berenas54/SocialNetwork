import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, PostType, ProfilePageType, UpdateNewPostTextType} from "./store";

let initialState = {
    posts: [
        {id: v1(), message: "My first post!", likesCount: 41},
        {id: v1(), message: "Second post", likesCount: 22},
        {id: v1(), message: 'I live React', likesCount: 31},
        {id: v1(), message: "Awesome!!!", likesCount: 421}],
    newPostText: ""
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
        default:
            return state
    }
}
export const addPostActionCreator = (): AddPostActionType => ({
    type: 'ADD-POST'
})

export const updateNewPostActionCreator = (text: string): UpdateNewPostTextType =>
    ({
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    })