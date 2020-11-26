import {v1} from "uuid";
import {ActionsTypes, AddMessageType, MessagesPageType, MessageType, UpdateNewMessageTextType} from "./store";

let initialState = {
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
}
export const messagesPageReducer = (state: MessagesPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return state
        case "ADD-MESSAGE":
            let newMessage: MessageType = {
                id: v1(),
                message: action.messageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        default:
            return state
    }
}
export const addMessageActionCreator = (text: string): AddMessageType => ({
    type: 'ADD-MESSAGE',
    messageText: text
})
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextType => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: text
})