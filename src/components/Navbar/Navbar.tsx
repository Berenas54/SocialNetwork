import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import {RootStateType} from "../../redux/store";

type AppStatePropsType = {
    state: RootStateType
}

export const Navbar = (props: AppStatePropsType) => {
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
        <Sidebar asideState={props.state.asideState}/>
    </nav>
}
