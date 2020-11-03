import React from "react";
import style from './Messages.module.css'


type MessagesPropsType={
    message:string
}
const Messages = (props: MessagesPropsType) => {
    return <div className={style.message}>{props.message}</div>
}

export default Messages