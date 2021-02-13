import {ActionsTypes, MessagesPageType} from "../../redux/store";
import {addMessageActionCreator} from "../../redux/messagesPage-reducer";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {Dialogs} from "./Dialogs";
import {compose} from "redux";

type MSTPType = {
    dialogsPage: MessagesPageType
}

type MDTPType = {
    sendMessage: (newMessageText: string) => void
}

let mapStateToProps = (state: ReduxRootStateType): MSTPType => {
    return {
        dialogsPage: state.messagesPage
    }
}


let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MDTPType => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)