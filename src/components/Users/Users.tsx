import React from "react";
import userPhoto from "../../assets/image/user_photo.png";
import styles from "./users.module.css";
import {UsersType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import axios from "axios";


export type UsersPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    users: Array<UsersType>,
    totalUsersCount: number
    pageSize: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}
type UsersResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {}
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
            <NavLink to={'/profile/' + u.id}>
                <img alt={"avatar"} src={u.photos.small != null ? u.photos.small : userPhoto}
                     className={styles.userPhoto}/>
            </NavLink>
            </div>
            <div>{u.followed ? <button onClick={() => {
                axios.delete<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {"API-KEY": "ab5b5c28-df0c-45dc-8c95-5b7984c4931d"}
                }).then(response => {
                    if (response.data.resultCode === 0) {
                        props.unfollow(u.id)
                    }
                })

            }}>Unfollow</button> : <button onClick={() => {
                axios.post<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {"API-KEY": "ab5b5c28-df0c-45dc-8c95-5b7984c4931d"}
                }).then(response => {
                    if (response.data.resultCode === 0) {
                        props.follow(u.id)
                    }
                })

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
