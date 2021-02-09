import {ActionsTypes, MessagesPageType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesPage-reducer";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";

type MSTPType = {
    dialogsPage: MessagesPageType
}

type MDTPType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: ReduxRootStateType): MSTPType => {
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
