import {rerenderEntireTree} from "../render";
import {v1} from "uuid";

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
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    asideState: AsideStateType
}

export let state: RootStateType = {
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
}

export let addPost = () => {
    let newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=""
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}
export let addMessage = (message: string) => {
    let newMessage: MessageType = {
        id: v1(),
        message: message
    }
    state.messagesPage.messages.push(newMessage)
    rerenderEntireTree(state)
}



