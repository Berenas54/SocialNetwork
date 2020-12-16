import {UsersType} from "./Users";
import {Users} from "./Users";
import {connect} from "react-redux";

import {ReduxRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {follow, setCurrentPageAC, setUsers, setUsersTotalCountAC, unfollow} from "../../redux/users-reducer";

type MSTPType = {
    users: any,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number

}

type MDTPType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: any) => void,
    setCurrentPage:(pageNumber:number)=>void,
    setTotalUsersCount:(totalCount:number)=>void

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

export default connect<MSTPType, MDTPType, {}, ReduxRootStateType>(mapStateToProps, mapDispatchToProps)(Users)
//export default connect(mapStateToProps, {follow, unfollow, setUsers})(Users)