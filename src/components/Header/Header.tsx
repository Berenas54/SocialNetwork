import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

export const Header = () => {
    return <header className='header'>
        <NavLink to='/profile'><img alt='logo'
                                  src={"https://i.pinimg.com/564x/81/cb/9c/81cb9cf335d5cbcf74d093ff869fe92e.jpg"}/></NavLink>
    </header>
}
