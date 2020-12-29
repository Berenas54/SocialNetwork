import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setTotalUsersCount,
    unfollow, toggleIsFollowingProgress
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../commons/Preloader/Preloader";
import {userAPI} from "../../api/api";

type MSTPType = {
    users: any,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<string>

}

type MDTPType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: any) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (fetching: boolean) => void
    toggleIsFollowingProgress: (fetching: boolean, id: string) => void

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
    toggleIsFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: Array<string>
}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
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
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}

export default connect<MSTPType, MDTPType, {}, ReduxRootStateType>(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFollowingProgress, setIsFetching
})(UsersContainer)
//export default connect(mapStateToProps, {follow, unfollow, setUsers})(Users)