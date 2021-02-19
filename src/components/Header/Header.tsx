import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import {DispatchPropsType, MapPropsType} from "./HeaderContainer";

export type HeaderPropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => {}
}


export const Header = (props: MapPropsType & DispatchPropsType) => {
    return <header className='header'>
        <NavLink to='/profile'><img alt='logo'
                                    src={"https://i.pinimg.com/564x/81/cb/9c/81cb9cf335d5cbcf74d093ff869fe92e.jpg"}/></NavLink>
        <div className="loginBlock">
            {props.isAuth ? <div>{props.login}
                    <button onClick={props.logout}>Log out</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
