import React from "react";
import styles from "./users.module.css"
import axios from 'axios'
import userPhoto from '../../../src/assets/image/user_photo.png'

export type UsersType = {
    photos: {
        small: string,
        large: string
    },
    id: string,
    followed: boolean,
    name: string
    status: string,
    location?: { city: string, country: string }
}

export type UsersPageType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}

type UsersPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<UsersType>) => void,
    users: Array<UsersType>,
    setTotalUsersCount:(totalCount:number)=>void,
    setCurrentPage:(pageNumber:number)=>void,
    pageSize:number,
    totalUsersCount:number
    currentPage:number
}
type ResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: null
}

export class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }


    onPageChanged = (pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        let pagesCount =Math.ceil( this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? 'styles.selected':""} onClick={()=>{this.onPageChanged(p)}
                    }>{p } </span>
                })}
            </div>
            {this.props.users.map(u =>
                    <div key={u.id}>
        <span>
            <div>
<img alt={"avatar"} src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
            <div>{u.followed ? <button onClick={() => {
                this.props.unfollow(u.id)
            }}>Unfollow</button> : <button onClick={() => {
                this.props.follow(u.id)
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
}

