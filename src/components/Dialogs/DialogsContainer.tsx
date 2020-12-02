import React from "react";
import {
    ActionsTypes,
    MessagesPageType, RootStateType,
} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesPage-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type MSTPType = {
    dialogsPage: MessagesPageType
}

type MDTPType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

type PropsType = MSTPType & MDTPType

export const DialogsContainer = (props: PropsType) => {
    return (
        <Dialogs
            updateNewMessageBody={props.updateNewMessageBody}
            sendMessage={props.sendMessage}
            dialogsPage={props.dialogsPage}
        />
    )
}

let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        dialogsPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MDTPType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageTextActionCreator(body))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsContainer)
