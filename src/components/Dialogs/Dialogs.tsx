import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messagesPage: MessagesPageType
    addMessage: (message: string) => void
    updateNewMessageText: (newText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElement = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    const messagesElement = props.messagesPage.messages.map(message => <Messages message={message.message}/>)

    const newMessage = () => {
        if (props.messagesPage.newMessageText.trim()) {
            props.addMessage(props.messagesPage.newMessageText)
        } else {
            props.updateNewMessageText("")
        }
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(event.currentTarget.value)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
                <div className={style.answerField}>
                    <textarea value={props.messagesPage.newMessageText} onChange={changeHandler} className={style.inputMessage}/>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
