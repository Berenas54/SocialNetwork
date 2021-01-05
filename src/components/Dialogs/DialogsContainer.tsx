import {
    ActionsTypes,
    MessagesPageType
} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesPage-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";

type MSTPType = {
    dialogsPage: MessagesPageType
    isAuth: boolean
}

type MDTPType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: ReduxRootStateType): MSTPType => {
    return {
        dialogsPage: state.messagesPage,
        isAuth: state.auth.isAuth
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
