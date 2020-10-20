import React from "react";
import style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog}>
                    <NavLink to="/#!">Dimych</NavLink>
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/#!">Gleb</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/#!">Nikita</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/#!">Sveta</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/#!">Natalia</NavLink>
                </div>

            </div>
            <div className={style.messages}>
                <div className={style.message}>Hi</div>
                <div className={style.message}>How are your?</div>
                <div className={style.message}>Wtf?</div>
            </div>
        </div>
    )


}
export default Dialogs