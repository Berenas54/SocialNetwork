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

type AddPostActionType = {
    type: "ADD-POST"
    postText: string
}
type UpdateNewPostTextType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
type UpdateNewMessageTextType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}
type AddMessageType = {
    type: "ADD-MESSAGE"
    messageText: string
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
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newText
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessageType = {
                id: v1(),
                message: action.messageText
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = ""
            this._callSubscriber()
        }
    },
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
export const addMessageActionCreator = (text:string):AddMessageType => ({
    type: 'ADD-MESSAGE',
    messageText: text
})
export const updateNewMessageTextActionCreator = (text:string):UpdateNewMessageTextType=>({
    type:'UPDATE-NEW-MESSAGE-TEXT',
    newText: text
})



