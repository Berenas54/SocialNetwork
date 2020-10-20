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
let dialogsData = [
    {id: 1, name: "Dzimych"},
    {id: 2, name: "Sveta"},
    {id: 3, name: "Pasha"},
    {id: 4, name: "Gleb"},
    {id: 5, name: "Vika"},
]
let messagesData = [
    {id: 1, message: "HI, brother!"},
    {id: 2, message: "Wtf"},
    {id: 3, message: "I love you"},
    {id: 4, message: "Where is my money?"},
]
const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>

            </div>
            <div className={style.messages}>
                <Messages message={messagesData[0].message}/>
                <Messages message={messagesData[1].message}/>
                <Messages message={messagesData[2].message}/>
                <Messages message={messagesData[3].message}/>

            </div>
        </div>
    )


}
export default Dialogs