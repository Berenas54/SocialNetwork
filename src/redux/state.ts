let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1,message: "My first post!", likesCount: 41},
            {id: 2,message: "Second post", likesCount: 22},
            {id: 3,message: 'I live React', likesCount: 31},
            {id: 4,message: "Awesome!!!", likesCount: 421}],
    },
    messagesPage: {
        messages: [
            {id: 1, message: "HI, brother!"},
            {id: 2, message: "Wtf"},
            {id: 3, message: "I love you"},
            {id: 4, message: "Where is my money?"},
        ],
        dialogs: [
            {id: 1, name: "Dzimych"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Pasha"},
            {id: 4, name: "Gleb"},
            {id: 5, name: "Vika"}
        ]
    }
}
export type MessageType= {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name:string
}
export type PostType = {
    id:number
    message:string
    likesCount:number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type MessagesPageType = {
    messages :Array<MessageType>
    dialogs: Array<DialogType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}


export default state