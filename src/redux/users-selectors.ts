import {ReduxRootStateType} from "./redux-store";

export const getUsers = (state: ReduxRootStateType) => {
    return state.usersPage.users
}

export const getUsersCount = (state: ReduxRootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: ReduxRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: ReduxRootStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: ReduxRootStateType) => {
    return state.usersPage.followingInProgress
}

export const getPageSize = (state: ReduxRootStateType) => {
    return state.usersPage.pageSize
}
