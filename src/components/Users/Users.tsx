import React from "react";
import userPhoto from "../../assets/image/user_photo.png";
import styles from "./users.module.css";
import {UsersType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {Paginator} from "./Paginator";


export type UsersPropsType = {
    users: Array<UsersType>,
    totalUsersCount: number
    pageSize: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<string>
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,


}

export let Users = ({currentPage,onPageChanged,totalUsersCount,pageSize,...props}:UsersPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
       <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
        {props.users.map(u =>
                <div key={u.id}>
        <span>
            <div>
            <NavLink to={'/profile/' + u.id}>
                <img alt={"avatar"} src={u.photos.small != null ? u.photos.small : userPhoto}
                     className={styles.userPhoto}/>
            </NavLink>
            </div>
            <div>{u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.unfollow(u.id)
                }}>Unfollow</button>
                :
                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.follow(u.id)
                }}>Follow</button>}
            </div>
        </span>
                    <span>
            <span><div>{u.name}</div><div>{u.status}</div></span>
            <span><div>{"u.location.country"}</div><div>{"u.location.city"}</div></span>
        </span>
                </div>
        )}
    </div>
}

