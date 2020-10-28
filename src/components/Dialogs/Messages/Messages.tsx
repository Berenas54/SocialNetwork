import React from "react";
import style from './../Dialogs.module.css';

type MessagesType = {
    message: string
}

const Messages = (props: MessagesType) => {
    return <div className={style.message}>{props.message}</div>
}

export default Messages