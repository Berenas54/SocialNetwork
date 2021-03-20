import React from "react";
import styles from "./users.module.css";
import {UsersType} from "./UsersContainer";


export type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number,
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export let Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selected : ""} onClick={() => {
                    props.onPageChanged(p)
                }
                }>{p} </span>
            })}
        </div>)

}

