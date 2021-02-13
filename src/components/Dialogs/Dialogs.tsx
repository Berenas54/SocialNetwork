import React from "react";
import style from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import {MessagesPageType,} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type DialogsPropsType = {
    dialogsPage: MessagesPageType
    sendMessage: (newMessageText: string) => void
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

type newMessageFormType = {
    newMessageText: string
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                               id={dialog.id}/>)
    const messagesElement = props.dialogsPage.messages.map(message => <Messages key={message.id}
                                                                                message={message.message}/>)


    const AddNewMessage = (values: newMessageFormType) => {
        props.sendMessage(values.newMessageText)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
                <div className={style.answerField}>
                    <DialogsReduxForm onSubmit={AddNewMessage}/>
                </div>
            </div>
        </div>
    )
}


const DialogsForm: React.FC<InjectedFormProps<newMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageText"} placholder={"Write message"}/>
            <button>Send</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm<newMessageFormType>({form: 'Message'})(DialogsForm)