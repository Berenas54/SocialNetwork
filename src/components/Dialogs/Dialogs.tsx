import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

let dialogs = [
    {id: 1, name: "Dzimych"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Pasha"},
    {id: 4, name: "Gleb"},
    {id: 5, name: "Vika"},
]

let messages = [
    {id: 1, message: "HI, brother!"},
    {id: 2, message: "Wtf"},
    {id: 3, message: "I love you"},
    {id: 4, message: "Where is my money?"},
]

let dialogsElement = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

let messagesElement = messages.map(message => <Messages message={message.message}/>)

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs