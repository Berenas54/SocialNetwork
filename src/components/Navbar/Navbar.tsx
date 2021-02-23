import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import {AsideStateType} from "../../redux/store";

type AppStatePropsType = {
    state: AsideStateType
}

export const Navbar = (props: AppStatePropsType) => {
    debugger
    return <nav className={style.nav}>
        <div className={style.item}>
            <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/users' activeClassName={style.activeLink}>Users</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/#!'>News</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/#!'>Music</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/#!'>Settings</NavLink>
        </div>
        <Sidebar asideState={props.state}/>

    </nav>
}
