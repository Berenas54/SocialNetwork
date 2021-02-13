import {v1} from "uuid";
import {ActionsTypes, AddMessageType, MessagesPageType} from "./store";

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
        case "ADD-MESSAGE":
            let body = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}]
            }
        default:
            return state
    }
}
export const addMessageActionCreator = (newMessageText: string): AddMessageType => ({
    type: 'ADD-MESSAGE',
    newMessageText
})
