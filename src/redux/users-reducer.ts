import {ActionsTypes} from "./store";
import {UsersType} from "../components/Users/UsersContainer";
import {userAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";


export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export type UsersPageType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<string>

}

let initialState: UsersPageType = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state, users:
                    updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state, users:
                    updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}
export const followSuccess = (userId: string) => ({
    type: FOLLOW, userId
})

export const unfollowSuccess = (userId: string) =>
    ({
        type: UNFOLLOW, userId

    })
export const setUsers = (users: Array<UsersType>) =>
    ({
        type: SET_USERS, users

    })
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT, count: totalUsersCount
})
export const setIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})
export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(page))
        const data = await userAPI.getUsers(page, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
//зафиксить any
const FollowUnfollowFlow = async (dispatch: any,
                                  actionCreator: (userId: string) => { type: string; userId: string; },
                                  apiMethod: any,
                                  userId: string) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: string) => {
    return async (dispatch: Dispatch) => {
        FollowUnfollowFlow(dispatch, followSuccess, userAPI.followUsers.bind(userAPI), userId)
    }
}

export const unfollow = (userId: string) => {
    return async (dispatch: Dispatch) => {
        FollowUnfollowFlow(dispatch, unfollowSuccess, userAPI.unfollowUsers.bind(userAPI), userId)
    }
}