import React from "react";
import styles from "./users.module.css"
import {v1} from "uuid";

export type UsersType = {
    photoUrl: string,
    id: string,
    followed: boolean,
    fullName: string
    status: string,
    location: { city: string, country: string }
}
export type UsersPageType = {
    users: Array<UsersType>
}

type UsersPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<UsersType>) => void,
    users: Array<UsersType>
}

export let Users = (props: UsersPropsType) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers([{
            photoUrl: '',
            id: v1(),
            followed: false,
            fullName: "Alex Paskevich",
            status: "Wtf",
            location: {city: "Minsk", country: 'Belarus'}
        },
            {
                photoUrl: '',
                id: v1(),
                followed: false,
                fullName: "Viktoria Sotnikova",
                status: "Buy car",
                location: {city: "Moscow", country: 'Russia'}
            },
            {
                photoUrl: '',
                id: v1(),
                followed: true,
                fullName: "Timur Vasilievich",
                status: '',
                location: {city: "Vitebsk", country: 'Belarus'}
            },
            {
                photoUrl: '',
                id: v1(),
                followed: true,
                fullName: "Rostislav Solnchev",
                status: 'Lumen',
                location: {city: "Kiev", country: 'Ukraine'}
            },
        ])
    }
    return <div>
        {props.users.map(u =>
                <div key={u.id}>
        <span>
            <div>
<img alt={"avatar"} src={u.photoUrl} className={styles.userPhoto}/>
            </div>
            <div>{u.followed ? <button onClick={() => {
                props.unfollow(u.id)
            }}>Unfollow</button> : <button onClick={() => {
                props.follow(u.id)
            }}>Follow</button>}
                <button>Follow</button>
            </div>
        </span>
                    <span>
            <span><div>{u.fullName}</div><div>{u.status}</div></span>
            <span><div>{u.location.country}</div><div>{u.location.city}</div></span>
        </span>
                </div>
        )}
    </div>
}