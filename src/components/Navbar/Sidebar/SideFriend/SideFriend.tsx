import React from 'react';
import style from "./SideFriend.module.css"
import {NavLink} from "react-router-dom";

type SideFriendPropsType = {
    id: number
    avatar: string
    name: string
}
const SideFriend = (props: SideFriendPropsType) => {
    return <aside className={style.side}>
        <div className={style.figure}>

            <img className={style.avatar} alt="ava"
                 src={props.avatar}/>

            <div className={style.item}>
                <NavLink to={"/friend/" + props.id} activeClassName={style.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    </aside>
}
export default SideFriend
