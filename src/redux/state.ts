let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "My first post!", likesCount: 41},
            {id: 2, message: "Second post", likesCount: 22},
            {id: 3, message: 'I live React', likesCount: 31},
            {id: 4, message: "Awesome!!!", likesCount: 421}],
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
    },
    asideState: {
        asideFriends: [
            {id: 1,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6Ghz_3vVX362NspWGVByszfbkVlJ77tisTQ&usqp=CAU',
                name: 'Pavel'},
            {id: 2,
                avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
                name: 'Vika'},
            {id: 3,
                avatar: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg',
                name: 'Alex'}
        ]
    }
}
export type  AsideStateType = {
    asideFriends: Array<AsideFriendsType>
}
export type  AsideFriendsType = {
    id:number
    avatar:string
    name:string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
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


export default state