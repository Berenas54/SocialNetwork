import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setTotalUsersCount,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../commons/Preloader/Preloader";

type MSTPType = {
    users: any,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean

}

type MDTPType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: any) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (fetching: boolean) => void

}
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


export type UsersContainerPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<UsersType>) => void,
    users: Array<UsersType>,
    setTotalUsersCount: (totalCount: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    setIsFetching: (fetching: boolean) => void
}
type ResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: null
}


export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials:true}).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials:true}).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}

            />
        </>
    }
}

let mapStateToProps = (state: ReduxRootStateType): MSTPType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect<MSTPType, MDTPType, {}, ReduxRootStateType>(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching
})(UsersContainer)
//export default connect(mapStateToProps, {follow, unfollow, setUsers})(Users)