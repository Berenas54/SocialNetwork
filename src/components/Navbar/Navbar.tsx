import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
        </div>
        <div className={style.item}>
            <NavLink to='/messages' activeClassName={style.activeLink}>Messages</NavLink>
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
    </nav>
}
export default Navbar