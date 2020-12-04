import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {
    MessagesPageType,
} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: MessagesPageType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    const messagesElement = props.dialogsPage.messages.map(message => <Messages key={message.id} message={message.message}/>)

    const addNewMessage = () => {
        if (props.dialogsPage.newMessageText.trim()) {
            props.sendMessage()
        } else {
            props.updateNewMessageBody("")
        }
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
                <div className={style.answerField}>
                    <textarea value={props.dialogsPage.newMessageText} onChange={onNewMessageChange}
                              className={style.inputMessage}/>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
