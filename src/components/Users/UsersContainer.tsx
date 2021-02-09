import {connect} from "react-redux";
import {ReduxRootStateType} from "../../redux/redux-store";
import {
    setCurrentPage,
    getUsers, follow, unfollow
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../commons/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
    setCurrentPage: (pageNumber: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void


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
    users: Array<UsersType>,
    setCurrentPage: (pageNumber: number) => void,
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
    getUsers: (currentPage: number, pageSize: number) => void

}

export class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}


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

let withRedirect = withAuthRedirect(UsersContainer)
export default connect<MSTPType, MDTPType, {}, ReduxRootStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers
})(withRedirect)
//export default connect(mapStateToProps, {follow, unfollow, setUsers})(Users)