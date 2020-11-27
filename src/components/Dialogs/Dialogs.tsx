import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {
    MessagesPageType,
} from "../../redux/store";

type DialogsPropsType = {
    messagesPage: MessagesPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    const messagesElement = props.messagesPage.messages.map(message => <Messages message={message.message}/>)

    const addNewMessage = () => {
        props.sendMessage()
        //     if (props.messagesPage.newMessageText.trim()) {
        //         //props.addMessageActionCreator()
        //     } else {
        //         //props.dispatch(updateNewMessageTextActionCreator(""))
        //     }
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.updateNewMessageBody(body)
        //props.dispatch(updateNewMessageTextActionCreator(body))

    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
                <div className={style.answerField}>
                    <textarea value={props.messagesPage.newMessageText} onChange={onNewMessageChange}
                              className={style.inputMessage}/>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
