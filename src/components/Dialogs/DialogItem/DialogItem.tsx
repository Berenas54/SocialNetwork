import React from "react";
import style from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: string
}


export const DialogItem = (props: DialogItemPropsType) => {
    return <div className={style.dialogItems}>
        <NavLink activeClassName={style.activeLink} to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}