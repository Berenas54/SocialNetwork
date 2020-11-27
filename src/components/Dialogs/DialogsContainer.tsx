import React from "react";
import {
    ActionsTypes,
    MessagesPageType,
} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesPage-reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    messagesPage: MessagesPageType
    dispatch: (action: ActionsTypes) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
    //let state = props.store.getState().dialogsPage

    const newMessage = () => {
        if (props.messagesPage.newMessageText.trim()) {
            props.dispatch(addMessageActionCreator(props.messagesPage.newMessageText))
        } else {
            props.dispatch(updateNewMessageTextActionCreator(""))
        }
    }

    const updateNewMessageBody = (body: string) => {
        props.dispatch(updateNewMessageTextActionCreator(body))

    }
    return (
        <Dialogs messagesPage={props.messagesPage} sendMessage={newMessage}
                 updateNewMessageBody={updateNewMessageBody}/>
    )
}
