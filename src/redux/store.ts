import {v1} from "uuid";
import {profilePageReducer} from "./profilePage-reducer";
import {messagesPageReducer} from "./messagesPage-reducer";
import {asideReducer} from "./aside-reducer";

export type  AsideStateType = {
    asideFriends: Array<AsideFriendsType>
}
export type  AsideFriendsType = {
    id: string
    avatar: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    asideState: AsideStateType
}

export type StoreType = {
    _state: RootStateType
    subscribe: (callback: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void

}
export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | UpdateNewMessageTextType | AddMessageType

export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type UpdateNewMessageTextType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}
export type AddMessageType = {
    type: "ADD-MESSAGE"

}
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "My first post!", likesCount: 41},
                {id: v1(), message: "Second post", likesCount: 22},
                {id: v1(), message: 'I live React', likesCount: 31},
                {id: v1(), message: "Awesome!!!", likesCount: 421}],
            newPostText: ""
        },
        messagesPage: {
            messages: [
                {id: v1(), message: "HI, brother!"},
                {id: v1(), message: "Wtf"},
                {id: v1(), message: "I love you"},
                {id: v1(), message: "Where is my money?"},

            ],
            newMessageText: "",
            dialogs: [
                {id: v1(), name: "Dzimych"},
                {id: v1(), name: "Sveta"},
                {id: v1(), name: "Pasha"},
                {id: v1(), name: "Gleb"},
                {id: v1(), name: "Vika"}
            ]
        },
        asideState: {
            asideFriends: [
                {
                    id: v1(),
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6Ghz_3vVX362NspWGVByszfbkVlJ77tisTQ&usqp=CAU',
                    name: 'Pavel'
                },
                {
                    id: v1(),
                    avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                    name: 'Vika'
                },
                {
                    id: v1(),
                    avatar: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg',
                    name: 'Alex'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action:ActionsTypes) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
        this._state.asideState = asideReducer(this._state.asideState, action)
        this._callSubscriber()
    },
}






