import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemsType = {
    name: string
    id: number
}
type MessagesType = {
    message: string
}

const DialogItem = (props: DialogsItemsType) => {
    return <div className={style.dialog}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}
const Messages = (props: MessagesType) => {
    return <div className={style.message}>{props.message}</div>
}
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