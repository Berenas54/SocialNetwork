import {UsersPageType, UsersType} from "../components/Users/Users";
import {ActionsTypes} from "./store";


export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'

let initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state, users: state.users.map
                (u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map
                (u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}
export const follow = (userId: string) => ({
    type: FOLLOW, userId
})

export const unfollow = (userId: string) =>
    ({
        type: UNFOLLOW, userId

    })
export const setUsers = (users: Array<UsersType>) =>
    ({
        type: SET_USERS, users

    })