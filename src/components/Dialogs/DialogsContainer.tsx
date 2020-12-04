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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
