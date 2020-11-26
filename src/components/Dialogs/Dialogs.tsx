import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {
    ActionsTypes,
    MessagesPageType,
} from "../../redux/state";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messagesPage-reducer";

type DialogsPropsType = {
    messagesPage: MessagesPageType
    dispatch:(action:ActionsTypes)=>void
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElement = props.messagesPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    const messagesElement = props.messagesPage.messages.map(message => <Messages message={message.message}/>)

    const newMessage = () => {
        if (props.messagesPage.newMessageText.trim()) {
            props.dispatch(addMessageActionCreator(props.messagesPage.newMessageText))
            //props.addMessage(props.messagesPage.newMessageText)// dispatch 'ADD-MESSAGE'
        } else {
            props.dispatch(updateNewMessageTextActionCreator(""))
           // props.updateNewMessageText("")// dispatch 'UPDATE-NEW-MESSAGE-TEXT'
        }
    }

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextActionCreator(event.currentTarget.value))
       // props.updateNewMessageText(event.currentTarget.value)// dispatch
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
