import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import { RootStateType} from "../../redux/state";
type AppStatePropsType= {
    state:RootStateType}
const Navbar = (props:AppStatePropsType) => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
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
export default Navbar