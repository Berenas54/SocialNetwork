import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, PostType, ProfilePageType, UpdateNewPostTextType} from "./state";

export const profilePageReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostActionCreator = (text: string): AddPostActionType => ({
    type: 'ADD-POST',
    postText: text
})

export const updateNewPostActionCreator = (text: string): UpdateNewPostTextType =>
    ({
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    })