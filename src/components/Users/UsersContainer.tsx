import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {follow, setCurrentPageAC, setUsers, setUsersTotalCountAC, unfollow} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type MSTPType = {
    users: any,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number

}

type MDTPType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: any) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void

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
}
type ResponseType = {
    items: Array<UsersType>
    totalCount: number
    error: null
}


export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      users={this.props.users}
        />
    }
}

let mapStateToProps = (state: ReduxRootStateType): MSTPType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        follow: (userId: string) => {
            dispatch(follow(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollow(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
    }
}

export default connect<MSTPType, MDTPType, {}, ReduxRootStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer)
//export default connect(mapStateToProps, {follow, unfollow, setUsers})(Users)