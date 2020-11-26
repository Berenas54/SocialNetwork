import {v1} from "uuid";
import {ActionsTypes, AddMessageType, MessagesPageType, MessageType, UpdateNewMessageTextType} from "./state";

export const messagesPageReducer = (state:MessagesPageType, action:ActionsTypes) => {
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