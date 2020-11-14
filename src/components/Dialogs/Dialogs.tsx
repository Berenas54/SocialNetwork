import React, {RefObject} from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {MessagesPageType} from "../../redux/state";

type DialogsPropsType = {
    messagesPage: MessagesPageType
    addMessage: (message: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElement = props.messagesPage.messages.map(message => <Messages message={message.message}/>)

    let newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef()

    let newMessage = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.addMessage(text)
            newMessageElement.current.value = ""
        }
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
                <div className={style.answerField}>
                    <textarea ref={newMessageElement} className={style.inputMessage}/>
                    <button onClick={newMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}
