import React from 'react';
import style from './Sidebar.module.css';
import {SideFriend} from "./SideFriend/SideFriend";
import {AsideStateType} from "../../../redux/store";

type SidebarPropsType = {
    asideState: AsideStateType
}

const Sidebar = (props: SidebarPropsType) => {
    let friendsAsideElement = props.asideState.asideFriends.map(friends => <SideFriend id={friends.id}
                                                                                       name={friends.name}
                                                                                       avatar={friends.avatar}/>)
    return <aside className={style.aside}>
        <div className={style.asideH}>
            <h3>Friends</h3>
        </div>
        <div className={style.wrapperAside}>
            {friendsAsideElement}
        </div>
    </aside>
}
export default Sidebar