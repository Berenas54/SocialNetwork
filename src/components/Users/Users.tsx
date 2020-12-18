import React from "react";
import userPhoto from "../../assets/image/user_photo.png";
import styles from "./users.module.css";
import {UsersType} from "./UsersContainer";

export type UsersPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    users: Array<UsersType>,
    totalUsersCount: number
    pageSize: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selected : ""} onClick={() => {
                    props.onPageChanged(p)
                }
                }>{p} </span>
            })}
        </div>
        {props.users.map(u =>
                <div key={u.id}>
        <span>
            <div>
<img alt={"avatar"} src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
            <div>{u.followed ? <button onClick={() => {
                props.unfollow(u.id)
            }}>Unfollow</button> : <button onClick={() => {
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
